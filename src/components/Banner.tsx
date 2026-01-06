import bannerImage from "@/assets/images/banner.png"

function Banner() {
  return (
    <div className="mx-14">
      <div className="relative ">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;