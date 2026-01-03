import Home from "@/pages/Client/Home";
import Footer from "./FooterClient";
import Header from "./HeaderClient";
import UserNavbar from "@/components/Navbar";

function ClientLayout() {
    return (
        <div>
            <Header />
            <div className="my-4">
                <UserNavbar />
            </div>
            <Home />
            <Footer />
        </div>
    )
}

export default ClientLayout;