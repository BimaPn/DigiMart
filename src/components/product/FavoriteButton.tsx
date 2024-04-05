"use client"
import { useProduct } from "../providers/ProductProvider"
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2"

const FavoriteButton = ({slug, isFavorite}:{slug: string, isFavorite?: boolean}) => {
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
    <button onClick={buttonClick} className="w-[34px] aspect-square flexCenter rounded-full bg-white">
      {isFavorite && <HiOutlineHeart className="text-[22px] text-red-600 -mb-[2px]" />}
      {!isFavorite && <HiMiniHeart className="text-[22px] text-gray-600 -mb-[2px]" />}
    </button>
  )
}

export default FavoriteButton
