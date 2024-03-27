import React from 'react'
import BoxSection from '@/layouts/BoxSection'
import Link from 'next/link'
import LoginForm from './LoginForm'
import LoginWith from '@/components/LoginWith'


const page = () => {

  return (
    <BoxSection className={`flex items-start sm:items-center justify-center sm:h-screen px-1`}>
    <div className='w-full md:w-[95%] flex items-center justify-center sm:justify-between gap-6'>

    {/* icon */}
    <div className='w-[60%] hidden sm:flex items-center justify-center'>
        <img src="./images/ilustrations/login.svg" className='w-full md:w-[90%]' alt="" />
    </div>

    {/* login form */}

    <div className='w-full xs:w-[420px] sm:min-w-[312px] md:min-w-[364px] aspect-square mt-24 mb-64 sm:m-0'>
        <h1 className='font-bold text-gray-800 text-3xl sm:text-4xl mb-8'>Login</h1>
        < LoginForm />
        {/* login with */}
        <div className='w-full border-t border-gray-400 flexCenter relative mt-8 mb-10'>
            <span className='text-gray-400 text-lg bg-white px-6 absolute'>or</span>
        </div>
        < LoginWith />
        {/* register link */}
        <p className='text-[15px] text-center mt-6'>Do not have an account yet ? <Link className='font-bold' href='/register'>Register</Link></p>
    </div>
    </div>
</BoxSection>
  )
}

export default page