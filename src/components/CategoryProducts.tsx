"use client"
import Link from "next/link"
import ProductCard from "./product/ProductCard"
import { useProduct } from "./providers/ProductProvider"

const CategoryProducts = ({category}:{category: string}) => {
  const { products } = useProduct()
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
      {products.filter(product => product.category === category).map((product) => (
        <ProductCard
        slug={product.slug}
        isFavorite={product.isFavorite}
        label={product.name}
        image={product.images[0]}
        price={product.price} 
        sold={product.sold} />
      ))}
    </div>
  )
}

export default CategoryProducts
