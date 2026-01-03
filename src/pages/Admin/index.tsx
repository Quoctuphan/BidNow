import HeaderAdmin from "@/layouts/Admin/HeaderAdmin";
import SidebarAdmin from "@/layouts/Admin/SideBarAdmin";
import FooterAdmin from "@/layouts/Admin/FooterAdmin";
import ManageProduct from "./ManageProduct";
import ManageListUser from "./ManageUser";
import StatisticalTables from "./Dashboad/StatisticalTables";
import SalesChart from "./Dashboad/SalesChart";
import DealsDetails from "./Dashboad/DealsDetails";
import { Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div >
      <HeaderAdmin />
      <div className="flex flex-row pt-[150px] pl-[1%]">
          <SidebarAdmin />  
          <Outlet/>
      </div>
      <FooterAdmin />
 
    </div>
  );
}

export default AdminPage;