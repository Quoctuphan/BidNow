import { Warehouse } from "@/types/Warehouse";
import { DatePicker, DatePickerProps } from "antd";
import { FC, useEffect, useState } from "react";

interface ExportProductProps {
  exportProduct: Warehouse | null;
}

const ExportProduct: FC<ExportProductProps> = ( {exportProduct} ) => { 
  const initialFormData = {
    id: "",
    productId: "",
    quantity: "",
    position: "",
    exportDate: "",
  };

  useEffect(() => {
    if (exportProduct) {
      setFormData({
        id: exportProduct.id,
        productId: exportProduct.productId,
        quantity: exportProduct.quantity.toString(),
        position: exportProduct.position,
        exportDate: exportProduct.exportDate,
      });
    }
  }, [exportProduct]);

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: DatePickerProps['value'], dateString: string | string[]) => {
    const formattedDate = Array.isArray(dateString) ? dateString[0] : dateString;
    setFormData({ ...formData, exportDate: formattedDate });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to server

    // Display the form data in an alert
    const formDataString = JSON.stringify(formData, null, 2);
    alert(formDataString);
  };

  const handleOnReset = () => { 
    setFormData(initialFormData);
  };
  return (
    <form className="flex flex-col space-y-2 m-[10px]" onSubmit={handleOnSubmit}>
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Auction Form</h1>
      </div>
      <div className="space-y-2">
        <p>Product ID</p>
        <input type='text' name="productId" value={formData.productId} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
      </div>
      <div className="space-y-2">
        <p>Quantity</p>
        <input type='text' name="quantity" value={formData.quantity} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
      </div>
      <div className="space-y-2">
        <p>Position</p>
        <input type='text' name="position" value={formData.position} onChange={handleInputChange} className="w-full h-[35px] rounded-[5px] border-2" required />
      </div>
      <div className="space-y-2">
        <p>Export Date</p>
        <DatePicker
          showTime
          onChange={handleDateChange}
          className="w-full h-[35px] rounded-[5px] border-2"
        />
      </div>
      <div className="flex flex-row justify-end space-x-5">
        <button type='button' onClick={handleOnReset} className="bg-[#d8d8d8] px-5 py-2 rounded-[10px] text-white font-bold">Reset</button>
        <button type="submit" className="bg-[#3DBF00] px-5 py-2 rounded-[10px] text-white font-bold">Submit</button>
      </div>
    </form>
  );
}

export default ExportProduct;