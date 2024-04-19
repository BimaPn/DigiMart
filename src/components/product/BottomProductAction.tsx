import {AiOutlineHeart} from 'react-icons/ai'
import FavoriteButton from './FavoriteButton'
import { Button } from '@nextui-org/react'

const BottomProductAction = (
{
  slug,
  isFavorite,
  isDisabled,
  onSubmit
} :
{
  slug:string,
  isFavorite?:boolean,
  isDisabled:boolean, 
  onSubmit:() => void
}) => {
  return (
    <div className="flex items-center gap-3 sm:hidden fixed bottom-0 right-0 left-0 z-[500] bg-white px-3 sm:px-4 py-2 sm:py-3 outline-none">
      <FavoriteButton 
      slug={slug} 
      isFavorite={isFavorite}
      className='text-[31px] -mt-[2px]' 
      />
      <Button onClick={() => onSubmit()} className='w-full bg-dark text-light rounded-xl'>Add to cart</Button>
    </div>
  )
}

export default BottomProductAction
