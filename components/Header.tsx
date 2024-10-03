import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <>
     <nav className="max-w-7xl md:text-sm flex sm:flex-row flex-col justify-between items-center gap-6">
      <Link href="/" className='flex items-center gap-3'>
        <Image src="./newIcon.svg" alt='logo' width={30} height={30} />
        <div className='font-bold text-lg'>AI Angels</div>
      </Link>
      <div className="text-gray-700 sm:max-w-7xl max-w-[200x]">
        Want to add yourself as an angel investor ? DM me
      </div>
     </nav>
    </>
  )
}

export default Header
