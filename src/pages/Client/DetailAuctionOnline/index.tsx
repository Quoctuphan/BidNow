import { AutoComplete, ConfigProvider, Input } from "antd";

function DetailAuctionOnline() {
  const imgProduct = './src/assets/images/product1.jpg'
  const theme = {
    token: {
      colorPrimary: '#b41712'
    },
  }
  return (
    <>
      {/* link */}
      <div className="flex text-xl mx-2">
        <p>Home/</p>
        <p>Art </p>
        <p> &gt;Paintings</p>
      </div>

      {/* image */}
      <div className="flex justify-center">
        <div className="grid grid-rows-1 grid-cols-3 w-5/6 my-20 ">
          <div className="flex justify-center"><img className="w-[300px]" src={imgProduct} alt="imgProduct1" /></div>
          <div className="flex justify-center "><img className="w-[300px]" src={imgProduct} alt="imgProduct2" /></div>
          <div className="flex justify-center "><img className="w-[300px]" src={imgProduct} alt="imgProduct3" /></div>
        </div>
      </div>


      {/* Description */}
      <div className="grid grid-cols-3 my-4 border-t-[2px]">
        <div className="col-span-2 text-[#545454] space-y-3 py-3 mt-4 border-b-2 border-[#545454]">
          <div className="flex">
            <p className="font-medium">Starts on: Jul 06, 2024 9:00 PM GMT+7</p>
            <div className="mx-1">|</div>
            <p className="font-bold">Rock Hall, MD, United States</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-xl">Fine Jewelry, Decorative Arts & Coins</p>
            <p className="">Bayside Auctions</p>
            <div className="w-[600px]">
              <p className="text-lg font-normal">Bayside presents their July Fine Jewelry, Decorative Arts & Coins Auction. 390 unique lots with NO RESERVES! Showcasing an
                assortment of Fine Jewelry Pieces, Sterling Silver Sets, US Coin collections ranging from gold, colonial, 1800s & early 1900s era,
                Fine Art, Early Firefighter Items, Vintage Christmas, Musical Instruments & Pop Culture Collectibles, Decoys, Rugs, Antiques & More.
                Be sure to browse the catalog from start to finish as there are many different types of items found throughout.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-[#e5f4f8]  flex flex-col justify-center items-center px-4 py-4 ">
          <div className="flex-1 space-y-4 text-center">
            <p className=" text-slate-600 text-lg font-extralight">LIVE BIDDING STARTS IN:</p>
            <div className="space-x-1 text-2xl font-semibold"><span>5</span><span>:</span><span>04</span><span>:</span><span>40</span><span>:</span><span>14</span></div>
            <button className="bg-[#b41712] hover:bg-[#b45012df] px-2 py-1 rounded-md"><span className="text-lg text-white font-light">REGISTER FOR AUCTION</span></button>
          </div>

        </div>
      </div>

      {/* Search */}
      <div className="my-10">
        <div className="flex items-center space-x-4 mb-4" >
          <h2 className=" text-sm font-bold">SEARCH:</h2>
          <ConfigProvider
            theme={theme}
          >
            <AutoComplete
              popupMatchSelectWidth={252}
              style={{ width: 300 }}
            // size="large"
            >
              <Input.Search size="large" placeholder="search here" enterButton />
            </AutoComplete>`
          </ConfigProvider>
        </div>


        {/* Auction Details */}
        <div className="grid grid-cols-3 space-x-24 text-[#545454] mb-14 mx-4">
          <div className="col-span-1 space-y-3">
            <p className="font-bold text-xl">Auction Details</p>
            <div className="space-y-1">
              <p className="text-lg font-semibold">Bid Increments</p>
              <div className="flex border-b-2 border-[#e3e3e3] p-2  "><span className=" w-1/2">Price</span><span>Bid Increment</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$0</span><span>$0</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$500</span><span>$500</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$1500</span><span>$1500</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$2000</span><span>$2000</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$3000</span><span>$3000</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$4000</span><span>$4000</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$10000</span><span>$10000</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$20000</span><span>$20000</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$30000</span><span>$30000</span></div>
              <div className="flex border-b-2 border-[#e3e3e3] p-2 "><span className=" w-1/2">$40000</span><span>$40000</span></div>
            </div>

          </div>
          <div className="col-span-2 space-y-3 font-semibold ">
            <div>
              <p>Preview</p>
              <p>Monday - Friday 9am-4pm</p>
              <p>13310 Luthe Road</p>
              <p>Houston, TX 77039</p>
              <p>USA</p>
            </div>
            <div>
              <p>Buyer's Premium</p>
              <p>23%</p>
            </div>
            <div>
              <p>Autopay</p>
              <p>This auction uses Autopay by LiveAuctioneers. If you place a winning bid, your card will be charged shortly after the conclusion of the auction.</p>
            </div>
            <div>
              <p>Sales Tax </p>
              <p>Online purchases from Gallery Auctions may be subject to sales tax. Please see the following for more details. If you are tax-exempt, you can submit your tax-exempt certificate to prevent the collection of tax. Learn more about tax-exemption.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default DetailAuctionOnline;