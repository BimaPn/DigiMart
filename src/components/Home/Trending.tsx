"use client"
import ProductSlider from "@/components/product/ProductSlider"
import { useProduct } from "../providers/ProductProvider"

const Trending = () => {
  const { products } = useProduct()
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        <ProductSlider products={products} title="Trending Now" />
    </div>
  )
}

export default Trending
