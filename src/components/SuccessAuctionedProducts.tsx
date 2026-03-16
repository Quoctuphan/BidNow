import { ImHammer2 } from "react-icons/im";
import { PiArrowRightFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import auctionImg from "@/assets/images/watch.png"
const examAuctionData = [
    {
        id: 1,
        auctionName: "Vintage Car Auction",
        startTime: "07-10 10:00 AM",
        endTime: "07-12 5:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg,
        type: "Auction Ended"
    },
    {
        id: 2,
        auctionName: "Rare Book Auction",
        startTime: "07-15 9:00 AM",
        endTime: "07-17 4:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg,
        type: "Auction Ended"
    },
    {
        id: 3,
        auctionName: "Antique Furniture Auction",
        startTime: "07-20 11:00 AM",
        endTime: "07-22 6:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg,
        type: "Auction Ended"
    },
    {
        id: 4,
        auctionName: "Art Collection Auction",
        startTime: "07-25 12:00 PM",
        endTime: "07-27 7:00 PM",
        startPrice: '1.10',
        finalPrice: '100.000',
        imgSrc: auctionImg,
        type: "Auction Ended"
    }
]
function SuccessAuctionedProducts() {
    return (
        <div className="mx-20 px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold tracking-tight text-[#B41712] sm:text-4xl">Successfully Auctioned</h2>
                <div className="mt-4 flex justify-center items-center gap-4">
                    <hr className='w-24 border-t-2 border-gray-200' />
                    <ImHammer2 size={24} className="text-[#B41712]" />
                    <hr className='w-24 border-t-2 border-gray-200' />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {examAuctionData.slice(0, 3).map((auction) => (
    <div key={auction.id} className="group relative overflow-hidden rounded-2xl shadow-lg h-96">
        {/* Hình ảnh */}
        <img src={auction.imgSrc} alt={auction.auctionName} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 */}
        {/* Badge trạng thái */}
        <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {auction.type}  
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md text-white">
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-red-400">
                    {auction.auctionName}
                </h3>
                <p className="text-xs text-gray-200 mt-1">Ended: {auction.endTime}</p>
                
                <div className="mt-3 border-t border-white/20 pt-3 flex justify-between items-end">
                    <div>
                        <p className="text-xs text-gray-300">Start price</p>
                        <p className="font-medium text-bg">${auction.startPrice}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-gray-300">Winning Bid</p>
                        <p className="text-xl font-bold text-green-400">${auction.finalPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
))}
            </div>
            <div className="mt-12 text-center">
                <Link to={""} className="inline-flex items-center gap-2 text-lg font-bold text-[#B41712] group">
                    <span>View All</span>
                    <PiArrowRightFill className="transition-transform group-hover:translate-x-1" />
                </Link >
            </div>
        </div>
    )
}

export default SuccessAuctionedProducts;