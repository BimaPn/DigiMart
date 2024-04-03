"use client"
import { useState, createContext, useContext } from "react"

type ProductCartProviderT = {
  products: ProductCart[]
  addProduct: (product:ProductCart) => void
  deleteProduct: (product:ProductCart) => void
  changeQuantity: (product: ProductCart, addedValue: number) => void 
  priceTotal: () => number
}

const productCartContext = createContext<ProductCartProviderT | null>(null)

const ProductCartProvider = ({children}:{children:React.ReactNode}) => {
  const [products, setProducts] = useState<ProductCart[]>([])

  const addProduct = (product:ProductCart) => {
    if(isProductExist(product)) {
      updateProduct(product)
    }else {
      setProducts([product,...products])
    }
  }
  const isProductExist = (product:ProductCart) => {
    if(products.length <= 0) return false
    for(let i = 0;i < products.length;i++) {
      const item = products[i]
      if(item.slug === product.slug && checkVariant(item.variants, product.variants)) {
        return true
      }
    }
    return false
  }
  const checkVariant = (variant1: PickedVariant[], variant2: PickedVariant[]) => {
    for(let i = 0; i < variant1.length;i++) {
      const source = variant1[i]
      const target = variant2[i]
      if(source.label !== target.label || source.value !== target.value) {
        return false
      }
    }
    return true
  }

  const updateProduct = (product: ProductCart) => {
    const prevProducts = products.map((item) => {
      if(item.slug === product.slug && checkVariant(item.variants, product.variants)) {
        if((item.quantity + product.quantity) <= product.stock) {
          item.quantity += product.quantity
        }
      }
      return item
    })
    setProducts(prevProducts)
  }

  const deleteProduct = (product: ProductCart) => {
    const prevProducts = products.filter((item) =>{
      if(item.slug === product.slug && checkVariant(item.variants, product.variants)) {
        return false
      }
      return true 
    })
    setProducts(prevProducts)
  }
  const changeQuantity = (product: ProductCart, addedValue: number) => {
    const prevProducts = products.map((item) =>{
      if(item.slug === product.slug && checkVariant(item.variants, product.variants)) {
        item.quantity += addedValue
      }
      return item
    })
    setProducts(prevProducts)
  }
  const priceTotal = () => {
    let sum = 0
    products.forEach((product) => sum += (product.price * product.quantity))
    return sum
  }
  return (
    <productCartContext.Provider 
    value={{ 
      products,
      addProduct, 
      deleteProduct,
      changeQuantity,
      priceTotal 
    }}
    >
    {children}
    </productCartContext.Provider>
  )
}

export const useProductCart = () => {
  return useContext(productCartContext) as ProductCartProviderT
}

export default ProductCartProvider

























