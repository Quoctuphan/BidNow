import { CiSearch } from "react-icons/ci";
function Search() {
    return ( 
        <div className="flex w-[500px] h-[35px] border focus-within:border-blue-500 rounded-full bg-[#f5f6fa]">
             <button className="w-[30px] mx-2 px-3 rounded-t-full">
                <CiSearch/>
            </button>
            <input type="text" 
                placeholder="Search"
                className="border outline-none w-full h-100% rounded-br-full rounded-tr-full bg-[#f5f6fa]"
             />
             
        </div>
     );
}

export default Search;