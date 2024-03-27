import ProductSlider from "../ProductSlider"
import categories from "@/assets/categories"

const Trending = () => {
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        < ProductSlider products={categories} title="Trending Now" />
    </div>
  )
}

export default Trending