import Price from "./UI/Price";
import Expiration from "./UI/Expiration";
import Counter from "./UI/Counter";
import { useContext } from "react";
import { CottonCandyContext } from "../providers/ContextProvider";

const MintSection = () => {
  const ctx = useContext(CottonCandyContext);

  return (
    <div className=" relative" id="mint-section" ref={ctx.mintSectionRef}>
      <span className="bg-mint-section-stripe-pattern h-8 block bg-repeat-x bg-cover z-10 -m-[2px]"></span>
      <div className=" lg:h-[1348px] h-screen w-screen relative bg-mint-section bg-no-repeat bg-cover flex flex-col md:justify-between justify-start items-center">
        <div className="md:bg-mint-section-book md:h-[768px] md:w-[1163px] md:pl-[170px] md:pr-[150px] md:py-[110px] h-full z-10">
          <div className=" flex flex-row justify-between items-center gap-20 h-full">
            {/*left page*/}
            <div className=" h-[500px] flex-1 md:block hidden ">
              <img src="./images/section-mint/minting-image.png" alt="" />
            </div>
            {/*right page  */}
            <div className=" md:h-[500px] flex-1 flex flex-col h-full w-full justify-between items-center">
              <div className="flex flex-row md:justify-start justify-center w-full center md:bg-none bg-mint-section-heading bg-cover bg-bottom md:p-0 p-5 ">
                <img src="./images/section-mint/m.png" alt="" />
                <h3 className=" font-patrick-hand-sc md:text-[48px] text-[40px] uppercase ">
                  int your own
                </h3>
              </div>

              <div className="md:hidden w-full flex flex-row justify-center ">
                <img
                  src="./images/section-mint/minting-image.png"
                  height={268}
                  width={190}
                  alt=""
                />
              </div>
              <div className="md:bg-none bg-mint-controls bg-cover md:p-0 p-10  flex flex-col justify-around items-start h-full ">
                <Expiration />
                <Price />
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bg-iamges  */}
      <div className="bg-mint-section-coins-2 bg-no-repeat bg-contain  w-[239px] h-[262px] absolute top-12 md:block hidden"></div>
      <div className=" bg-mint-section-ipods bg-no-repeat bg-contain  w-[337px] h-[257px] absolute top-12 md:left-[342px] -right-10"></div>
      <div className=" bg-mint-section-cannabis bg-no-repeat bg-contain  w-[327px] h-[252px] absolute top-12 left-[35%] md:block hidden"></div>
      <div className=" bg-mint-section-coins-1 bg-no-repeat bg-contain  w-[361px] h-[286px] absolute top-12 md:!right-[25%] right-[70%]"></div>
      <div className=" bg-mint-section-paper bg-no-repeat bg-[40%] z-0  w-[548px] h-[468px] absolute -top-[2.2%] -right-20 md:block hidden"></div>
      <div className=" bg-mint-section-donat bg-no-repeat bg-contain  w-[308px] h-[282px] absolute md:top-[25%] top-[35%] md:!left-0 -left-[20%] "></div>
      <div className=" bg-mint-section-keys bg-no-repeat bg-contain  w-[295px] h-[341px] absolute top-[45%] left-0 md:block hidden"></div>
      <div className=" bg-mint-section-feather bg-no-repeat bg-contain  w-[243px] h-[610px] absolute top-[31%] md:right-[5%] -right-14  -rotate-[25deg]"></div>
      <div className=" bg-mint-section-potato bg-no-repeat bg-contain  w-[517px] h-[476px] absolute bottom-[0.5%] -left-[2%] md:block hidden"></div>
      <div className=" bg-mint-section-coins-3 bg-no-repeat bg-contain  w-[330px] h-[186px] absolute md:!bottom-[5%] bottom-[15%] md:!left-[25%] -left-[22%]"></div>
      <div className=" bg-mint-section-letter bg-no-repeat bg-contain  w-[593px] h-[397px] absolute -bottom-[5.5%] left-[50%] md:block hidden"></div>
      <div className=" bg-mint-section-coins-2-2 bg-no-repeat bg-contain  w-[261px] h-[288px] absolute bottom-[5%] right-[0px]md:block hidden"></div>
      <span className="bg-mint-section-stripe-pattern h-8 block bg-repeat-x bg-cover"></span>
    </div>
  );
};

export default MintSection;
