import img1 from "../assets/circle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner5 = () => {
  const cont = [
    {
      image: img1,
      title: "Amet minimnon",
      role: "Cofounder at max",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil veniam error, inventore eveniet, doloremque, cumque amet repellendus tempora odio nesciunt quidem officiis eos quasi necessitatibus accusamus. Libero, voluptatem suscipit.",
    },
    {
      image: img1,
      title: "Amet minimnon",
      role: "Cofounder at max",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. inventore eveniet, doloremque, cumque amet repellendus tempora odio nesciunt quidem officiis eos quasi necessitatibus accusamus. Libero, voluptatem suscipit.",
    },
  ];

  return (
    <>
      <div className="mx-auto  mt-20 bg-[#E8F9FE] md:p-28 ">
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {cont.map((content, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <div className="text-center md:text-left">
                  <img src={content.image} alt="" className="mx-auto" />
                  <h1 className="text-xl pt-5 font-bold">{content.title}</h1>
                  <p className="text-gray-500 pt-2">{content.role}</p>
                </div>
                <div className="max-w-xl rounded-3xl  bg-[#D4DCFE]">
                  <p className="text-2xl p-10">{content.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner5;
