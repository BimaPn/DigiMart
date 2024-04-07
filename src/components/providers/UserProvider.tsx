"use client"

import { createContext, useContext, useState } from "react"

type User = {
  name: string
  email: string
  avatar: string
}

const currentUser : User = {
  name: "John Martial",
  email: "johnmtl@gmail.com",
  avatar: "/avatar.jpg"
}
const userContext = createContext<User | null>(null)

const UserProvider = ({children}:{children: React.ReactNode}) => {
  const [user, setUser] = useState<User>(currentUser)
  return (
    <userContext.Provider value={user}>
      {children}
    </userContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(userContext) as User
}

export default UserProvider
