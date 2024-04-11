"use client"
import { addresses } from "@/assets/addresses"
import { useProductCart } from "@/components/providers/ProductCartProvider"
import { Button, Radio, RadioGroup, cn } from "@nextui-org/react"
import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"

const page = () => {
  return (
    <div className="flex justify-between gap-6 relative">
      <div className="w-[62%]">
        <div>
          <span className="font-medium text-xl">Shipment</span>

          <div className="w-full border-b pb-4 pt-2">
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center h-5 gap-2 font-medium text-lg text-gray-800">
                <IoLocationSharp className="text-xl text-gray-500 -mr-1" />
                <span>{addresses[0].place}</span>
                -
                <span>{addresses[0].name}</span>
              </div>
              <div>{addresses[0].phoneNumber}</div>
              <span>{addresses[0].address}</span>
            </div>
          </div>

        </div>
        <div className="mt-5">
          <span className="font-medium text-xl">Payment</span>
          <div>
            <RadioGroup
              defaultValue="credit_card"
              className="w-full"
            >
              <div className="w-full flexBetween py-[10px] border-b">
                <Radio
                value="credit_card"
                >
                  Credit Card
                </Radio>
                <CreditCardLogos />
              </div>
              <div className="w-full py-[10px] border-b">
                <Radio
                value="paypal"
                className="w-full"
                >
                    <Image
                    src={`/logo/paypal.png`}
                    alt="paypal"
                    width={200}
                    height={100}
                    className="w-[74px] h-auto"
                    />
                </Radio>
              </div>
              <div className="w-full py-[10px] border-b">
                <Radio
                value="amazon"
                className="w-full"
                >
                  <div className="flex items-center gap-1">
                    <Image
                    src={`/logo/amazon.svg`}
                    alt="amazon"
                    width={200}
                    height={100}
                    className="w-[56px] h-auto -mb-[9px]"
                    />
                    <span>pay</span>
                  </div>
                </Radio>
              </div>
              <div className="w-full py-[10px] border-b">
                <Radio
                value="afterpay"
                className="w-full"
                >
                    <Image
                    src={`/logo/afterpay.png`}
                    alt="afterpay"
                    width={200}
                    height={100}
                    className="w-[82px] h-auto"
                    />
                </Radio>
              </div>
            </RadioGroup>
          </div>
        </div>
        <Button className="px-6 text-base bg-dark text-white rounded-xl mt-8">Checkout</Button>
      </div>

      <div className="w-1/3 aspect-square sticky top-0">
        <span className="font-medium text-xl">Summary</span>
        <Cart />
        <div className="flex flex-col gap-[10px] py-[10px] border-y">
          <div className="flexBetween">
            <span>Subtotal</span>
            <span>$843</span>
          </div>
          <div className="flexBetween">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
        </div>
        <div className="flexBetween py-3 font-medium">
          <span>Total</span>
          <span>$843</span>
        </div>

      </div>
    </div>
  )
}

const Cart = () => {
  const { products } = useProductCart()
  const [showAll, setShowAll] = useState(false)
  return (
    <div className="flex flex-col gap-4 pb-5 pt-3">
        {products.map((product, index) => (
          <CartItem 
          key={index} 
          product={product}
          className={`${(index > 3 && !showAll) ? "hidden" : "flex"}`}
          />
        ))}

      {products.length > 4 && (
        <div className="w-full flexCenter">
          <button 
          onClick={() => setShowAll(prev => !prev)}
          className="border flexCenter gap-1 px-3 py-1 rounded-full hover:border-gray-300"
          >
            <span>
            {showAll ? "Show less" : "Show all"}
            </span>
            <IoIosArrowDown className={`text-lg ${showAll ? "rotate-180":"rotate-0"}`} />
          </button>
        </div>
      )}
    </div>
  )
}

const CartItem = ({product, className}:{product:ProductCart, className?:string}) => {
  return (
    <div className={`items-center gap-3 ${className}`}>
      <div className='w-[81px] h-fit aspect-square bg-light rounded-lg p-1'>
        <Image src={product.image} alt={product.name} width={`300`} height={`300`} className="w-full" />
      </div>
      <div className="w-[90%] flex justify-between gap-2">
        <div className="w-full">
          <div className="w-full">
            <p className="line-clamp-2 overflow-hidden font-medium text-sm">
            {product.quantity} x {product.name}
            </p>
          </div>

          <div className='text-xs flex flex-col'>
            {product.variants.map((variant, index) => (
              <span key={index}>{variant.label} : {variant.value}</span>
            ))}
          </div>
        </div>
        <span className="font-medium text-sm">${product.price}</span>
      </div>
    </div>
  )
}

const CreditCardLogos = () => {
  const logos = ["mastercard.png","visa.png","discover.jpg"]
  return (
    <div className="flex items-center gap-2">
      {logos.map((logo, index) => (
        <Image key={index} src={`/logo/${logo}`} alt={logo} width={100} height={100} className="w-[32px] h-auto" />
      ))}
    </div>
  )
}

export default page
