'use client'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineClose } from 'react-icons/md'
import productExample from '@/assets/checkout'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartMenu } from './providers/CartMenuProvider'
import { useProductCart } from './providers/ProductCartProvider'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next-nprogress-bar'
import Image from 'next/image'

const CartItem = ({product}:{product:ProductCart}) => {
  const { deleteProduct, changeQuantity } = useProductCart()
  const increaseQuantity = () => {
    if(product.quantity >= product.stock) return
    changeQuantity(product, 1)
  }
  const decreaseQuantity = () => {
    if(product.quantity <= 1) return
    changeQuantity(product, -1)
  }
  return(
    <div className='flex gap-4 relative'>
    <div className='w-36 h-fit aspect-square bg-light rounded-lg'>
      <Image src={product.image} width={600} height={600} className='w-full h-auto' alt="product" />
    </div>
    <div className='w-full'>
      <span className='w-[85%] xs:w-[90%] font-medium xs:text-lg leading-5 line-clamp-1 overflow-hidden'>{product.name}</span>

      <div className='text-xs xs:text-[13px] flex flex-col mt-[2px]'>
        {product.variants.map((variant, index) => (
          <span key={index}>{variant.label} : {variant.value}</span>
        ))}
      </div>

      <div className='flexBetween mt-3'>
        <div className='w-fit flex items-center border rounded-lg text-gray-500 text-xs xs:text-sm '>
          <button
          onClick={() => decreaseQuantity()}
          className='px-2 aspect-square'
          >< AiOutlineMinus /></button>
          <span className='px-2 text-dark'>{product.quantity}</span>
          <button
          onClick={() => increaseQuantity()}
          className='px-2 aspect-square'
          >< AiOutlinePlus /></button>
        </div>
        <h4 className='font-bold xs:text-lg'>${product.price}</h4>
      </div>
    </div>
    <button onClick={() => deleteProduct(product)} className='absolute top-0 right-0'>
      <MdOutlineClose className='text-xl'/>
    </button>
  </div>
  )
}

const CartSideBar = () => {
  const { isOpen,toggleOpen } = useCartMenu()
  const { products, priceTotal } = useProductCart()
  return (
    <div className='flexCenter overflow-auto'>
        <button onClick={() => toggleOpen()}>
            <LuShoppingCart strokeWidth={1.7} className={`text-[23px] text-dark md:text-gray-700 hover:text-dark`} />
        </button>

        {/* sidebar */}
        <div onClick={() => toggleOpen()} 
        className={`${isOpen ? 'translate-x-0 bg-dark/20' : 'translate-x-full bg-transparent'} 
        absolute top-0 right-0 transitio w-dvw h-dvh sidebar-background-transition hidden xs:block overflow-hidden`}>
        </div>

      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} sidebar-transition 
      absolute top-0 right-0 max-h-dvh h-dvh overflow-auto w-full shadow-lg xs:w-[464px]
    bg-white p-4 pb-0 z-[2000] flex flex-col`}>
        {/* header */}
        <div className='flexBetween pb-4 border-b flex-none'>
          <h2 className='font-bold text-xl mx-auto'>
            Shopping Cart
          </h2>
          <button 
          onClick={() => toggleOpen()}
          className='absolute top-0 left-0 p-4'>
            <MdOutlineClose className='text-[27px]'/>
          </button>
        </div>

        {/* content */}
        <div className='flex flex-col gap-4 mt-8 flex-auto'>
          {products.map((product ,index) => (
            <CartItem key={index} product={product}/>
          ))}
        </div>

        {/* add to cart navigation */}
        < CartFooter totalPrice={priceTotal()} isDisabled={products.length <= 0}/>
      </div>
    </div>
  )
}

const CartFooter = ({totalPrice, isDisabled}:{totalPrice:number, isDisabled:boolean}) => {
  const router = useRouter()
  const directTo = () => {
    router.push(`/checkout`)
  }
  return(
    <div className='py-4 px-4 flex-none'>
    <div className='flex flex-col gap-[6px] mb-6 pt-4 border-t'>
      <div className='flexBetween'>
        <span>Subtotal</span>
        <span>${totalPrice}</span>
      </div>
      <div className='flexBetween'>
        <span>Shipping</span>
        <span>FREE</span>
      </div>
    </div>
    <Button
    onClick={() => directTo()}
    disabled={isDisabled}
    className='w-full bg-dark text-white disabled:opacity-50 disabled:cursor-not-allowed'>Checkout</Button>
  </div>
  )
}

export default CartSideBar
