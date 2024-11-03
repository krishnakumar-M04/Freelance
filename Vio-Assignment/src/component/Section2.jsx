import img1 from "../assets/Ballon.png";
import img2 from "../assets/jar.png";
import img3 from "../assets/rocket.png";
const Section2 = () => {
  const content = [
    {
      image: img1,
      title: "Integrated Protection Ecosystem",
      desc: " Comprehensive suite addressing diverse need for seamless secure Experience",
    },
    {
      image: img2,
      title: "Tailored solution for every aspect",
      desc: " Personalized plans for adapting to individual lifestyle and business requirement effectively",
    },
    {
      image: img3,
      title: "Global Assurances and Rapid Response",
      desc: " World-wide coverage, rapid assistance-XXXX commitment to global assistance",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap bg-[#D1D4FF] font-inter justify-center rounded-3xl w-[85%] ml-36 mt-20 z-10 banner1">
        {content.map((content, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap w-[30%] mt-6 mb-4  banner1-cont"
            >
              <img className="w-24 h-24 mt-10" src={content.image} alt="" />
              <div className="w-[60%] ml-4 mt-2">
                <h2 className="font-bold pt-4 text-[#502486] text-xl ">
                  {content.title}
                </h2>
                <p className="pt-3 font-medium">{content.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Section2;
