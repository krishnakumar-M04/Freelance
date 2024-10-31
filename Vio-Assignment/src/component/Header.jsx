import { HiChevronDown } from "react-icons/hi";
const Header = () => {
  return (
    <>
      <div className="text-white flex flex-wrap font-inter text-xl justify-around mt-8 pb-6 items-center font-semibold shadow-lg ">
        <img className="" src="https://placehold.co/200x50" alt="" />
        <div className="nav-bar text-[#502486]">
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
            className="bg-gradient-to-r from-[#7257FF] to-[#6ACCFA] w-52 h-12 rounded-full text-xl  "
          >
            Talk to an expert
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
