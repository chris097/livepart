import Image from 'next/image';
import React from 'react';
import banner from '../../../public/images/liveparte_banner.png';

const Banner = () => {
    return (
        <div className="w-[97%] mx-auto">
            <div className="relative">
                <Image className="w-full h-[662px]" src={banner} alt="liveparte banner" />
                <div className="absolute top-0 text-white.200 h-[662px] w-full">
                    <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="font-mdtest font-bold text-[92px] leading-[92px] tracking-[0.48px] uppercase">Never miss the concert</h1>
                        <p className="font-mattersq text-[20px] leading-[28px] font-normal tracking-[-0.2px] w-[38%] mt-3 text-center">Get up close and personal with your favorite artists through exclusive live events, festivals, and concerts from around the world</p>
              
                        <button className='text-black.100 text-[13px] bg-white.200 mt-10 px-5 rounded-[8px] font-medium py-3 tracking-[-0.12px]'>Browse Events</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;