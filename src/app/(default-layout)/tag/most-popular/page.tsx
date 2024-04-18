import { mostPopularProducts } from '@/assets/products'
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="w-full xl:w-[1440px] min-h-[80vh] mx-auto mt-3 px-3 sm:px-6 mb-32">
      <h1 className="font-medium text-xl xs:text-2xl mdtext-[28px] mb-3 sm:mb-5 md:mb-7">Most Popular</h1>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4">
        {mostPopularProducts.map((product) => (
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
    </section>
  )
}

export default page
