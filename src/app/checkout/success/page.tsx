"use client"
import TransactionSuccess from '@/components/ilustration/TransactionSuccess'
import { useTransaction } from '@/components/providers/TransactionProvider'
import { Button } from '@nextui-org/react'
import Link from 'next/link'

const page = () => {
  const { transactions } = useTransaction()
  return transactions.length > 1 && (
    <div className='w-[512px] mx-auto pt-3'>
      <div className='flexCenter flex-col'>
        <TransactionSuccess width={268} /> 
        <h1 className='font-medium text-2xl mt-7 mb-3'>Order Has Been Created</h1>
        <span>Just wait the order bitch, its still on delivery</span>
      </div>
      <div className='absolute bottom-0 right-0 left-0'>
        <div className='w-[512px] flex items-center gap-4 py-4 mx-auto'>
          <Button as={Link} href='/' variant='bordered' className='basis-1/2'>Shop more</Button>
          <Button as={Link} href='/settings/orders' className='basis-1/2 bg-dark text-white'>Check order</Button>
        </div>
      </div>
    </div>
  )
}

export default page
