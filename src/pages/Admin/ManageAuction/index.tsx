import { Auction } from "@/types/Auction";
import { Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import columns from "./columns";
import AppModal from "@/components/Modal";
import CreateEditAuction from "./CreateEditAuction";

const onChange: TableProps<Auction>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const exampleAuctions: Auction[] = [
  {
    id: "1",
    auctionName: "Auction 1",
    auctionForm: "Private Auction",
    location: "Location 1",
    productCategory: "Category 1",
    productName: "Product 1",
    productDetail: "Detail 1",
    auctionMaster: "Master 1",
    status: "Not Identified",
    startTime: "2022-12-12",
    endTime: "2022-12-12",
    isLive: false,
  },
  {
    id: "2",
    auctionName: "Auction 2",
    auctionForm: "Public Auction",
    location: "Location 2",
    productCategory: "Category 2",
    productName: "Product 2",
    productDetail: "Detail 2",
    auctionMaster: "Master 2",
    status: "Closed",
    startTime: "2022-12-12",
    endTime: "2022-12-12",
    isLive: true,
  },
];

const ManageAuction: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const [selectedAppraiser, setSelectedAppraiser] = useState<Auction | null>(null);

  const handleEditClick = (auction: Auction) => {
    setSelectedAppraiser(auction);
  };

  const getColumns = columns(handleEditClick);

  return (
    <div className="flex-1 h-[580px] px-[1%] space-y-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-[20px] font-bold">Auction</h1>
        <AppModal
          width={1000}
          trigger={
            <div className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Add Auction</div>
          }
        >
          <CreateEditAuction auction={null} />
        </AppModal>
      </div>
      <Table
        columns={getColumns}
        dataSource={exampleAuctions.map((item, index) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default ManageAuction;