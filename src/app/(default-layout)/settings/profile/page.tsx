import FormChangeProfile from "@/components/FormChangeProfile"
import { Button, Input } from "@nextui-org/react"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full">
      <div className="text-center sm:text-start">
        <span className="font-medium text-xl md:text-2xl">Personal Data</span>
      </div>
      <FormChangeProfile />
    </div>
  )
}

export default page
