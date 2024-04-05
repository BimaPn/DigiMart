"use client"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { useProduct } from "../providers/ProductProvider"

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
      {isFavorite && <FaHeart className="text-[19px] text-red-500 -mb-[2px]" />}
      {!isFavorite && <FaRegHeart className="text-xl text-gray-600 -mb-[2px]" />}
    </button>
  )
}

export default FavoriteButton
