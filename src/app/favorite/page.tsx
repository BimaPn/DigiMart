import FavoriteProducts from "@/components/product/FavoriteProducts"

const page = () => {
  return (
    <section className="boxWidth min-h-[80vh] mx-auto mt-3">
      <h1 className="font-medium text-3xl mb-8">Your Favorites</h1>
      <FavoriteProducts />
    </section>
  )
}

export default page
