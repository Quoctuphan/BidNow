import { TableColumnType } from "antd";
import { News } from "@/types/News";
import AppModal from "@/components/Modal";
import DeleteNews from "./DeleteNews";
import { FaEdit } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import CreateNews from "./CreateNews";
import EditNews from "./EditNews";

const columns:TableColumnType<News> = [
        {
            title: "ID",
            dataIndex: "id",
            align: "center",
        },

        {
            title: "News Name",
            dataIndex: "name",
            align: "center",
        },
        {
            title: "News Detail",
            dataIndex: "detail",
            align: "center",
            
        },
        {
            title: "Date Time",
            dataIndex: "date",
            align: "center",
        },
        {
            title: "Author",
            dataIndex: "author",
            align: "center",
        },
        {
            title: "Action",
            dataIndex: "",
            align: "center",
            render: () => 
                <div className="flex flex-row justify-center space-x-5">
        <AppModal
          width={800}
          onOk={() => { alert('function add and create Product') }}
          trigger={
            <button className="bg-[#3DBF00] p-2 rounded-[5px] text-white text-[18px] font-bold"><FaEdit /></button>
          }
        >
          <EditNews/>
        </AppModal>
        <AppModal
          onOk={() => { alert('function delete Product') }}
          width={1000}
          trigger={
            <button className="bg-[#FF0000] p-2 rounded-[5px] text-white text-[18px] font-bold"><IoTrash /></button>
          }
        >
          <DeleteNews />
        </AppModal>
      </div>
        },
]


export default columns

