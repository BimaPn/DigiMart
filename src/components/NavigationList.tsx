"use client"
import { navigation } from "@/assets/navigation"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavigationList = ({isMobile=false}:{isMobile?: boolean}) => {
  const path = usePathname()
  return (
     <ul className={`flex ${isMobile ? "flex-col":"flex-row"} gap-5 text-gray-600`}>
      {navigation.map((item, index) => (
        <li
        key={item.label} 
        className={`${isMobile && "w-full !py-3"} py-2 hover:text-dark relative ${path === item.link ? "underline-bordered text-dark":"underlined-border"}`}>
          <Link href={item.link}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavigationList
