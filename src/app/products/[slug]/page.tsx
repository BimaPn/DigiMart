import ProductsRecomendations from '@/components/product/ProductsRecomendations'
import ProductImages from '@/components/product/ProductImages'
import Ratings from '@/components/Ratings'
import categories from "@/assets/categories"
import MoreDetail from '@/components/product/MoreDetail'
import Reviews from '@/components/product/Reviews'
import { products } from '@/assets/products'
import ProductAction from '@/components/product/ProductAction'

type Params = {
    params : {slug : string}
}
const ProductDetail = ({params}:Params) => {
  const product = products.find((product) => product.slug === params.slug)
  return product && (
    <>
    <div className='w-full flexCenter'>
    <div className='w-[1444px] grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] md:grid-cols-[1fr_1fr] gap-4 sm:gap-8 md:gap-14 mt-14 sm:mt-24 sm:px-8'>
        <div className='overflow-hidden sm:sticky sm:top-24 h-fit'>
           < ProductImages images={product.images} />
        </div>
        <div className='w-full md:w-[80%] px-4'>
            <h1 className='text-2xl md:text-3xl md:mb-2'>{product.name}</h1>
            <Ratings sold={12} />
            <h1 className='font-bold text-2xl md:text-3xl mt-3 sm:mt-2 md:mt-3 mb-4 sm:mb-6'>${product.price}</h1>
            <ProductAction product={product}/>
            <div className='mt-6 border-b'>
                < MoreDetail />
                < Reviews/>
            </div>
        </div>
    </div>
    </div>
    <div className='my-14 sm:my-20'>
        < ProductsRecomendations products={categories} />
    </div>
    </>
  )
}

export default ProductDetail
