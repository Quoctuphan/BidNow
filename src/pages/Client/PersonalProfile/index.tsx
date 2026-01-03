import UserNavbar from "@/components/Navbar";
import Footer from "@/layouts/Client/FooterClient";
import Header from "@/layouts/Client/HeaderClient";
import SellerPersonalProfile from "@/pages/Client/PersonalProfile/Seller";
import CustomerPersonalProfile from "./Customer";
import { useState } from "react";

const PersonalProfile = () => {
  const [isSeller, setIsSeller] = useState(true)
  return (
    <div>
      <div className="my-4">
        <UserNavbar />
      </div>
      {isSeller ? (
        <SellerPersonalProfile />
      ) : (
        <CustomerPersonalProfile />
      )}
    </div>
  )
}

export default PersonalProfile;


