"use client"
import React, { useState } from 'react';

interface IFaqProps {
    title: string;
    description: string;
}

const faqs: IFaqProps[] = [
    { title: 'What is Liveparte?', description: 'Yabacon Academy offers a comprehensive program designed to leverage open source  technologies to provide comprehensive training and hands-on experience in aspects of software development.' },
    { title: 'How does Liveparte work?', description: 'Yabacon Academy offers a comprehensive program designed to leverage open source  technologies to provide comprehensive training and hands-on experience in aspects of software development.' },
    { title: 'How does Liveparte handle refunds?', description: 'Yabacon Academy offers a comprehensive program designed to leverage open source  technologies to provide comprehensive training and hands-on experience in aspects of software development.' },
    { title: 'How do I gift tickets on Liveparte?', description: 'Yabacon Academy offers a comprehensive program designed to leverage open source  technologies to provide comprehensive training and hands-on experience in aspects of software development.' },
];

const AccordionItem: React.FC<IFaqProps> = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div onClick={toggleAccordion} className='bg-grey.300 p-6 mt-4 rounded-[12px] cursor-pointer w-full h-auto'>
                <h1>{title}</h1>
                {isOpen && <div className='mt-4'>
                    <p className='text-[14px] leading-[16.8px] font-mattersq tracking-[-0.12px] text-grey.200 mt-4'>Liveparte is a video streaming and fan engagement platform that gives fans direct access to live and on-demand concerts, events, and performances by top artists, comedians, and entertainers  at the most iconic venues in the world.</p>
                    <p className='text-[14px] leading-[16.8px] font-mattersq tracking-[-0.12px] text-grey.200 mt-6'>Liveparte empowers artists to connect with more fans and generate more revenue, while fans enjoy unprecedented access to their favorite performances from anywhere in the world. Our innovative service allows artists and organizers to stream live events, sell merchandise, and receive digital gifts from fans, expanding their reach and revenue potential beyond the physical limitations of traditional concert venues. Whether it's a live concert, talk show, or comedy event, we provide value to both rights holders and fans.</p>
                    <p className='text-[14px] leading-[16.8px] font-mattersq tracking-[-0.12px] text-grey.200 mt-6'>Our mission is to transform the live entertainment industry by unlocking opportunities for artists, entertainers, and content creators to connect and engage with their fans worldwide. This is our singular purpose, our reason for being. Every day, we strive to make live events more meaningful for both artists/organizers and fans, and to empower them with better access.</p>
                </div>}
            </div>
        </>
    );
};


const Faq = () => {
    return (
        <div className='mt-28 w-[85%] mx-auto'>
            <div className='flex'>
                <div className='w-[40%] h-auto'>
                    <h1 className='font-mdtest uppercase font-bold leading-[62px] text-[62px] tracking-[0.48px]'>Frequently asked questions</h1>
                    <div className='bg-grey.300 mt-24 w-[378px] h-[161px] rounded-[12px] p-6'>
                        <h1 className='font-mattersq font-medium text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.200'>Still have questions?</h1>
                        <p className='font-mattersq font-medium text-[14px] leading-[16.8px] mt-2 tracking-[-0.12px] text-grey.200'><span className='text-green.400 underline'>Contact us!</span> We’ll be happy to help you</p>
                        <button className='text-black.100 text-[13px] bg-white.200 mt-5 h-[44px] rounded-[8px] font-mattersq font-medium tracking-[-0.12px] px-3'>View all Frequently Asked Questions</button>
                    </div>
                </div>
                <div className='w-[60%] ml-4'>
                    {faqs.map((_v, i) => (
                        <AccordionItem title={_v.title} description={_v.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;