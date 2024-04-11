import FormChangeProfile from "@/components/FormChangeProfile"
import { Button, Input } from "@nextui-org/react"
import Image from "next/image"

const page = () => {
  return (
    <div className="w-full">
      <span className="font-medium text-2xl">Personal Data</span>
      <FormChangeProfile />
    </div>
  )
}

export default page
