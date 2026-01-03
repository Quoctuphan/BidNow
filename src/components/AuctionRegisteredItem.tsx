interface AuctionRegisteredType {
  auctionName: string;
  imgSrc: string;
  startTime: string | number;
  endTime: string | number;
  isOnline: boolean;
  location: string;
}

const AuctionRegisteredItem: React.FC<AuctionRegisteredType> = ({ auctionName, startTime, imgSrc, endTime, isOnline, location }) => {
  return (
    <div className="flex flex-col sm:flex-row border-2 rounded-[10px] rounded-tl-[20px] rounded-bl-[20px] w-full justify-between items-center space-y-4 sm:space-y-0 sm:space-x-10 p-4">
      <div className="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-10">
        <div>
          <img src={imgSrc} alt={auctionName} className="w-24 h-24 sm:w-36 sm:h-36" />
        </div>
        <div>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#B7201B] font-bold">{auctionName}</p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px]">Start time: {startTime}</p>
          <p className="text-[14px] sm:text-[16px] md:text-[18px]">End time: {endTime}</p>
          {isOnline === false ? (
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">Auction location: {location}</p>
          ) : ""}
        </div>
      </div>
      {isOnline === true ? (
        <div className="pr-0 sm:pr-[20px]">
          <button className="bg-[#B7201B] text-white font-bold py-2 px-4 rounded-[10px] text-[14px] sm:text-[16px] md:text-[18px]">Join</button>
        </div>
      ) : ""}
    </div>
  );
}

export default AuctionRegisteredItem;
