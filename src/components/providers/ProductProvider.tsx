"use client"
import {products as initialProducts} from "@/assets/products"
import { createContext, useContext, useState } from "react"

type ProductProviderT = {
  products: Product[]
}
const productContext = createContext<ProductProviderT | null>(null)

const ProductProvider = ({children}:{children:React.ReactNode}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>    
  )
}

export const useProduct = () => {
  return useContext(productContext) as ProductProviderT
}

export default ProductProvider
