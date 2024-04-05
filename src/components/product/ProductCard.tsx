import Ratings from '@/components/Ratings'
import Image from 'next/image'
import FavoriteButton from './FavoriteButton'

const ProductCard = ({slug, isFavorite, image, label, sold, price}:ProductCard) => {
  return (
    <div className={`w-full relative group`}>
        <div className="w-full aspect-[3/4] flexCenter bg-light rounded-lg overflow-hidden group-hover:brightness-95">
            <Image src={image} width={600} height={600}  className='w-full aspect-square group-hover:scale-110 transform-transition' alt={label} />
        </div>
        <div className='w-full mt-3'>
          <span className='line-clamp-2 text-[14px] xs:text-base overflow-hidden mb-1'>{label}</span>
          <Ratings sold={sold}/>
          <h1 className="font-bold xs:text-lg">${price}.00</h1>
        </div>
        <div className='absolute top-0 right-0 p-2 hidden group-hover:block'>
          <FavoriteButton slug={slug} isFavorite={isFavorite}/>
        </div>
  </div>
  )
}

export default ProductCard
