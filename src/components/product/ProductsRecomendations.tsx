'use client'
import React from 'react'
import Slider from '@/components/Slider'
import { SwiperSlide } from 'swiper/react'
import breakPoint from '@/assets/breackPoint'
import ProductCard from '@/components/product/ProductCard'
import { useProduct } from '../providers/ProductProvider'

const ProductsRecomendations = () => {
  const { products } = useProduct()
  return (
    <Slider sliderTitle={`You Might Also Like`} break_points={breakPoint.product} className='p-0 ss:px-5'>
    {products.map((item,index) => (
        <SwiperSlide key={index} className={`flexCenter flex-col ${index == 0 && '-ml-20'} ss:m-0`}>
          <ProductCard 
          slug={item.slug}
          isFavorite={item.isFavorite}
          label={item.name}
          image={item.images[0]}
          price={item.price} 
          sold={item.sold} 
          />
        </SwiperSlide>
      ))}
    </Slider>
  )
}

export default ProductsRecomendations
