import Header from '@/components/Header';
import React from 'react';
import Faq from '@/components/Faqs';
import Footer from '@/components/Footer';
import EntertainerBanner from '@/components/homepage/entertainerBg';
import Studio from '@/components/Studio';
import GetPaid from '@/components/GetPaid';
import Enagement from '@/components/Enagement';
import Earning from '@/components/Earning';
import GoLiveCard from '@/components/Cards/GoLiveCard';
import liveparte from '../../../public/images/golive.png';
import liveparte1 from '../../../public/images/golive2.png';
import liveparte2 from '../../../public/images/golive3.png';


const Entertainers = () => {

    return (
        <div>
            <Header />
            <EntertainerBanner />
            <Studio />
            <GetPaid />
            <Earning />
            <Enagement />
            <div className='mt-32'>
                <h1 className='font-mdtest font-bold text-center text-[62px] leading-[62px] tracking-[0.48px]'>GO LIVE IN MINUTES, NOT WEEKS</h1>
                <div className='flex justify-center mx-auto gap-8 mt-16'>
                    <GoLiveCard
                        title='Create your Account'
                        description='Join as an artist or event organizer on Liveparte to access our platform.'
                        bgColor='bg-yellow.500'
                        bgImg={liveparte}
                    />
                    <GoLiveCard
                        title='Get Verified'
                        description='Once your account is verified, you can access Studio to create events.'
                        bgColor='bg-blue.200'
                        bgImg={liveparte1}
                    />
                    <GoLiveCard
                        title='Go Live'
                        description=''
                        bgColor='bg-red.200'
                        bgImg={liveparte2}
                    />
                </div>

                <div className='mt-32 w-[85%] relative mx-auto'>
                    <div className='w-full h-full relative'>
                        <svg width="1200" height="498" viewBox="0 0 1200 498" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M549 30C549 13.4315 535.569 0 519 0H30C13.4315 0 0 13.4315 0 30V468C0 484.569 13.4315 498 30 498H519C535.569 498 549 484.569 549 468V273C549 256.431 562.431 243 579 243H619C635.569 243 649 256.431 649 273V468C649 484.569 662.431 498 679 498H1170C1186.57 498 1200 484.569 1200 468V30C1200 13.4315 1186.57 0 1170 0H684C667.431 0 654 13.4315 654 30V180C654 196.569 640.569 210 624 210H579C562.431 210 549 196.569 549 180V30ZM573 226.5C573 231.747 577.253 236 582.5 236H617.5C622.747 236 627 231.747 627 226.5C627 221.253 622.747 217 617.5 217H582.5C577.253 217 573 221.253 573 226.5Z" fill="#FE4365" />
                        </svg>
                        <div className='absolute h-full flex top-1.5 justify-between w-full'>
                            <div className='flex-1'>Hello1</div>
                            <div className='flex-1 ml-20 h-full'>
                                <div className='ml-5 mr-10 h-full border'>Hello</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Faq />
            <Footer />
        </div >
    );
};

export default Entertainers;