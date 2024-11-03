import img1 from "../assets/firstBanner-img.png";
import img2 from "../assets/fristBanner-svg.png";
const Section1 = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center font-inter banner ">
        <div className="w-[50%] items-center mt-16 banner-cont">
          <p className=" text-xl text-[#9c84b8]">
            YOUR JOURNEY , OUR EXPERTISE
          </p>
          <h1 className="mt-10 text-[60px] w-[90%] font-bold text-[#361263]">
            Crafting success with <span className="text-[#714BFF]"> XXXX</span>{" "}
            Solutions
          </h1>
          <p className=" mt-10 text-xl w-[80%] para">
            Elevating your lifestyle with comprehensive protection for digital
            assets and reliable assistance services. Partner with us for peace
            of mind and well-being on your journey.
          </p>
          <button
            type="submit"
            className="mt-10 bg-[#6C33B5] w-44 h-12 rounded-full text-xl text-white font-semibold  "
          >
            Reach us
          </button>
        </div>
        <img className="w-[32%] mt-10 " src={img1} alt="" />
        <img className="absolute right-0 w-[30%] svg" src={img2} alt="" />
      </div>
    </>
  );
};

export default Section1;
