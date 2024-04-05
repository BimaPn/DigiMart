"use client"
import {Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react"
import { IoMdSettings } from "react-icons/io"
import {  FaUser } from "react-icons/fa6"
import { IoLogOut } from "react-icons/io5"
import Link from "next/link"
import { HiMiniHeart } from "react-icons/hi2"

const AvatarDropdown = ({className}:{className?:string}) => {
  return (
      <div>
        <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar 
          src="/avatar.jpg" 
          className="w-[34px] h-[34px]"
          as={`button`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="profile" className="py-3">
            <div className="flex items-center gap-2">
              <Avatar src="/avatar.jpg" className="w-[35px] h-[35px]" />
              <div className="flex flex-col">
                <span className="block font-medium truncate max-w-[128px]">Alexsandre Dicaprio Santoso Nugroho Sucipto Abroho Suryono Tikotok</span>
                <span className="text-xs text-gray-500">Account</span>
              </div>
            </div>
          </DropdownItem>

          <DropdownItem
          key="my_profile"
          className="group"
          startContent={
          <FaUser className="text-lg mx-[2px] group-hover:text-black text-gray-500" />
          }
          >
           My profile 
          </DropdownItem>

          <DropdownItem 
          key="settings"
          className="group"
          startContent={
          <IoMdSettings className="text-[22px] group-hover:text-black text-gray-500" />
          }>
          Settings</DropdownItem>

          <DropdownItem 
          key="favorite"
          as={Link}
          href="/favorite"
          className="group"
          startContent={
          <HiMiniHeart className="text-[23px] -ml-[1px] group-hover:text-black text-gray-500" />
          }>
          Favorite</DropdownItem>

          <DropdownItem 
          key="logout"
          color="danger"
          startContent={
          <div>
          <IoLogOut className="text-[22px] text-gray-500 ml-[2px] -mr-[2px]"/>
          </div>
          }
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
  )
}

export default AvatarDropdown
