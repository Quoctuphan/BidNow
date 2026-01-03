import { Appraiser } from "@/types/Appraiser";
import { Table, TableProps } from "antd";
import columns from "./columns";
import AppModal from "@/components/Modal";
import CreateEditAppraiser from "./CreateEditAppraiser";
import { useState } from "react";

const onChange: TableProps<Appraiser>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const exampleAppraisers: Appraiser[] = [
  {
    id: "1",
    nameOrganization: "Product 1",
    address: "example@example.com",
    email: "email@example.com",
    phone: "0945321122",
  },
  {
    id: "2",
    nameOrganization: "Product 1",
    address: "example@example.com",
    email: "email@example.com",
    phone: "0945321122",
  },
  {
    id: "3",
    nameOrganization: "Product 1",
    address: "example@example.com",
    email: "email@example.com",
    phone: "0945321122",
  }, {
    id: "4",
    nameOrganization: "Product 1",
    address: "example@example.com",
    email: "email@example.com",
    phone: "0945321122",
  }, {
    id: "5",
    nameOrganization: "Product 1",
    address: "example@example.com",
    email: "email@example.com",
    phone: "0945321122",
  },
];

const ManageAppraiser: React.FC = () => {

  const [selectedAppraiser, setSelectedAppraiser] = useState<Appraiser | null>(null);

  const handleEditClick = (appraiser: Appraiser) => {
    setSelectedAppraiser(appraiser);
  };

  const getColumns = columns(handleEditClick);

  return (
    <div className="space-y-10">
      <div className="flex flex-row justify-between">
        <h1>Appraiser</h1>
        <AppModal
          width={1000}
          trigger={
            <div className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Add Appraiser +</div>
          }
          cancelText='Cancel'
          okText='Add Appraiser'
        >
          <CreateEditAppraiser appraiser={null} />
        </AppModal>

      </div>
      <Table
        columns={getColumns}
        dataSource={exampleAppraisers.map((item, index) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default ManageAppraiser;