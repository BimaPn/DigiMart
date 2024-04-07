import UiProvider from '@/components/providers/UiProvider'
import './globals.css'
import { Roboto } from 'next/font/google'
import ProductCartProvider from '@/components/providers/ProductCartProvider'
import ProductProvider from '@/components/providers/ProductProvider'
import DefaultLayout from '@/layouts/DefaultLayout'
import UserProvider from '@/components/providers/UserProvider'

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})
export const metadata = {
  title: 'Shopper - Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} overflow-x-hidden text-dark relative`}>
        <UiProvider>
          <UserProvider>
            <ProductProvider>
              <ProductCartProvider>
                <DefaultLayout>
                {children}
                </DefaultLayout>
              </ProductCartProvider>
            </ProductProvider>
          </UserProvider>
        </UiProvider>
      </body>
    </html>
  )
}
