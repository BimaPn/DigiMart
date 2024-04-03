import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartMenuProvider from "@/components/providers/CartMenuProvider"
const DefaultLayout = ({children,className}:{children : React.ReactNode,className ?: string}) => {
  return (
    <>
      <CartMenuProvider>
        <Navbar/>
        <main className={className}>
          {children}
        </main>
        < Footer />
      </CartMenuProvider>
    </>
  )
}

export default DefaultLayout
