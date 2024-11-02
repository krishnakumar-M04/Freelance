import laptop from "../assets/laptop-wooden-table.jpg";
import group from "../assets/group-people-working-out-business-plan-office.jpg";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Post = () => {
  const cont = [
    {
      image: group,
      title: "case studies",
      desc: "how we help the employees to take full benefits of their coverage",
    },
    {
      image: laptop,
      title: "case studies",
      desc: "how we help the employees reimagine their health benefits strategy ",
    },
  ];
  return (
    <>
      <div className="flex  md:flex flex-row justify-center gap-20 flex-wrap mt-28 mb-28">
        <div className="text-left mt-10">
          <h6 className="text-[18px] font-medium text-[#693ca0]">
            Featured post
          </h6>
          <h1 className="text-5xl pt-8 font-bold text-[#361263]">
            the latest from <br />
            better benefits
          </h1>
          <button className="block bg-[#6C33B5] w-32 h-12 rounded-3xl text-xl font-semibold text-white mt-8 p-2">
            view all
          </button>
          <button className="w-[60px] h-[60px] mt-10 ml-8 shadow-slate-500 shadow-md rounded-full text-4xl pl-3 bg-gray-100 ">
            <GoArrowLeft />{" "}
          </button>
          <button className="w-[60px] h-[60px] mt-10 ml-5 rounded-full  shadow-slate-500 shadow-md text-4xl pl-3 bg-gray-100">
            {" "}
            <GoArrowRight />
          </button>
        </div>
        <div className="flex  md:flex mt-10 flex-row gap-16 justify-center flex-wrap">
          {cont.map((content, index) => {
            return (
              <div key={index} className="">
                <img className="w-96" src={content.image} alt="" />
                <div className="mt-4 post ">
                  <p className="text-[#6b429c] ">{content.title}</p>
                  <h1 className="w-96 pt-3 text-xl text-[#361263] font-bold">
                    {content.desc}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
