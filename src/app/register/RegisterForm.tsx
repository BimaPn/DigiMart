'use client'
import { useState} from 'react'
import TextInput from '@/components/TextInput'
import InputError from '@/components/InputError'
import PrimaryButton from '@/components/PrimaryButton'
import { RegisterErrorsProps } from '@/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
    })
    const [errors,setErrors] = useState<RegisterErrorsProps | null>(null)
    const router = useRouter()
    const submit =  (e:React.FormEvent<EventTarget>) => {
        e.preventDefault()

        axios.post(`${process.env.NEXT_PUBLIC_DATABASE_URL}/api/auth/register`,data)
        .then(() => {
            router.push('/login')
        })
        .catch(error => {
            const validatedErrors = error.response.data
            setErrors({...validatedErrors})
        });
      }
      
  return (
    <form onSubmit={submit} >
    <div className='mb-6'>
        <TextInput
            id="Name"
            type="text"
            name="Name"
            placeholder="Name"
            value={data.name}
            required
            onChange={(e) => setData({...data,name : e.target.value})}
        />
        <InputError message={errors?.name && errors.name[0]} className="mt-1" />
    </div>
    <div className='mb-6'>
        <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={data.email}
            required
            onChange={(e) => setData({...data,email : e.target.value})}
        />
        <InputError message={errors?.email && errors.email[0]} className="mt-1" />
    </div>
    <div className="mb-6">
        <TextInput
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            required
            onChange={(e) => setData({...data,password : e.target.value})}
        />
    </div>
    <div className="mb-6">
        <TextInput
            id="confirm_password"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={data.password_confirmation}
            required
            onChange={(e) => setData({...data,password_confirmation : e.target.value})}
        />
        <InputError message={errors?.password && errors.password[0]} className="mt-1" />
    </div>
        <PrimaryButton className='rounded-lg'>
            Register
        </PrimaryButton>
    </form>
  )
}

export default RegisterForm

        // axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}/sanctum/csrf-cookie`)
        // .then(() => {
        // })