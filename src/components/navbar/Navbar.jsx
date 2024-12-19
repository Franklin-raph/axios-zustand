import React from 'react'
import { BiCart, BiSearch, BiUser } from 'react-icons/bi'
import { BsPhone } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { NavbarData } from '../../data/MockData'
import { IoCall } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='bg-[#7E33E0] w-full'>
            <div className='flex py-2 px-[4rem] text-white justify-between max-w-[1600px] mx-auto'>
                <div className='flex items-center gap-[100px]'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <MdMail />
                        <p>info@frank.com</p>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <IoCall />
                        <p>08139362969</p>
                    </div>
                </div>
                <div className='flex items-center gap-[100px]'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <p>Login</p>
                        <BiUser />
                    </div>
                    <BiCart className='cursor-pointer'/>
                </div>
            </div>
        </div>
        <div className='flex py-4 px-[4rem] justify-between max-w-[1600px] mx-auto'>
            <div className='flex gap-[120px]'>
                <a href="/" className='text-[20px] font-[700]'>Hekto</a>
                <div className='font-[300] flex gap-7 items-center'>
                    {NavbarData.map((item) => (
                        <a key={item.id} href={item.link}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className='flex items-center border border-[#E7E6EF] pl-[6px]'>
                <input type="text" className='w-[200px] outline-none bg-transparent'/>
                <div className='bg-[#FB2E86] py-[6px] px-[10px] text-[18px] text-white'>
                    <BiSearch/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar