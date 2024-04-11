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
      <>
        <Navbar />
        <section className="w-[1024px] mx-auto mt-8">
          {children}
        </section>
      </>
    )
  }

  const Navbar = () => {
    return (
      <nav className="px-4 py-2 shadow sticky top-0">
        <div className="boxWidth mx-auto">
          <Link href='/' className='font-bold text-[22px] md:text-[26px]'>Gadget</Link>
        </div>  
      </nav> 
    )
  }
