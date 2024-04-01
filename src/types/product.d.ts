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
}
type ProductCard = {
  image : string,
  label : string,
  sold : number,
  price : number
}

interface ProductCart extends ProductGeneral {
  image: string
  variants: PickedVariant[]
  quantity: number
}

type PickedVariant = {
  label: string
  value: string | number
}

type Variant = {
 label: string
 options: (string|number)[]
}
