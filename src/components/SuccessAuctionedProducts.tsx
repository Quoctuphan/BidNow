import { ImHammer2 } from "react-icons/im";
import { PiArrowRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const auctionImg = "./src/assets/images/watch.png";
const examAuctionData = [
    {
        id: 1,
        auctionName: "Vintage Car Auction",
        startTime: "07-10 10:00 AM",
        endTime: "07-12 5:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg
    },
    {
        id: 2,
        auctionName: "Rare Book Auction",
        startTime: "07-15 9:00 AM",
        endTime: "07-17 4:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg
    },
    {
        id: 3,
        auctionName: "Antique Furniture Auction",
        startTime: "07-20 11:00 AM",
        endTime: "07-22 6:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg
    },
    {
        id: 4,
        auctionName: "Art Collection Auction",
        startTime: "07-25 12:00 PM",
        endTime: "07-27 7:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg
    }
]
function SuccessAuctionedProducts() {
    return (
        <div className="mx-20 bg-gray-100">
            <center>
                <p className="text-mainBgColor font-bold text-[36px]">Successfully auctioned products</p>
                <div className="flex justify-center gap-5 m-2">
                    <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
                    <ImHammer2 size={32} className="text-mainBgColor" />
                    <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
                </div>
            </center>
            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                {examAuctionData.slice(0, 3).map((auction) => (
                    <div key={auction.id} className="flex flex-col items-center relative">
                        <img src={auction.imgSrc} alt={auction.auctionName} className="rounded-3xl w-full mb-14" />
                        <div className="w-10/12 p-3 rounded-lg bg-white absolute bottom-4 shadow-md">
                            <p className="text-xl">{auction.auctionName}</p>
                            <p className="text-sm">End Time: {auction.endTime}</p>
                            <p className="text-sm">Starting Price: {auction.startPrice}USD</p>
                            <p className="text-sm">Final Price: {auction.finalPrice}USD</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={""} className="flex items-center justify-center m-3">
                <p className="text-mainBgColor font-bold text-[24px]">View All</p>
                <PiArrowRightFill className="text-mainBgColor size-8" />
            </Link >
        </div>
    )
}

export default SuccessAuctionedProducts;