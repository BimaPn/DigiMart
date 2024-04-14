import CancelledBadge from "@/components/badge/CancelledBadge"
import FinishedBadge from "@/components/badge/FinishedBadge"
import OnDeliveryBadge from "@/components/badge/OnDeliveryBadge"
import { Button, Input } from "@nextui-org/react"
import Image from "next/image"
import { FiSearch } from "react-icons/fi"

const page = () => {
  return (
    <div className="w-full mb-16">
      <span className="inline-block font-medium text-2xl mb-3">Order List</span>
      <div className="flex items-end justify-between">
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <button className="px-4 py-1 rounded-full border">Current</button> 
          </li>
          <li>
            <button className="px-4 py-1 rounded-full border">Finished</button> 
          </li>
          <li>
            <button className="px-4 py-1 rounded-full border">Cancelled</button> 
          </li>
        </ul>

        <Input 
        variant="flat"
        startContent={<FiSearch className="text-xl text-gray-600" />}
        placeholder="Search order"
        className="md:w-[30%]"
        />
      </div>

      <div className="mt-5 flex flex-col gap-4">

        <div className="pb-6 pt-1 px-4 border rounded-2xl">
          <div className="flexBetween py-[10px] border-b mb-4">
            <div className="flex items-center gap-7">
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Date</span>
                <span className="">12 September 1986</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Payment</span>
                <span className="">Paypal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-600">Shipping</span>
                <span className="">Fast Shipping</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-600">Total</span>
              <span className="font-medium">$454</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
          <ProductItem /> 
          <ProductItem /> 
          <ProductItem /> 
          </div>
        </div>

        <div className="pb-6 px-4 border rounded-2xl">
          <div className="flexBetween py-[10px] border-b mb-4">
            <div className="flex items-center gap-7">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-600">Status</span>
                <OnDeliveryBadge />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-600">Payment</span>
                <span className="">Paypal</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-600">Shipping</span>
                <span className="">Fast Shipping</span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-600">Total</span>
              <span className="font-medium">$454</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
          <ProductItem /> 
          <ProductItem /> 
          <ProductItem /> 
          </div>
        </div>
     

      </div>

    </div>
  )
}

const ProductItem = ({className}:{className?:string}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className='w-[128px] h-fit aspect-square bg-light rounded-lg p-1'>
        <Image src={`/images/categories/headset.png`} alt={`test`} width={`300`} height={`300`} className="w-full" />
      </div>
      <div className="w-[90%] flex justify-between gap-2">
        <div className="w-full">
          <div className="w-full">
            <p className="line-clamp-2 overflow-hidden font-medium">
            Headset Anjay Mabar Tau Hahaha Anjay
            </p>
          </div>

          <div className='text-xs flex flex-col gap-[2px]'>
              <span>Quantity : 2</span>
              <span>Color : Hitam</span>
              <span>Kelamin : Pria</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-1 mt-2">
              <span className="font-medium">$746</span>
              <span className="text-gray-600 text-sm">/ unit</span>
            </div>
            <Button size="sm" className="px-6 !py-4 bg-dark text-white rounded-full">
              <span className="-mt-[2px]">Buy again</span>
            </Button>
          </div>


        </div>

      </div>
    </div>
  )
}



export default page 
