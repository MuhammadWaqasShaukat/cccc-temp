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

        <div className="bg-hero-section-lower bg-no-repeat bg-cover h-[20%] bg-end absolute bottom-0 left-0 right-0"></div>

        <div className="bg-hero-section-logo max-w-[891px] max-h-[462px] min-w-[288px] h-[34.3%] w-[66%] min-h-[149px] bg-no-repeat bg-contain absolute left-[50%] -translate-x-[50%] lg:top-[10%] top-[13%]"></div>

        {/* casltes  red*/}
        <div className="bg-hero-section-castle-red-1 max-w-[344px] max-h-[435px] min-w-[132px] min-h-[166px] w-[25.52%] h-[32.27%] bg-bottom bg-contain bg-no-repeat absolute z-0 md:bottom-[50%] lg:bottom[55%] bottom-[39%] lg:left-[0%] -left-12"></div>
        <div className="bg-hero-section-frog max-w-[211px] max-h-[230px] h-[17%] w-[15.7%] min-h-[69px] min-w-[61px] bg-bottom bg-contain bg-no-repeat z-10 absolute md:bottom-[53%] bottom-[41%] lg:left-0 -left-4"></div>
        <div className="bg-hero-section-chillguy lg:w-[352px] max-h-[341px] h-[25.30%] w-[26%] min-w-[117px] min-h-[111px] bg-contain z-10 absolute md:bottom-[47%] bottom-[38%] md:[7%] lg:left-[9%] left-[7%] bg-bottom bg-no-repeat"></div>
        <div className="bg-hero-section-castle-red-2 max-w-[456px] max-h-[619px] min-w-[162px] min-h-[230px]  h-[45.92%] w-[33.83%] bg-bottom bg-contain bg-no-repeat absolute bottom-[16%] z-30 lg:left-[0%] -left-12"></div>
        <div className="bg-hero-section-memcoin-1 max-w-[273px] max-h-[319px] w-[20%] h-[24%] min-w-[70px] min-h-[78px]   absolute top-[54%] z-30 md:block hidden bg-contain bg-no-repeat"></div>

        <div className="bg-hero-section-red-1 lg:w-[116px] lg:h-[128px] w-[50px] h-[54px]  bg-contain bg-no-repeat  absolute lg:top-[90%] top-[85%] lg:left-[30%] left-[5%] z-10"></div>
        <div className="bg-hero-section-red-2 w-[96px] h-[108px] absolute top-[87%] z-10 hidden lg:block"></div>

        <div className="bg-hero-section-shark-1 lg:w-[104px] lg:h-[114px] w-[52px] h-[57px]  bg-contain bg-no-repeat  absolute top-[85%] right-[25%] z-10"></div>
        <div className="bg-hero-section-shark-2 w-[104px] h-[114px] absolute top-[90%] right-[2%] hidden lg:block z-10"></div>

        <div className="bg-hero-section-main max-w-[680px] max-h-[582px] w-[50%] h-[43%] absolute bottom-0 min-h-[304px] min-w-[400px] bg-contain bg-no-repeat left-[33%] z-[31] hidden md:block"></div>
        <div
          ref={catRef}
          className="bg-hero-section-memcoin-2 max-w-[431px] w-[31.2%] h-[40.43%] max-h-[545px] min-w-[144px] min-h-[180px] bg-contain bg-no-repeat absolute lg:bottom-[2%] bottom-[8%] bg-bottom z-[31] md:left-[3%] left-[15%]"
          onMouseDown={playPopCatSound}
          onMouseUp={closeCatMouth}
          onMouseLeave={closeCatMouth}
        ></div>
        <div className="bg-hero-section-memcoin-3 max-w-[418px] max-h-[504px] w-[31%] h-[37.48%] min-w-[147px] min-h-[176px] bg-contain bg-no-repeat bg-bottom  absolute bottom-[14%] md:left-[15%] left-[0%] z-30"></div>
        <div className="bg-hero-section-distant max-w-[1208px] max-h-[608px] h-[45%] w-[90%] min-w-[300px] min-h-[105px] bg-contain bg-no-repeat bg-bottom absolute bottom-[16%] left-[19%] z-0"></div>

        {/* castle-blue */}
        <div className="bg-hero-section-castle-blue-1 max-w-[344px] max-h-[475px] min-h-[181px] w-[25.52%] h-[35.24%] min-w-[134px] bg-contain  bg-no-repeat absolute z-0 md:bottom-[50%] lg:bottom[55%] bottom-[39%] bg-bottom lg:right-0 -right-12"></div>
        <div className="bg-hero-section-memcoin-4 max-w-[199px] maxh-[229px] min-w-[71px] w-[15%] h-[17%] min-h-[82px] bg-contain bg-no-repeat bg-bottom z-10 absolute md:top-[30%] top-[41%] lg:right-0 -right-4"></div>
        <div className="bg-hero-section-memcoin-8 max-w-[401px] max-h-[403px] w-[30%] h-[30%] min-w-[133px] min-h-[131px] bg-contain bg-no-repeat bg-bottom z-10 absolute md:top-[26%] top-[35%]  right-[4%]"></div>
        <div className="bg-hero-section-castle-blue-2 max-w-[446px] max-h-[606px] h-[46%] w-[33%] absolute min-h-[221px] min-w-[168px] bg-contain bg-no-repeat bg-bottom z-30 lg:right-0 -right-12 bottom-[16%]"></div>

        <div className="bg-hero-section-memcoin-5 max-w-[346px] max-h-[432px] w-[25.68%] h-[32%] min-w-[137px] min-h-[171px] bg-contain bg-no-repeat z-30 absolute bg-bottom bottom-[15%] right-[15%]"></div>
        <div className="bg-hero-section-memcoin-6 max-w-[350px] max-h-[434px] min-w-[119px] min-h-[147px] w-[25.68%] h-[32%] bg-contain bg-no-repeat z-[31]  absolute top-[68%] lg:right-[6%] right-[0%]"></div>
        <div className="bg-hero-section-memcoin-7 max-w-[299px] max-h-[351px] w-[22%] h-[26%] min-w-[119px] min-h-[147px] z-30 absolute top-[63%] bg-contain bg-no-repeat  -right-[3%] bg-right hidden md:block "></div>
      </div>
    </div>
  );
};

export default HeroSection;
