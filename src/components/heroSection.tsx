import { useContext, useRef } from "react";
import { CottonCandyContext } from "../providers/ContextProvider";

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const catRef = useRef<HTMLDivElement | null>(null);
  const ctx = useContext(CottonCandyContext);

  const playPopCatSound = () => {
    catRef.current?.classList.remove("bg-hero-section-memcoin-2");
    catRef.current?.classList.add("bg-hero-section-memcoin-2-open");

    if (!audioRef.current) {
      audioRef.current = new Audio("./sound/pop-cat.mp3");
      audioRef.current.volume = 1;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const closeCatMouth = () => {
    catRef.current?.classList.remove("bg-hero-section-memcoin-2-open");
    catRef.current?.classList.add("bg-hero-section-memcoin-2");
  };

  const handleGoToMintSection = () => {
    if (ctx.mintSectionRef.current) {
      ctx.mintSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="lg:h-[1348px] h-screen w-screen relative bg-hero-section-upper bg-no-repeat bg-cover">
        <div className=" flex flex-row justify-between items-center px-10 py-5">
          <h1 className="font-impact lg:text-[32px] text-xl uppercase text-outline">
            Cotton Candy <br />
            Crusader Club
          </h1>
          <button
            className="bg-mint-section-btn md:h-[86px] md:w-[191px] w-[135px] h-[60px]   bg-contain bg-no-repeat"
            onClick={handleGoToMintSection}
          >
            <span className=" font-patrick-hand lg:text-[48px] text-3xl text-white">
              Mint
            </span>
          </button>
        </div>

        <div className="bg-hero-section-lower bg-no-repeat bg-cover h-[227px] bg-end absolute bottom-0 left-0 right-0"></div>

        {/* <div className="bg-hero-section-logo w-[891px] h-[462px] bg-no-repeat bg-contain absolute left-[50%] -translate-x-[50%] top-[10%]"></div> */}

        {/* casltes  red*/}
        <div className="bg-hero-section-castle-red-1 lg:w-[344px] lg:h-[435px] w-[132px] h-[166px] bg-contain bg-no-repeat absolute z-0 md:top-[16%] top-[19%] md:left-[0%] -left-12"></div>
        <div className="bg-hero-section-frog lg:w-[211px] lg:h-[230px] h-[69px] w-[61px] bg-contain z-10 absolute md:top-[30%] top-[35%] md:left-0 -left-4"></div>
        <div className="bg-hero-section-chillguy md:w-[352px] md:h-[341px] w-[117px] h-[111px] bg-contain z-10 absolute md:top-[26%] top-[31%] md:left-[9%] left-[7%]"></div>
        <div className="bg-hero-section-castle-red-2 lg:w-[456px] lg:h-[619px] h-[220px] w-[162px] bg-contain bg-no-repeat absolute top-[40%] z-30 md:left-[0%] -left-12"></div>
        <div className="bg-hero-section-memcoin-1 w-[273px] h-[319px]  absolute top-[54%] z-20 md:block hidden"></div>
        <div className="bg-black lg:w-[356px] lg:h-[500px] absolute top-[48%] h-[166px] w-[110px] z-10 md:left-[0%] -left-12"></div>

        <div className="bg-hero-section-red-1 w-[116px] h-[128px] absolute top-[90%] left-[30%] z-10"></div>
        <div className="bg-hero-section-red-2 w-[96px] h-[108px] absolute top-[87%] z-10"></div>

        <div className="bg-hero-section-shark-1 w-[104px] h-[114px] absolute top-[85%] right-[25%] z-10"></div>
        <div className="bg-hero-section-shark-2 w-[104px] h-[114px] absolute top-[90%] right-[2%] z-10"></div>

        {/* <div className="bg-hero-section-main w-[680px] h-[582px] absolute top-[52%] left-[33%] z-10"></div>
        <div
          ref={catRef}
          className="bg-hero-section-memcoin-2 w-[431px] h-[545px]  absolute top-[58%] z-[31] left-[3%]"
          onMouseDown={playPopCatSound}
          onMouseUp={closeCatMouth}
          onMouseLeave={closeCatMouth}
        ></div> */}
        {/* <div className="bg-hero-section-memcoin-3 w-[418px] h-[504px]  absolute top-[52%] left-[15%] z-30"></div> */}
        {/* <div className="bg-hero-section-distant w-[1208px] h-[608px]  absolute top-[42%] left-[19%] bg-no-repeat bg-contain z-0"></div> */}

        {/* castle-blue */}
        <div className="bg-hero-section-castle-blue-1 lg:w-[344px] lg:h-[475px] h-[181px] w-[134px] bg-contain bg-no-repeat absolute z-0 md:top-[16%] top-[19%] md:right-0 -right-12"></div>
        <div className="bg-hero-section-memcoin-4 lg:w-[199px] lg:h-[229px] w-[71px] h-[82px] bg-contain bg-no-repeat z-10 absolute md:top-[30%] top-[35%] md:right-0 -right-4"></div>
        <div className="bg-hero-section-memcoin-8 lg:w-[401px] lg:h-[403px] w-[133px] h-[131px] bg-contain bg-no-repeat z-10 absolute md:top-[26%] top-[29%] md:right-[6%] right-[4%]"></div>
        <div className="bg-hero-section-castle-blue-2 lg:w-[446px] lg:h-[606px] absolute top-[40%] h-[221px] w-[168px] bg-contain bg-no-repeat z-30 md:right-0 -right-12"></div>
        {/* 
        <div className="bg-hero-section-memcoin-1 w-[273px] h-[319px]  absolute top-[54%] z-20"></div>
        <div className="bg-black w-[356px] h-[500px] absolute top-[48%] z-10"></div>
        <div className="bg-hero-section-memcoin-5 w-[346px] h-[432px] z-30 absolute top-[56%] right-[15%]"></div>
        <div className="bg-hero-section-memcoin-6 w-[350px] h-[434px] z-[31] absolute top-[60%] right-[6%]"></div>
        <div className="bg-hero-section-memcoin-7 w-[299px] h-[351px] z-30 absolute top-[63%] -right-[3%]"></div> */}
      </div>
    </div>
  );
};

export default HeroSection;
