"use client"
import {products as initialProducts} from "@/assets/products"
import { createContext, useContext, useState } from "react"

type ProductProviderT = {
  products: Product[]
  addFavorite: (slug:string) => void
  removeFavorite: (slug:string) => void
  favoriteProducts: () => Product[]
  findProduct: (slug:string) => Product 
}
const productContext = createContext<ProductProviderT | null>(null)

const ProductProvider = ({children}:{children:React.ReactNode}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  const addFavorite = (slug:string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if(product.slug === slug) {
          product.isFavorite = true
        }
        return product
      })
    })
  }
  const removeFavorite = (slug:string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if(product.slug === slug) {
          delete product.isFavorite
        }
        return product
      })
    })
  }
  const favoriteProducts = () => {
    return products.filter((product) => product.isFavorite === true)
  }
  const findProduct = (slug:string) => {
    return products.find((product) => product.slug === slug) as Product
  }
  return (
    <productContext.Provider value={{ products, addFavorite, removeFavorite, favoriteProducts, findProduct }}>
      {children}
    </productContext.Provider>    
  )
}

export const useProduct = () => {
  return useContext(productContext) as ProductProviderT
}

export default ProductProvider
