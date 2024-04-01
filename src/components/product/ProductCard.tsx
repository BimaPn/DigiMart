import Ratings from '@/components/Ratings'
import Image from 'next/image'

const ProductCard = ({image,label,sold,price}:ProductCard) => {
  return (
    <div className={`w-full`}>
        <div className="w-full aspect-[3/4] flexCenter bg-light rounded-lg">
            <Image src={image} width={600} height={600}  className='w-full aspect-square' alt={label} />
        </div>
        <div className='w-full mt-3'>
          <span className='line-clamp-2 text-[14px] xs:text-base overflow-hidden mb-1'>{label}</span>
          <Ratings sold={sold}/>
          <h1 className="font-bold xs:text-lg">${price}.00</h1>
        </div>
  </div>
  )
}

export default ProductCard
