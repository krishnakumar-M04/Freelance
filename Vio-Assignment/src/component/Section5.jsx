import { GoArrowRight } from "react-icons/go";
import img1 from "../assets/curve1.png";
import img2 from "../assets/click.png";

const Section5 = () => {
  return (
    <>
      <div className="relative mt-28  bg-[#714BFF] p-4 flex flex-wrap justify-center items-start text-white ml-2 mr-0 md:p-8">
        <img
          src={img1}
          alt=""
          className="absolute bottom-6 top-3 left-0 w-[350px] h-[600px]"
        />

        <div className="relative z-10 mt-36 ml-12 mb-10 ">
          <h1 className="text-5xl font-bold">
            Unlock Seamless Travel with <br /> XXXX
          </h1>

          <div className="mt-5 space-y-3 text-2xl">
            <h4 className="flex items-center ">
              <GoArrowRight className="icons mr-2" /> Global Assistance, Local
              Expertise
            </h4>
            <h4 className="flex items-center">
              <GoArrowRight className="icons mr-2" /> Emergency Response
              Excellence
            </h4>
            <h4 className="flex items-center">
              <GoArrowRight className="icons mr-2" /> Tailored Travel Protection
              Plans
            </h4>
          </div>

          <p className="mt-6 text-xl">
            Experience a new level of travel confidence with FinuSmart’s <br />
            dedicated solutions.
          </p>

          <button
            type="submit"
            className="mt-6 px-6 py-2 text-xl bg-white text-[#2b2054] rounded-full font-semibold transition hover:bg-gray-200"
          >
            Learn more
          </button>
        </div>
        <div className="mt-10">
          <img className=" ml-8" src={img2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section5;
