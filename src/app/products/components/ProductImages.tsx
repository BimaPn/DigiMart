'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

type ImagesT = {
    image : string,
    id : number
}

const ProductImages = ({images}:{images:ImagesT[]}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
          return `<div class="${className} rounded-2xl overflow-hidden flexCenter"><img class="hidden sm:block w-[75%]" src="${images[index].image}" alt="${images[index].image}"/></div>`;
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
            {images.map(item => (
                <SwiperSlide  key={item.id} className='aspect-square sm:aspect-[4/3] bg-light'>
                    <img src={item.image} alt={item.image} className='mx-auto w-full sm:w-[80%]'/>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='w-[15%] xs:w-[12%] sm:w-full swiper-pagination mt-6 grid grid-cols-4 md:grid-cols-5 gap-3 sm:gap-6 absolute bottom-4 left-0 right-0 mx-auto sm:static z-50'/>
    </div>
  )
}

export default ProductImages
