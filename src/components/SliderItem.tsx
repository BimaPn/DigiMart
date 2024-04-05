import Image from "next/image"

type SliderT = {
    imgSrc :string
}
const SliderItem = ({imgSrc}:SliderT) => {
    return(
        <div className='w-[65%] aspect-[16/9] flexCenter rounded-2xl overflow-hidden relative'>
          <Image fill src={imgSrc} className='w-full aspect-[21/9] bg-cover' alt="hero" />
        </div>
      )
}
export default SliderItem
