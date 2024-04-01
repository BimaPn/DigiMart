import DefaultLayout from "@/layouts/DefaultLayout"

export const metadata = {
    title: 'Shopper - Ecommerce',
}
  
export default function RegiterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <DefaultLayout className="mt-16 md:mt-20">
    {children}
  </DefaultLayout>
  )
}
