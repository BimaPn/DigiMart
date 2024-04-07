"use client"
import { Avatar } from "@nextui-org/react"
import { useAuth } from "./providers/UserProvider"

const UserLabel = () => {
  const { name, avatar } = useAuth()
  return (
    <div className="flex items-center gap-2">
      <Avatar src={avatar} className="w-[35px] h-[35px]" />
      <div className="flex flex-col">
        <span className="block font-medium truncate max-w-[128px]">{name}</span>
        <span className="text-xs text-gray-500">Account</span>
      </div>
    </div>
  )
}

export default UserLabel
