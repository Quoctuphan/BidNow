interface WonItemType {
  auctionName: string;
  imgSrc: string;
  auctionDate: string | number;
  bidAmount: number;
}

const AuctionWonItem: React.FC<WonItemType> = ({ auctionName, auctionDate, imgSrc, bidAmount }) => {
  return (
    <div className="flex flex-col sm:flex-row border-2 rounded-[10px] w-full justify-start items-center space-x-0 sm:space-x-10 p-4">
      <div>
        <img src={imgSrc} alt={auctionName} className="w-24 h-24 sm:w-36 sm:h-36" />
      </div>
      <div className="text-center sm:text-left">
        <p className="text-[16px] sm:text-[20px] text-[gray]">{auctionName}</p>
        <p className="text-[16px] sm:text-[20px]">${bidAmount}</p>
        <p className="text-[16px] sm:text-[20px] text-[gray]">Auction Date: {auctionDate}</p>
      </div>
    </div>
  );
}

export default AuctionWonItem;
