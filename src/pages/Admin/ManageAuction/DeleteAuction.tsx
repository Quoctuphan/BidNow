import { Checkbox, Form } from "antd";

const DeleteAuction = () => {
  return (
    <Form className="flex flex-col space-y-5 m-[10px]">
      <div className="flex flex-row justify-center">
        <h1 className="bg-[#D8D8D8] rounded-[10px] w-[300px] text-center text-[18px] font-bold">Auction Form</h1>
      </div>
      <p>Are you sure you want to delete this auction?</p>
      <p>This action cannot be undone. Once you click the "Delete" button,
        the product will be permanently deleted and cannot be recovered.</p>
      <div className="flex flex-row space-x-10">
        <div className="w-1/2 space-y-3">
          <p className="text-[18px] font-bold">ID</p>
          <p className="text-[18px] font-bold">Auction Name</p>
          <p className="text-[18px] font-bold">Status</p>
          <p className="text-[18px] font-bold">Product Name</p>
          <p className="text-[18px] font-bold">Product Detail</p>
          <p className="text-[18px] font-bold">Product Category</p>
          <p className="text-[18px] font-bold">Datetime</p>
        </div>
        <div className="w-1/2 space-y-3">
          <p className="text-[18px]">ID</p>
          <p className="text-[18px]">Auction Name</p>
          <p className="text-[18px]">Status</p>
          <p className="text-[18px]">Product Name</p>
          <p className="text-[18px]">Product Detail</p>
          <p className="text-[18px]">Product Category</p>
          <p className="text-[18px]">Datetime</p>
        </div>
      </div>
      <p>Please confirm your action:</p>
      <Checkbox>Yes, I would like to delete this auction.</Checkbox>
    </Form>
  );
}

export default DeleteAuction;