
import Footer from "./FooterClient";
import Header from "./HeaderClient";
import { Link, Outlet } from "react-router-dom";
import contactImage from "@/assets/images/contact.png"

function ClientLayout() {
    const handleAlert = () => (
          alert("Chức năng này chưa phát triển")
    )

    return (
        <div className="relative">
            <div>
                <div className=" fixed top-0 right-0 w-full z-10">
                    <Header />
                </div>
                <div className="my-4 mt-24 ">
                 
                    {/* <Home /> */}
                <Outlet />
                </div>
              
                <Footer />
            </div>
            <div className="fixed right-6 bottom-6">
                <Link to={""} onClick={handleAlert}><img src={contactImage} alt="" /></Link>
            </div>
        </div>
    )
}

export default ClientLayout;