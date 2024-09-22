'use client';
import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import comment from '../../public/images/comment-ent.png';
import comment1 from '../../public/images/comment-ent1.png';
import liveparte from '../../public/svgs/group-ent.svg';

const Earning = () => {
    const [rangeValue, setRangeValue] = useState<number>(50); // Default value set to 50

    const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.target.value)); // Update state when range changes
    };

    return (
        <div>
            <div className='w-[90%] mx-auto mt-6'>
                <div className='bg-grey.300 h-[426px] rounded-[40px] mt-6 flex items-center'>
                    <div className='flex-1 h-full'>
                        <div className='pl-16 pt-10 pb-12 flex flex-col justify-between h-full'>
                            <div>
                                <h1 className='text-[35px] uppercase font-mdtest font-bold leading-[35px] tracking-[-0.12px] mt-6'>Engage with Fans</h1>
                                <p className='text-grey.200 font-mattersq leading-[19.2px] text-base tracking-[-0.12px] w-[60%] mt-2'>Create more than a fanbase. The direct communication on Liveparte means more revenue.</p>
                            </div>
                            <div>
                                <Image className='w-[344px] relative z-50' src={comment} alt="liveparte_comment" />
                                <Image className='w-[288px] relative z-40 -mt-7 ml-20' src={comment1} alt="liveparte_comment" />
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <Image className='' src={liveparte} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center mt-28 font-mdtest text-[62px] leading-[62px] font-bold uppercase tracking-[0.48px] w-[45%] mx-auto'>See how much you can earn on liveparte</h1>
                <div className='flex w-[70%] mt-14 mx-auto gap-6'>
                    <div className='bg-grey.300 w-[378px] p-6 hover:border hover:border-green.400 h-[428px] rounded-[12px]'>
                        <h1 className='text-center font-mdtest font-bold text-[52px] leading-[52px] tracking-[0.48px]'>50,000</h1>
                        <p className='text-center text-[14px] leading-[16.8px] tracking-[-0.12px] text-[#63768D] mt-2'>Fans</p>
                        <input className='custom-range w-full mt-8' min="0"
                            max="100"
                            value={rangeValue}
                            onChange={handleRangeChange} type='range'
                        />
                        <div className='bg-grey.500 border border-grey.400 h-[50px] mt-6 p-2 rounded-[8px]'>
                            <p className='text-grey.600 text-[11px] font-medium font-mattersq'>Ticket Amount</p>
                            <p className='text-[13px] font-mattersq leading-4 tracking-[-0.12px]'><span className='text-grey.600'>$</span> 2</p>
                        </div>
                        <div className='bg-green.400 h-[133px] flex justify-center items-center rounded-[8px] mt-10'>
                            <h1 className='text-[52px] leading-[52px] tracking-[0.48px] font-mdtest font-bold'>$100,000</h1>
                        </div>
                    </div>
                    <div className='w-[306px] rounded-[12px] hover:border hover:border-green.400  bg-grey.300 p-6'>
                        <h1 className='uppercase font-mdtest text-[32px] leading-[32px] font-bold tracking-[0.48px]'>Liveparte</h1>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Fans needed</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>50,000</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Amount per stream</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>$2</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Payout</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>Within 7 days</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Data</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>Full Access</p>
                        </div>
                    </div>
                    <div className='w-[306px] rounded-[12px] hover:border hover:border-green.400  bg-grey.300 p-6'>
                        <h1 className='uppercase font-mdtest text-[32px] leading-[32px] font-bold tracking-[0.48px]'>Other platforms</h1>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Streams needed</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>40,000,000</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Amount per stream</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>$0.0025</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Payout</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>60-90 Days</p>
                        </div>
                        <div className='mt-8'>
                            <h2 className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.600'>Data</h2>
                            <p className='font-medium text-base font-mattersq leading-[19.8px] tracking-[-0.12px] mt-1.5'>Demography</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earning;