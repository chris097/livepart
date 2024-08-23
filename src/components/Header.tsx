import Image from 'next/image';
import React from 'react';
import logo from '../../public/svgs/logo.svg';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex justify-between items-center h-[80px] w-[85%] mx-auto'>
            <div>
                <Image src={logo} alt='liveparte logo' />
            </div>
            <div className='flex gap-6 items-center'>
                <Link className='font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px]' href="/">Browse Events</Link>
                <Link className='font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px]' href="/">On Demand</Link>
                <Link className='font-mattersq font-semibold text-[15px] leading-[14px] tracking-[-0.12px]' href="/">For Entertainers</Link>
            </div>
            <div className='flex gap-8 items-center font-mattersq text-[15px] font-semibold'>
                <div>Login</div>
                <button className='text-black.100 text-[13px] bg-white.200 px-8 rounded-[8px] py-2'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;