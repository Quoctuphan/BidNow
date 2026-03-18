import { ImHammer2 } from "react-icons/im";
import AuctionItem from "./AuctionItem";
import { PiArrowRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { productImage, coinImage, coatImage, coat01 } from "@/assets/images";
import { DETAIL_PRODUCT } from "@/constants/Routes";


function UpcomingAuctions() {
  const examAuctionData = [
    {
      id: 1,
      auctionName: "Vintage Car Auction",
      startTime: "07-10 10:00 AM",
      endTime: "07-12 5:00 PM",
      imgSrc: productImage,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 2,
      auctionName: "Rare Book Auction",
      startTime: "07-15 9:00 AM",
      endTime: "07-17 4:00 PM",
      imgSrc: coinImage,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 3,
      auctionName: "Antique Furniture Auction",
      startTime: "07-20 11:00 AM",
      endTime: "07-22 6:00 PM",
      imgSrc: coatImage,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 4,
      auctionName: "Art Collection Auction",
      startTime: "07-25 12:00 PM",
      endTime: "07-27 7:00 PM",
      imgSrc: coat01,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 5,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: productImage,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 6,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: coat01,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 7,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: coinImage,
      type: "Coming Soon",
      startbid: 1000,
    },
    {
      id: 8,
      auctionName: "Jewelry Auction",
      startTime: "07-30 1:00 PM",
      endTime: "08-01 8:00 PM",
      imgSrc: coatImage,
      type: "Coming Soon",
      startbid: 1000,
    }
  ];


  return (
    <div className="mx-20">
      <center>
        <p className="text-mainBgColor font-semibold text-[36px]">Upcoming Auctions</p>
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
            typeItem={auction.type}
            startbid={auction.startbid}
          />
        ))}
      </div>
     <div className="mt-12 text-center">
                <Link to={`/${DETAIL_PRODUCT}`} className="inline-flex items-center gap-2 text-lg font-bold text-[#B41712] group">
                    <span>View All</span>
                    <PiArrowRightFill className="transition-transform group-hover:translate-x-1" />
                </Link >
      </div>
    </div>
  )
}

export default UpcomingAuctions;