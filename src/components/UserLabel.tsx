"use client"
import { Avatar } from "@nextui-org/react"
import { useAuth } from "./providers/UserProvider"

const UserLabel = ({className}:{className?:string}) => {
  const { user } = useAuth()
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar src={user.avatar} className="w-[35px] h-[35px]" />
      <div className="flex flex-col">
        <span className="block font-medium truncate max-w-[128px]">{user.name}</span>
        <span className="text-xs text-gray-500">Account</span>
      </div>
    </div>
  )
}

export default UserLabel
