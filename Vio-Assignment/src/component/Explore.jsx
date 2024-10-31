import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/Doctor.png";
import img2 from "../assets/yoga.png";
import img3 from "../assets/mobile.png";
import img4 from "../assets/heart.png";

const Explore = () => {
  const cont = [
    {
      image: img1,
      title: "Assitance",
      desc: "Guiding you through life uncertains with helpfull hand",
    },
    {
      image: img2,
      title: "Protection & Warranties",
      desc: "Safegaurd your digital price in an ever evolving cyber landscape",
    },
    {
      image: img3,
      title: "Digital Theft",
      desc: "Securing your investments , protect the peace of mind",
    },
    {
      image: img4,
      title: "health",
      desc: "Nuturing Your well beign once policy at a time ",
    },
  ];
  return (
    <>
      <div className="text-center mt-20 mb-10  ">
        <h1 className="text-4xl font-bold text-[#361263]">
          Explore Our Solution
        </h1>
        <p className="pt-5 text-xl">
          We provide the widest range of assistance and, bespoke solutions to
          our <br />
          individual customers and corporate clients across the world
        </p>
      </div>
      <div className="ml-28 mr-28 explore">
        <Swiper
          // spaceBetween={10}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            //   disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          //       }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex flex-wrap justify- "
        >
          {cont.map((content, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="flex flex-wrap gap-0 justify-center ml-0">
                  <img src={content.image} alt="" />
                  <div className="text-center">
                    <h1 className="text-2xl text-[#361263] font-bold">
                      {content.title}
                    </h1>
                    <p className="w-72 text-xl pt-4">{content.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <style jsx>{`
               
                `}</style> */}
    </>
  );
};

export default Explore;
