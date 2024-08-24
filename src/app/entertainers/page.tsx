import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';
import comment from '../../../public/images/comment-ent.png'
import comment1 from '../../../public/images/comment-ent1.png'
import Faq from '@/components/Faqs';
import Footer from '@/components/Footer';
import liveparte from '../../../public/svgs/group-ent.svg'
import EntertainerBanner from '@/components/homepage/entertainerBg';
import Studio from '@/components/Studio';
import GetPaid from '@/components/GetPaid';

const Entertainers = () => {
    return (
        <div>
            <Header />
            <EntertainerBanner />
            <Studio />
            <GetPaid />
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
            </div>
            <Faq />
            <Footer />
        </div >
    );
};

export default Entertainers;