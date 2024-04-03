"use client"
import { createContext, useContext, useState } from "react"

type CartMenu = {
  isOpen: boolean
  toggleOpen: () => void
}

const cartMenuContext = createContext<CartMenu | null>(null)

const CartMenuProvider = ({children}:{children:React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen((prev) => !prev)
  return (
    <cartMenuContext.Provider value={{ isOpen, toggleOpen }}>
    {children}
    </cartMenuContext.Provider>
  )
}

export const useCartMenu = () => {
  return useContext(cartMenuContext) as CartMenu
}

export default CartMenuProvider
