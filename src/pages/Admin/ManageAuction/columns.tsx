import { TableColumnsType } from "antd";
import { Auction } from "@/types/Auction";
import AppModal from "@/components/Modal";
import CreateEditAuction from "./CreateEditAuction";
import DeleteAuction from "./DeleteAuction";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { CiStreamOn, CiStreamOff } from "react-icons/ci";

const columns = (handleEditClick: (appraiser: Auction) => void): TableColumnsType<Auction> => [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Auction Name",
    dataIndex: "auctionName",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Product Detail",
    dataIndex: "productDetail",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    align: "center",
    render: (value) => (
      <div className={`
      ${value === 'In - Progress' ? ("bg-[#A8C485] p-2 rounded-[10px]") :
          value === "End" ? ("bg-[#F37E8C] p-2 rounded-[10px]") :
            value === "Upcoming" ? ("bg-[#E2AE7D] p-2 rounded-[10px]") : ""
        }
     `}> {value}</div>
    ),
  },
  {
    title: "Action",
    dataIndex: "",
    align: "center",
    render: (_, record) => (
      <div className="flex flex-row justify-center space-x-5">
        {record.isLive ? (
          <AppModal
            width={1000}
            onOk={() => { alert('function pause auction') }}
            trigger={
              <button className="bg-[#D8D8D8] p-2 rounded-[5px] text-[red] text-[18px] font-bold"><CiStreamOn /></button>
            }
          >
            <div>Bạn muốn tạm dừng phiên đấu giá này ?</div>
          </AppModal>
        ) : (
          <AppModal
            width={1000}
            onOk={() => { alert('function resume auction') }}
            trigger={
              <button className="bg-[#D8D8D8] p-2 rounded-[5px] text-[red] text-[18px] font-bold"><CiStreamOff /></button>
            }
          >
            <div>Bạn muốn tiếp tục mở phiên đấu giá này ?</div>
          </AppModal>
        )}
        <AppModal
          width={1000}
          onOk={() => { alert('function update auction') }}
          trigger={
            <button
              onClick={() => handleEditClick(record)}
              className="bg-[#3DBF00] p-2 rounded-[5px] text-white text-[18px] font-bold"><FaEdit /></button>
          }
        >
          <CreateEditAuction auction={record} />
        </AppModal>
        <AppModal
          onOk={() => { alert('function delete auction') }}
          width={1000}
          trigger={
            <button className="bg-[#FF0000] p-2 rounded-[5px] text-white text-[18px] font-bold"><IoTrash /></button>
          }
        >
          <DeleteAuction />
        </AppModal>
      </div>
    )
  }
];

export default columns;