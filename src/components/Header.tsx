'use client'
import 'twin.macro'
import ThemeToggler from '@/UI/ThemeToggler'
import Logo from '../../public/images/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header tw="w-full flex-none bg-[#f1f3f9] backdrop-blur transition-colors duration-500 lg:z-50 dark:bg-blue-primary-300">
      <div tw="container mx-auto flex justify-between p-4">
        <Image src={Logo} alt="EZCASH" width={59} height={59} />
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header
