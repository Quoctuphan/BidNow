import { useState } from "react";
import CustomerInformation from "./CustomerInformation";
import WonItem from "../WonItem";
import AuctionInfo from "../AuctionInfo";
import RegisterSeller from "./RegisterSeller";
import { Modal } from "antd";

const CustomerPersonalProfile = () => {
  const [tab, setTab] = useState(1);
  const [logout, setLogout] = useState(false);

  return (
    <div className="flex lg:flex-row flex-col lg:mx-[150px] mx-[20px] justify-between lg:space-x-5 my-[20px]">
      <div className="flex lg:flex-col flex-row lg:w-1/4 w-full lg:bg-[#F4F4F4]">
        <h2 className="text-center font-bold text-[14px] md:text-[16px] lg:text-[18px]">Personal Profile</h2>
        <ul className="mt-[20px] space-y-4 text-[14px] md:text-[16px] lg:text-[18px]">
          <li className={`font-bold hover:text-[#B7201B] ${tab === 1 ? 'text-[#B7201B]' : ''}`}>
            <button onClick={() => { setTab(1) }}>Personal Information</button>
          </li>
          <li className={`font-bold hover:text-[#B7201B] ${tab === 2 ? 'text-[#B7201B]' : ''}`}>
            <button onClick={() => { setTab(2) }}>Won Items</button>
          </li>
          <li className={`font-bold hover:text-[#B7201B] ${tab === 3 ? 'text-[#B7201B]' : ''}`}>
            <button onClick={() => { setTab(3) }}>Auction</button>
          </li>
          <li className={`font-bold hover:text-[#B7201B] ${tab === 4 ? 'text-[#B7201B]' : ''}`}>
            <button onClick={() => { setTab(4) }}>Register to sell items</button>
          </li>
          <li className={`font-bold hover:text-[#B7201B] ${tab === 6 ? 'text-[#B7201B]' : ''}`}>
            <button onClick={() => { setLogout(true) }}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:w-3/4 w-full">
        {tab === 1 ? (
          <CustomerInformation />
        ) : tab === 2 ? (
          <WonItem />
        ) : tab === 3 ? (
          <AuctionInfo />
        ) : tab === 4 ? (
          <RegisterSeller />
        ) : ""}
      </div>
      {logout ? (
        <Modal
          width={400}
          open={logout}
          onOk={() => { setLogout(false) }}
          onCancel={() => { setLogout(false) }}
          okButtonProps={{ className: "bg-[#B7201B]" }}
        >
          <div>
            <h1 className="text-[#B7201B] text-[14px] md:text-[16px] lg:text-[18px]">Are you sure you want to logout?</h1>
          </div>
        </Modal>
      ) : ""}
    </div>
  );
};

export default CustomerPersonalProfile;
