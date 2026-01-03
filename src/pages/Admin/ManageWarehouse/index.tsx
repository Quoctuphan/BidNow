import { Warehouse } from "@/types/Warehouse";
import { Table, TableProps } from "antd";
import columns from "./columns";
import AppModal from "@/components/Modal";
import ImportProduct from "./ImportProduct";
import { useState } from "react";

const onChange: TableProps<Warehouse>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const exampleProducts: Warehouse[] = [
  {
    id: "1",
    productId: "1",
    quantity: 10,
    position: "A1",
    importDate: "2022-01-01",
    exportDate: "2022-01-02",
    deleteAt: "2022-01-03",
  },
  {
    id: "2",
    productId: "2",
    quantity: 20,
    position: "A2",
    importDate: "2022-01-04",
    exportDate: "2022-01-05",
    deleteAt: "2022-01-06",
  },
  {
    id: "3",
    productId: "3",
    quantity: 30,
    position: "A3",
    importDate: "2022-01-07",
    exportDate: "2022-01-08",
    deleteAt: "2022-01-09",
  },
  {
    id: "4",
    productId: "4",
    quantity: 40,
    position: "A4",
    importDate: "2022-01-10",
    exportDate: "2022-01-11",
    deleteAt: "2022-01-12",
  },
];

const ManageWarehouse: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const [selectedAppraiser, setSelectedAppraiser] = useState<Warehouse | null>(null);

  const handleEditClick = (auction: Warehouse) => {
    setSelectedAppraiser(auction);
  };

  const getColumns = columns(handleEditClick);

  return (
    <div className="flex-1 h-[580px] px-[1%] space-y-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-[20px] font-bold">Warehouse</h1>
        <AppModal
          width={800}
          onOk={() => console.log("onOk")}
          trigger={
            <button className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Import</button>
          }
        >
          <ImportProduct />
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

export default ManageWarehouse;