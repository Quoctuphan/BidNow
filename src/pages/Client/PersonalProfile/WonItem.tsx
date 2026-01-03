import { useState } from "react";
import AuctionWonItem from "@/components/AuctionWonItem";

const WonItem = () => {
  const auctionImg = "./src/assets/images/watch.png";
  const [tab, setTab] = useState(1);
  const exampleData = [
    {
      id: 1,
      auctionName: "Vintage Car Auction",
      imgSrc: auctionImg,
      auctionDate: "07-10 10:00 AM",
      bidAmount: 100
    },
    {
      id: 2,
      auctionName: "Rare Book Auction",
      imgSrc: auctionImg,
      auctionDate: "07-15 9:00 AM",
      bidAmount: 100
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-5">
      <h1 className="text-[#B7201B] text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold">Won Items</h1>
      <ul className="flex flex-row justify-between font-bold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
        <li>
          <button
            onClick={() => { setTab(1) }}
            className={`hover:text-[#B7201B] ${tab === 1 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>All Orders</button>
        </li>
        <li>
          <button
            onClick={() => { setTab(2) }}
            className={`hover:text-[#B7201B] ${tab === 2 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>Order Being prepared</button>
        </li>
        <li>
          <button
            onClick={() => { setTab(3) }}
            className={`hover:text-[#B7201B] ${tab === 3 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>Currently Delivering</button>
        </li>
        <li>
          <button
            onClick={() => { setTab(4) }}
            className={`hover:text-[#B7201B] ${tab === 4 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>Received</button>
        </li>
        <li>
          <button
            onClick={() => { setTab(5) }}
            className={`hover:text-[#B7201B] ${tab === 5 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>Order Purchased</button>
        </li>
      </ul>
      {tab === 1 ? (
        <div className="flex flex-col space-y-5">
          {exampleData.map((item) => (
            <AuctionWonItem
              key={item.id}
              auctionName={item.auctionName}
              imgSrc={item.imgSrc}
              auctionDate={item.auctionDate}
              bidAmount={item.bidAmount}
            />
          ))}
        </div>
      ) : ""}
    </div>
  );
};

export default WonItem;
