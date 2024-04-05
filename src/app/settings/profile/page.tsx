import { Button, Input } from "@nextui-org/react"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full">
      <span className="font-medium text-2xl">Personal Data</span>
      <div className="flex justify-between mt-4">
        <div className="w-[55%] flex flex-col gap-3">
          <Input type="text" variant="underlined" className="text-dark" placeholder="Full name" />
          <Input type="text" variant="underlined" className="text-dark" placeholder="Username" />
          <Input type="email" variant="underlined" placeholder="Your email" />
          <Input type="password" variant="underlined" placeholder="Password" value={`imbimaputra`} readOnly />
          <Button className="w-fit text-base bg-dark text-white mt-3">Change</Button>
        </div>  
        <div className="w-1/3">
          <Image src={`/avatar.jpg`} width={500} height={500} className="w-full aspect-square rounded-2xl" alt="profile picture"/>
        </div>  
      </div>
    </div>
  )
}

export default page
