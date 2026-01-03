import { Select } from "antd";

const SellerInformation = () => {
  const businessLicense = '@/assets/images/businessLicense.jpg';
  const companyLogo = '@/assets/images/companyLogo.jpg';
  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="text-[#B7201B] text-center text-[30px] font-bold">Seller Information</h1>
      <div className="space-y-2">
        <p className="text-[16px]">Username/Email</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">First Name</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">Address</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">Country</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">State/Province</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">City</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">Short description</p>
        <textarea className="w-full border-[1px] rounded-[10px]" rows={6} />
      </div>
      <div className="space-y-2">
        <p className="text-[16px]">Terms and conditions of the auction</p>
        <textarea className="w-full border-[1px] rounded-[10px]" rows={6} />
      </div>
      <h2 className="text-[20px] font-bold">Payments</h2>
      <div className="flex flex-row justify-center space-x-10">
        <div className="space-y-2 w-1/3">
          <p className="text-[16px]">Bank Name</p>
          <Select
            showSearch
            placeholder="Bank Name"
            className="w-full h-[35px]"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
        <div className="space-y-2 w-1/3">
          <p className="text-[16px]">Bank Number</p>
          <Select
            showSearch
            placeholder="Bank Number"
            className="w-full h-[35px]"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
        <div className="space-y-2 w-1/3">
          <p className="text-[16px]">Bank Branch</p>
          <Select
            showSearch
            placeholder="Bank Branch"
            className="w-full h-[35px]"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Jack' },
              { value: '2', label: 'Lucy' },
              { value: '3', label: 'Tom' },
            ]}
          />
        </div>
      </div>
      <h2 className="text-[20px] font-bold">Organization (Individuals may skip this section)</h2>
      <div className="flex flex-row justify-center">
        <div className="space-y-2 w-1/2">
          <p className="text-[16px]">Business license</p>
          <img src={businessLicense} alt="" className="w-40 h-40" />
        </div>
        <div className="space-y-2 w-1/2">
          <p className="text-[16px]">Logo</p>
          <img src={companyLogo} alt="" className="w-40 h-40" />
        </div>
      </div>
      <div className="flex flex-row justify-end pt-5">
        <button className="bg-[#B7201B] px-12 py-2 rounded-[10px] text-white font-bold text-[18px]">UPDATE</button>
      </div>
    </div>
  );

}

export default SellerInformation;