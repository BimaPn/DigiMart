import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartMenuProvider from "@/components/providers/CartMenuProvider"

const DefaultLayout = ({children,className}:{children : React.ReactNode,className ?: string}) => {
  return (
    <div className="w-screen max-w-screen overflow-x-hidden relative">
      <CartMenuProvider>
        <Navbar/>
        <main className={`${className} mt-[73px]`}>
          {children}
        </main>
        < Footer />
      </CartMenuProvider>
    </div>
  )
}

export default DefaultLayout
