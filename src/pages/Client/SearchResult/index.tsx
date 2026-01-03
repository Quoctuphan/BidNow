import { Checkbox, Select } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";

const SortedOption = [
  { value: '1', label: 'New > Old' },
  { value: '2', label: 'Old > New' },
]

const exampleData = [
  {
    id: '1',
    productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores.',
    productImage: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    startingPrice: 140,
  },
  {
    id: '2',
    productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores.',
    productImage: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    startingPrice: 140,
  },
  {
    id: '3',
    productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores.',
    productImage: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    startingPrice: 140,
  },
  {
    id: '4',
    productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores.',
    productImage: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    startingPrice: 140,
  },
  {
    id: '5',
    productName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolores.',
    productImage: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    startingPrice: 140,
  },
]

const SearchResult: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="flex flex-col lg:mx-[100px] mx-[10px] my-[20px] space-y-10">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[24px] md:text-[30px] font-bold underline underline-offset-8 decoration-[#b41712]">Search</h1>
        <Select
          defaultValue="1"
          style={{ width: 120 }}
          onChange={handleChange}
          options={SortedOption}
        />
      </div>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/4 space-y-3">
          <Search placeholder="input search text" allowClear onSearch={onSearch} className="w-full h-[30px] md:h-[35px]" />
          <div className="flex flex-col xl:flex-row justify-between space-y-3 xl:space-y-0 ">
            <div>
              <p className="text-[14px] md:text-[18px] font-bold">From date</p>
              <input type='date' className="border-2 h-[30px] md:h-[35px] rounded-[5px]" />
            </div>
            <div>
              <p className="text-[14px] md:text-[18px] font-bold">To date</p>
              <input type='date' className="border-2 h-[30px] md:h-[35px] rounded-[5px]" />
            </div>
          </div>
          <hr className="bg-[grey] font-bold" />
          <button type="button" className="bg-[#b41712] py-1 md:py-2 px-4 md:px-5 rounded-[10px] text-white font-bold text-[14px] md:text-[18px]">Filter</button>
          <h1 className="text-[24px] md:text-[30px] text-center font-bold underline underline-offset-8 decoration-[#b41712]">Product status</h1>
          <div className="flex flex-col">
            <Checkbox className="text-[14px] md:text-[18px]">All</Checkbox>
            <Checkbox className="text-[14px] md:text-[18px]">Upcoming</Checkbox>
            <Checkbox className="text-[14px] md:text-[18px]">Ongoing</Checkbox>
            <Checkbox className="text-[14px] md:text-[18px]">Ended</Checkbox>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-flow-row auto-rows-max gap-10" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
            {exampleData.map((data) => (
              <div key={data.id} className="flex flex-col items-center p-1 border-2 rounded-[5px]">
                <img
                  src={data.productImage}
                  alt="product" className="w-[200px] h-[200px]" />
                <p className="text-[14px] md:text-[18px] font-bold text-justify">{data.productName}</p>
                <p className="text-[14px] md:text-[18px] font-bold text-center">{data.startingPrice}</p>
                <button type="button" className="bg-[#b41712] py-1 md:py-2 px-4 md:px-5 rounded-[10px] text-white text-[14px] md:text-[18px]" id={data.id}>Detail</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
