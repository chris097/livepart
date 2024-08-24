import Image from 'next/image';
import React from 'react';
import liveparte_e from '../../../public/images/liveparte-e.png'

const EntertainerBanner = () => {
    return (
        <>
            <div className="text-white.200 h-[400px] mt-32 w-full">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="font-mdtest font-bold text-[92px] leading-[92px] tracking-[0.48px] uppercase">BRING THE SHOWS HOME</h1>
                    <p className="font-mattersq text-[20px] leading-[28px] font-normal tracking-[-0.2px] w-[45%] mt-3 text-center">Reach more fans with real-time broadcasts of incredible performances. Create immersive experiences, expand your revenue and unlock fan engagements.</p>

                    <button className='text-black.100 text-[13px] bg-white.200 mt-10 px-5 rounded-[8px] font-medium py-3 tracking-[-0.12px]'>Create An Account</button>
                </div>
            </div>

            <div className='w-[90%] mx-auto mt-5'>
                <Image className='w-full h-full bg-cover object-cover' src={liveparte_e} alt='liveparte' />
            </div>
        </>
    );
};

export default EntertainerBanner;