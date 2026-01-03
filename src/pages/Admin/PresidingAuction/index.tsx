import { PresideAuction } from "@/types/PresideAuction";
import { Table, TableProps } from "antd";
import columns from "./columns";

const onChange: TableProps<PresideAuction>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const PresidingAuction: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const exampleProducts: PresideAuction[] = [
    {
      id: "1",
      auctionName: "Auction 1",
      host: "Host 1",
      date: "2022-01-01",
      time: "12:00",
      session: 1,
      isPresiding: true,
    },
    {
      id: "2",
      auctionName: "Auction 2",
      host: "Host 2",
      date: "2022-01-02",
      time: "12:00",
      session: 2,
      isPresiding: false,
    },
    {
      id: "3",
      auctionName: "Auction 3",
      host: "Host 3",
      date: "2022-01-03",
      time: "12:00",
      session: 3,
      isPresiding: false,
    },
  ];

  return (
    <div className="flex-1 h-[580px] px-[1%] space-y-10">
      <h1 className="text-[20px] font-bold">Presiding Auction</h1>
      <Table
        columns={columns}
        dataSource={exampleProducts.map((item, index) => ({ ...item, key: index }))}
        onChange={onChange}
      />
    </div>
  );
};

export default PresidingAuction;