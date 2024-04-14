"use client"
import { Button, Input } from "@nextui-org/react"
import Image from "next/image"
import { FiSearch } from "react-icons/fi"
import OnDeliveryBadge from "./badge/OnDeliveryBadge"
import { useState } from "react"
import FinishedBadge from "./badge/FinishedBadge"
import CancelledBadge from "./badge/CancelledBadge"
import Link from "next/link"
import { finishedTransactions, cancelledTransactions } from "@/assets/products"
import { useTransaction } from "./providers/TransactionProvider"

const OrderListContent = () => {
  const [category, setCategory] = useState<"current"|"finished"|"cancelled">("current")
  return (
    <>
     <div className="flex items-end justify-between">
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <button
            onClick={() => setCategory("current")}
            className={`px-4 py-1 rounded-full border hover:border-dark hover:text-dark
            ${category === "current" ? "text-dark border-dark":"text-gray-500 border-gray-500"}`}
            >Current</button> 
          </li>
          <li>
            <button
            onClick={() => setCategory("finished")}
            className={`px-4 py-1 rounded-full border hover:border-dark hover:text-dark
            ${category === "finished" ? "text-dark border-dark":"text-gray-500 border-gray-500"}`}
            >Finished</button> 
          </li>
          <li>
            <button 
            onClick={() => setCategory("cancelled")}
            className={`px-4 py-1 rounded-full border hover:border-dark hover:text-dark
            ${category === "cancelled" ? "text-dark border-dark":"text-gray-500 border-gray-500"}`}
            >Cancelled</button> 
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
        {category === "current" && <OnDeliveryTransction />}
        {category === "finished" && <FinishedTransction />}
        {category === "cancelled" && <CancelledTransction />}
      </div>
    </>
  )
}

const OnDeliveryTransction = () => {
  const { transactions } = useTransaction()
  return transactions.map((transaction) => <TransactionItem transaction={transaction} />)
}
const FinishedTransction = () => {
  return finishedTransactions.map((transaction) => <TransactionItem transaction={transaction} />)
}

const CancelledTransction = () => {
  return cancelledTransactions.map((transaction) => <TransactionItem transaction={transaction} />)
}


const TransactionItem = ({transaction}:{transaction: Transaction}) => {
  const checkStatus = (status: string) => {
    if(status === "onDelivery") {
      return <OnDeliveryBadge />
    }else if(status === "finished") {
      return <FinishedBadge />
    }
    return <CancelledBadge />
  }
  return (
     <div className="pb-6 px-4 border rounded-2xl">
      <div className="flexBetween py-[10px] border-b mb-4">
        <div className="flex items-center gap-7">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-600">Status</span>
            {checkStatus(transaction.status)}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-600">Payment</span>
            <span className="">{transaction.payment}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-600">Shipping</span>
            <span className="">{transaction.shipping} Shipping</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-600">Total</span>
          <span className="font-medium">${transaction.totalPrice}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {transaction.products.map((product) => (
          <ProductItem product={product} /> 
        ))}
      </div>
    </div>

  )
}

const ProductItem = ({product}:{product: ProductCart}) => {
  return (
    <div className={`flex items-center gap-4`}>
      <div className='w-[128px] h-fit aspect-square bg-light rounded-lg p-1'>
        <Image 
        src={product.image}
        alt={product.name}
        width={`300`}
        height={`300`}
        className="w-full" 
        />
      </div>
      <div className="w-[90%] flex justify-between gap-2">
        <div className="w-full">
          <div className="w-full">
            <p className="line-clamp-2 overflow-hidden font-medium">
            {product.name}
            </p>
          </div>

          <div className='text-xs flex flex-col gap-[2px]'>
            <span>Quantity : {product.quantity}</span>
            {product.variants.map((variant) => <span>{variant.label} : {variant.value}</span>)}
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-1 mt-2">
              <span className="font-medium">${product.price}</span>
              <span className="text-gray-600 text-sm">/ unit</span>
            </div>
            <Button
            as={Link}
            href={`/products/${product.slug}`}
            size="sm" className="px-6 !py-4 bg-dark text-white rounded-full">
              <span className="-mt-[2px]">Buy again</span>
            </Button>
          </div>


        </div>

      </div>
    </div>
  )
}


export default OrderListContent
