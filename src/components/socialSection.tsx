import React from "react";

const SocialSection = () => {
  return (
    <div>
      <div className="lg:h-[1330px] h-screen  w-screen relative bg-social-section bg-no-repeat bg-cover lg:pt-[151px] pt-12">
        <div className="flex flex-col justify-center items-center gap-4">
          {/* <img src="./images/section-social/links.png" alt="" /> */}

          <div className=" flex flex-row items-center gap-4">
            <button className=" bg-social-section-button-secondary lg:h-[207px] lg:w-[515px] w-[156px] h-[64px] bg-contain bg-no-repeat">
              <span className=" uppercase lg:text-[60px] text-lg font-patrick-hand-sc lg:tracking-[3px] ">
                merchandise
              </span>
            </button>
            <button className=" bg-social-section-button-secondary lg:h-[207px] lg:w-[515px] w-[156px] h-[64px] bg-contain bg-no-repeat">
              <span className=" uppercase lg:text-[60px] text-lg font-patrick-hand-sc lg:tracking-[3px]">
                10K memesnfts
              </span>
            </button>
          </div>
          <div className=" flex flex-row justify-center items-center flex-wrap gap-4">
            <button className=" bg-social-section-button-telegram lg:w-[340px] lg:h-[135px] w-[156px] h-[64px] bg-contain bg-no-repeat flex flex-row justify-center items-center gap-2 ">
              <img
                src="./images/tel.svg"
                alt=""
                height={44}
                width={44}
                className=" h-[30%] lg:h-full "
              />
              <span className=" uppercase lg:text-[40px] text-lg  font-patrick-hand-sc text-white lg:tracking-[3px]">
                telegram
              </span>
            </button>
            <button className=" bg-social-section-button-instagram lg:w-[340px] lg:h-[135px] w-[156px] h-[64px] bg-contain bg-no-repeat flex flex-row justify-center items-center gap-2">
              <img
                src="./images/inst.svg"
                alt=""
                height={44}
                width={44}
                className=" h-[30%] lg:h-full "
              />
              <span className=" uppercase lg:text-[40px] text-lg  font-patrick-hand-sc text-white lg:tracking-[3px]">
                Instagram
              </span>
            </button>
            <button className=" bg-social-section-button-x lg:w-[340px] lg:h-[135px] w-[156px] h-[64px] bg-contain bg-no-repeat flex flex-row justify-center items-center">
              <img
                src="./images/x.svg"
                height={44}
                width={44}
                alt=""
                className=" h-[30%] lg:h-full "
              />
            </button>
          </div>
        </div>
        <div className="bg-social-section-wall lg:h-[564px] w-screen bg-repeat-x lg:bg-contain bg-cover absolute bottom-0 z-10 flex flex-col  items-center lg:pt-[200px] pt-24  lg:gap-6 gap-3 h-[287px]">
          {/* <h1> */}
          <img
            src="./images/logo.png"
            alt=""
            className="h-[50%] sm:h-[60%] md:h-[70%] lg:h-[100%]"
          />
          {/* </h1> */}

          <p className="font-impact lg:text-[50px] text-2xl text-white text-outline  uppercase">
            Cotton Candy Crusader Club
          </p>
          <span className=" font-patrick-hand lg:text-base text-xs text-white">
            Copyright © 2025. All rights reserved.
          </span>
        </div>
        <div className=" bg-social-section-fighter-2 bg-no-repeat bg-contain  w-[330px] h-[430px] absolute top-[45%] left-[1%] -rotate-3 hidden md:block"></div>
        <div className=" bg-social-section-fighter-5 bg-no-repeat bg-contain  w-[287px] h-[426px] absolute top-[46%] left-[18.5%] -rotate-3 hidden sm:block"></div>
        <div className=" bg-social-section-fighter-4 bg-no-repeat bg-contain  lg:w-[403px] lg:h-[510px] h-[232px] w-[294px] absolute lg:top-[46%] top-[43%] left-[36%] lg:left-[45.6%]  -rotate-6"></div>
        <div className=" bg-social-section-fighter-1 bg-no-repeat bg-contain  lg:w-[284px] lg:h-[410px] h-[192px] w-[245px]  absolute lg:top-[46%] top-[45%] left-[23%] lg:left-[36%] rotate-6"></div>
        <div className=" bg-social-section-fighter-3 bg-no-repeat bg-contain  w-[410px] h-[558px] absolute top-[46%] left-[63%] -rotate-3 hidden sm:block"></div>
        <div className=" bg-social-section-fighter-6 bg-no-repeat bg-contain  w-[352px] h-[493px] absolute top-[43%] right-[3%] -rotate-3 hidden md:block"></div>
      </div>
    </div>
  );
};

export default SocialSection;
