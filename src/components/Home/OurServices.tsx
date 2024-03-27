import BoxSection from '@/layouts/BoxSection'
import services from "@/assets/services"
import Image from "next/image"
const OurServices = () => {
    return(
    <BoxSection className="mt-10 xs:mt-12 sm:mt-14 md:mt-20 mb-10 sm:mb-16">
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 md:gap-8'>
            {services.map((item,i)=> (
                <div key={i} className='basis-1/2 sm:basis-1/4 py-2 flex items-start justify-center gap-2 xs:gap-4 sm:gap-3'>
                    <div className="w-10 xs:w-16 sm:w-14">
                        <Image src={item.icon} className="w-full" width={100} height={100} alt={item.title} />
                    </div>
                    <div className='basis-[70%] xs:basis-[60%]'>
                        <h1 className='font-bold text-xs xs:text-base sm:text-sm md:text-lg'>{item.title}</h1>
                        <span className="text-[10px] xs:text-base sm:text-xs md:text-base">{item.description}</span>
                    </div>
                </div>
            ))}
        </div>
    </BoxSection>
    )
}
export default OurServices