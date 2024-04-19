"use client"
import Varriants from '@/components/product/Varriants'
import { Button } from '@nextui-org/react'
import { useRef, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartMenu } from '../providers/CartMenuProvider'
import { useProductCart } from '../providers/ProductCartProvider'
import BottomProductAction from './BottomProductAction'
import FavoriteButton from './FavoriteButton'
import { useProduct } from '../providers/ProductProvider'

const ProductAction = ({slug}:{slug:string}) => {
  const { findProduct } = useProduct()
  const product = useRef(findProduct(slug))

  const initialVariants = () : PickedVariant[] => {
    return product.current.variants.map((item) => {
      return {label: item.label, value: item.options[0]}
    })
  }

  const [cart, setCart] = useState<ProductCart>({
    name: product.current.name,
    slug: product.current.slug,
    price: product.current.price,
    stock: product.current.stock,
    image: product.current.images[0],
    variants: initialVariants(),
    quantity: 1
  })
  const { toggleOpen } = useCartMenu()
  const { addProduct } = useProductCart()

  const increaseQuantity = () => {
    if(cart.quantity >= product.current.stock) return
    setCart({...cart, quantity: cart.quantity+1})
  }
  const decreaseQuantity = () => {
    if(cart.quantity <= 0) return
    setCart({...cart, quantity: cart.quantity-1})
  }

  const addVariant = (val:PickedVariant) => {
    const filteredVariants = cart.variants.map((opt) => {
      if(opt.label === val.label) {
        opt.value = val.value
      }
      return opt
    })
    setCart({...cart,variants:filteredVariants})
    

  }
  const addToCart = () => {
    const variants = cart.variants.map((opt) => ({...opt}))
    addProduct({...cart,variants})
    toggleOpen()
  }
  return (
    <>
      <div className='hidden sm:block border-t mt-4 py-4'>
        <h3 className='text-sm'><span className='font-bold'>{product.current.stock - cart.quantity} items</span> Left</h3>
        <div className='flex items-center gap-6 mt-3'>
          <div className='flex items-center border rounded-lg text-gray-500'>
              <button onClick={() => decreaseQuantity()}
              className='px-3 aspect-square'>< AiOutlineMinus /></button>
              <span className='px-3 text-dark'>{cart.quantity}</span>
              <button onClick={() => increaseQuantity()}
              className='px-3 aspect-square'>< AiOutlinePlus /></button>
          </div>
           <Button
           disabled={cart.quantity <= 0}
           onClick={() => addToCart()}
           className='text-base bg-dark text-white disabled:opacity-50 disabled:cursor-not-allowed'
           radius='sm'>
           Add to cart
           </Button>
           <FavoriteButton
           slug={product.current.slug}
           isFavorite={product.current.isFavorite}
           className='text-[24px] -ml-3 border !w-[40px] !rounded-lg hover:border-dark' />
        </div>
      </div>
      <Varriants 
      pickedVariants={cart.variants}
      variants={product.current.variants}
      onChange={addVariant}
      />
      <BottomProductAction 
      slug={product.current.slug}
      isFavorite={product.current.isFavorite}
      isDisabled={cart.quantity <= 0}
      onSubmit={() => addToCart()}/>
    </>
  )
}

export default ProductAction
