import { TableColumnsType } from "antd";
import { Warehouse } from "@/types/Warehouse";
import AppModal from "@/components/Modal";
import ExportProduct from "./ExportProduct";

const columns = (handleEditClick: (appraiser: Warehouse) => void): TableColumnsType<Warehouse> => [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Product ID",
    dataIndex: "productId",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Position",
    dataIndex: "position",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Import Date",
    dataIndex: "importDate",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Export Date",
    dataIndex: "exportDate",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Delete At",
    dataIndex: "deleteAt",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Action",
    dataIndex: "",
    align: "center",
    render: (_,record) => (
      <div className="flex flex-row justify-center space-x-5">
        <AppModal
          trigger={
            <button 
              onClick={() => handleEditClick}
              className="bg-[#FF0000] p-2 rounded-[5px] text-white text-[18px] font-bold">Export</button>
          }
        >
          <ExportProduct exportProduct={record} />
        </AppModal>
      </div>
    )
  }
];

export default columns;