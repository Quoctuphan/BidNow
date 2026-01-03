
import { Modal, Table, TableProps } from "antd";
import AddUser from '@/pages/Admin/ManageUser/AddUser'
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import columns from "./columns";


const onChange: TableProps<any>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

function ManageListUser() {
  const [open, setOpen] = useState(false)
  // const location = useLocation();
  // const navigate = useNavigate()
  // const { formData } = location.state || {};
  const handleOnclick = () => {
    if (!open) {
      setOpen(true)
    }
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const data = [
    {
      key: '1',
      id: '0000001',
      name: 'John Brown',
      email: "John Brown@gmail.com",
      date: '04 Sep 2019',
      role: "Buyer",
      status: 'Active'
    },
    {
      key: '2',
      id: '0000002',
      name: 'Jim Green',
      email: "Jim Green@gmail.com",
      date: '04 Sep 2020',
      role: "Seller",
      status: 'Inactive'
    },
    {
      key: '3',
      id: '0000003',
      name: 'Joe Black',
      email: "Joe Blackn@gmail.com",
      date: '04 Sep 2020',
      role: "Admin",
      status: 'Inactive'
    },
  ];
  return (
    <div className=" flex-1 ">
      <header className=" flex items-center mb-4 ">
        <h1 className="text-3xl font-semibold mx-3">User</h1>
        <button onClick={handleOnclick} className="bg-[#4ad991] h-[28px] rounded-full mx-5 hover:bg-green-200 hover: border-[#4ad991] hover: border-2">
          <span className="p-3 text-sm font-semibold text-[#256d49] text-center">Add User</span>
        </button>
        {open &&
          <Modal
            width="800px"
            open={open}
            footer={null}
            onCancel={handleCancel}
            className="modal-responsive"
          >
            <AddUser />
          </Modal>

        }
      </header>
      <section className=" w-full p-4 h-full">
        <Table
          columns={columns}
          dataSource={data.map((item, index) => ({ ...item, key: index }))}
          onChange={onChange}
        />
      </section>
    </div>

  );
}

export default ManageListUser; 