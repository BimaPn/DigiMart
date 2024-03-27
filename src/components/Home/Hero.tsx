'use client'
import BoxSection from '@/layouts/BoxSection'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SliderItem from '../SliderItem';
import 'swiper/css';
const Hero = () => {
    return(
      <section className='px-3 sm:px-6'>
        <Swiper
           spaceBetween={0}
           slidesPerView={1}
           className='max-w-[1440px] rounded-2xl'
           >
           {[1].map(item => 
           <SwiperSlide key={item} className='rounded-2xl overflow-hidden'>
            < SliderItem imgSrc={`/images/hero/vr.jpg`} />
           </SwiperSlide>
           )}
     
         </Swiper>
      </section>
    )
}


export default Hero