import { Link } from "react-router-dom";
import bannerImage from "@/assets/images/banner.png"
import contactImage from "@/assets/images/contact.png"

function Banner() {
  return (
    <div className="mx-14">
      <div className="relative ">
        <img src={bannerImage} alt="Banner" />
        <div className="absolute right-0 bottom-0">
          <Link to={""}><img src={contactImage} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;