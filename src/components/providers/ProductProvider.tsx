"use client"
import {products as initialProducts} from "@/assets/products"
import { createContext, useContext, useEffect, useState } from "react"

type ProductProviderT = {
  products: Product[]
  addFavorite: (slug:string) => void
  removeFavorite: (slug:string) => void
  favoriteProducts: () => Product[]
}
const productContext = createContext<ProductProviderT | null>(null)

const ProductProvider = ({children}:{children:React.ReactNode}) => {
  const [products, setProducts] = useState<Product[]>(initialProducts)

  useEffect(() => {
    console.log(products)
  },[products])

  const addFavorite = (slug:string) => {
    console.log("add favorite")
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
    console.log("remove favorite")
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
  return (
    <productContext.Provider value={{ products, addFavorite, removeFavorite, favoriteProducts }}>
      {children}
    </productContext.Provider>    
  )
}

export const useProduct = () => {
  return useContext(productContext) as ProductProviderT
}

export default ProductProvider
