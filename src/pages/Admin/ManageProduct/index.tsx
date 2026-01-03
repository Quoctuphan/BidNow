import { Product } from "@/types/Product";
import { Table, TableProps } from "antd";
import columns from "./columns";
import AppModal from "@/components/Modal";
import CreateEditProduct from "./CreateEditProduct";
import { useState } from "react";

const onChange: TableProps<Product>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const exampleProducts: Product[] = [
  {
    id: "1",
    productName: "Product 1",
    image: ["https://imagevietnam.vn/images/files/image_vital_c_hydrating_water_burst.jpg"],
    startingPrice: 100,
    category: "Category 1",
    bidIncrement: 10,
    quantity: 10,
    seller: "Seller 1",
    appraiser: "Appraiser 1",
    warehouse: "Warehouse 1",
    description: "Description 1",
    isOnlineAuction: true,
    isSealedBidAuction: false,
    status: "Approved",
  },
  {
    id: "2",
    productName: "Product 2",
    image: [
      "https://imagevietnam.vn/images/files/image_vital_c_hydrating_water_burst.jpg",
      "https://imagevietnam.vn/images/files/image_vital_c_hydrating_water_burst.jpg"
    ],
    startingPrice: 200,
    category: "Category 2",
    bidIncrement: 20,
    quantity: 20,
    seller: "Seller 2",
    appraiser: "Appraiser 2",
    warehouse: "Warehouse 2",
    description: "Description 2",
    isOnlineAuction: false,
    isSealedBidAuction: true,
    status: "Not Approved",
  },
];

const ManageProduct: React.FC = () => {

  const [selectedAppraiser, setSelectedAppraiser] = useState<Product | null>(null);

  const handleEditClick = (product: Product) => {
    setSelectedAppraiser(product);
  };

  const getColumns = columns(handleEditClick);


  return (
    <div className="flex-1 h-[580px] px-[1%] space-y-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-[20px] font-bold">Product</h1>
        <AppModal
          width={1000}
          trigger={
            <button className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Add Product</button>
          }
        >
          <CreateEditProduct product={null} />
        </AppModal>

      </div>
      <Table
        columns={getColumns}
        dataSource={exampleProducts.map((item, index) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default ManageProduct;