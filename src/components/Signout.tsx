'use client'
import { signOut } from 'next-auth/react'
import axios from 'axios'

const Signout = () => {
    const signOutUser = (e:React.FormEvent<EventTarget>) => {
      e.preventDefault()
      const confirmation = confirm("are you sure ?")
      confirmation && signOut()
      // axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/auth/logout`,{
      // })
    }
  return (
    <div>
        <button 
        onClick={signOutUser}
        className='bg-dark text-light px-4 py-2 rounded-lg md:block hidden'>
        Signout
        </button>
    </div>
  )
}

export default Signout