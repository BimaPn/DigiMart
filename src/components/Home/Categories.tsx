import CategorySlider from "../CategorySlider"
import categories from "@/assets/categories"

const Categories = () => {
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        <CategorySlider categories={categories} title="All Categories"/>
    </div>
  )
}

export default Categories