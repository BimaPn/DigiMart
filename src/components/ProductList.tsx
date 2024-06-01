"use client"
import ProductCard from "./product/ProductCard"
import { useProduct } from "./providers/ProductProvider"

const ProductList = ({ indexesFiltered = [] }:{indexesFiltered?: number[]}) => {
  const { products } = useProduct()
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-12">
      {products.filter((product, i) => indexesFiltered.includes(i)).map((product) => (
        <ProductCard
        key={product.slug}
        slug={product.slug}
        isFavorite={product.isFavorite}
        label={product.name}
        image={product.images[0]}
        price={product.price} 
        sold={product.sold} 
        />
      ))}
    </div>
  )
}

export default ProductList
