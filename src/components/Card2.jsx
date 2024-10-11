
import watch from "../assets/img/img_v_1.jpg";
import CountUp from "react-countup";
const Card2 = () => {
  return (
    <div className="flex bg-white mt-[100px] w-[90%] gap-3 justify-center ml-[150px] font-roboto ">
      <div className="w-2/4px mr-12" data-aos="fade-up">
        <img src={watch} className="w-[506px] h-[532px]" alt="" />
      </div>
      <div className=" w-2/4 pl-4 pt-10 " data-aos="fade-up">
        <h4 className="">Why Us</h4>
        <h2 className=" mt-5  w-[410px] text-2xl  font-extrabold">
        Far far away Behind the Word Mountains
        </h2>
        <p className="mt-4 w-[410px] ">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
        </p>
        <p className="mt-4 w-[410px] ">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli.
        </p>
        <div className="flex flex-wrap justify-around  mt-10 pr-[200px]">
          <div className="text-3xl mr-5">
            <h1>
              {" "}
              <CountUp start={1} end={2508} duration={10} />
            </h1>
            <h2 className="mt-2 text-xl">codes</h2>
          </div>
          <div className="text-3xl mr-5">
            <h1>
              {" "}
              <CountUp start={0} end={1454} duration={10} />
            </h1>
            <h2 className="mt-2 text-xl">coffee</h2>
          </div>
          <div className="text-3xl mr-5">
            <h1>
              {" "}
              <CountUp start={0} end={1817} duration={10} />
            </h1>
            <h2 className=" text-xl mt-2">projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
