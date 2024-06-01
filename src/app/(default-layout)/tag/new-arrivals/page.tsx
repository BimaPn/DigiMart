import { newArrivalProductIndexes } from '@/assets/products'
import ProductList from '@/components/ProductList'

const page = () => {
  return (
    <section className='px-3 sm:px-6'> 

    <div className="w-full xl:w-[1440px] min-h-[80vh] mx-auto mt-3 mb-32">
      <div 
      className={`w-full aspect-[3/4] xs:aspect-[16/9] md:aspect-[21/9]
      bg-[url('/images/banner/newArrival/mobile.jpg')] xs:bg-[url('/images/banner/newArrival/wide.jpg')] md:bg-[url('/images/banner/newArrival/ultra-wide.jpg')]
      bg-no-repeat bg-cover bg-center
      flex xs:items-center justify-end rounded-3xl py-[18%] xs:py-0 px-4 sm:px-6 md:px-16`}
      />
      <ProductList indexesFiltered={newArrivalProductIndexes} />
           
    </div>

    </section>

  )
}

export default page
