import { useLayoutEffect, useState } from "react";
import { NFTCardProps } from "../../types/NFTCardTypes";

const NFTCard: React.FC<NFTCardProps> = ({
  cardImage,
  color,
  description,
  title,
  thumbnail,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let bgColor: string | null | undefined = "";

  useLayoutEffect(() => {
    bgColor = color;
  }, []);

  return (
    <div
      className={`card ${
        isFlipped ? "flipped" : ""
      } lg:h-[311.24px] lg:w-[222.09px] w-[94px] h-[133px]`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={cardImage} alt="card-nft" />
        </div>
        <div className={`card-back ${color}`}>
          <div className=" p-6 -rotate-3 flex flex-col justify-start items-start gap-1">
            <div className="flex flex-row justify-start items-center gap-2">
              <img src={thumbnail} alt="" />
              <h3 className="font-patrick-hand text-3xl font-normal capitalize">
                {title}
              </h3>
            </div>
            <p className=" font-patrick-hand text-base">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
