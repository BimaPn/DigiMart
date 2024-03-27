'use client'
import React from 'react'
import Slider from './Slider'
import { SwiperSlide } from 'swiper/react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import breakPoint from '@/assets/breackPoint'

const ProductSlider = ({products,title}:{products:any[],title:string}) => {

  return (
    <Slider sliderTitle={title} break_points={breakPoint.product} className='p-0 ss:px-5'>
    {products.map((item,index) => (
        <SwiperSlide key={index} className={`flexCenter flex-col ${index == 0 && '-ml-20'} ss:m-0`}>
            <Link href={`/products/apaaja`}>
                < ProductCard label={'Laptop Asus 2014 X Monster Anjay'} image={item.image} price={345} sold={21} />
            </Link> 
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default ProductSlider