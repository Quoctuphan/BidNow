import { TableColumnsType } from "antd";
import { Appraiser } from "@/types/Appraiser";
import AppModal from "@/components/Modal";
import CreateEditAppraiser from "./CreateEditAppraiser";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

const columns = (handleEditClick: (appraiser: Appraiser) => void): TableColumnsType<Appraiser> => [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Name/Organization",
    dataIndex: "nameOrganization",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Address",
    dataIndex: "address",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Email",
    dataIndex: "email",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Action",
    dataIndex: "",
    align: "center",
    render: (_, record) => (
      <div className="flex flex-row justify-center space-x-5">
        <AppModal
          width={1000}
          onOk={() => { alert('function add and create Appraiser') }}
          trigger={
            <button
              onClick={() => handleEditClick(record)}
              className="bg-[#3DBF00] p-2 rounded-[5px] text-white text-[18px] font-bold"><FaEdit /></button>
          }
        >
          <CreateEditAppraiser appraiser={record} />
        </AppModal>
        <AppModal
          trigger={
            <button className="bg-[#FF0000] p-2 rounded-[5px] text-white text-[18px] font-bold"><IoTrash /></button>
          }
          cancelText="No"
          okText="Yes"
          okButtonProps={{ style: { background: 'red' } }}
        >
          <div>Are you sure delete this appraiser?</div>
        </AppModal>
      </div>
    )
  }
];

export default columns;