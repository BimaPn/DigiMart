import { addresses } from "@/assets/addresses"
import { Chip, Divider, Input } from "@nextui-org/react"
import { BsShareFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { PiShareNetworkFill } from "react-icons/pi"

const page = () => {
  return (
    <div className="w-full">
        <span className="inline-block font-medium text-2xl mb-3">Addresses</span>
        <Input 
        variant="flat"
        startContent={<FiSearch className="text-xl text-gray-600" />}
        placeholder="Search address"
        className="md:w-[40%]"
        />
        <div className="flex flex-col gap-2 mt-2">
          {addresses.map((address) => <AddressItem address={address} />)}
        </div>  
    </div>
  )
}

const AddressItem = ({address}:{address: Address}) => {
  return (
    <div className="w-full border-b p-4">
      <div className="flexBetween">
        <div className="flex items-center gap-2">
          <span className="font-medium text-[15px] text-gray-600">{address.place}</span>
          {address.main && (
            <div className="px-[10px] py-[3px] bg-blue-100 text-xs text-blue-600 font-medium rounded-lg">
            Main
            </div>
          )}
        </div>
        <div className="hover:cursor-not-allowed">
        <PiShareNetworkFill className="text-xl text-gray-600" />
        </div>

      </div>
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center h-5 gap-2">
          <div className="font-medium text-lg">{address.name}</div>
          <Divider orientation="vertical" />
          <div className="text-sm text-gray-600">{address.phoneNumber}</div>
        </div>
        <span>{address.address}</span>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <button className="text-gray-600 hover:text-dark cursor-not-allowed">Edit</button>
        <button className="text-gray-600 hover:text-dark cursor-not-allowed">Delete</button>
      </div>
    </div>
  )
}

export default page
