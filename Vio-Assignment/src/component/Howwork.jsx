import img1 from "../assets/women.png";
import { useState } from "react";
const Howwork = () => {
  const [bgcolor, setcolour] = useState([
    "#B5B8F2",
    "#EBE5FF",
    "#EBE5FF",
    "#EBE5FF",
  ]);
  const hoverEffect = (index) => {
    const newColors = bgcolor.map((bgColor, i) =>
      i === index ? "#B5B8F2" : "#EBE5FF"
    );
    setcolour(newColors);
  };
  return (
    <>
      <div className="text-center mt-20 mb-10  ">
        <h1 className="text-4xl font-bold text-[#361263]">How it works</h1>
        <h4 className="pt-5 text-2xl text-[#603791]">
          Simplifying the XXXX experience
        </h4>
      </div>
      <div className="flex justify-center gap-20 work">
        <div className=" mt-20 ml-20 img">
          <img className=" bg-[#EBE5FF]" src={img1} alt="" />
        </div>
        <div className="w-[50%]  work-cont">
          <div
            className="w-[80%]   bg-[#EBE5FF]  rounded-3xl  "
            style={{ background: bgcolor[0] }}
            onClick={() => hoverEffect(0)}
          >
            <h1 className=" text-2xl  text-[#8159b7] pt-12 pb-12 hover:text-[#3b166b] hover:font-medium  ">
              <span className=" ml-8 pl-10 pr-5 text-5xl">01</span> speak to
              expert
            </h1>
          </div>
          <div
            className="w-[80%] h-[140px] mt-10 bg-[#EBE5FF]  rounded-3xl    "
            style={{ background: bgcolor[1] }}
            onClick={() => hoverEffect(1)}
          >
            <h1 className=" text-2xl  text-[#8159b7] pt-12 pb-12 hover:text-[#3b166b]  hover:font-medium">
              <span className=" ml-8 pl-10 pr-5 text-5xl">02</span> Understand
              the problem
            </h1>
          </div>
          <div
            className="w-[80%] h-[140px] mt-10  bg-[#EBE5FF]  rounded-3xl "
            style={{ background: bgcolor[2] }}
            onClick={() => hoverEffect(2)}
          >
            <h1 className=" text-2xl  text-[#8159b7] pt-12 pb-12 hover:text-[#3b166b]  hover:font-medium">
              <span className=" ml-8 pl-10 pr-5 text-5xl">03</span> Tailor made
              solution
            </h1>
          </div>
          <div
            className="w-[80%] h-[140px] mt-10  bg-[#EBE5FF]  rounded-3xl "
            style={{ background: bgcolor[3] }}
            onClick={() => hoverEffect(3)}
          >
            <h1 className=" text-2xl  text-[#8159b7] pt-12 pb-12 hover:text-[#3b166b]  hover:font-medium">
              <span className=" ml-8 pl-10 pr-5 text-5xl">04</span> Continuous
              monitoring and Enhancement{" "}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Howwork;
