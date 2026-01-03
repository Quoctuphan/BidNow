import { useState } from "react";
import { Modal } from "antd";
import SellerInformation from "./SellerInformation";
import WonItem from "../WonItem";
import AuctionInfo from "../AuctionInfo";
import RegisterProduct from "./RegisterProduct";
import RegisteredProduct from "./RegisteredProduct";

const SellerPersonalProfile = () => {
  const [tab, setTab] = useState(1);
  const [logout, setLogout] = useState(false);
  const [selectSubTab, setSelectSubTab] = useState(0);

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
          <li className="font-bold space-y-4">
            <button onClick={() => { selectSubTab === 1 ? setSelectSubTab(0) : setSelectSubTab(1) }}
              className={`font-bold hover:text-[#B7201B] ${selectSubTab === 1 ? 'text-[#B7201B]' : ''}`}
            >Product</button>
            {selectSubTab === 1 ? (
              <ul className="space-y-4 ml-[20px]">
                <li>
                  <button onClick={() => { setTab(4) }}
                    className={`font-bold hover:text-[#D68B45] ${tab === 4 ? "text-[#D68B45]" : ""}`} >Register Product</button>
                </li>
                <li>
                  <button onClick={() => { setTab(5) }}
                    className={`font-bold hover:text-[#D68B45] ${tab === 5 ? "text-[#D68B45]" : ""}`}>Product</button>
                </li>
              </ul>
            ) : ""}
          </li>
          <li className={`font-bold hover:text-[#B7201B] ${tab === 6 ? 'text-[#B7201B]' : ''}`}>
            <button onClick={() => { setLogout(true) }}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:w-3/4 w-full">
        {tab === 1 ? (
          <SellerInformation />
        ) : tab === 2 ? (
          <WonItem />
        ) : tab === 3 ? (
          <AuctionInfo />
        ) : tab === 4 ? (
          <RegisterProduct />
        ) : tab === 5 ? (
          <RegisteredProduct />
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

export default SellerPersonalProfile;