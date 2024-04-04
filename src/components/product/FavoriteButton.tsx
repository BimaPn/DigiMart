import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
const FavoriteButton = () => {
  const buttonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("hai bro")
  }
  return (
    <button onClick={buttonClick} className="w-[34px] aspect-square flexCenter rounded-full bg-white">
      <FaRegHeart className="text-xl text-gray-600 -mb-[2px]" />
    </button>
  )
}

export default FavoriteButton
