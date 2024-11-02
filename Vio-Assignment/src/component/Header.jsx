import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <div >
      <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img
            src="https://placehold.co/200*50"
            alt=""
            className="w-52 h-12 hover:scale-105 transition-all"
          />
        </a>

        <ul className="hidden xl:flex items-center text-[#361263]  gap-8 font-semibold text-base">
          <li className="p-3 cursor-pointer">
            <a href="">  industries <HiChevronDown className="icons" /></a>
         
          </li>
          <li className="p-3 cursor-pointer">
            <a href="">  solution <HiChevronDown className="icons" /></a>
          
          </li>
          <li className="p-3 cursor-pointer">
          <a href=""> partners <HiChevronDown className="icons" /></a>
           
          </li>
          <li className="p-3 cursor-pointer">
          <a href="">  about us</a>
          
          </li>
          <li className="p-3 cursor-pointer">
          <a href="">contact</a>
            
          </li>
       
        </ul>
        <div >
        
          <button
            type="submit"

            className=" talk fixed  hidden md:flex items-center  gap-3 w-44 py-2 pl-6 top-6 right-14 rounded-full  bg-blue-500 text-xl"
          >Talk to expert</button>
        </div>
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        <div
          className={`absolute text-[#361263]  xl:hidden top-24 left-0 w-full bg-[rgba(0,0,0,0.3)] flex flex-col items-center gap-6 font-bold text-xl transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-1 pt-4 hover: transition-all cursor-pointer">Industries <HiChevronDown className="icons" /></li>
          <li className="list-none w-full text-center p-1 hover: transition-all cursor-pointer">solution <HiChevronDown className="icons" /></li>
          <li className="list-none w-full text-center p-1 hover: transition-all cursor-pointer">partners <HiChevronDown className="icons" /></li>
          <li className="list-none w-full text-center p-1 hover: transition-all cursor-pointer">about</li>
          <li className="list-none w-full text-center p-1 pb-10 hover: transition-all cursor-pointer">Contact</li>
        </div>
      </header>
    </div>
  );
};

export default Header;
