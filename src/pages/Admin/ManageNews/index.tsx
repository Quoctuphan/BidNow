import { Modal, Table, TableProps } from "antd";
import { useState } from "react";
import columns from "./columns";
import CreateNews from "./CreateNews";



const onChange: TableProps<any>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
function ManageNews() {
        const [isOpen, setOpen] = useState(false)
        // const location = useLocation();
        // const navigate = useNavigate()
        // const { formData } = location.state || {};
        const handleOnclick = () => {
          if(!isOpen) {
           setOpen(true)
         }
     }
       const handleCancel = () => {
          setOpen(false)
       }
        const data = [
            {
              key: '1',
              id:'0000001',
              name: 'new product',
              detail: "buy buy buy buy",
              author: "john", 
              date: '04 Sep 2019',
            },
            {
                key: '2',
                id:'0000002',
                name: 'new product',
                detail: "buy buy buy buy",
                author: "john2", 
                date: '04 Sep 2019',
              },
              {
                key: '3',
                id:'0000003',
                name: 'new product',
                detail: "buy buy buy buy",
                author: "john3", 
                date: '04 Sep 2019',
              },
          ];
        return ( 
            <div className=" flex-1 h-[580px] ">
            <header className=" flex justify-between items-center mb-4 ">
               <h1 className="text-3xl font-semibold mx-3">News</h1>
                <button onClick={handleOnclick}  className="bg-[#4ad991] h-[28px] rounded-full mx-5 hover:bg-green-200 hover: border-[#4ad991] hover: border-2">
                      <span className="p-3 text-sm font-semibold text-[#256d49] text-center">Add News</span>
                </button>
                 {isOpen &&  
                  <Modal
                  width="800px"
                  open={isOpen}
                  footer={null}
                  onCancel={handleCancel}
                  className="modal-responsive"
                >
                    <CreateNews/>
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

export default ManageNews;