import { useContext, useState } from "react";
import MintButton from "./MintButton";
import { CottonCandyContext } from "../../providers/ContextProvider";

const Counter = () => {
  const ctx = useContext(CottonCandyContext);

  console.log(ctx);
  //   const [count, setCount] = useState(1);

  return (
    <div className="flex flex-row justify-between items-center gap-[14px]">
      <div className="flex flex-row justify-between p-5 items-center bg-[#FFFFFF99]  w-[191px] rounded-[7px] box-border">
        <button
          type="button"
          className="h-[26px] w-[26px] bg-[#B69772]  rounded-full  flex flex-row justify-center items-center"
          onClick={() => {
            if (ctx.count === 1) return;
            ctx.setCount!(ctx.count - 1);
          }}
        >
          <span className="text-[29px] text-white font-patrick-hand-sc -mt-2">
            -
          </span>
        </button>
        {/* <input type="text" className=" w-[40px]" /> */}
        <span className=" text-black text-[48px] font-patrick-hand  leading-none">
          {ctx.count}
        </span>
        <button
          type="button"
          className="h-[26px] w-[26px] bg-[#B69772]  rounded-full flex flex-row justify-center items-center"
          onClick={() => {
            ctx.setCount!(ctx.count + 1);
          }}
        >
          <span className="text-[29px] text-white font-patrick-hand -mt-2">
            +
          </span>
        </button>
      </div>
      <MintButton />
    </div>
  );
};

export default Counter;
