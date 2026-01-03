interface RegisteredProductType {
  auctionName: string;
  imgSrc: string;
  amount: number;
  auctionType: string;
  status: string;
}

const RegisteredProductItem: React.FC<RegisteredProductType> = ({ auctionName, amount, imgSrc, auctionType, status }) => {
  return (
    <div className="flex flex-col sm:flex-row border-2 rounded-t-[10px] rounded-b-[20px] w-full justify-between items-center sm:space-x-10 py-4 px-6 sm:px-10">
      <div className="flex flex-row items-center space-y-2 sm:space-y-0 sm:space-x-10">
        <img src={imgSrc} alt={auctionName} className="w-36 h-36 object-contain" />
        <div className="flex flex-col">
          <p className="text-lg text-gray-700">{auctionName}</p>
          <p className="text-lg font-semibold">${amount}</p>
          <p className="text-lg text-gray-700">Auction Date: {auctionType}</p>
        </div>
      </div>
      <div className="pr-2 pt-2 sm:pr-5 sm:pt-5">
        <p className={`text-white font-bold py-2 px-4 rounded-[10px]
          ${status === "Approved" ? "bg-[#A8C485]"
            : status === 'Not Approved' ? "bg-[#F37E8C]"
              : status === 'Successful' ? "bg-[#E2AE7D]"
                : status === 'Unsuccessful' ? "bg-[#F4DCDB]" : ""}
        `}>{status}</p>
      </div>
    </div>
  );
}

export default RegisteredProductItem;
