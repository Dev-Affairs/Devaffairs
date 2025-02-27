import React from 'react'
import Image from 'next/image';
import NavMenu from './NavMenu';
import Link from 'next/link';

function NavBar() {
    return (
        <>
            <nav className="flex justify-between items-center px-6 lg:px-12 py-4 border-b bg-white shadow-md fixed w-full top-0 left-0 z-50 h-20">
                <div className='flex justify-between container m-auto'>
                    <Link className="flex items-center space-x-2 cursor-pointer select-none" href={'/'}>
                        <Image src="/logo/da_logo_bg.svg" alt="Logo" width={36} height={36} />
                        {/* <Image src="/logo/da_text.svg" alt="Brand Name" height={28} width={120} /> */}
                        <span className='text-black text-xl font-bold'>DEV AFFAIRS</span>
                    </Link>
                    <NavMenu />

                </div>
            </nav>
           
        </>
    )
}

export default NavBar