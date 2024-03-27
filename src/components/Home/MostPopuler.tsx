import ProductSlider from "../ProductSlider"
import categories from "@/assets/categories"

const MostPopuler = () => {
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        < ProductSlider products={categories} title="Most Populer" />
    </div>
  )
}

export default MostPopuler