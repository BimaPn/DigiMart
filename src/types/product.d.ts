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
}
type ProductCard = {
  image : string,
  label : string,
  sold : number,
  price : number
}

interface ProductCart extends ProductGeneral {
  image: string
  variants: string[][]
  quantity: number
}
