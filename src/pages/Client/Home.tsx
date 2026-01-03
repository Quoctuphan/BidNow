import UpcomingAuctions from "@/components/UpcomingAuctions";
import Banner from "../../components/Banner";
import SuccessAuctionedProducts from "@/components/SuccessAuctionedProducts";
import AuctionedProducts from "@/components/HomePage/AuctionedProducts";
import CurrentAuctionPro from "@/components/HomePage/CurrentAuctionPro";
import request from "@/utils/request";

const Home = () => {
  const fetchAuction = async () => {
    try {
      const response = await request({
        method: 'get',
        serverType: 'php',
        apiEndpoint: 'assets/AS00000001',
      });
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchAuction();

  return (
    <div>
      <Banner />
      <div className="m-12">
        <AuctionedProducts />
      </div>

      <div className="m-4">
        <UpcomingAuctions />
      </div>

      <div className="m-12">
        <CurrentAuctionPro />
      </div>

      <div className="mt-4">
        <SuccessAuctionedProducts />
      </div>
    </div>
  )
}

export default Home;


