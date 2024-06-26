"use client"
import Link from "next/link"
import { useProduct } from "../providers/ProductProvider"
import ProductCard from "./ProductCard"

const FavoriteProducts = () => {
  const { favoriteProducts } = useProduct()
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
      {favoriteProducts().map((product) => (
        <Link key={product.slug} href={`/products/${product.slug}`}>
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
