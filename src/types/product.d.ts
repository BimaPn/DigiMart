interface ProductGeneral {
  name: string
  slug: string
  price: number
  stock: number
}
interface Product extends ProductGeneral {
  images: string[]
  rating: number
  sold: number
  variants: Variant[]
  isFavorite ?: boolean
}
type ProductCard = {
  slug: string
  image : string
  label : string
  sold : number
  price : number
  isFavorite ?: boolean
}

interface ProductCart extends ProductGeneral {
  image: string
  variants: PickedVariant[]
  quantity: number
}

type PickedVariant = {
  label: string
  value: string
}

type Variant = {
 label: string
 options: string[]
}

interface Transaction {
  status: "onDelivery" | "finished" | "cancelled" 
  payment: string 
  shipping: string 
  totalPrice: number
  products: ProductCart[]
}
