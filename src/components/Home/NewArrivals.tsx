import { products } from "@/assets/products"
import ProductSlider from "../ProductSlider"

const NewArrivals = () => {
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        < ProductSlider products={products} title="New Arrivals" />
    </div>
  )
}

export default NewArrivals
