const Expiration = () => {
  return (
    <div className=" w-[246px]  rounded-[7px] bg-[#23A4F399] p-2">
      <div className=" flex-row flex justify-start gap-2 items-center">
        <img src="./images/icon-refresh.svg" alt="" />
        <span className=" font-patrick-hand-sc text-[28px] uppercase">
          price changes in
        </span>
      </div>

      <div className="bg-white w-full rounded-[5px] flex-row flex justify-center items-center">
        <span className="font-patrick-hand text-[28px] text-[#0A0A0A]">
          3D : 7H : 23M : 14S
        </span>
      </div>
    </div>
  );
};

export default Expiration;
