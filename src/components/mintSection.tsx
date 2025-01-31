import Price from "./UI/Price";
import Expiration from "./UI/Expiration";
import Counter from "./UI/Counter";
import { useContext } from "react";
import { CottonCandyContext } from "../providers/ContextProvider";

const MintSection = () => {
  const ctx = useContext(CottonCandyContext);

  return (
    <div className=" relative" id="mint-section" ref={ctx.mintSectionRef}>
      <span className="bg-mint-section-stripe-pattern h-8 block bg-repeat-x bg-contain z-10 -m-[2px]"></span>
      <div className=" h-[1330px] w-screen relative bg-mint-section bg-no-repeat bg-cover flex flex-col justify-center items-center">
        <div className="bg-mint-section-book h-[768px] w-[1163px] pl-[170px] pr-[150px] py-[110px]">
          <div className=" flex flex-row justify-between items-center gap-20">
            {/*left page*/}
            <div className=" h-[500px] flex-1">
              <img src="./images/section-mint/minting-image.png" alt="" />
            </div>
            {/*right page  */}
            <div className=" h-[500px] flex-1 flex flex-col justify-around items-start">
              <div className="flex flex-row justify-start center">
                <img src="./images/section-mint/m.png" alt="" />
                <h3 className=" font-patrick-hand-sc text-[48px] uppercase ">
                  int your own
                </h3>
              </div>
              <Expiration />
              <Price />
              <Counter />
            </div>
          </div>
        </div>
      </div>
      {/* bg-iamges  */}
      <div className="bg-mint-section-coins-2 bg-no-repeat bg-contain  w-[239px] h-[262px] absolute top-12"></div>
      <div className=" bg-mint-section-ipods bg-no-repeat bg-contain  w-[337px] h-[257px] absolute top-12 left-[342px]"></div>
      <div className=" bg-mint-section-cannabis bg-no-repeat bg-contain  w-[327px] h-[252px] absolute top-12 left-[35%]"></div>
      <div className=" bg-mint-section-coins-1 bg-no-repeat bg-contain  w-[361px] h-[286px] absolute top-12 right-[25%] "></div>
      <div className=" bg-mint-section-paper bg-no-repeat bg-[40%] z-0  w-[548px] h-[468px] absolute -top-[2.2%] -right-20"></div>
      <div className=" bg-mint-section-donat bg-no-repeat bg-contain  w-[308px] h-[282px] absolute top-[25%] left-0"></div>
      <div className=" bg-mint-section-keys bg-no-repeat bg-contain  w-[295px] h-[341px] absolute top-[45%] left-0"></div>
      <div className=" bg-mint-section-feather bg-no-repeat bg-contain  w-[243px] h-[610px] absolute top-[31%] right-[5%]"></div>
      <div className=" bg-mint-section-potato bg-no-repeat bg-contain  w-[517px] h-[476px] absolute bottom-[0.5%] -left-[2%]"></div>
      <div className=" bg-mint-section-coins-3 bg-no-repeat bg-contain  w-[330px] h-[186px] absolute bottom-[5%] left-[25%]"></div>
      <div className=" bg-mint-section-letter bg-no-repeat bg-contain  w-[593px] h-[397px] absolute -bottom-[5.5%] left-[50%]"></div>
      <div className=" bg-mint-section-coins-2-2 bg-no-repeat bg-contain  w-[261px] h-[288px] absolute bottom-[5%] right-[0px]"></div>
      <span className="bg-mint-section-stripe-pattern h-8 block bg-repeat-x bg-contain"></span>
    </div>
  );
};

export default MintSection;
