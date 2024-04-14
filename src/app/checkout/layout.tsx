import Link from "next/link"

export const metadata = {
    title: 'Checkout',
}
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-screen">
        <Navbar />
        <section className="w-[1036px] mx-auto mt-8">
          {children}
        </section>
      </section>
    )
  }

  const Navbar = () => {
    return (
      <nav className="px-4 py-2 shadow sticky top-0 z-[2000] bg-white">
        <div className="boxWidth mx-auto">
          <Link href='/' className='font-bold text-[22px] md:text-[26px]'>Gadget</Link>
        </div>  
      </nav> 
    )
  }
