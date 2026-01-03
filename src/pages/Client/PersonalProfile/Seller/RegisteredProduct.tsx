import { Select } from "antd";
import RegisteredProductItem from "@/components/RegisteredProductItem";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const RegisteredProduct = () => {
  const auctionImg = "./src/assets/images/watch.png";
  const exampleData = [
    {
      id: 1,
      auctionName: "Vintage Car Auction",
      imgSrc: auctionImg,
      amount: 100,
      auctionType: "Sealed-bid auction item",
      status: "Approved"
    },
    {
      id: 2,
      auctionName: "Rare Book Auction",
      imgSrc: auctionImg,
      amount: 100,
      auctionType: "Sealed-bid auction item",
      status: "Not Approved"
    },
    {
      id: 3,
      auctionName: "Vintage Car Auction",
      imgSrc: auctionImg,
      amount: 100,
      auctionType: "Sealed-bid auction item",
      status: "Successful"
    },
    {
      id: 4,
      auctionName: "Vintage Car Auction",
      imgSrc: auctionImg,
      amount: 100,
      auctionType: "Sealed-bid auction item",
      status: "Unsuccessful"
    },
  ];
  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="text-[#B7201B] text-center text-[30px] font-bold">Product</h1>
      <div className="flex flex-row justify-end">
        <Select
          defaultValue={'All'}
          className="w-[300px] h-[35px]"
          onChange={handleChange}
          options={[
            { value: '1', label: 'All' },
            { value: '2', label: 'Approved' },
            { value: '3', label: 'Not Approved' },
            { value: '4', label: 'Successful' },
            { value: '5', label: 'Unsuccessful' },
          ]}
        />
      </div>
      <div className="flex flex-col space-y-5">
        {exampleData.map((item) => (
          <RegisteredProductItem
            key={item.id}
            auctionName={item.auctionName}
            imgSrc={item.imgSrc}
            amount={item.amount}
            auctionType={item.auctionType}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
};

export default RegisteredProduct;
