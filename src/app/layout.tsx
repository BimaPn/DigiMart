import UiProvider from '@/components/providers/UiProvider'
import './globals.css'
import { Roboto } from 'next/font/google'
import ProductCartProvider from '@/components/providers/ProductCartProvider'
import ProductProvider from '@/components/providers/ProductProvider'

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
      <body className={`${roboto.className} text-dark relative`}>
        <UiProvider>
          <ProductProvider>
            <ProductCartProvider>
              {children}
            </ProductCartProvider>
          </ProductProvider>
        </UiProvider>
      </body>
    </html>
  )
}
