const Expiration = () => {
  return (
    <div className="md:!w-[246px] w-full rounded-[7px] bg-[#23A4F399] p-2 flex flex-row md:flex-col gap-2">
      <div className=" flex-row flex justify-start gap-2 items-center">
        <img src="./images/icon-refresh.svg" alt="" />
        <span className=" font-patrick-hand-sc md:text-[28px] text-xl uppercase whitespace-nowrap">
          price changes in
        </span>
      </div>

      <div className="bg-white md:w-full flex-1 rounded-[5px] flex-row flex justify-center items-center">
        <span className="font-patrick-hand md:text-[28px] text-xl text-[#0A0A0A]">
          3D : 7H : 23M : 14S
        </span>
      </div>
    </div>
  );
};

export default Expiration;
