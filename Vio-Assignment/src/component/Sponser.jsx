import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/company-logo/10001.svg";
import img2 from "../assets/company-logo/10002.svg";
import img3 from "../assets/company-logo/10003.svg";
import img4 from "../assets/company-logo/10004.svg";
import img5 from "../assets/company-logo/10005.svg";
import img6 from "../assets/company-logo/10006.svg";
import img7 from "../assets/company-logo/10007.png";
const Sponser = () => {
  const cont = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
  ];
  return (
    <>
      <div className="text-center mt-20 mb-20  ">
        <h1 className="text-4xl font-bold text-[#361263]">Proudly backed by</h1>
        <p className="pt-5 text-xl">
          Our esteemed partners and longstanding relationships ensure emergency{" "}
          <br />
          services and duty of care wherever you may be
        </p>
      </div>
      <div className="ml-28 mr-28 mt-10 explore ">
        <Swiper
          //   spaceBetween={10}
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
              spaceBetween: 2,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 5,
            },
            "@2.00": {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex flex-wrap items-center  "
        >
          {cont.map((content, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="flex flex-wrap gap-0 justify-center mx-auto ml-10 mr-10 mt-5 hover:scale-110 ">
                  <img
                    className="bg-black p-5  rounded-3xl"
                    src={content.image}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Sponser;
