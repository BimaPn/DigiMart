import BoxSection from '@/layouts/BoxSection'
import Link from 'next/link'
import Image from 'next/image'
import ads from '@/assets/advertisement'
import { Button } from '@nextui-org/react'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const Advertisement = () => {
  return (
    <BoxSection className={`py-2 rounded-2xl`} parentClass={`my-12 sm:my-20 md:my-28`}>
        <div className='w-full flexBetween flex-col md:flex-row md:gap-7'>
            <div className='w-full md:w-[60%] flexCenter order-2 md:order-1'>
                <Image src="/images/Vrsec/vrperson.jpg" width={879} height={454} className='w-full sm:w-[95%] md:w-[600px] rounded-2xl' alt="vr" />
            </div>
            <div className='w-full md:w-1/2 md:text-start text-center mb-8 md:m-0 order-1 md:order-2'>
                <div className='w-full sm:w-[90%] md:max-w-[600px] flex flex-col gap-4 md:m-0 mx-auto'>
                  <h1 className='font-bold text-3xl xs:text-4xl sm:text-5xl '><span className='inline-block leading-[38px] xs:leading-[42px] sm:leading-[56px]'>{ads.title}</span></h1>
                  <p className='mb-3 md:mb-4 leading-[26px] text-lg -mt-1 md:-mt-[2px] w-[85%] sm:w-[70%] md:w-[90%] mx-auto md:mx-0'>{ads.description}</p>
                  <Button
                  as={Link}
                  href='/tag/new-arrivals'
                  endContent={<HiOutlineArrowLeft className="text-lg rotate-180" />}
                  className='w-fit bg-black text-white font-medium mx-auto md:mx-0'>
                  <span className='-mb-[1px]'>View all</span>
                  </Button>
                </div>
            </div>
        </div>
    </BoxSection>
  )
}

export default Advertisement
