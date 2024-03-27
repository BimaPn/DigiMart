'use client'
import {useState} from 'react'
import { LuShoppingCart } from 'react-icons/lu'
import { MdOutlineClose } from 'react-icons/md'
import productExample from '@/assets/checkout'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const CartItem = () => {
  return(
    <div className='flex gap-4 relative'>
    <div className='w-36 h-fit aspect-square bg-light rounded-lg'>
      <img src={productExample[0].image} className='w-full' alt="product" />
    </div>
    <div className='w-full'>
      <span className='w-[85%] xs:w-[90%] font-medium xs:text-lg leading-5 line-clamp-1 overflow-hidden'>{productExample[0].name}</span>

      <div className='text-xs xs:text-[13px] flex flex-col mt-[2px]'>
        <span>Color : {productExample[0].color}</span>
        <span>Storage : {productExample[0].storage}</span>
      </div>

      <div className='flexBetween mt-3'>
        <div className='w-fit flex items-center border rounded-lg text-gray-500 text-xs xs:text-sm '>
          <button className='px-2 aspect-square'>< AiOutlineMinus /></button>
          <span className='px-2 text-dark'>1</span>
          <button className='px-2 aspect-square'>< AiOutlinePlus /></button>
        </div>
        <h4 className='font-bold xs:text-lg'>${productExample[0].price}</h4>
      </div>
    </div>
    <button className='absolute top-0 right-0'>
    <MdOutlineClose className='text-xl'/>
    </button>
  </div>
  )
}

const CartSideBar = () => {
  const [isActive,setIsActive] = useState<boolean>(false)
  return (
    <div className='flexCenter'>
        <button onClick={() => setIsActive(prev => !prev)}>
            < LuShoppingCart strokeWidth={1.7} className='text-[23px]' />
        </button>

        {/* sidebar */}
        <div onClick={() => setIsActive(prev => !prev)} 
        className={`${isActive ? 'translate-x-0 backdrop-blur-sm bg-dark/20' : 'translate-x-full backdrop-blur-none bg-transparent'} 
        absolute top-0 right-0 transitio w-screen h-screen sidebar-background-transition hidden xs:block`}>
        </div>

      <div className={`${isActive ? 'translate-x-0' : 'translate-x-full'} sidebar-transition 
      absolute top-0 right-0 min-h-screen w-full shadow-lg xs:w-[464px]
    bg-white p-4 z-[2000]`}>
        {/* header */}
        <div className='flexBetween pb-4 border-b'>
          <h2 className='font-bold text-xl mx-auto'>
            Shopping Cart
          </h2>
          <button 
          onClick={() => setIsActive(prev => !prev)}
          className='absolute top-0 left-0 p-4'>
            <MdOutlineClose className='text-[27px]'/>
          </button>
        </div>

        {/* content */}
        <div className='mt-8'>
            < CartItem />
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