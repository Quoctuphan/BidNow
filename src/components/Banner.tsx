import { Link } from "react-router-dom";

function Banner() {
  const banner = '../src/assets/images/banner.png';
  const contact = '../src/assets/images/contact.png';
  return (
    <div className="mx-14">
      <div className="relative ">
        <img src={banner} alt="Banner" />
        <div className="absolute right-0 bottom-0">
          <Link to={""}><img src={contact} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;