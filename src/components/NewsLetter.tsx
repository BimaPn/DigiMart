import { BsArrowLeft } from "react-icons/bs"
 
const NewsLetter = ({className}:{className?:string}) => {
  return (
    <div className={`${className} font-roboto`}>
        <h1 className="font-roboto font-medium tracking-wide text-xl xs:text-2xl mb-3 xs:mb-5">News Letter</h1>
        <form action="">
          <div className="w-full flex border-b border-dark">
            <input type="text" className="w-full py-2 border-0 focus:ring-0" placeholder="Enter your email" />
            <button type="submit">< BsArrowLeft className='text-2xl rotate-180' /></button>
          </div>
        <div className="flex mt-6">
              <input type="checkbox" className='rounded-full focus:ring-0'/>
            <span className="text-sm ml-2">I have read and I agree with the Terms of Use and Privacy Policy.</span>
        </div>
        </form>
    </div>
  )
}

export default NewsLetter
