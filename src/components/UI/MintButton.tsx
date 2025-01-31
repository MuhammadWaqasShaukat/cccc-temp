import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Contract } from "ethers";
import { BrowserProvider } from "ethers";
import { useAccount } from "wagmi";
import { LotterySolABI } from "../../constants/ABI";
import { useState } from "react";

const MintButton = () => {
  const ExampleURI = "https://boredapeyachtclub.com/api/mutants/1001";
  const { open, close } = useWeb3Modal();
  const { address, chainId, isConnected, connector } = useAccount();

  const getProvider = async () => {
    if (!connector) {
      console.log("No connector found");
      return null;
    }

    try {
      // Get the provider from the connector
      const provider: any = await connector?.getProvider();

      // Create a Web3Provider instance from ethers.js
      const web3Provider = new BrowserProvider(provider!);
      console.log("Signer:", web3Provider);

      return web3Provider;
    } catch (error) {
      console.error("Error getting signer:", error);
      return null;
    }
  };

  const getSigner = async () => {
    try {
      // Create a Web3Provider instance from ethers.js
      const web3Provider = await getProvider();
      console.log("Signer:", web3Provider);

      // Get the signer
      const signer = await web3Provider?.getSigner();

      console.log("Signer:", signer);
      return signer;
    } catch (error) {
      console.error("Error getting signer:", error);
      return null;
    }
  };

  const startMinting = async () => {
    // const ethersProvider: any = await getProvider();
    const signer: any = await getSigner();
    const contract_address = import.meta.env.VITE_APP_CONTRACT_ADDRESS;
    const lotteryContract = new Contract(
      contract_address,
      LotterySolABI,
      signer
    );

    console.log("Lottery Contract", lotteryContract);

    await lotteryContract.mint(address, ExampleURI);
  };

  const handleNFTMintClick = async () => {
    startMinting();
  };

  return (
    <button
      className="bg-mint-section-btn h-[86px] w-[191px]  bg-contain bg-no-repeat"
      onClick={
        isConnected
          ? handleNFTMintClick
          : async () => {
              await open();
            }
      }
    >
      <span className=" font-patrick-hand text-[48px] text-white">
        {isConnected ? "Mint" : "Connect"}
      </span>
    </button>
  );
};

export default MintButton;
