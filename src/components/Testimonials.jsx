
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import john from "../assets/img/testimonials/testimonials-1.jpg";
import winston from "../assets/img/testimonials/testimonials-2.jpg";
import clare from "../assets/img/testimonials/testimonials-3.jpg";
import steven from "../assets/img/testimonials/testimonials-4.jpg";
const Testimonials = () => {
  return (
    <div className='mb-10'>
          <div className='mt-32 text-center mb-12  '>
              <h1 className='text-xl'>Plans</h1>
              <h1 className='text-2xl font-bold'>Testimonials</h1>
          </div>
          <Swiper
        pagination={{
                  dynamicBullets: true, 
        }}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination]}
        className="mySwiper text-center mt-20"
          >
          
              <SwiperSlide ><img src={john} alt="" className='w-[50px] h-[50px] ml-[735px] rounded-full ' />
                  <h1 className='pt-4 text-xl font-semibold'>John</h1>
              <p className='w-[600px] ml-[450px] mt-2'>“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                  </p>
              </SwiperSlide>
              <SwiperSlide><img src={winston} alt="" className='w-[50px] h-[50px] ml-[735px] rounded-full ' />
              <h1 className='pt-4 text-xl font-semibold'>Winston</h1>
              <p className='w-[600px] ml-[450px] mt-2'>“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                  </p></SwiperSlide>
              <SwiperSlide><img src={clare} alt="" className='w-[50px] h-[50px] ml-[735px] rounded-full ' />
              <h1 className='pt-4 text-xl font-semibold'>Clare</h1>
              <p className='w-[600px] ml-[450px] mt-2'>“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                  </p></SwiperSlide>
              <SwiperSlide className='mb-10'><img src={steven} alt="" className='w-[50px] h-[50px] ml-[735px] rounded-full ' />
              <h1 className='pt-4 text-xl font-semibold'>Steven</h1>
              <p className='w-[600px] ml-[450px] mt-2'>“There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”
                  </p></SwiperSlide>
               
      </Swiper>
          
    </div>
  )
}

export default Testimonials
