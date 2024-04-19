"use client"
import { useProduct } from "../providers/ProductProvider"
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2"

const FavoriteButton = ({slug, isFavorite, className}:{slug: string, isFavorite?: boolean, className?:string}) => {
  const { addFavorite, removeFavorite } = useProduct()
  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(isFavorite) {
      removeFavorite(slug)
    }else {
      addFavorite(slug)
    }
  }
  return (
    <button onClick={buttonClick} className={`w-[34px] aspect-square flexCenter rounded-full bg-white ${className}`}>
      {!isFavorite && <HiOutlineHeart className="text-red-600 -mb-[2px]" />}
      {isFavorite && <HiMiniHeart className="text-gray-600 -mb-[2px]" />}
    </button>
  )
}

export default FavoriteButton
