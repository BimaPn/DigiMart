"use client"
import { addresses } from "@/assets/addresses"
import { useProductCart } from "@/components/providers/ProductCartProvider"
import { Button, Radio, RadioGroup, cn } from "@nextui-org/react"
import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
import { useTransaction } from "@/components/providers/TransactionProvider"
import { useRouter } from "next/navigation"

const page = () => {
  const [checkout, setCheckout] = useState({
    shipping: "fast",
    payment: "credit card"
  })
  const { clearAll, priceTotal, products } = useProductCart()
  const { addTransaction } = useTransaction() 
  const router = useRouter()

  const onCheckout = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let newTransaction: Transaction = {
      status: "onDelivery",
      payment: checkout.payment,
      shipping: checkout.shipping,
      totalPrice: priceTotal(),
      products: products
    }
    addTransaction(newTransaction)
    clearAll()
    router.push('/checkout/success')
  }
  return products.length > 0 && (
    <form onSubmit={onCheckout} className="flex justify-between gap-6 relative px-2">
      <div className="w-[55%]">
        <ShippingAddress /> 
        <ShippingMethod
        optionChange={(option) => setCheckout((prev) => ({...prev, shipping: option}))} 
        />
        <PaymentOptions 
        optionChange={(option) => setCheckout((prev) => ({...prev, payment: option}))} 
        />
      </div>

      <div className="w-1/3 aspect-square sticky top-20 overflow-auto max-h-[80vh]">
        <span className="font-medium text-xl">Summary</span>
        <Cart products={products} />
        <div className="flex flex-col gap-[10px] py-[10px] border-y">
          <div className="flexBetween">
            <span>Subtotal</span>
            <span>$843</span>
          </div>
          <div className="flexBetween">
            <span>Shipping</span>
            <span>Free</span>
          </div>
        </div>
        <div className="flexBetween py-3 font-medium">
          <span>Total</span>
          <span>$843</span>
        </div>
        
        <Button type="submit" className="w-full text-base bg-dark text-white rounded-xl mt-2">Checkout</Button>
      </div>
    </form>
  )
}

const ShippingAddress = () => {
  return (
  <div>
    <span className="font-medium text-xl">Shipping Address</span>
    <div className="w-full border-b pb-4 pt-3">
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center h-5 gap-2 font-medium text-lg text-gray-800">
          <IoLocationSharp className="text-xl text-gray-500 -mr-1" />
          <span>{addresses[0].place}</span>
          -
          <span>{addresses[0].name}</span>
        </div>
        <div>+ {addresses[0].phoneNumber}</div>
        <span>{addresses[0].address}</span>
      </div>
    </div>
  </div>
  )
}

const ShippingMethod = ({optionChange}:{optionChange: (option: string)=>void}) => {
  const methods = [
  {
    id: "fast",
    label: "Fast Shipping",
    description: "(Estimated delivered in 5-8 days)"
  },
  {
    id: "faster",
    label: "Faster Shipping",
    description: "(Estimated delivered in 2-3 days)"
  },
  {
    id: "fastest",
    label: "Fastest Shipping",
    description: "(Estimated delivered in 1 day)"
  },
  ]
  return (
    <div className="mt-5">
        <span className="font-medium text-xl">Shipping Method</span>
        <div>
          <RadioGroup
            defaultValue={methods[0].id}
            className="w-full"
            onChange={(e) => optionChange(e.target.value)}
          >
            {methods.map((method) => (
              <div key={method.id} className="w-full flexBetween py-3 mt-1 border-b">
                <Radio
                value={method.id}
                >
                  <div className="flex flex-col">
                    <span>{method.label}</span>
                    <span className="text-xs text-gray-700">{method.description}</span>
                  </div>
                </Radio>
                <span>Free</span>
              </div>
            ))}
          </RadioGroup>
        </div>
    </div>
  )
}

const PaymentOptions = ({optionChange}:{optionChange:(option:string)=>void}) => {
  return (
    <div className="mt-5">
      <span className="font-medium text-xl">Payment</span>
      <div>
        <RadioGroup
          defaultValue="credit card"
          className="w-full mt-1"
          onChange={(e) => optionChange(e.target.value)}
        >
          <div className="w-full flexBetween py-3 border-b">
            <Radio
            value="credit card"
            >
              Credit Card
            </Radio>
            <CreditCardLogos />
          </div>
          <div className="w-full py-3 border-b">
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
          <div className="w-full py-3 border-b">
            <Radio
            value="amazon pay"
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
  )
}

const Cart = ({products}:{products:ProductCart[]}) => {
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
