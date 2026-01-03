import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const UserNavbar = () => {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <nav className="flex sm:flex-row flex-col justify-between space-x-2 md:space-x-5 mx-4 md:mx-[150px]">
      <div className="group inline-block">
        <button
          className="flex flex-row justify-center items-center space-x-2 md:space-x-3 cursor-pointer"
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">ART</p>
          {isHovered === 1 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <div className="hidden group-hover:block bg-[#B41712] rounded-[5px] text-white p-2">
          <ul>
            <li>Cổ điển</li>
            <li>Hiện đại</li>
          </ul>
        </div>
      </div>
      <div className="group inline-block">
        <button
          className="flex flex-row justify-center items-center space-x-2 md:space-x-3 cursor-pointer"
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">JEWELRY</p>
          {isHovered ===2 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <div className="hidden group-hover:block bg-[#B41712] rounded-[5px] text-white p-2">
          <ul>
            <li>Cổ điển</li>
            <li>Hiện đại</li>
          </ul>
        </div>
      </div>
      <div className="group inline-block">
        <button
          className="flex flex-row justify-center items-center space-x-2 md:space-x-3 cursor-pointer"
          onMouseEnter={() => setIsHovered(3)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">ANTIQUE</p>
          {isHovered === 3 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <div className="hidden group-hover:block bg-[#B41712] rounded-[5px] text-white p-2">
          <ul>
            <li>Cổ điển</li>
            <li>Hiện đại</li>
          </ul>
        </div>
      </div>
      <div className="group inline-block">
        <button
          className="flex flex-row justify-center items-center space-x-2 md:space-x-3 cursor-pointer"
          onMouseEnter={() => setIsHovered(4)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">COLLECTIBLE ITEMS</p>
          {isHovered === 4 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <div className="hidden group-hover:block bg-[#B41712] rounded-[5px] text-white p-2">
          <ul>
            <li>Cổ điển</li>
            <li>Hiện đại</li>
          </ul>
        </div>
      </div>
      <div className="group inline-block">
        <button
          className="flex flex-row justify-center items-center space-x-2 md:space-x-3 cursor-pointer"
          onMouseEnter={() => setIsHovered(5)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">HOME & DECOR</p>
          {isHovered === 0 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <div className="hidden group-hover:block bg-[#B41712] rounded-[5px] text-white p-2">
          <ul>
            <li>Cổ điển</li>
            <li>Hiện đại</li>
          </ul>
        </div>
      </div>
      <div className="group inline-block">
        <button
          className="flex flex-row justify-center items-center space-x-2 md:space-x-3 cursor-pointer"
          onMouseEnter={() => setIsHovered(6)}
          onMouseLeave={() => setIsHovered(0)}
        >
          <p className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">EXPLORE CATEGORIES</p>
          {isHovered === 6 ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </button>
        <div className="hidden group-hover:block bg-[#B41712] rounded-[5px] text-white p-2">
          <ul>
            <li>Cổ điển</li>
            <li>Hiện đại</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
