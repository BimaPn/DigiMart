
import categories from "@/assets/categories"
import {products as initialProducts} from "@/assets/products"
import CategoryProducts from "@/components/CategoryProducts"
type Params = {
  params : {slug : string}
}
const page = ({params}:Params) => {
  const category = categories.find((item) => item.slug === params.slug)
  const products = initialProducts.filter((item) => item.category === params.slug)
  return category && (
    <section className='px-3 sm:px-6'> 
      <div className="w-full xl:w-[1440px] min-h-[50vh] mx-auto mt-3 mb-32">
      <h1 className="font-medium text-lg xs:text-xl md:text-[25px] mb-3 sm:mb-5 md:mb-7">{category.name}</h1>
        <CategoryProducts products={products} />
      </div>
    </section>
  )
}

export default page
