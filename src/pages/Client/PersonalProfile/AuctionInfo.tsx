import { useState } from "react";
import AuctionRegisteredItem from "@/components/AuctionRegisteredItem";

const AuctionInfo = () => {
  const [tab, setTab] = useState(1);
  const auctionImg = './src/assets/images/auctionItem.png';
  const exRegisteredData = [
    {
      id: 1,
      auctionName: 'Auction 1',
      imgSrc: auctionImg,
      startTime: '2021-10-01',
      endTime: '2021-10-10',
      isOnline: true,
      location: '',
    },
    {
      id: 2,
      auctionName: 'Auction 2',
      imgSrc: auctionImg,
      startTime: '2021-11-01',
      endTime: '2021-11-10',
      isOnline: false,
      location: '21 Le Loi, District 1, HCMC',
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-5 p-4 sm:p-6 md:p-8">
      <h1 className="text-[#B7201B] text-center text-[24px] sm:text-[26px] md:text-[30px] font-bold">Auction</h1>
      <ul className="flex flex-col sm:flex-row justify-start sm:justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-10 font-bold text-[14px] sm:text-[16px] md:text-[18px]">
        <li>
          <button
            onClick={() => { setTab(1) }}
            className={`hover:text-[#B7201B] ${tab === 1 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>Registered</button>
        </li>
        <li>
          <button
            onClick={() => { setTab(2) }}
            className={`hover:text-[#B7201B] ${tab === 2 ? 'underline underline-offset-8 decoration-red-500' : ''}`}>Participated</button>
        </li>
      </ul>
      {tab === 1 ? (
        <div className="flex flex-col space-y-5">
          {exRegisteredData.map((item) => (
            <AuctionRegisteredItem
              key={item.id}
              auctionName={item.auctionName}
              imgSrc={item.imgSrc}
              startTime={item.startTime}
              endTime={item.endTime}
              isOnline={item.isOnline}
              location={item.location}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col space-y-5">
          <p>chưa có UI phần này</p>
        </div>
      )}
    </div>
  );
}

export default AuctionInfo;
