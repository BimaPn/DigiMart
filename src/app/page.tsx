import Hero from "@/components/Home/Hero"
import OurServices from "@/components/Home/OurServices"
import Categories from "@/components/Home/Categories"
import Trending from "@/components/Home/Trending"
import Advertisement from "@/components/Home/Advertisement"
import NewArrivals from "@/components/Home/NewArrivals"
import MostPopuler from "@/components/Home/MostPopuler"
import DefaultLayout from "../layouts/DefaultLayout"

const Home = () => {
  return (
    <DefaultLayout className="mt-16 md:mt-20">
      < Hero />
      < Categories />
      < Trending />
      < Advertisement />
      < NewArrivals />
      < MostPopuler />
      < OurServices />
    </DefaultLayout>
  )
}
export default Home