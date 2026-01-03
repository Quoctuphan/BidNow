import { useState } from 'react';
import { FC } from "react";
import { Appraiser } from "@/types/Appraiser";

interface CreateEditAppraiserProps {
  appraiser: Appraiser | null;
}

const CreateEditAppraiser: FC<CreateEditAppraiserProps> = ({ appraiser }) => {
  const initialFormData = {
    id: "",
    nameOrganization: "",
    address: "",
    email: "",
    phone: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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
    <form className="flex flex-col space-y-10 m-[10px]" onSubmit={handleOnSubmit}>
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#e65a4d] rounded-[10px] w-[300px] text-center text-[18px] font-bold text-white">Appraiser Form</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <div className="w-4/5 space-y-5 justify-start">
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Name/Organization*</p>
            <input
              type="text"
              name="nameOrganization"
              value={formData.nameOrganization || appraiser?.nameOrganization}
              onChange={handleInputChange}
              className="w-3/4 h-[35px] rounded-[5px] border-2"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Address</p>
            <input
              type="text"
              name="address"
              value={formData.address || appraiser?.address}
              onChange={handleInputChange}
              className="w-3/4 h-[35px] rounded-[5px] border-2"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Email*</p>
            <input
              type="email"
              name="email"
              value={formData.email || appraiser?.email}
              onChange={handleInputChange}
              className="w-3/4 h-[35px] rounded-[5px] border-2"
            />
          </div>
          <div className="flex flex-row items-center space-x-5">
            <p className="w-1/4 text-end text-[grey]">Phone*</p>
            <input
              type="text"
              name="phone"
              value={formData.phone || appraiser?.phone}
              onChange={handleInputChange}
              className="w-3/4 h-[35px] rounded-[5px] border-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end space-x-5">
        <button type='button' onClick={() => setFormData(initialFormData)} className="bg-[#d8d8d8] px-5 py-2 rounded-[10px] text-white font-bold">Reset</button>
        <button type="submit" className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Submit</button>
      </div>
    </form>
  );
}

export default CreateEditAppraiser;
