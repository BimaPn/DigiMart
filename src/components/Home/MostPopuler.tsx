"use client"
import ProductSlider from "@/components/product/ProductSlider"
import { useProduct } from "../providers/ProductProvider"

const MostPopuler = () => {
  const { products } = useProduct()
  return (
    <div className="mt-9 xs:mt-12 sm:mt-14 md:mt-20">
        < ProductSlider products={products} title="Most Populer" />
    </div>
  )
}

export default MostPopuler
