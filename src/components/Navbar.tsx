import Link from 'next/link'
import Search from '@/components/Search'
import SideBarNavbar from '@/components/SideBarNavbar'
import CartSideBar from '@/components/CartSideBar'
import AvatarDropdown from './AvatarDropdown'

const Navbar = async () => {
    return(
        <nav className='w-full sticky top-0 right-0 left-0 bg-white z-[10]'>
        <div className='w-full flexCenter flexCenter py-[14px] md:py-[18px]'>
            <div className='boxWidth flexBetween'>
                {/* burger menu */}
                <div className='w-1/3 block md:hidden'>
                    < SideBarNavbar />
                </div>
                {/* 1 */}
                <div className='flexCenter gap-8 w-1/3 md:w-fit'>
                    <Link href='/' className='font-bold text-[22px] md:text-[26px]'>Gadget</Link>
                    <ul className='hidden md:flex gap-5 text-gray-800'>
                        {['Discover','Shop','Contact','About'].map(item => (
                            <li key={item} className='text-[19px]'>{item}</li>
                        ))}
                    </ul>
                </div>
                {/* 2 */}
                <div className='w-1/3 flex items-center justify-end md:w-1/2 gap-1 '>
                    < Search className={`rounded-full`} />
                    <div className='flexCenter gap-4 sm:gap-8 md:gap-5'>
                        < CartSideBar />
                        <AvatarDropdown />
                    </div>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar
