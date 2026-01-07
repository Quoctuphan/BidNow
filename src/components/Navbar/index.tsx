
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
const dataNavbar= [
  {
    id: 1,
    name: "ART",
    children: [
      { name: "Paintings", link: "paintings" },
      { name: "Modern", link: "/art/modern" },
    ],
  },
  {
    id: 2,
    name: "JEWELRY",
    children: [
      { name: "Classic", link: "/jewelry/classic" },
      { name: "Modern", link: "/jewelry/modern" },
    ],
  },
  {
    id: 3,
    name: "ANTIQUE",
    children: [
      { name: "Classic", link: "/antique/classic" },
      { name: "Modern", link: "/antique/modern" },
    ],
  },
  {
    id: 4,
    name: "COLLECTIBLE ITEMS",
    children: [
      { name: "Classic", link: "/collectibles/classic" },
      { name: "Modern", link: "/collectibles/modern" },
    ],
  },
  {
    id: 5,
    name: "HOME & DECOR",
    children: [
      { name: "Classic", link: "/home-decor/classic" },
      { name: "Modern", link: "/home-decor/modern" },
    ],
  },
  {
    id: 6,
    name: "EXPLORE CATEGORIES",
    children: [
      { name: "Classic", link: "/categories/classic" },
      { name: "Modern", link: "/categories/modern" },
    ],
  },
];


// const handleOnClick = (strItem: string ): void => {
//      alert(`Dang mục này chưa có ${strItem}`)
// }

  return (
    <nav className="flex sm:flex-row flex-col py-2 justify-between space-x-2 md:space-x-5 mx-4 md:mx-[150px]">
      {
  dataNavbar?.map((item)=> (
<div key={item.id} id={String(item.id)} className="group w-full inline-block relative">
  <button className="flex items-center space-x-2 md:space-x-3 cursor-pointer">
    <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">{item.name}</p>

    <span className="block group-hover:hidden"><IoMdArrowDropdown /></span>
    <span className="hidden group-hover:block"><IoMdArrowDropup /></span>
  </button>

  <div className="absolute w-full left-0 top-full overflow-hidden hidden group-hover:block z-10 bg-[#B41712] rounded-[5px] text-white">
    <ul>
      {
        item.children.map((item)=>(
            <li className='py-1 w-full hover:bg-secondBg px-2'><Link to={item?.link}>{item?.name}</Link></li>
        ))
      }
    </ul>
  </div>
</div>       
        ))
      }
    
    </nav>
  );
}

export default UserNavbar;
