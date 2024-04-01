import { products } from "@/assets/products"
import ProductSlider from "@/components/product/ProductSlider"

const MostPopuler = () => {
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        < ProductSlider products={products} title="Most Populer" />
    </div>
  )
}

export default MostPopuler
