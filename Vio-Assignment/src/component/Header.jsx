import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { IoHome } from "react-icons/io5";
const Header = () => {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  const toggleNavbar = () => {
    setIsMenuOpen(!ismenuOpen);
  }
    return (
      <>
        <nav>
        <div className="text-white flex flex-wrap  font-inter text-xl justify-around mt-8 pb-6 items-center font-semibold shadow-lg ">
        <div className="toggle md:hidden" onClick={toggleNavbar}>
            <p className="text-5xl cursor-pointer text-[#361263]"><IoHome/></p>
          </div>
        <img className=" ml-52 md:ml-0" src="https://placehold.co/200x50" alt="" />
        
        <div className="nav-bar hidden text-[#502486] mt-10  md:me-14 md:mt-4 md:flex ">
    
          <ul>
            <li>
              <a href="">
                Industries
                <HiChevronDown className="icons" />
              </a>
            </li>
            <li>
              <a href="">
                solution
                <HiChevronDown className="icons" />
              </a>
            </li>
            <li>
              <a href="">
                partner
                <HiChevronDown className="icons" />
              </a>
            </li>
            <li>
              <a href="">about</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
          </ul>
          
          </div>
       
          <div>
         
          <button
            type="submit"
            className=" md:fixed md:top-[50px] md:right-16 md:z-50 md:bg-gradient-to-r from-[#7257FF] to-[#6ACCFA] md:w-52 md:h-12 md:rounded-full md:text-xl  "
          >
            Talk to an expert
          </button>
          </div>
         
          </div>
          {
            ismenuOpen ? (
              <>
                <div className="nav-bar block text-[#502486] mt-10  md:hidden ">

                <ul className="mobileNav text-xl ml-10 font-bold">
                  <li>
                    <a href="">
                      Industries
                      <HiChevronDown className="icons" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      solution
                      <HiChevronDown className="icons" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      partner
                      <HiChevronDown className="icons" />
                    </a>
                  </li>
                  <li>
                    <a href="">about</a>
                  </li>
                  <li>
                    <a href="">contact</a>
                  </li>
                </ul>

              </div>
                <div>

                  <button
                    type="submit"
                    className=" fixed top-[100px] right-6 z-50 bg-gradient-to-r from-[#7257FF] to-[#6ACCFA] w-52 h-12 rounded-full text-xl  "
                  >
                    Talk to an expert
                  </button>
                </div></>
             
            ):null
          }
          </nav>
    </>
  );
};

export default Header;
