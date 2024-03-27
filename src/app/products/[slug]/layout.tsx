import DefaultLayout from "@/layouts/DefaultLayout"
import BottomNav from "../components/BottomNav"

export const metadata = {
    title: 'Detail Product',
  }
  
  export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <DefaultLayout>
            {children}
            < BottomNav />
        </DefaultLayout>
    )
  }