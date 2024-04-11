import { addresses } from "@/assets/addresses"
import { Button, Radio, RadioGroup, cn } from "@nextui-org/react"
import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5"

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
        <div className="flex flex-col gap-[10px] py-[10px] border-b">
          <div className="flexBetween">
            <span>Subtotal</span>
            <span>$843</span>
          </div>
          <div className="flexBetween">
            <span>Shipping</span>
            <span>FREE</span>
          </div>
        </div>
        <div className="flexBetween py-3 border-b font-medium">
          <span>Total</span>
          <span>$843</span>
        </div>

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
