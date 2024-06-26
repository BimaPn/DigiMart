import BoxSection from '@/layouts/BoxSection'
import SliderItem from '../SliderItem'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { FaCartShopping } from "react-icons/fa6"
import Link from "next/link"

const Hero = () => {
    return(
      <section className='px-3 sm:px-6'>
        <div className='max-w-[1440px] flex gap-4 mx-auto'>
          <div 
          className={`w-full aspect-[3/4] xs:aspect-[16/9] md:aspect-[21/9]
          bg-[url('/images/hero/mobile.jpg')] xs:bg-[url('/images/hero/wide.jpg')] md:bg-[url('/images/hero/ultra-wide.jpg')]
          bg-no-repeat bg-cover bg-center
          flex xs:items-center rounded-3xl py-[18%] xs:py-0 px-4 sm:px-6 md:px-16`}>
            <div className='w-[90%] xs:w-1/2 md:w-[50%] flex flex-col gap-3 xs:gap-2 ss:gap-4 -mt-8'>
              <span
              className='text-[32px] xs:text-3xl sm:text-4xl md:text-5xl text-dark font-bold leading-tight xs:!leading-tight sm:!leading-[50px] md:!leading-[58px]'
              >Transform Your World With Virtual Reality</span>
              <span className='text-sm sm:text-base -mt-[4px] xs:-mt-[6px]'>Explore our VR collection and make your purchase today to unlock new worlds of excitement.</span>
              <Button 
              as={Link}
              href='/categories/vr'
              startContent={<FaCartShopping className='text-white text-lg' />}
              className='w-fit bg-dark text-white mt-3 font-medium sm:flex hidden'>
              <span className='-mb-[1px]'>Buy Now</span>
              </Button>
              <Button 
              as={Link}
              href='/categories/vr'
              size='sm'
              startContent={<FaCartShopping className='text-white text-lg' />}
              className='w-fit bg-dark text-white mt-1 font-medium sm:hidden flex'>
              <span className='-mb-[1px]'>Buy Now</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Hero
