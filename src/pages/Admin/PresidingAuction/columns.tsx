import { TableColumnsType } from "antd";
import { PresideAuction } from "@/types/PresideAuction";
import AppModal from "@/components/Modal";

const columns: TableColumnsType<PresideAuction> = [
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
    title: "Host",
    dataIndex: "host",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Date",
    dataIndex: "date",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Time",
    dataIndex: "time",
    align: "center",
    render: (value) => <p>{value}</p>,
  },
  {
    title: "Session",
    dataIndex: "session",
    align: "center",
    render: (value) => <p>{value}</p>
  },
  {
    title: "Action",
    dataIndex: "",
    align: "center",
    render: (_, record) => (
      <div>
        {record.isPresiding ? (
          <AppModal
            onOk={() => console.log("Deselect")}
            trigger={
              <button className="bg-[#CECECE] py-2 px-2.5 rounded-[5px] text-white text-[18px] font-bold">Selected</button>
            }
          >
            <div>You want to deselect this host in the auction {record.auctionName}?</div>
          </AppModal>
        ) : (
          <AppModal
            onOk={() => console.log("Select")}
            trigger={
              <button className="bg-[#3DBF00] py-2 px-5 rounded-[5px] text-white text-[18px] font-bold">Select</button>
            }
          >
            <div>You want to choose this host in the auction {record.auctionName}?</div>
          </AppModal>

        )}
      </div>
    )
  }
];

export default columns;