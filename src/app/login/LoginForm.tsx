'use client'
import {useState} from 'react'
import TextInput from '@/components/TextInput'
import InputError from '@/components/InputError'
import PrimaryButton from '@/components/PrimaryButton'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const [errors,setErrors] = useState<string | null>(null)
    const router = useRouter();
    const submit = (e:React.FormEvent<EventTarget>) => {
        e.preventDefault()
        signIn('credentials',{...data,redirect : false})
        .then((callback) => {
            if(callback?.error){
                setErrors(callback.error)
            }
            if(callback?.ok && !callback.error){
                router.push("/")
            }
        })
      }
  return (
    <form onSubmit={submit} >

    <InputError message={errors && errors} className="mb-2" />
    <div className='mb-6'>
        <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            required
            onChange={(e) => setData({...data,email : e.target.value})}
            placeholder="Email Address"
        />
    </div>
    <div className="mb-6">
        <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            required
            onChange={(e) => setData({...data,password : e.target.value})}
            placeholder="Password"
        />
        
    </div>
        <Link href={`forgotpw`} className=''>Forgot Password ?</Link>
        <PrimaryButton className='rounded-lg'>
            Login
        </PrimaryButton>
    </form>
  )
}

export default LoginForm