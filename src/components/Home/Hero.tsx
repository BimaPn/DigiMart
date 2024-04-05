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
          className={`w-full aspect-[21/9] bg-[url('/images/hero/vr.jpg')] bg-no-repeat bg-cover bg-center flex items-center rounded-3xl px-16`}>
            <div className='w-[40%] flex flex-col gap-5 -mt-8'>
              <span className='text-5xl text-dark font-bold leading-[56px]'>This is Example of an Element in Hero Section</span>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum architecto totam velit fugit voluptatum animi?</span>
              <Button 
              as={Link}
              href='/'
              startContent={<FaCartShopping className='text-white text-lg' />}
              className='w-fit bg-dark text-white mt-2 font-medium'>
              <span className='-mb-[1px]'>Buy Now</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Hero
