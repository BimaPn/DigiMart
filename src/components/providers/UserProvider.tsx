"use client"
import { createContext, useContext, useState } from "react"

type UserProviderT = {
  user: User
  changeUser: (user: User) => void
}
const currentUser : User = {
  name: "John Martial",
  email: "johnmtl@gmail.com",
  avatar: "/avatar.jpg"
}
const userContext = createContext<UserProviderT | null>(null)

const UserProvider = ({children}:{children: React.ReactNode}) => {
  const [user, setUser] = useState<User>(currentUser)

  const changeUser = (user: User) => {
    setUser(user)
  }
  return (
    <userContext.Provider value={{ user, changeUser }}>
      {children}
    </userContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(userContext) as UserProviderT
}

export default UserProvider
