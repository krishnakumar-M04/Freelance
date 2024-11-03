import { Swiper, SwiperSlide } from "swiper/react";


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
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex flex-wrap justify-center  ml-20"
        >
          {cont.map((content, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="flex flex-col justify-center ml-0 mr-0 explore-cont ">
                  <img src={content.image} alt="" />
                  <div className="text-center">
                    <h1 className="text-xl text-[#361263] ml-1 font-bold">
                      {content.title}
                    </h1>
                    <p className="w-72 text-xl pt-4 text-left md:w-36 text-center ml-10">{content.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <style jsx>{`
               .swiper-button-next,
 .swiper-button-prev {
  color: #361263;
  font-size: 1px!important;
}
                `}</style>
    </>
  );
};

export default Explore;
