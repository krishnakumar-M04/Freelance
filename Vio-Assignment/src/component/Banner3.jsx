import { BsPersonBoundingBox } from "react-icons/bs";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GiStarKey } from "react-icons/gi";
import img from "../assets/banner3.png";
const Banner3 = () => {
  const cont = [
    {
      img: <BsPersonBoundingBox />,
      title: "Ecommerce",
    },
    {
      img: <HiOutlineSquares2X2 />,
      title: "Consumer durables",
    },
    {
      img: <BsPersonCheckFill />,
      title: "Logistics",
    },
    {
      img: <IoCalendarNumberOutline />,
      title: "Travel",
    },
    {
      img: <GiStarKey />,
      title: "Fintech",
    },
    {
      image: img,
      desc1:
        "Embark on a digital commerce revolution with FinuSmart. We infuse confidence into your online ventures, securing transactions, optimizing logistics, and ensuring unparalleled customer satisfaction.",
      desc2:
        "From cart to door, FinuSmart transforms challenges into opportunities, making your Ecommerce journey not just secure but extraordinary. Elevate your business with the FinuSmart touch and navigate the Ecommerce landscape with confidence and innovation.",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-0 mt-28 banner3">
        <div className="w-2/4 bg-[#EBE5FF] pt-16 pl-24 banner3-cont">
          <p className="text-xl  text-[#5f2e9b] pl-4">
            Revolutionzing Industries
          </p>
          <h1 className="text-4xl font-bold text-[#3e255c] pt-5 pb-5">
            XXXX touch in every realm
          </h1>
          {cont.map((content, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap items-center mt-10 text-3xl pl-10 "
              >
                <p className=" icon text-[#5f2e9b] ">{content.img} </p>
                <h1 className=" ml-5 text-[#412168]">{content.title}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-2/4  bg-[#714BFF] banner3-cont">
          {cont.slice(5).map((content, index) => {
            return (
              <div key={index}>
                <img
                  className="w-1/3  mx-auto pt-10"
                  src={content.image}
                  alt=""
                />
                <p className="text-xl text-white w-3/5 mx-auto pt-14">
                  {content.desc1}
                </p>
                <p className="text-xl w-3/5 text-white font-normal mx-auto pb-10 pt-10">
                  {content.desc2}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Banner3;
