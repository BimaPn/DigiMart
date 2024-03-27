import ProductsRecomendations from '../components/ProductsRecomendations'
import ProductImages from '../components/ProductImages'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import Ratings from '@/components/Ratings'
import product from '@/assets/product'
import images from '@/assets/productImages'
import categories from "@/assets/categories"
import MoreDetail from '../components/MoreDetail'
import Varriants from '../components/Varriants'
import Reviews from '../components/Reviews'

type ParamsT = {
    params : {slug : string}
}
const ProductDetail = ({params}:ParamsT) => {
  return (
    <>
    <div className='w-full flexCenter'>
    <div className='w-[1444px] grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] md:grid-cols-[1fr_1fr] gap-4 sm:gap-8 md:gap-14 mt-14 sm:mt-24 sm:px-8'>
        {/* images */}
        <div className='overflow-hidden sm:sticky sm:top-24 h-fit'>
           < ProductImages images={images} />
        </div>
        {/* content */}
        <div className='w-full md:w-[80%] px-4'>
            <h1 className='text-2xl md:text-3xl md:mb-2'>{product.name}</h1>
            <Ratings sold={12} />
            {/* price */}
            <h1 className='font-bold text-2xl md:text-3xl mt-3 sm:mt-2 md:mt-3 mb-4 sm:mb-6'>${product.price}</h1>

            {/* add to cart */}
            <div className='hidden sm:block border-t mt-4 py-4'>
                <h3 className='text-sm'><span className='font-bold'>{product.stock} items</span> Left</h3>
                <div className='flex items-center gap-6 mt-3'>
                    <div className='flex items-center border rounded-lg text-gray-500'>
                        <button className='px-3 aspect-square'>< AiOutlineMinus /></button>
                        <span className='px-3 text-dark'>1</span>
                        <button className='px-3 aspect-square'>< AiOutlinePlus /></button>
                    </div>
                    <button className='px-4 py-2 bg-dark text-light rounded-lg flexCenter hover:bg-netral background-transition'>
                         Add to cart</button>
                </div>
            </div>
            {/* varriants */}
            < Varriants />

            {/* more menus */}
            <div className='mt-6 border-b'>
                < MoreDetail />
                < Reviews/>
            </div>
        </div>
    </div>
    {/* you might also like */}
    </div>
    <div className='my-14 sm:my-20'>
        < ProductsRecomendations products={categories} />
    </div>
    </>
  )
}

export default ProductDetail
