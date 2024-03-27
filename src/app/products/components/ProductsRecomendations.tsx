'use client'
import React from 'react'
import Slider from '@/components/Slider'
import { SwiperSlide } from 'swiper/react'
import breakPoint from '@/assets/breackPoint'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

const ProductsRecomendations = ({products}:{products:any[]}) => {
  return (
    <Slider sliderTitle={`You Might Also Like`} break_points={breakPoint.product} className='p-0 ss:px-5'>
    {products.map((item,index) => (
        <SwiperSlide key={index} className={`flexCenter flex-col ${index == 0 && '-ml-20'} ss:m-0`}>
            <Link href={`facebook`}>
                < ProductCard label={'Laptop Asus 2014 X Monster Anjay'} image={item.image} price={345} sold={21} />
            </Link> 
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default ProductsRecomendations