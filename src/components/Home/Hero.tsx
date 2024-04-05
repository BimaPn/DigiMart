import BoxSection from '@/layouts/BoxSection'
import SliderItem from '../SliderItem'
const Hero = () => {
    return(
      <section className='px-3 sm:px-6'>
        <div className='max-w-[1440px] flex gap-4 mx-auto'>
          <SliderItem imgSrc={`/images/hero/vr.jpg`} />
          <div className='w-[35%] flex flex-col gap-4'>
            <div className='w-full aspect-[16/9] bg-dark rounded-2xl'>
            </div>
            <div className='w-full aspect-[16/9] bg-dark rounded-2xl'>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Hero
