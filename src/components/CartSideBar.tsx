'use client'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineClose } from 'react-icons/md'
import productExample from '@/assets/checkout'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartMenu } from './providers/CartMenuProvider'
import { useProductCart } from './providers/ProductCartProvider'

const CartItem = ({product}:{product:ProductCart}) => {
  const { deleteProduct } = useProductCart()
  return(
    <div className='flex gap-4 relative'>
    <div className='w-36 h-fit aspect-square bg-light rounded-lg'>
      <img src={product.image} className='w-full' alt="product" />
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
          <button className='px-2 aspect-square'>< AiOutlineMinus /></button>
          <span className='px-2 text-dark'>{product.quantity}</span>
          <button className='px-2 aspect-square'>< AiOutlinePlus /></button>
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
  const { products } = useProductCart()
  return (
    <div className='flexCenter'>
        <button onClick={() => toggleOpen()}>
            < LuShoppingCart strokeWidth={1.7} className='text-[23px]' />
        </button>

        {/* sidebar */}
        <div onClick={() => toggleOpen()} 
        className={`${isOpen ? 'translate-x-0 backdrop-blur-sm bg-dark/20' : 'translate-x-full backdrop-blur-none bg-transparent'} 
        absolute top-0 right-0 transitio w-screen h-screen sidebar-background-transition hidden xs:block`}>
        </div>

      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} sidebar-transition 
      absolute top-0 right-0 min-h-screen w-full shadow-lg xs:w-[464px]
    bg-white p-4 z-[2000]`}>
        {/* header */}
        <div className='flexBetween pb-4 border-b'>
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
        <div className='flex flex-col gap-4 mt-8'>
          {products.map((product ,index) => (
            <CartItem key={index} product={product}/>
          ))}
        </div>

        {/* add to cart navigation */}
        < CartFooter />
      </div>
    </div>
  )
}

const CartFooter = () => {
  return(
    <div className='fixed bottom-0 right-0 left-0 py-4 px-4'>
    <div className='flex flex-col gap-[6px] mb-6 pt-4 border-t'>
      <div className='flexBetween'>
        <span>Subtotal</span>
        <span>$430</span>
      </div>
      <div className='flexBetween'>
        <span>Shipping</span>
        <span>FREE</span>
      </div>
    </div>
    <button className='w-full text-center py-3 rounded-xl bg-dark text-light'>Checkout</button>
  </div>
  )
}

export default CartSideBar
