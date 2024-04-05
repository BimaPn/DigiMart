"use client"

import Link from "next/link"
import { useProduct } from "../providers/ProductProvider"
import ProductCard from "./ProductCard"

const FavoriteProducts = () => {
  const { favoriteProducts } = useProduct()
  return (
    <div className="grid grid-cols-6 gap-4">
      {favoriteProducts().map((product) => (
        <Link href={`/products/${product.slug}`}>
            <ProductCard 
            slug={product.slug}
            isFavorite={product.isFavorite}
            label={product.name}
            image={product.images[0]}
            price={product.price} 
            sold={product.sold} />
        </Link> 
      ))}
    </div>
  )
}

export default FavoriteProducts
