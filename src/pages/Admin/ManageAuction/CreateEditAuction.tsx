import { Select } from "antd";
import { Auction } from "@/types/Auction";
import { FC, useEffect, useState } from "react";

interface CreateEditAuctionProps {
  auction: Auction | null;
}

const AuctionFormOption = [
  {
    value: '1',
    label: 'Private Auction',
  },
  {
    value: '2',
    label: 'Public Auction',
  },
]

const CategoryOption = [
  {
    value: '1',
    label: 'Not Identified',
  },
  {
    value: '2',
    label: 'Closed',
  },
]

const CreateEditAuction: FC<CreateEditAuctionProps> = ({ auction }) => {
  const initialFormData = {
    id: "",
    auctionName: "",
    auctionForm: "",
    location: "",
    productCategory: "",
    productName: "",
    productDetail: "",
    auctionMaster: "",
    status: "",
    startTime: "",
    endTime: "",
  };

  useEffect(() => {
    if (auction) {
      setFormData({
        id: auction.id,
        auctionName: auction.auctionName,
        auctionForm: auction.auctionForm,
        location: auction.location,
        productCategory: auction.productCategory,
        productName: auction.productName,
        productDetail: auction.productDetail,
        auctionMaster: auction.auctionMaster,
        status: auction.status,
        startTime: auction.startTime,
        endTime: auction.endTime,
      });
    }
  }, [auction])

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to server

    // Display the form data in an alert
    const formDataString = JSON.stringify(formData, null, 2);
    alert(formDataString);
  };

  return (
    <form className="flex flex-col space-y-2 m-[10px]" onSubmit={handleOnSubmit}>
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Auction Form</h1>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Auction ID</p>
            <input type='text' name="id" value={formData.id} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" disabled />
          </div>
          <div className="space-y-2">
            <p>Auction Name*</p>
            <input type='text' name="auctionName" value={formData.auctionName} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="space-y-2">
            <p>Auction Form</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={AuctionFormOption}
              value={formData.auctionForm}
              onChange={(value) => handleSelectChange('auctionForm', value)}
              className="w-full h-[35px]"
            />
          </div>
          <div className="space-y-2">
            <p>Location</p>
            <input type='text' name="location" value={formData.location} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" />
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Product Category</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={CategoryOption}
              value={formData.productCategory}
              onChange={(value) => handleSelectChange('productCategory', value)}
              className="w-full h-[35px]"
            />
          </div>
          <div className="space-y-2">
            <p>Product Name*</p>
            <input type='text' name="productName" value={formData.productName} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
          <div className="space-y-2">
            <p>Product Detail</p>
            <textarea name="productDetail" value={formData.productDetail} onChange={handleInputChange} className="w-full rounded-[5px] border-2" rows={5} />
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Auction Master*</p>
            <input type='text' name="auctionMaster" value={formData.auctionMaster} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" />
          </div>
          <div className="space-y-2">
            <p>Status</p>
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={AuctionFormOption}
              value={formData.status}
              onChange={(value) => handleSelectChange('status', value)}
              className="w-full h-[35px]"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <div className="space-y-2">
            <p>Start Time</p>
            <input type='text' name="startTime" value={formData.startTime} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
          <div className="space-y-2">
            <p>End Time</p>
            <input type='text' name="endTime" value={formData.endTime} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-5">
        <button type='button' onClick={() => setFormData(initialFormData)} className="bg-[#d8d8d8] px-5 py-2 rounded-[10px] text-white font-bold">Reset</button>
        <button type="submit" className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Submit</button>
      </div>
    </form>
  )
}

export default CreateEditAuction;
