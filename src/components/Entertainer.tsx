import Image from 'next/image'
import React from 'react';
import union from "../../public/images/young-man.png";
import oletter from "../../public/svgs/o.svg";
import os from "../../public/svgs/os.svg";
import of from "../../public/svgs/of.svg";
import oc from "../../public/svgs/oc.svg";
import coc from "../../public/svgs/coc.svg";

const Entertainer = () => {
    return (
        <div>
            <div className="mt-28 lg:w-[75%] w-[95%] mx-auto">
                <h1 className="text-center lg:text-[122px] font-mdtest text-[38.92px] flex items-center justify-center lg:leading-[122px] leading-[38.92px] font-bold tracking-[0.48px] whitespace-nowrap">
                    MADE F
                    <Image
                        className="lg:w-[122px] lg:h-[122px] w-[38.92px] h-[38.92px] rounded-full"
                        src={oletter}
                        alt="liveparte"
                    />
                    R Y
                    <Image
                        className="lg:w-[122px] lg:h-[122px] w-[38.92px] h-[38.92px]"
                        src={os}
                        alt="liveparte"
                    />
                    U ❤️
                </h1>
                <p className="text-white lg:text-[80px] text-[25.52px] lg:leading-[80px] leading-[25.52px] text-[#B4BECB] text-center tracking-[0.48px] font-bold font-mdtest">
                    We are making it possible for you to watch your fav
                    <Image
                        className="inline-block align-middle lg:w-[80px] lg:h-[80px] w-[25.52px] h-[25.52px]"
                        src={of}
                        alt="liveparte"
                    />
                    urite events, <br /> c
                    <Image
                        className="inline-block align-middle lg:w-[80px] lg:h-[80px] w-[25.52px] h-[25.52px]"
                        src={oc}
                        alt="liveparte"
                    />
                    nnect with your fav
                    <Image
                        className="inline-block align-middle lg:w-[80px] lg:h-[80px] w-[25.52px] h-[25.52px]"
                        src={coc}
                        alt="liveparte"
                    />
                    rite artiste and chat with friends.
                </p>
            </div>
            <div className="relative lg:w-[85%] w-[90%] mx-auto mt-28">
                <div className='w-full h-full relative lg:bg-[#060809] bg-grey.300 lg:p-0 p-4 rounded-[30px]'>
                    <svg className='w-full lg:block hidden h-full' viewBox="0 0 1200 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M668.618 29C668.618 12.9837 655.635 0 639.618 0H50C22.3858 0 0 22.3858 0 50V440C0 467.614 22.3858 490 50 490H652H668.618H1150C1177.61 490 1200 467.614 1200 440V108C1200 80.3858 1177.61 58 1150 58H697.618C681.602 58 668.618 45.0163 668.618 29Z" fill="#1B1C20" />
                    </svg>
                    <div className='lg:absolute lg:top-1.5 w-full lg:flex gap-5'>
                        <div className="lg:w-[56%] w-full lg:p-8">
                            <Image
                                className="w-full lg:h-[426px] h-[340px] bg-cover object-cover rounded-[25px]"
                                src={union}
                                alt=""
                            />
                        </div>
                        <div className="lg:w-[40%] mt-2 ml-2">
                            <div className='flex justify-end w-full'>
                                <div className='lg:bg-none bg-[#060809] lg:h-10 rounded-r-[50px] w-full' />
                            </div>
                            <div className='lg:pb-8 pb-3 pr-3'>
                                <h1 className="font-mdtest lg:text-[62px] lg:leading-[62px] leading-[32px] text-[32px] lg:mt-10 mt-4 font-bold tracking-[0.48px] uppercase">
                                    FOR Entertainers
                                </h1>
                                <p className="lg:text-base text-[13px] lg:leading-[19.2px] leading-[15.6px] tracking-[-0.12px] text-[#B4BECB] lg:mt-3 mt-2">
                                    Liveparte empowers artists and entertainers to reach more fans,
                                    create unique experiences, expand revenue, and unlock fan
                                    engagement through live events.
                                </p>
                                <div className='grid lg:grid-cols-1 grid-cols-2'>
                                    <div className="flex items-center mt-5 gap-2">
                                        <div className="bg-red.200 w-[24px] rounded-full h-[24px] flex justify-center items-center">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6ZM3.99994 4.87171C3.99994 4.11413 4.61407 3.5 5.37165 3.5H5.49994V3.25C5.49994 2.97386 5.7238 2.75 5.99994 2.75C6.27608 2.75 6.49994 2.97386 6.49994 3.25V3.5C7.32837 3.5 7.99994 4.17157 7.99994 5C7.99994 5.27614 7.77608 5.5 7.49994 5.5C7.2238 5.5 6.99994 5.27614 6.99994 5C6.99994 4.72386 6.77608 4.5 6.49994 4.5V5.63962L7.062 5.82697C7.62213 6.01368 7.99994 6.53787 7.99994 7.12829C7.99994 7.88587 7.3858 8.5 6.62823 8.5H6.49994V8.75C6.49994 9.02614 6.27608 9.25 5.99994 9.25C5.7238 9.25 5.49994 9.02614 5.49994 8.75V8.5C4.67151 8.5 3.99994 7.82843 3.99994 7C3.99994 6.72386 4.2238 6.5 4.49994 6.5C4.77608 6.5 4.99994 6.72386 4.99994 7C4.99994 7.27614 5.2238 7.5 5.49994 7.5V6.36038L4.93787 6.17303C4.37775 5.98632 3.99994 5.46213 3.99994 4.87171ZM5.49994 5.30629V4.5H5.37165C5.16636 4.5 4.99994 4.66642 4.99994 4.87171C4.99994 5.0317 5.10232 5.17375 5.2541 5.22434L5.49994 5.30629ZM6.49994 6.69371V7.5H6.62823C6.83352 7.5 6.99994 7.33358 6.99994 7.12829C6.99994 6.9683 6.89756 6.82625 6.74577 6.77566L6.49994 6.69371Z" fill="#F7F8F8" />
                                            </svg>
                                        </div>
                                        <p className="text-grey.200 lg:text-base text-[13px] lg:leading-[19.2px] leading-[15.6px] tracking-[-0.12px] font-mattersq">Set your own price</p>
                                    </div>
                                    <div className="flex items-center mt-5 gap-2">
                                        <div className="bg-red.200 w-[24px] rounded-full h-[24px] flex justify-center items-center">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6ZM3.99994 4.87171C3.99994 4.11413 4.61407 3.5 5.37165 3.5H5.49994V3.25C5.49994 2.97386 5.7238 2.75 5.99994 2.75C6.27608 2.75 6.49994 2.97386 6.49994 3.25V3.5C7.32837 3.5 7.99994 4.17157 7.99994 5C7.99994 5.27614 7.77608 5.5 7.49994 5.5C7.2238 5.5 6.99994 5.27614 6.99994 5C6.99994 4.72386 6.77608 4.5 6.49994 4.5V5.63962L7.062 5.82697C7.62213 6.01368 7.99994 6.53787 7.99994 7.12829C7.99994 7.88587 7.3858 8.5 6.62823 8.5H6.49994V8.75C6.49994 9.02614 6.27608 9.25 5.99994 9.25C5.7238 9.25 5.49994 9.02614 5.49994 8.75V8.5C4.67151 8.5 3.99994 7.82843 3.99994 7C3.99994 6.72386 4.2238 6.5 4.49994 6.5C4.77608 6.5 4.99994 6.72386 4.99994 7C4.99994 7.27614 5.2238 7.5 5.49994 7.5V6.36038L4.93787 6.17303C4.37775 5.98632 3.99994 5.46213 3.99994 4.87171ZM5.49994 5.30629V4.5H5.37165C5.16636 4.5 4.99994 4.66642 4.99994 4.87171C4.99994 5.0317 5.10232 5.17375 5.2541 5.22434L5.49994 5.30629ZM6.49994 6.69371V7.5H6.62823C6.83352 7.5 6.99994 7.33358 6.99994 7.12829C6.99994 6.9683 6.89756 6.82625 6.74577 6.77566L6.49994 6.69371Z" fill="#F7F8F8" />
                                            </svg>
                                        </div>
                                        <p className="text-grey.200 lg:text-base text-[13px] lg:leading-[19.2px] leading-[15.6px] tracking-[-0.12px] font-mattersq">Own your fan data</p>
                                    </div>
                                    <div className="flex items-center mt-5 gap-2">
                                        <div className="bg-red.200 w-[24px] rounded-full h-[24px] flex justify-center items-center">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5ZM0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6ZM3.99994 4.87171C3.99994 4.11413 4.61407 3.5 5.37165 3.5H5.49994V3.25C5.49994 2.97386 5.7238 2.75 5.99994 2.75C6.27608 2.75 6.49994 2.97386 6.49994 3.25V3.5C7.32837 3.5 7.99994 4.17157 7.99994 5C7.99994 5.27614 7.77608 5.5 7.49994 5.5C7.2238 5.5 6.99994 5.27614 6.99994 5C6.99994 4.72386 6.77608 4.5 6.49994 4.5V5.63962L7.062 5.82697C7.62213 6.01368 7.99994 6.53787 7.99994 7.12829C7.99994 7.88587 7.3858 8.5 6.62823 8.5H6.49994V8.75C6.49994 9.02614 6.27608 9.25 5.99994 9.25C5.7238 9.25 5.49994 9.02614 5.49994 8.75V8.5C4.67151 8.5 3.99994 7.82843 3.99994 7C3.99994 6.72386 4.2238 6.5 4.49994 6.5C4.77608 6.5 4.99994 6.72386 4.99994 7C4.99994 7.27614 5.2238 7.5 5.49994 7.5V6.36038L4.93787 6.17303C4.37775 5.98632 3.99994 5.46213 3.99994 4.87171ZM5.49994 5.30629V4.5H5.37165C5.16636 4.5 4.99994 4.66642 4.99994 4.87171C4.99994 5.0317 5.10232 5.17375 5.2541 5.22434L5.49994 5.30629ZM6.49994 6.69371V7.5H6.62823C6.83352 7.5 6.99994 7.33358 6.99994 7.12829C6.99994 6.9683 6.89756 6.82625 6.74577 6.77566L6.49994 6.69371Z" fill="#F7F8F8" />
                                            </svg>
                                        </div>
                                        <p className="text-grey.200 lg:text-base text-[13px] lg:leading-[19.2px] leading-[15.6px] tracking-[-0.12px] font-mattersq">Engage with fans</p>
                                    </div>
                                </div>
                                <button className='text-black.100 text-[13px] lg:w-[160.29px] w-full bg-white.200 lg:mt-12 mt-8 h-[44px] rounded-[8px] font-mattersq font-medium tracking-[-0.12px]'>Go Live</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entertainer;