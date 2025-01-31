import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { defineChain } from "viem";
import { config_chains } from "../config_chains";

const chains_ = config_chains.map((chain) => {
  return defineChain({
    id: chain.chainId,
    nativeCurrency: {
      decimals: chain.decimals,
      name: chain.currency_name,
      symbol: chain.currency,
    },
    rpcUrls: {
      default: {
        http: [chain.rpcUrl],
      },
    },
    blockExplorers: {
      default: { name: "Explorer", url: chain.explorerUrl },
    },
    name: chain.name,
    contracts: {
      usdt_contract_address: {
        address: chain.usdt_contract_address,
      },
      contract_address: {
        address: chain.contract_address,
      },
    },
  });
});

let projectId = import.meta.env.VITE_APP_PROJECT_ID;

const queryClient = new QueryClient();

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [...chains_] as any;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
