import FavoriteProducts from "@/components/product/FavoriteProducts"

const page = () => {
  return (
    <section className="w-full xl:w-[1440px] min-h-[80vh] mx-auto mt-3 px-3 sm:px-6 mb-32">
      <h1 className="font-medium text-xl xs:text-2xl mdtext-[28px] mb-3 sm:mb-5 md:mb-7">Your Favorites</h1>
      <FavoriteProducts />
    </section>
  )
}

export default page
