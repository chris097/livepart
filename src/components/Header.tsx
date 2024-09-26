"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../../public/svgs/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const isActive = (path: any) => pathname === path;

    return (
        <div className='fixed z-[900] left-0 top-0 w-full bg-[#060809]'>
            <div className='flex justify-between items-center h-[80px] lg:w-[85%] w-[95%] mx-auto'>
                <Link href="/">
                    <Image src={logo} alt='liveparte logo' />
                </Link>
                <div className='lg:flex hidden gap-6 items-center'>
                    <Link href="/event" className={`font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px] ${isActive('/event') ? 'text-red.300' : ''}`}>
                        <div className='font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px]'>Browse Events</div>
                    </Link>
                    <Link href="/on-demand" className={`font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px] ${isActive('/on-demand') ? 'text-red.300' : ''}`}>
                        <div className='font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px]'>On Demand</div>
                    </Link>
                    <Link href="/entertainers" className={`font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px] ${isActive('/entertainers') ? 'text-red.300' : ''}`}>
                        <div className='font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px]'>For Entertainers</div>
                    </Link>
                </div>
                <div className='lg:flex hidden gap-8 items-center font-mattersq text-[15px] font-semibold'>
                    <div>Login</div>
                    <button className='text-black.100 text-[13px] bg-white.200 px-8 rounded-[8px] py-2'>Sign Up</button>
                </div>
                <div className='lg:hidden flex bg-[rgba(186, 207, 247, 0.12)]] w-[53px] h-[27px] border border-[#BACFF7]/40  rounded-[8px] text-[11px] font-mattersq justify-center items-center font-medium text-center'>
                    <p className='text-white'>Menu</p>
                </div>
            </div>
        </div>
    );
};

export default Header;