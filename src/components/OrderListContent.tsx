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
     <div className="flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-5 md:gap-0">
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
        className="w-full xs:w-[80%] sm:w-1/2 md:w-[30%]"
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
  return transactions.map((transaction, i) => <TransactionItem key={i} transaction={transaction} />)
}
const FinishedTransction = () => {
  return finishedTransactions.map((transaction, i) => <TransactionItem key={i} transaction={transaction} />)
}

const CancelledTransction = () => {
  return cancelledTransactions.map((transaction, i) => <TransactionItem key={i} transaction={transaction} />)
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
     <div className="pb-3 xs:pb-6 px-4 border rounded-2xl">
      <div className="flexBetween py-[10px] border-b mb-4">
        <div className="flex items-center gap-7">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-600">Status</span>
            {checkStatus(transaction.status)}
          </div>
          <div className="hidden xs:flex flex-col gap-1">
            <span className="text-xs text-gray-600">Payment</span>
            <span className="text-sm xs:text-base">{transaction.payment}</span>
          </div>
          <div className="hidden xs:flex flex-col gap-1">
            <span className="text-xs text-gray-600">Shipping</span>
            <span className="text-sm xs:text-base">{transaction.shipping} Shipping</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-600">Total</span>
          <span className="font-medium text-sm xs:text-base">${transaction.totalPrice}</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {transaction.products.map((product) => (
          <ProductItem key={product.slug} product={product} /> 
        ))}
      </div>
    </div>

  )
}

const ProductItem = ({product}:{product: ProductCart}) => {
  return (
    <div className={`flex items-center gap-4`}>
      <div className='xs:w-[128px] w-[111px] h-fit aspect-square bg-light rounded-lg p-1'>
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
            <p className="line-clamp-2 overflow-hidden font-medium mb-1 xs:mb-0">
            {product.name}
            </p>
          </div>

          <div className='text-xs flex xs:flex-col flex-wrap gap-2 xs:gap-[2px] leading-[11px] xs:leading-normal'>
            <span>Quantity : {product.quantity},</span>
            {product.variants.map((variant, i) => <span key={i}>{variant.label} : {variant.value},</span>)}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 mt-2">
              <span className="font-medium">${product.price}</span>
              <span className="text-gray-600 text-sm">/ unit</span>
            </div>
            <div className="mt-3 xs:mt-0">
              <Button
              as={Link}
              href={`/products/${product.slug}`}
              size="sm" className="px-3 xs:px-6 !py-4 bg-dark text-white rounded-full">
                <span className="-mt-[2px]">Buy again</span>
              </Button>
            </div>

          </div>


        </div>

      </div>
    </div>
  )
}


export default OrderListContent
