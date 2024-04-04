'use client'
import React from 'react'
import Slider from './Slider'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'
import breakPoint from '@/assets/breackPoint'

const CategorySlider = ({categories,title}:{categories:any[],title:string}) => {
  return (
    <Slider break_points={breakPoint.category} sliderTitle={'All Categories'} className='p-0 ss:px-5'>
    {categories.map((item,index) => (
        <SwiperSlide key={index} className={`flexCenter flex-col ${index == 0 && '-ml-24 ssm:-ml-32 xs:-ml-48'} ss:m-0`}>
            <Link href={`facebook.com`} className='group'>
              <div className='aspect-square rounded-full p-2 sm:p-4 md:p-6 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full aspect-square bg-light z-0 group-hover:scale-100 scale-0 transform-transition !duration-100'/>
                <div className='w-full aspect-square flexCenter absolute top-0 left-0 z-[1]'>
                  <Image src={item.image} width={800} height={800} className="w-[85%]" alt={item.name} />
                </div>
              </div>
                <h1 className='text-xs ss:text-base sm:text-lg md:text-xl text-center mt-4'>{item.name}</h1>  
            </Link>
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default CategorySlider




