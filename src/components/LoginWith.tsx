import Link from "next/link"

const LoginWith = () => {
    return (
      <div className='w-full flexCenter flex-col gap-4 text-gray-500'>
        <Link className="w-full" href={`google.com`}>
            <div className='w-full flexCenter gap-3 py-2  border rounded-lg border-gray-300 hover:bg-light cursor-pointer'>
                <img src="/icons/google.svg" className='w-5' alt="googleLogin" />
                <span className='font-bold'>Login with Google</span>
            </div>
        </Link>
        <Link className="w-full" href={`facebook.com`}>        
            <div className='w-full flexCenter gap-3 py-2  border rounded-lg border-gray-300 hover:bg-light cursor-pointer'>
                <img src="/icons/facebook.svg" className='w-[22px]' alt="facebookLogin" />
                <span className='font-bold'>Login with Facebook</span>
            </div>
        </Link>
      </div>
    )
  }
export default LoginWith