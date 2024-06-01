import Advertisement from "@/components/Home/Advertisement"
import Categories from "@/components/Home/Categories"
import Hero from "@/components/Home/Hero"
import MostPopular from "@/components/Home/MostPopular"
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
  <MostPopular />
  <OurServices />
  </>
  )
}

export default page
