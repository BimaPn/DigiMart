import BottomNav from "@/components/product/BottomNav"

export const metadata = {
    title: 'Detail Product',
  }
  
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
        < BottomNav />
      </>
    )
  }
