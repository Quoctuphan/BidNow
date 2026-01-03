import { Select } from "antd";

const CustomerInformation = () => {
  return (
    <div className="flex flex-col space-y-5 w-full">
      <h1 className="text-[#B7201B] text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold">Personal Information</h1>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Username/Email</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">First Name</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Address</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Country</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">State/Province</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">City</p>
        <input type='text' className="w-full h-[35px] border-[1px] rounded-[10px]" />
      </div>
      <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold">Payments</h2>
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Bank Name</p>
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
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Bank Number</p>
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
      <div className="space-y-2">
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">Bank Branch</p>
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
      <div className="flex flex-row justify-end pt-5">
        <button className="bg-[#B7201B] px-12 py-2 rounded-[10px] text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">UPDATE</button>
      </div>
    </div>
  );
}

export default CustomerInformation;
