import Image from "next/image"

type SliderT = {
    imgSrc :string
}
const SliderItem = ({imgSrc}:SliderT) => {
    return(
        <div className='w-full aspect-[21/9] flexCenter bg-dark'>
          <Image src={imgSrc} className='w-full aspect-[21/9]' width={1920} height={1080} alt="hero" />
        </div>
      )
}
export default SliderItem