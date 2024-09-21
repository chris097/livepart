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
import tracks from '../../../public/images/tracks.png';
import artist_a from '../../../public/images/artist_a.png';
import lock from '../../../public/images/lock.png';
import Image from 'next/image';


const Entertainers = () => {

    return (
        <div className='overflow-x-hidden'>
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
                            <path fillRule="evenodd" clipRule="evenodd" d="M549 30C549 13.4315 535.569 0 519 0H30C13.4315 0 0 13.4315 0 30V468C0 484.569 13.4315 498 30 498H519C535.569 498 549 484.569 549 468V273C549 256.431 562.431 243 579 243H619C635.569 243 649 256.431 649 273V468C649 484.569 662.431 498 679 498H1170C1186.57 498 1200 484.569 1200 468V30C1200 13.4315 1186.57 0 1170 0H684C667.431 0 654 13.4315 654 30V180C654 196.569 640.569 210 624 210H579C562.431 210 549 196.569 549 180V30ZM573 226.5C573 231.747 577.253 236 582.5 236H617.5C622.747 236 627 231.747 627 226.5C627 221.253 622.747 217 617.5 217H582.5C577.253 217 573 221.253 573 226.5Z" fill="#FE4365" />
                        </svg>
                        <div className='absolute h-full flex top-1.5 justify-between w-full'>
                            <div className='flex-1'>
                                <div className='px-12 py-7'>
                                    <h1 className='font-mdtest text-[62px] leading-[62px] tracking-[0.48px] font-bold'>YOU’RE PROTECTED AGAINST FRAUD</h1>
                                    <p className='font-mattersq text-base font-[400] leading-[19.2px] tracking-[-0.12px] w-[90%] mt-4'>All live events are securely protected to reduce stream fraud and account sharing, ensuring that only paying fans get access.</p>
                                    <div className='flex items-center gap-3 mt-7'>
                                        <div className='bg-[#D03846] w-[32px] h-[32px] rounded-full flex justify-center items-center'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.12" x="3.33333" y="1.33337" width="9.33333" height="13.3333" rx="4" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.51192 0.833374L6.53333 0.833374H9.46666L9.48807 0.833374C10.03 0.833369 10.467 0.833365 10.821 0.862283C11.1854 0.892058 11.5055 0.954964 11.8016 1.10586C12.272 1.34554 12.6545 1.72799 12.8942 2.1984C13.0451 2.49454 13.108 2.81464 13.1378 3.17906C13.1667 3.53297 13.1667 3.96999 13.1667 4.51181V4.51196V4.53337V11.4667V11.4881V11.4883C13.1667 12.0301 13.1667 12.4671 13.1378 12.821C13.108 13.1854 13.0451 13.5055 12.8942 13.8017C12.6545 14.2721 12.272 14.6545 11.8016 14.8942C11.5055 15.0451 11.1854 15.108 10.821 15.1378C10.467 15.1667 10.03 15.1667 9.48813 15.1667H9.48808H9.46666H6.53333H6.51191H6.51186C5.97 15.1667 5.53294 15.1667 5.17902 15.1378C4.81459 15.108 4.4945 15.0451 4.19835 14.8942C3.72795 14.6545 3.3455 14.2721 3.10581 13.8017C2.95492 13.5055 2.89201 13.1854 2.86224 12.821C2.83332 12.4671 2.83332 12.03 2.83333 11.4881L2.83333 11.4667V4.53337L2.83333 4.51197C2.83332 3.97008 2.83332 3.533 2.86224 3.17906C2.89201 2.81464 2.95492 2.49454 3.10581 2.1984C3.3455 1.72799 3.72795 1.34554 4.19835 1.10586C4.4945 0.954964 4.81459 0.892058 5.17902 0.862283C5.53296 0.833365 5.97003 0.833369 6.51192 0.833374ZM5.26045 1.85896C4.95786 1.88368 4.78402 1.92977 4.65234 1.99686C4.3701 2.14067 4.14063 2.37015 3.99682 2.65239C3.92973 2.78407 3.88364 2.95791 3.85892 3.26049C3.83372 3.56891 3.83333 3.96507 3.83333 4.53337V11.4667C3.83333 12.035 3.83372 12.4312 3.85892 12.7396C3.88364 13.0422 3.92973 13.216 3.99682 13.3477C4.14063 13.6299 4.3701 13.8594 4.65234 14.0032C4.78402 14.0703 4.95786 14.1164 5.26045 14.1411C5.56887 14.1663 5.96503 14.1667 6.53333 14.1667H9.46666C10.035 14.1667 10.4311 14.1663 10.7395 14.1411C11.0421 14.1164 11.216 14.0703 11.3476 14.0032C11.6299 13.8594 11.8594 13.6299 12.0032 13.3477C12.0703 13.216 12.1164 13.0422 12.1411 12.7396C12.1663 12.4312 12.1667 12.035 12.1667 11.4667V4.53337C12.1667 3.96507 12.1663 3.56891 12.1411 3.26049C12.1164 2.95791 12.0703 2.78407 12.0032 2.65239C11.8594 2.37015 11.6299 2.14067 11.3476 1.99686C11.216 1.92977 11.0421 1.88368 10.7395 1.85896C10.4311 1.83376 10.035 1.83337 9.46666 1.83337H6.53333C5.96503 1.83337 5.56887 1.83376 5.26045 1.85896ZM6.16666 12.6667C6.16666 12.3906 6.39052 12.1667 6.66666 12.1667H9.33333C9.60947 12.1667 9.83333 12.3906 9.83333 12.6667C9.83333 12.9428 9.60947 13.1667 9.33333 13.1667H6.66666C6.39052 13.1667 6.16666 12.9428 6.16666 12.6667ZM8 4.00004C8.36819 4.00004 8.66666 3.70156 8.66666 3.33337C8.66666 2.96518 8.36819 2.66671 8 2.66671C7.63181 2.66671 7.33333 2.96518 7.33333 3.33337C7.33333 3.70156 7.63181 4.00004 8 4.00004Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p>One device login</p>
                                    </div>
                                    <div className='flex gap-3 items-center mt-5'>
                                        <div className='bg-[#D03846] w-[32px] h-[32px] flex justify-center items-center rounded-full'>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.12" x="3.33333" y="1.33337" width="9.33333" height="13.3333" rx="4" fill="white" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.51192 0.833374L6.53333 0.833374H9.46666L9.48807 0.833374C10.03 0.833369 10.467 0.833365 10.821 0.862283C11.1854 0.892058 11.5055 0.954964 11.8016 1.10586C12.272 1.34554 12.6545 1.72799 12.8942 2.1984C13.0451 2.49454 13.108 2.81464 13.1378 3.17906C13.1667 3.53297 13.1667 3.96999 13.1667 4.51181V4.51196V4.53337V11.4667V11.4881V11.4883C13.1667 12.0301 13.1667 12.4671 13.1378 12.821C13.108 13.1854 13.0451 13.5055 12.8942 13.8017C12.6545 14.2721 12.272 14.6545 11.8016 14.8942C11.5055 15.0451 11.1854 15.108 10.821 15.1378C10.467 15.1667 10.03 15.1667 9.48813 15.1667H9.48808H9.46666H6.53333H6.51191H6.51186C5.97 15.1667 5.53294 15.1667 5.17902 15.1378C4.81459 15.108 4.4945 15.0451 4.19835 14.8942C3.72795 14.6545 3.3455 14.2721 3.10581 13.8017C2.95492 13.5055 2.89201 13.1854 2.86224 12.821C2.83332 12.4671 2.83332 12.03 2.83333 11.4881L2.83333 11.4667V4.53337L2.83333 4.51197C2.83332 3.97008 2.83332 3.533 2.86224 3.17906C2.89201 2.81464 2.95492 2.49454 3.10581 2.1984C3.3455 1.72799 3.72795 1.34554 4.19835 1.10586C4.4945 0.954964 4.81459 0.892058 5.17902 0.862283C5.53296 0.833365 5.97003 0.833369 6.51192 0.833374ZM5.26045 1.85896C4.95786 1.88368 4.78402 1.92977 4.65234 1.99686C4.3701 2.14067 4.14063 2.37015 3.99682 2.65239C3.92973 2.78407 3.88364 2.95791 3.85892 3.26049C3.83372 3.56891 3.83333 3.96507 3.83333 4.53337V11.4667C3.83333 12.035 3.83372 12.4312 3.85892 12.7396C3.88364 13.0422 3.92973 13.216 3.99682 13.3477C4.14063 13.6299 4.3701 13.8594 4.65234 14.0032C4.78402 14.0703 4.95786 14.1164 5.26045 14.1411C5.56887 14.1663 5.96503 14.1667 6.53333 14.1667H9.46666C10.035 14.1667 10.4311 14.1663 10.7395 14.1411C11.0421 14.1164 11.216 14.0703 11.3476 14.0032C11.6299 13.8594 11.8594 13.6299 12.0032 13.3477C12.0703 13.216 12.1164 13.0422 12.1411 12.7396C12.1663 12.4312 12.1667 12.035 12.1667 11.4667V4.53337C12.1667 3.96507 12.1663 3.56891 12.1411 3.26049C12.1164 2.95791 12.0703 2.78407 12.0032 2.65239C11.8594 2.37015 11.6299 2.14067 11.3476 1.99686C11.216 1.92977 11.0421 1.88368 10.7395 1.85896C10.4311 1.83376 10.035 1.83337 9.46666 1.83337H6.53333C5.96503 1.83337 5.56887 1.83376 5.26045 1.85896ZM6.16666 12.6667C6.16666 12.3906 6.39052 12.1667 6.66666 12.1667H9.33333C9.60947 12.1667 9.83333 12.3906 9.83333 12.6667C9.83333 12.9428 9.60947 13.1667 9.33333 13.1667H6.66666C6.39052 13.1667 6.16666 12.9428 6.16666 12.6667ZM8 4.00004C8.36819 4.00004 8.66666 3.70156 8.66666 3.33337C8.66666 2.96518 8.36819 2.66671 8 2.66671C7.63181 2.66671 7.33333 2.96518 7.33333 3.33337C7.33333 3.70156 7.63181 4.00004 8 4.00004Z" fill="white" />
                                            </svg>
                                        </div>
                                        <p>No screen recording</p>
                                    </div>
                                </div>
                                <div className='flex gap-8 px-12 mt-6 items-center font-mattersq text-[15px] font-semibold'>
                                    <button className='text-black.100 text-[13px] bg-white.200 px-4 rounded-[8px] py-4'>Create An Account</button>
                                </div>

                            </div>
                            <div className='flex-1 ml-20 h-full'>
                                <div className='ml-5 mr-10 mt-[17.5px] h-full'>
                                    <Image className='bg-cover object-cover' src={lock} alt="liveparte" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className="mt-28 w-[80%] mx-auto">
                        <h1 className="text-center text-[122px] flex items-center justify-center leading-[122px] font-bold font-mdtest tracking-[0.48px]">
                            MADE FOR YOU ❤️
                        </h1>
                        <p className="text-white.100 text-[80px] leading-[80px] text-center tracking-[0.48px] font-bold font-mdtest">
                            We are making it possible for you to reach your fans, create unique experiences, expand your revenue and unlock fan engagements.
                        </p>
                    </div>
                    <div className='flex justify-center flex-col items-center mt-32'>
                        <div className='flex'>
                            <div className='rounded-full relative z-30 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                            <div className='rounded-full -ml-12 relative z-40 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                            <div className='rounded-full -ml-12 relative z-50 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='rounded-full relative z-30 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                            <div className='rounded-full -ml-12 relative z-40 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                            <div className='rounded-full -ml-12 relative z-50 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='rounded-full relative z-30 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                            <div className='rounded-full -ml-12 relative z-40 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                            <div className='rounded-full -ml-12 relative z-50 w-[260.78px] h-[260.78px]'>
                                <Image className='w-full h-full' src={artist_a} alt='liveparte artist' />
                            </div>
                        </div>
                    </div>
                    <div className='-mt-44'>
                        <Image className='bg-cover object-cover' src={tracks} alt='liveparte' />
                    </div>
                </div>
            </div>
            <Faq />
            <Footer />
        </div >
    );
};

export default Entertainers;