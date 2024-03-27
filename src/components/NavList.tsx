'use client'
import {useState} from 'react'
import Link from 'next/link'
type listT = {
    title:string,
    link:string
}

const NavList = ({className,list,title,}:{className?:string,list:listT[],title:string}) => {
    const [showList,setShowList] = useState<boolean>(false)
  return (
    <div className={className}>
      <button onClick={() => setShowList(prev => !prev)} className="w-full flexBetween py-2 outline-none">
        <h2 className="font-bold text-lg">{title}</h2>
      </button>
        <ul className={`${showList ? 'flex' : 'hidden'} xs:flex flex-col gap-4 xs:gap-2 text-sm text-semiDark mt-2 transition-all font-roboto`}>
            {list.map((item,index) => 
                <li key={index} className='hover:text-dark cursor-pointer'><Link href={item.link}>{item.title}</Link></li>
            )}
        </ul>
    </div>
  )
}

export default NavList