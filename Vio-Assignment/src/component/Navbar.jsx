import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  return (
    <div>
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
            <a href="">
              {" "}
              industries <HiChevronDown className="icons" />
            </a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="">
              {" "}
              solution <HiChevronDown className="icons" />
            </a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="">
              {" "}
              partners <HiChevronDown className="icons" />
            </a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href=""> about us</a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="">contact</a>
          </li>
        </ul>
        <div className=" ">
          <button
            type="submit"
            className=" talk text-white fixed top-6 right-14   hidden md:flex items-center  gap-3 w-44 py-2 pl-6   rounded-full  bg-blue-500 text-xl "
          >
            Talk to expert
          </button>
        </div>
        <i
          className="bx bx-menu xl:hidden block text-5xl cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>

        <div
          className={`absolute text-[#fff]  xl:hidden top-24 left-0 w-full bg-[rgba(0,0,0,0.8)] flex flex-col items-center gap-6 font-bold text-xl transform transition-transform ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4  hover:bg-[#3294d5] hover:text-white transition-all cursor-pointer">
            Industries <HiChevronDown className="icons" />
          </li>
          <li className="list-none w-full text-center p-1   hover:bg-[#3294d5] h-[100%] hover:text-white transition-all cursor-pointer">
            solution <HiChevronDown className="icons" />
          </li>
          <li className="list-none w-full text-center p-1  hover:bg-[#3294d5] hover:text-white transition-all cursor-pointer">
            partners <HiChevronDown className="icons" />
          </li>
          <li className="list-none w-full text-center p-1 hover:bg-[#3294d5] hover:text-white transition-all cursor-pointer">
            about
          </li>
          <li className="list-none w-full text-center p-1 mb-4 hover:bg-[#3294d5]   hover:text-white transition-all cursor-pointer">
            Contact
          </li>
          <button
            type="submit"
            className=" talk text-white mb-10  md:flex items-center  gap-3 w-44 py-2 pl-6   rounded-full  bg-blue-500 text-xl md:hidden "
          >
            Talk to expert
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
