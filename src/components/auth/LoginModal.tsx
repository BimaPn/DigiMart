"use client"
import {
Modal,
ModalContent,
ModalHeader,
ModalBody,
ModalFooter,
Button,
useDisclosure,
Input
} from "@nextui-org/react";
import Link from "next/link";

const LoginModal = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button onPress={onOpen} className="bg-dark text-white text-base md:block hidden" size="md">Login</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <span className="font-medium text-2xl">Login</span> 
                <div className="">
                  <Input type="email" variant="underlined" label="Enter email" radius="sm" />
                  <Input type="password" variant="underlined" label="Enter password" radius="sm" />
                </div>


              </ModalBody>
              <ModalFooter>
                <div className="w-full flex flex-col gap-3">
                  <div className="text-sm text-gray-600">
                    <span>Dont have an account ? <Link className="font-medium text-dark" href={`/register`}>Register</Link></span>
                  </div>
                  <Button className="w-full bg-dark text-white" radius="sm" onPress={onClose}>
                   Login 
                  </Button>
                </div>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginModal
