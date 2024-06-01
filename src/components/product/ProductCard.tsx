import Ratings from '@/components/Ratings'
import Image from 'next/image'
import FavoriteButton from './FavoriteButton'
import Link from 'next/link'

const ProductCard = ({slug, isFavorite, image, label, sold, price}:ProductCard) => {
  return (
    <div className={`w-full relative group`}>
        <Link href={`/products/${slug}`} className="w-full aspect-[3/4] flexCenter bg-light rounded-lg overflow-hidden group-hover:brightness-95">
            <Image src={image} width={600} height={600}  className='w-full aspect-square group-hover:scale-110 transform-transition' alt={label} />
        </Link>
        <div className='w-full mt-3'>
          <Link href={`/products/${slug}`}> 
            <span className='line-clamp-2 text-[14px] xs:text-base overflow-hidden mb-1'>{label}</span>
          </Link>
          <Ratings sold={sold}/>
          <h1 className="font-bold xs:text-lg">${price}.00</h1>
        </div>
        <div className='absolute top-0 right-0 p-2 block sm:hidden group-hover:block'>
          <FavoriteButton slug={slug} isFavorite={isFavorite} className='text-[22px]'/>
        </div>
  </div>
  )
}

export default ProductCard
