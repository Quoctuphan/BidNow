import { Button } from "antd";
import { FaUserLock } from "react-icons/fa6";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiFireFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function ProductDetail() {
    const flower = "./../src/assets/images/flower.png";
    return (
        <div>
            <div className="flex items-center m-5">
                <IoMdArrowDropleft />
                <h2> Home / Art  </h2>
                <IoMdArrowDropright />
                <h2>Paintings</h2>
            </div>

            <div className="font-sans bg-white">
                <div className="p-2 max-w-screen-xl mx-auto flex gap-16">
                    <div className="col-1/2 flex justify-between">
                        <div className="col-1/2 inline-block">
                            <div className="border m-2">
                                <img src={flower} alt="" className="w-auto h-32 p-2" />
                            </div>
                            <div className="border m-2">
                                <img src={flower} alt="" className="w-auto h-32 p-2" />
                            </div>
                            <div className="border m-2">
                                <img src={flower} alt="" className="w-auto h-32 p-2" />
                            </div>
                        </div>
                        <div className="col-1/2 border m-2">
                            <img src={flower} alt="" className="h-auto w-96 p-2" />
                        </div>
                    </div>

                    <div className="col-1/2 w-2/4">
                        <p className="mb-2" style={{ fontSize: 32 }}>European School, Floral Still Life</p>
                        <div className="flex justify-between">
                            <p className="text-xl">Estimate $50-$100</p>
                            <p className="text-xl">Jul 02, 2024 11:00 PM GMT+7</p>
                        </div>
                        <div className="border rounded-md bg-rose-50 mt-5">
                            <div className="p-3 flex items-center text-base justify-between">
                                <p>Current Price (1 bid)</p>
                                <div className="flex items-center gap-2">
                                    <p>SECURE</p>
                                    <FaUserLock />
                                </div>
                            </div>
                            <div className="p-3 text-xl">
                                <p><b>$30</b></p>
                            </div>
                            <div className="p-3">
                                <Button className="text-white bg-mainBgColor w-full">PLACE BID</Button>
                            </div>
                            <div className="flex items-center p-3">
                                <RiFireFill className="text-mainBgColor w-5 h-8" />
                                <p>41 bidders are watching this item.</p>
                            </div>
                        </div>
                        <div className="flex p-3 gap-2">
                            <p>Get approved to bid.</p>
                            <Link to={""} className="text-blue-500">Register for Auction</Link>
                        </div>
                        <hr className="border-1 border-gray-500 rounded-lg" />
                        <div className="flex items-center gap-2 p-2">
                            <MdOutlineLocalShipping className="text-mainBgColor w-8 h-6" />
                            <p className="text-base">See Policy for Shipping</p>
                        </div>
                    </div>
                </div>
                <center>
                    <br />
                    <hr className="border-1 border-gray-500 rounded-lg w-5/6" />
                </center>

                <div className="mt-5 p-2 max-w-screen-xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-600 mb-4">Item Details</h3>
                    <h4 className="text-xl font-bold text-gray-600">Description</h4>
                    <p>European, 19th century oil on canvas depicting a floral still life of red, white, blue and yellow flowers, signed "MB" l.r., 25 1/2" x 21 1/4" canvas, 31" x 26 1/2" framed.</p>
                    <h4 className="text-xl font-bold text-gray-600">Condition</h4>
                    <p>Heavy wear, losses, later painting, and puncture to the lower right.</p>
                    <h4 className="text-xl font-bold text-gray-600">Buyer's Premium</h4>
                    <p>25%</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;