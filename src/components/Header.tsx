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
            <div className='flex justify-between items-center h-[80px] w-[85%] mx-auto'>
                <Link href="/">
                    <Image src={logo} alt='liveparte logo' />
                </Link>
                <div className='flex gap-6 items-center'>
                    <Link href="/event" className={`font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px] ${isActive('/event') ? 'text-red.300' : ''}`}>
                        Browse Events
                    </Link>
                    <Link href="/on-demand" className={`font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px] ${isActive('/on-demand') ? 'text-red.300' : ''}`}>
                        On Demand
                    </Link>
                    <Link href="/entertainers" className={`font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px] ${isActive('/entertainers') ? 'text-red.300' : ''}`}>
                        For Entertainers
                    </Link>
                </div>
                <div className='flex gap-8 items-center font-mattersq text-[15px] font-semibold'>
                    <div>Login</div>
                    <button className='text-black.100 text-[13px] bg-white.200 px-8 rounded-[8px] py-2'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Header;