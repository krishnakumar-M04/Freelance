import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { GiAlarmClock } from "react-icons/gi";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbDeviceTvOld } from "react-icons/tb";
import { Autoplay } from 'swiper/modules';
import chair from "../assets/img/img_h_4.jpg";
import steps from "../assets/img/img_h_3.jpg";
import lamp from "../assets/img/img_h_2.jpg";
import crossStep from "../assets/img/img_h_1.jpg";

const Blogsec2 = () => {
  
  return (
      <div className='flex mt-28 justify-around ml-14'>
          <div className='pl-14  '>
              <div className='flex bg-slate-200 w-[500px] rounded-xl cursor-pointer hover:bg-white '>
                  <div className='pt-6 pl-8'>
                      <GiAlarmClock style={{ color: "green",fontSize: '45px' }} />
                  </div>
                  <div className='w-[300px] m-4 ml-10  hover:text-green-900'>
                  <h1>Modern and clean design</h1>
                  <p>Far far away, beyond the word Mountains, far from the countries.</p>
                  </div>
                 
              </div> 
              <div className='flex mt-5 bg-slate-200 w-[500px] rounded-xl cursor-pointer hover:bg-white'>
                  <div className='pt-6 pl-8'>
                      <IoBagCheckOutline style={{ color: "green",fontSize: '45px' }} />
                  </div>
                  <div className='w-[300px] m-4 ml-10  hover:text-green-900'>
                  <h1>Modern and clean design</h1>
                  <p>Far far away, beyond the word Mountains, far from the countries.</p>
                  </div>
                 
              </div> 
              <div className='flex mt-5 bg-slate-200 w-[500px] rounded-xl cursor-pointer hover:bg-white'>
                  <div className='pt-6 pl-8'>
                      <MdOutlineMailOutline  style={{ color: "green",fontSize: '45px' }} />
                  </div>
                  <div className='w-[300px] m-4 ml-10  hover:text-green-900'>
                  <h1>Modern and clean design</h1>
                  <p>Far far away, beyond the word Mountains, far from the countries.</p>
                  </div>
                 
              </div> 
              <div className='flex mt-5 bg-slate-200 w-[500px] rounded-xl cursor-pointer hover:bg-white'>
                  <div className='pt-6 pl-8'>
                      <TbDeviceTvOld style={{ color: "green",fontSize: '45px' }} />
                  </div>
                  <div className='w-[300px] m-4 ml-10 hover:text-green-900'>
                  <h1>Modern and clean design</h1>
                  <p>Far far away, beyond the word Mountains, far from the countries.</p>
                  </div>
                 
              </div> 
          </div>
          <Swiper
              autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}  modules={[ Autoplay]} className="mySwiper w-[700px] h-[600px]">
        <SwiperSlide>< img className='h-[600px]' src={chair} alt="" /></SwiperSlide>
              <SwiperSlide><img  className='h-[600px]' src={lamp} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='h-[600px]' src={crossStep} alt="" /></SwiperSlide>
        <SwiperSlide><img  className='h-[600px]' src={steps} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Blogsec2
