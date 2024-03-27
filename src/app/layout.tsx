import UiProvider from '@/components/providers/UiProvider'
import './globals.css'
import { Roboto } from 'next/font/google'

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
          {children}
        </UiProvider>
      </body>
    </html>
  )
}
