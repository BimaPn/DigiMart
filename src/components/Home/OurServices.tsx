import BoxSection from '@/layouts/BoxSection'
import services from "@/assets/services"
import Image from "next/image"

const colors = ["bg-red-50","bg-green-100","bg-yellow-50","bg-blue-50"]

const OurServices = () => {
    return(
    <BoxSection className="mt-10 xs:mt-12 sm:mt-14 md:mt-20 mb-10 sm:mb-16">
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {services.map((item,i)=> (
                <div key={i} className={`basis-1/2 sm:basis-1/4 flex flex-col gap-1 ${colors[i]} p-3 xs:p-4 rounded-2xl`}>
                    <div className="w-10">
                        <Image src={item.icon} className="w-full" width={100} height={100} alt={item.title} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold text-sm xs:text-base sm:text-sm md:text-lg'>{item.title}</h1>
                        <span className="text-xs xs:text-base sm:text-xs md:text-base leading-normal inline-block">{item.description}</span>
                    </div>
                </div>
            ))}
        </div>
    </BoxSection>
    )
}
export default OurServices
