'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const ProductImages = ({images}:{images:string[]}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
          return `<div class="${className} rounded-2xl overflow-hidden flexCenter"><img class="hidden sm:block w-[75%]" src="${images[index]}" alt="${images[index]}"/></div>`;
        },
        el : '.swiper-pagination',   
      };
  return (
    <div className='relative'>
        <Swiper
            modules={[Pagination]}
            pagination={pagination}
            slidesPerView={1}
            className='w-full rounded-none sm:rounded-2xl'
            loop
            >
            {images.map((item, index) => (
                <SwiperSlide  key={index} className='aspect-square sm:aspect-[4/3] bg-light'>
                    <Image src={item} alt={item} width={700} height={700} className='mx-auto w-full sm:w-[80%] h-auto'/>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='w-[15%] xs:w-[12%] sm:w-full swiper-pagination mt-6 grid grid-cols-4 md:grid-cols-5 gap-3 sm:gap-6 absolute bottom-4 left-0 right-0 mx-auto sm:static z-50'/>
    </div>
  )
}

export default ProductImages
