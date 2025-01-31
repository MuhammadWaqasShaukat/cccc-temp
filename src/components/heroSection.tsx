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

        <div className="bg-hero-section-logo lg:w-[891px] lg:h-[462px] w-[288px] h-[149px] bg-no-repeat bg-contain absolute left-[50%] -translate-x-[50%] lg:top-[10%] top-[13%]"></div>

        {/* casltes  red*/}
        <div className="bg-hero-section-castle-red-1 lg:w-[344px] lg:h-[435px] w-[132px] h-[166px] bg-contain bg-no-repeat absolute z-0 md:top-[16%] top-[25%] md:left-[0%] -left-12"></div>
        <div className="bg-hero-section-frog lg:w-[211px] lg:h-[230px] h-[69px] w-[61px] bg-contain z-10 absolute md:top-[30%] top-[41%] md:left-0 -left-4"></div>
        <div className="bg-hero-section-chillguy md:w-[352px] md:h-[341px] w-[117px] h-[111px] bg-contain z-10 absolute md:top-[26%] top-[37%] md:left-[9%] left-[7%]"></div>
        <div className="bg-hero-section-castle-red-2 lg:w-[456px] lg:h-[619px] h-[220px] w-[162px] bg-contain bg-no-repeat absolute top-[46%] z-30 md:left-[0%] -left-12"></div>
        <div className="bg-hero-section-memcoin-1 w-[273px] h-[319px]  absolute top-[54%] z-20 md:block hidden"></div>
        <div className="bg-black lg:w-[356px] lg:h-[500px] absolute top-[53%] h-[166px] w-[110px] z-10 md:left-[0%] -left-12"></div>

        <div className="bg-hero-section-red-1 lg:w-[116px] lg:h-[128px] w-[50px] h-[54px]  bg-contain bg-no-repeat  absolute lg:top-[90%] top-[85%] lg:left-[30%] left-[5%] z-10"></div>
        <div className="bg-hero-section-red-2 w-[96px] h-[108px] absolute top-[87%] z-10 hidden md:block"></div>

        <div className="bg-hero-section-shark-1 lg:w-[104px] lg:h-[114px] w-[52px] h-[57px]  bg-contain bg-no-repeat  absolute top-[85%] right-[25%] z-10"></div>
        <div className="bg-hero-section-shark-2 w-[104px] h-[114px] absolute top-[90%] right-[2%] hidden md:block z-10"></div>

        <div className="bg-hero-section-main w-[680px] h-[582px] absolute top-[52%] left-[33%] z-10 hidden md:block"></div>

        <div
          ref={catRef}
          className="bg-hero-section-memcoin-2 lg:w-[431px] lg:h-[545px] w-[144px] h-[180px] bg-contain bg-no-repeat  absolute lg:top-[64%] top-[68%] z-[31] lg:left-[3%] left-[15%]"
          onMouseDown={playPopCatSound}
          onMouseUp={closeCatMouth}
          onMouseLeave={closeCatMouth}
        ></div>
        <div className="bg-hero-section-memcoin-3 lg:w-[418px] lg:h-[504px] w-[147px] h-[176px] bg-contain bg-no-repeat  absolute top-[58%] lg:left-[15%] left-[0%] z-30"></div>
        <div className="bg-hero-section-distant lg:w-[1208px] lg:h-[608px] w-[300px] h-[105px] bg-contain bg-no-repeat   absolute lg:top-[42%] top-[55%]  left-[19%] z-0"></div>

        {/* castle-blue */}
        <div className="bg-hero-section-castle-blue-1 lg:w-[344px] lg:h-[475px] h-[181px] w-[134px] bg-contain bg-no-repeat absolute z-0 md:top-[16%] top-[25%] md:right-0 -right-12"></div>
        <div className="bg-hero-section-memcoin-4 lg:w-[199px] lg:h-[229px] w-[71px] h-[82px] bg-contain bg-no-repeat z-10 absolute md:top-[30%] top-[41%] md:right-0 -right-4"></div>
        <div className="bg-hero-section-memcoin-8 lg:w-[401px] lg:h-[403px] w-[133px] h-[131px] bg-contain bg-no-repeat z-10 absolute md:top-[26%] top-[35%]  right-[4%]"></div>
        <div className="bg-hero-section-castle-blue-2 lg:w-[446px] lg:h-[606px] absolute top-[46%] h-[221px] w-[168px] bg-contain bg-no-repeat z-30 md:right-0 -right-12"></div>

        <div className="bg-hero-section-memcoin-1 w-[273px] h-[319px]  absolute top-[54%] z-20 hidden md:block"></div>

        <div className="bg-hero-section-memcoin-5 lg:w-[346px] lg:h-[432px] w-[137px] h-[171px] bg-contain bg-no-repeat z-30 absolute top-[56%]  right-[15%]"></div>
        <div className="bg-hero-section-memcoin-6 lg:w-[350px] lg:h-[434px] w-[119px] h-[147px] bg-contain bg-no-repeat z-[31]  absolute top-[68%] lg:right-[6%] right-[0%]"></div>
        <div className="bg-hero-section-memcoin-7 w-[299px] h-[351px] z-30 absolute top-[63%] -right-[3%] hidden md:block "></div>
      </div>
    </div>
  );
};

export default HeroSection;
