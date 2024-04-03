"use client"
import Varriants from '@/components/product/Varriants'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartMenu } from '../providers/CartMenuProvider'
import { useProductCart } from '../providers/ProductCartProvider'

const ProductAction = ({product}:{product:Product}) => {
  const [cart, setCart] = useState<ProductCart>({
    name: product.name,
    slug: product.slug,
    price: product.price,
    stock: product.stock,
    image: product.images[0],
    variants: [],
    quantity: 1
  })
  const { toggleOpen } = useCartMenu()
  const { addProduct } = useProductCart()

  const increaseQuantity = () => {
    if(cart.quantity >= product.stock) return
    setCart({...cart, quantity: cart.quantity+1})
  }
  const decreaseQuantity = () => {
    if(cart.quantity <= 0) return
    setCart({...cart, quantity: cart.quantity-1})
  }

  const addVariant = (val:PickedVariant) => {
    setCart((cart) => {
      cart.variants = cart.variants.filter((opt) => opt.label !== val.label)
      cart.variants.push(val)
      return cart
    })
  }
  const addToCart = () => {
    addProduct({...cart})
    toggleOpen()
  }
  return (
    <>
      <div className='hidden sm:block border-t mt-4 py-4'>
        <h3 className='text-sm'><span className='font-bold'>{product.stock - cart.quantity} items</span> Left</h3>
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
        </div>
      </div>
      < Varriants variants={product.variants} onChange={addVariant}/>
    </>
  )
}

export default ProductAction
