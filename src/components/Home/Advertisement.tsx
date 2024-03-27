import BoxSection from '@/layouts/BoxSection'
import Link from 'next/link'
import Image from 'next/image'
import ads from '@/assets/advertisement'
import {BsArrowLeft} from 'react-icons/bs'

const Advertisement = () => {
  return (
    <BoxSection className={`py-2 rounded-2xl`} parentClass={`my-12 sm:my-20 md:my-28`}>
        <div className='w-full flexBetween flex-col md:flex-row md:gap-8 '>
            <div className='w-full md:w-[60%] flexCenter order-2 md:order-1'>
                <Image src="/images/Vrsec/vrperson.jpg" width={879} height={454} className='w-full sm:w-[95%] md:w-[600px] rounded-2xl' alt="vr" />
            </div>
            <div className='w-full md:w-1/2 md:text-start text-center mb-12 sm:mb-14 md:m-0 order-1 md:order-2'>
                <div className='w-full sm:w-[90%] md:max-w-[600px] flex flex-col gap-4 md:m-0 mx-auto'>
                    <h1 className='font-bold text-3xl sm:text-5xl '><span className='inline-block leading-[54px] sm:leading-[64px]'>{ads.title}</span></h1>
                    <p className='mb-4 leading-relaxed text-lg'>{ads.description}</p>
                    <Link href='/vr' className='w-fit text-white text-lg bg-dark px-4 py-2 rounded-xl flexCenter gap-3 md:m-0 mx-auto'>
                        View all 
                        < BsArrowLeft className='rotate-180 text-lg' />
                    </Link>
                </div>
            </div>
        </div>
    </BoxSection>
  )
}

export default Advertisement