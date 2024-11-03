import { GoArrowRight } from "react-icons/go";
import img from "../assets/why-image.png";
const Section3 = () => {
  return (
    <>
      <div className="flex  mt-24 gap-14 ml-40 banner2">
        <img className="w-[370px] h-[309px]  " src={img} alt="" />
        <div className=" text-2xl text-[#502486] border-b-2 border-black w-[930px] h-[309px] pl-10 pt-16 banner2-cont">
          <h3>WHY XXXX</h3>
          <h2 className="mt-4 text-[#1A0076] font-bold text-3xl">
            We created XXXX to deliver you :
          </h2>
          <div className="text-2xl mt-5 font-bold text-[#5f2e9b] pl-5  ">
            <p>
              <GoArrowRight className="icons" /> Innovative Solutions for All
              Needs
            </p>
            <p>
              {" "}
              <GoArrowRight className="icons" /> Customer-Centric Approach
            </p>
            <p>
              {" "}
              <GoArrowRight className="icons" /> Strategic Problem Resolution
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
