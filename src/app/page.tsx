import Advertisement from "@/components/Home/Advertisement"
import Categories from "@/components/Home/Categories"
import Hero from "@/components/Home/Hero"
import MostPopuler from "@/components/Home/MostPopuler"
import NewArrivals from "@/components/Home/NewArrivals"
import OurServices from "@/components/Home/OurServices"
import Trending from "@/components/Home/Trending"

const page = () => {
  return (
  <>
  <Hero />
  <Categories />
  <Trending />
  <NewArrivals />
  <Advertisement />
  <MostPopuler />
  <OurServices />
  </>
  )
}

export default page
