import CarouselPros from './CarouselPros';
import { ImHammer2 } from 'react-icons/im';
import { productImage, coinImage, coatImage, coat01 } from '../../assets/images';

const LiveAuctions = () => {

  const liveItems = [
  {
    type: "Time-base auction",
    image: productImage,
    name: "Vintage Silver Ring",
    startbid: 250,
    currentBid: 12500,
    nextBid: 13000,
    endsIn: "02:14:33",
    bidsCount: 18,
    biddersCount: 5,
  },
  {
    type: "Time-base auction",
    image: coat01,
    name: "Antique Pocket Watch",
    startbid: 500,
    currentBid: 5200,
    nextBid: 5500,
    endsIn: "01:30:00",
    bidsCount: 12,
    biddersCount: 4,
  },
  {
    type: "Time-base auction",
    image: coinImage,
    name: "Rare Stamp Collection",
    startbid: 150,
    currentBid: 800,
    nextBid: 900,
    endsIn: "00:45:12",
    bidsCount: 25,
    biddersCount: 8,
  },
  {
    type: "Time-base auction",
    image: coat01,
    name: "Classic Vinyl Record",
    startbid: 120,
    currentBid: 350,
    nextBid: 400,
    endsIn: "03:10:45",
    bidsCount: 6,
    biddersCount: 3,
  },
  {
    type: "Time-base auction",
    image: coinImage,
    name: "Gold Plated Necklace",
    startbid: 320,
    currentBid: 1200,
    nextBid: 1300,
    endsIn: "05:22:10",
    bidsCount: 15,
    biddersCount: 6,
  },
  {
    type: "Time-base auction",
    image: coat01,
    name: "Limited Edition Coin",
    startbid: 200,
    currentBid: 450,
    nextBid: 500,
    endsIn: "00:15:33",
    bidsCount: 9,
    biddersCount: 4,
  },
  {
    type: "Time-base auction",
    image: coatImage,
    name: "Luxury Fountain Pen",
    startbid: 180,
    currentBid: 600,
    nextBid: 650,
    endsIn: "02:45:00",
    bidsCount: 11,
    biddersCount: 5,
  },
  {
    type: "Time-base auction",
    image: coinImage,
    name: "Handmade Ceramic Vase",
    startbid: 90,
    currentBid: 250,
    nextBid: 280,
    endsIn: "04:12:18",
    bidsCount: 7,
    biddersCount: 3,
  },
  {
    type: "Time-base auction",
    image: productImage,
    name: "Vintage Camera",
    startbid: 400,
    currentBid: 1800,
    nextBid: 1950,
    endsIn: "01:05:44",
    bidsCount: 20,
    biddersCount: 7,
  },
  {
    type: "Time-base auction",
    image: coatImage,
    name: "Collector's Action Figure",
    startbid: 220,
    currentBid: 750,
    nextBid: 800,
    endsIn: "06:30:15",
    bidsCount: 14,
    biddersCount: 5,
  },
];

// const upcomingItems = [
//   {
//     type: "Coming Soon",
//     image: productImage,
//     name: "Future Tech Gadget",
//     startbid: 1000,
//     endsIn: "Starts in 2 days",
//   },
//   {
//     type: "Coming Soon",
//     image: coat01,
//     name: "Designer Winter Coat",
//     startbid: 450,
//     endsIn: "Starts in 5 hours",
//   },
//   {
//     type: "Coming Soon",
//     image: coinImage,
//     name: "Historic Gold Coin",
//     startbid: 2000,
//     endsIn: "Starts tomorrow",
//   },
//   {
//     type: "Coming Soon",
//     image: coatImage,
//     name: "Limited Edition Sneakers",
//     startbid: 300,
//     endsIn: "Starts in 1 week",
//   }
// ];

// const endedItems = [
//   {
//     type: "Auction Ended",
//     image: productImage,
//     name: "Sold: Vintage Car Model",
//     startbid: 500,
//     currentBid: 1200,
//     endsIn: "Ended 2 hours ago",
//     bidsCount: 45,
//     biddersCount: 12,
//   },
//   {
//     type: "Auction Ended",
//     image: coat01,
//     name: "Sold: Silk Scarf",
//     startbid: 100,
//     currentBid: 280,
//     endsIn: "Ended yesterday",
//     bidsCount: 15,
//     biddersCount: 5,
//   }
// ];

// const getItems = () => {
//   switch (activeTab) {
//     case 'live': return liveItems;
//     case 'upcoming': return upcomingItems;
//     case 'ended': return endedItems;
//     default: return liveItems;
//   }
// };

  return (
    <div className='text-center space-y-6 py-10'>
        <div className="space-y-3">
          <h1 className='text-[#B41712] font-semibold text-[36px]'> Live Auctions</h1>
          <div className="flex justify-center gap-5 m-2">
                      <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
                      <ImHammer2 size={32} className="text-mainBgColor" />
                      <hr className='bg-gray-600 w-32 h-1 rounded-sm mt-3' />
          </div>
        </div>
        
        <CarouselPros items={liveItems}/>

    </div>
  )
}

export default LiveAuctions