import { trendingProducts } from "@/assets/products"
import ProductCard from '@/components/product/ProductCard'
import Link from 'next/link'

const page = () => {
  return (
    <section className="px-3 sm:px-6"> 
    <div className="w-full xl:w-[1440px] min-h-[80vh] mx-auto mt-3 mb-32">
          <div 
          className={`w-full aspect-[3/4] xs:aspect-[16/9] md:aspect-[21/9]
          bg-[url('/images/banner/trending/mobile.jpg')] xs:bg-[url('/images/banner/trending/wide.jpg')] md:bg-[url('/images/banner/trending/ultra-wide.jpg')]
          bg-no-repeat bg-cover bg-center
          flex xs:items-center justify-end rounded-3xl py-[18%] xs:py-0 px-4 sm:px-6 md:px-16`}
          />


      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-4 mt-12">
        {trendingProducts.map((product) => (
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
    </div>
    </section>

  )
}

export default page
