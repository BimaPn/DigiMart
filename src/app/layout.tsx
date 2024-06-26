import UiProvider from '@/components/providers/UiProvider'
import './globals.css'
import { Roboto } from 'next/font/google'
import ProductCartProvider from '@/components/providers/ProductCartProvider'
import ProductProvider from '@/components/providers/ProductProvider'
import UserProvider from '@/components/providers/UserProvider'
import TransactionProvider from '@/components/providers/TransactionProvider'
import company from "@/assets/companyInfo"
import ProgressbarProvider from '@/components/providers/ProgressbarProvider'
const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})
export const metadata = {
  title: `${company.name} - Ecommerce`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} text-dark overflow-x-hidden`}>
        <ProgressbarProvider> 
          <UiProvider>
            <UserProvider>
              <ProductProvider>
                <ProductCartProvider>
                  <TransactionProvider>
                                  {children}
                  </TransactionProvider>
                </ProductCartProvider>
              </ProductProvider>
            </UserProvider>
          </UiProvider>
        </ProgressbarProvider>
      </body>
    </html>
  )
}
