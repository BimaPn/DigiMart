import { AppTitle } from "@/components/AppIcon"

export const metadata = {
    title: 'Checkout',
}
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="h-screen max-h-screen overflow-auto overflow-x-hidden md:pb-12">
        <Navbar />
        <section className="w-full md:w-[1024px] mx-auto md:mt-8 mt-4 px-3 sm:px-4 h-fit">
          {children}
        </section>
      </section>
    )
  }

  const Navbar = () => {
    return (
      <nav className="px-6 py-2 shadow sticky top-0 z-[20] bg-white">
        <AppTitle /> 
      </nav> 
    )
  }
