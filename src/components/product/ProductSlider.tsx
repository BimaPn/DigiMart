'use client'
import Slider from '@/components/Slider'
import { SwiperSlide } from 'swiper/react'
import ProductCard from './ProductCard'
import Link from 'next/link'
import breakPoint from '@/assets/breackPoint'

const ProductSlider = ({products,title}:{products:Product[],title:string}) => {
  return (
    <Slider sliderTitle={title} break_points={breakPoint.product} className='p-0 ss:px-5'>
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

export default ProductSlider
