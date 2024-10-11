import { Swiper, SwiperSlide } from "swiper/react";
import patrik from "../assets/img/team/team-1.jpg";
import Clarke from "../assets/img/team/team-2.jpg";
import Tony from "../assets/img/team/team-3.jpg";
import maria from "../assets/img/team/team-4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const RunningSlide = () => {
  const content = [
    {
      name: "Patrik White",
      image: patrik,
      title: "CEO, Founder, Atty",
      description:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      button: "Learn more",
    },
    {
      name: "Clarke Smith",
      image: Clarke,
      title: "CTO, Founder, Atty",
      description:
        "Far far away, behind word mountains, far from  countries Vokalia and Consonantia, live the blind texts.",
      button: "Discover",
    },
    {
      name: "Tony Stark",
      image: Tony,
      title: "CFO, Founder, Atty",
      description:
        "Even the all-powerful Pointing has no control about  the blind texts  and now it is an almost unorthographic life. ",
      button: "Join us",
    },
    {
      name: "Maria Garcia",
      image: maria,
      title: "COO, Founder, Atty",
      description:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      button: "Learn more",
    },
  ];

  return (
      <div className="bg-gray-100">
          <h1 className="pt-20 text-2xl font-bold pb-20 text-center">OUR Founders</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper text-center ml-48  "
      >
        {content.map((val, index) => (
          <SwiperSlide key={index} className="ml-2 ">
            <img
              src={val.image}
              alt={val.name}
              className="w-[250px] h-[300px]"
            />
            <h2 className="text-2xl font-semibold mt-4">{val.name}</h2>
            <p className="text-gray-600 text-sm">{val.title}</p>
            <p className="text-gray-700 text-base mt-2">{val.description}</p>
            <button className="w-20 h-8 bg-gray-500 text-white rounded-full mt-4">
              {val.button}
            </button>
            </SwiperSlide>
            
        ))}
      </Swiper>
    </div>
  );
};

export default RunningSlide;
