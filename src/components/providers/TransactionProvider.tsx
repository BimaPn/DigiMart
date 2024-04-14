"use client"
import { onDeliveryTransactions } from "@/assets/products"
import { createContext, useContext, useState } from "react"

type TransactionProviderT = {
  transactions: Transaction[]
}
const transactionContext = createContext<TransactionProviderT | null>(null)

const TransactionProvider = ({children}:{children: React.ReactNode}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([...onDeliveryTransactions])
  return (
    <transactionContext.Provider value={{ transactions }}>
    {children}
    </transactionContext.Provider>
  )
}

export const useTransaction = () => {
  return useContext(transactionContext) as TransactionProviderT
}

export default TransactionProvider
