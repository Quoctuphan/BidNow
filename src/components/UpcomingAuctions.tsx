import { ImHammer2 } from "react-icons/im";
import AuctionItem from "./AuctionItem";
import { PiArrowRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
const auctionImg = './src/assets/images/auctionItem.png';

function UpcomingAuctions() {
  const examAuctionData = [
    {
      id: 1,
      auctionName: "Vintage Car Auction",
      startTime: "07-10 10:00 AM",
      endTime: "07-12 5:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 2,
      auctionName: "Rare Book Auction",
      startTime: "07-15 9:00 AM",
      endTime: "07-17 4:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 3,
      auctionName: "Antique Furniture Auction",
      startTime: "07-20 11:00 AM",
      endTime: "07-22 6:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 4,
      auctionName: "Art Collection Auction",
      startTime: "07-25 12:00 PM",
      endTime: "07-27 7:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 5,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 6,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 7,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: auctionImg
    },
    {
      id: 8,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: auctionImg
    }
  ];


  return (
    <div className="mx-20">
      <center>
        <p className="text-mainBgColor font-bold text-[36px]">Upcoming auctions</p>
        <div className="flex justify-center gap-5 m-2">
          <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
          <ImHammer2 size={32} className="text-mainBgColor" />
          <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
        </div>
      </center>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {examAuctionData.slice(0, 6).map((auction) => (
          <AuctionItem
            key={auction.id}
            auctionName={auction.auctionName}
            startTime={auction.startTime}
            endTime={auction.endTime}
            imgSrc={auction.imgSrc}
          />
        ))}
      </div>
      <Link to={""} className="flex items-center justify-center m-3">
        <p className="text-mainBgColor font-bold text-[24px]">View All</p>
        <PiArrowRightFill className="text-mainBgColor size-8" />
      </Link>
    </div>
  )
}

export default UpcomingAuctions;