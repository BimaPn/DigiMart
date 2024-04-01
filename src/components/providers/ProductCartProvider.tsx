"use client"
import { useState, createContext, useContext } from "react"

type ProductCartProviderT = {
  products: ProductCart[]
  addProduct: (product:ProductCart) => void
  deleteProduct: (slug: string) => void
}

const productCartContext = createContext<ProductCartProviderT | null>(null)

const ProductCartProvider = ({children}:{children:React.ReactNode}) => {
  const [products, setProducts] = useState<ProductCart[]>([])

  const addProduct = (product:ProductCart) => {
    if(isProductExist(product)) {
      updateProduct(product.slug, product.quantity)
      return
    }
    setProducts([product,...products])
  }

  const isProductExist = (product:ProductCart) => {
    products.forEach((item) => {
      if(item.slug === product.slug) {
        item.variants.forEach((variant,index) => {
          const target = product.variants[index]
          if(variant[0] !== target[0] && variant[1] !== target[1]) {
            return false
          }
        })
        return true
      }
    })
    return false
  }

  const updateProduct = (slug : string, quantity: number) => {
    setProducts((products) => {
      return products.map((product) => {
        if(product.slug === slug) {
          if(product.quantity + quantity <= product.stock) {
            product.quantity += quantity
          }
        }
        return product
      })
    })
  }
  const deleteProduct = (slug:string) => {
    setProducts((products) => {
      return products.filter((product) => product.slug !== slug)
    })
  }
  return (
    <productCartContext.Provider value={{ products, addProduct, deleteProduct }}>
    {children}
    </productCartContext.Provider>
  )
}

export const useProductCartContext = () => {
  return useContext(productCartContext) as ProductCartProviderT
}

export default ProductCartProvider

























