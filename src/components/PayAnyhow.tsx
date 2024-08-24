import Image from 'next/image'
import React from 'react';
import card1 from "../../public/images/liveparte-img5.png";
import mastercard from "../../public/images/mastercard.png";
import express from "../../public/images/express.png";
import visa from "../../public/images/visa.png";
import verve from "../../public/images/verve.png";
import ebay from "../../public/images/ebay.png";
import google from "../../public/images/google.png";

const PayAnyhow = () => {
    return (
        <div className="w-[85%] relative mx-auto mt-24">
            <div className='w-full h-full relative'>
                <svg className='w-full h-full' viewBox="0 0 1200 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M524.628 0C538.088 0 549 10.9117 549 24.3719C549 37.8322 559.912 48.7439 573.372 48.7439H629.628C643.088 48.7439 654 37.8322 654 24.3719C654 10.9117 664.912 0 678.372 0H1170C1186.57 0 1200 13.4315 1200 30V468C1200 484.569 1186.57 498 1170 498H673C656.431 498 643 484.569 643 468V312.715C643 296.146 629.569 282.715 613 282.715H588C571.431 282.715 558 296.146 558 312.714V468C558 484.569 544.569 498 528 498H30C13.4315 498 0 484.569 0 468V30C0 13.4315 13.4315 0 30 0H524.628Z" fill="#00A699" />
                </svg>
                <div className='absolute top-1.5 w-full flex gap-5'>
                    <div className="flex-1">
                        <div className='px-12 pt-12'>
                            <h1 className="font-mdtest text-[62px] font-bold leading-[62px] tracking-[0.47px]">PAY ANYHOW <br />YOU WANT IT.</h1>
                            <p className="font-mattersq text-base leading-[19.2px] tracking-[-0.12px] mt-6 w-[83%]">Liveparte makes it easy to watch your favorite live events and artist from anywhere in the world. We support 22 global payment methods, over 135 currencies, and flexible payment options in more than 150 countries.</p>
                            <div className="mt-20 grid grid-cols-3 gap-3 mr-36">
                                <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                    <Image className="w-[35px] h-[22px]" src={mastercard} alt="mastercard" />
                                </div>
                                <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                    <Image className="w-[53px] h-[16px]" src={visa} alt="mastercard" />
                                </div>
                                <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                    <Image className="w-[60.52px] h-[16.36px]" src={express} alt="mastercard" />
                                </div>
                                <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                    <Image className="w-[53.3px] h-[18.42px]" src={verve} alt="mastercard" />
                                </div>
                                <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                    <Image className="w-[47px] h-[20px]" src={ebay} alt="mastercard" />
                                </div>
                                <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                    <Image className="w-[53px] h-[21px]" src={google} alt="mastercard" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full">
                        <div className='flex justify-center items-center h-full'>
                            <Image className="w-[83.5%] mt-[29px] ml-10 bg-cover object-cover" src={card1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-green.200 w-full rounded-[24px] h-auto p-10">
                <div className="flex justify-between gap-10">
                    <div className="flex-1">
                        <h1 className="font-mdtest text-[62px] font-bold leading-[62px] tracking-[0.47px]">PAY ANYHOW <br />YOU WANT IT.</h1>
                        <p className="font-mattersq text-base leading-[19.2px] tracking-[-0.12px] mt-10 w-[83%]">Liveparte makes it easy to watch your favorite live events and artist from anywhere in the world. We support 22 global payment methods, over 135 currencies, and flexible payment options in more than 150 countries.</p>
                        <div className="mt-24 grid grid-cols-3 gap-3 mr-36">
                            <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                <Image className="w-[35px] h-[22px]" src={mastercard} alt="mastercard" />
                            </div>
                            <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                <Image className="w-[53px] h-[16px]" src={visa} alt="mastercard" />
                            </div>
                            <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                <Image className="w-[60.52px] h-[16.36px]" src={express} alt="mastercard" />
                            </div>
                            <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                <Image className="w-[53.3px] h-[18.42px]" src={verve} alt="mastercard" />
                            </div>
                            <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                <Image className="w-[47px] h-[20px]" src={ebay} alt="mastercard" />
                            </div>
                            <div className="bg-green.300 h-[41px] rounded-[8px] flex justify-center items-center">
                                <Image className="w-[53px] h-[21px]" src={google} alt="mastercard" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image className="w-full h-full" src={card1} alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default PayAnyhow;