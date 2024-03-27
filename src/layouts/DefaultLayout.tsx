import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
const DefaultLayout = ({children,className}:{children : React.ReactNode,className ?: string}) => {
  return (
    <>
        <Navbar/>
        <main className={className}>
          {children}
        </main>
        < Footer />
    </>
  )
}

export default DefaultLayout