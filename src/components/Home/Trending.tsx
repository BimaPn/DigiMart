import { products } from "@/assets/products"
import ProductSlider from "@/components/product/ProductSlider"

const Trending = () => {
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        < ProductSlider products={products} title="Trending Now" />
    </div>
  )
}

export default Trending
