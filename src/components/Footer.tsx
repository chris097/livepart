import React from 'react';
import footerBg from '../../public/images/liveparte_footer.png';
import logo from '../../public/svgs/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../../public/svgs/facebook.svg'
import instagram from '../../public/svgs/instagram.svg'
import linkedin from '../../public/svgs/linkedin.svg'
import twitter from '../../public/svgs/x.svg'

const Footer = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto mt-44 grid grid-cols-4 ml-44 mb-5'>
                <div>
                    <Image src={logo} alt='liveparte logo' />
                    <div className='mt-8 flex gap-4'>
                        <div className='w-[32px] h-[32px]'><Image src={facebook} alt='facebook icon' /></div>
                        <div className='w-[32px] h-[32px]'><Image src={instagram} alt='facebook icon' /></div>
                        <div className='w-[32px] h-[32px]'><Image src={linkedin} alt='facebook icon' /></div>
                        <div className='w-[32px] h-[32px]'><Image src={twitter} alt='facebook icon' /></div>
                    </div>
                    <p className='font-mattersq text-base font-medium leading-[19.2px] mt-7'>© 2024 Liveparte</p>
                </div>
                <div>
                    <h1 className='font-mdtest font-bold text-[20px] leading-[20px] tracking-[-0.12px]'>Company</h1>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>About Us</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Careers</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Studio</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-mdtest font-bold text-[20px] leading-[20px] tracking-[-0.12px]'>Resources</h1>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Help Center</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Email us</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Blog</Link>
                    </div>
                </div>
                <div>
                    <h1 className='font-mdtest font-bold text-[20px] leading-[20px] tracking-[-0.12px]'>Legal</h1>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Help Center</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Email us</Link>
                    </div>
                    <div className='mt-4'>
                        <Link href="/" className='font-mattersq font-medium text-base leading-[19.2px] tracking-[-0.12px]'>Blog</Link>
                    </div>
                </div>
            </div>
            <div>
                <Image className='w-full h-full object-cover bg-cover' src={footerBg} alt="liveparte" />
            </div>
        </div>
    );
};

export default Footer;