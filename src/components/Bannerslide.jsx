
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import img1 from "../assets/img/img_h_6.jpg";
import img2 from "../assets/img/img_h_7.jpg";
import img3 from "../assets/img/img_h_8.jpg";
import "../components/Header.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
const Bannerslide = () => {
 
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="flex bg-white mt-[180px] w-[90%] gap-3  justify-between ml-[150px] font-roboto ">
      <div className="w-2/4 text-left pt-20 " data-aos="fade-up">
        <h4 className="">Welcome</h4>
        <h2 className=" mt-5  w-[410px] text-3xl  font-extrabold">Excepteur sint occaecat cupidatat non proident</h2>
        <p className="mt-4 w-[410px] ">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <button className="mt-16 w-36 h-10 rounded-full bg-[rgb(52,191,73)] text-white">Get Started</button>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-2/4 mr-28 "  data-aos="fade-up"n
      >
        <SwiperSlide >
          <img className="w-[706px] h-[522px]"src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[706px] h-[522px]" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[706px] h-[522px]" src={img3} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end"  ref={progressCircle}>
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          {/* </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Bannerslide;
