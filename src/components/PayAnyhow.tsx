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
        <div className="w-[85%] mx-auto mt-24">
            <div className="bg-green.200 w-full rounded-[24px] h-auto p-10">
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
            </div>
        </div>
    );
};

export default PayAnyhow;