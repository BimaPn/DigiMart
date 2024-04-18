"use client"
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import { useAuth } from './providers/UserProvider'
import { TbCameraPlus } from "react-icons/tb"
import { useEffect, useRef, useState } from 'react'

const FormChangeProfile = () => {
  const { user, changeUser } = useAuth()
  const [data, setData] = useState<User>(user)
  const [disabledButton, setDisableButton] = useState<boolean>(false)
  const inputImage = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const checkIsDataEmpty = () => {
      return data.name.length <= 0 || data.email.length <= 0 || data.avatar.length <= 0
    }
    setDisableButton(checkIsDataEmpty())
  },[data])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setData((data) => ({...data, avatar: URL.createObjectURL(file)}))
        console.log(file)
    }
  };
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    changeUser(data)
  }
  return (
    <form onSubmit={formSubmit} className="flex sm:flex-row flex-col-reverse sm:items-start gap-8 sm:gap-0 items-center justify-between mt-4">
      <div className="w-full sm:w-[55%] md:w-[52%] flex flex-col gap-3">
        <Input 
        type="text"
        value={data.name}
        onChange={(e) => setData((data) => ({...data, name: e.target.value}))}
        variant="flat"
        label="Name"
        className="text-dark"
        placeholder="Full name"
        />
        <Input 
        type="email"
        value={data.email}
        onChange={(e) => setData((data) => ({...data, email: e.target.value}))}
        variant="flat"
        label="Email"
        placeholder="Your email"
        />
        <Input
        type="password"
        variant="flat"
        label="Password"
        placeholder="Password"
        value={`imbimaputra`}
        readOnly
        />
        <Input
        type="date"
        variant="flat"
        label="Birth Date"
        placeholder="Birth Date"
        value={new Date("11-10-1986").toISOString().substr(0, 10)}
        readOnly
        />
        <Button 
        className="w-full sm:w-fit text-base bg-dark text-white mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
        type='submit'
        disabled={disabledButton}
        >Change</Button>
      </div>  
      <div className="xs:w-[40%] w-1/2 sm:w-[262px] md:w-[34%] relative group">
        <input ref={inputImage} type="file" onChange={handleImageChange} className='hidden' />
        <Image
        src={data.avatar}
        width={500}
        height={500}
        className="w-full aspect-square rounded-2xl" 
        alt="profile picture"
        />
        <div className='absolute left-0 top-0 w-full aspect-square bg-dark/45 rounded-2xl hidden group-hover:flex items-center justify-center cursor-pointer'>
          <button type='button' onClick={() => inputImage.current?.click()}>
            <TbCameraPlus className='text-white text-2xl' />
          </button>
        </div>
      </div>  
    </form>
  )
}

export default FormChangeProfile
