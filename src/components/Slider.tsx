'use client'
import { useState } from 'react';
import {useRef} from 'react'
import { Swiper} from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper/types';
import 'swiper/css';
import {IoIosArrowBack} from 'react-icons/io'
import BoxSection from '@/layouts/BoxSection'

type SliderT = {
    children : any[],
    sliderTitle ?: string,
    break_points:any,
    className ?: string
}

const Slider = ({children,sliderTitle = 'slider',break_points,className}:SliderT) => {
    const swiperRef = useRef<SwiperCore>();  
    const [disableBtn,setDisableBtn] = useState<string>('prev')
  return (
    <>
    <BoxSection>
      <div className='flex justify-between items-center mb-6 sm:mb-10'>
        <h1 className={`text-[17px] xs:text-xl sm:text-2xl font-bold text-dark text-center`}>{sliderTitle}</h1>

        {/* < CustomNavigation /> */}
        <div className='hidden sm:flex gap-2 text-lg'>
          <Button 
          className={`${disableBtn == 'prev' ? 'text-netral' : 'text-dark'}`}
          onClick={() => swiperRef.current?.slidePrev()}>
            < IoIosArrowBack/>
          </Button>
          <Button 
          className={`${disableBtn == 'next' ? 'text-netral' : 'text-dark'}`}
          onClick={() => swiperRef.current?.slideNext()}>
            < IoIosArrowBack className='rotate-180' />
          </Button>
        </div>

      </div>
    </BoxSection>

    <div className={className}>
      <Swiper
        slidesPerGroup={2}
        breakpoints={break_points}
        spaceBetween={1}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onActiveIndexChange={(e) => {
          if(e.isBeginning) setDisableBtn('prev')
          else if(e.isEnd) setDisableBtn('next')
          else setDisableBtn('none')
        }}
        className='max-w-[1440px] pl-6'
      >
      {children}
      </Swiper>
    </div>
    </>
  )
}

const Button = ({className,children,onClick}:{className?:string,children:React.ReactNode,onClick?: () => void}) => {
  return (
    <button
    className={`w-8 aspect-square flexCenter rounded-full bg-light ${className}`}
    onClick={onClick}
    type='button'
    >
      {children}
    </button>
  )
}
export default Slider