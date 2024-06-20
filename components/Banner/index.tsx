import React from 'react'
import Button from "@/components/Button"
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { BannerPlumber } from '@/constants';

const Banner = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:py-[5rem] py-[1rem]'>
      <div className='pl-[1rem] py-2 lg:pl-[10rem]'>
        <p className='text-[1.5rem] sm:text-[2rem] lg:text-[3rem] lg:w-[65%] w-full font-medium leading-[2rem] sm:leading-[3rem] lg:leading-[5rem]'>Best Plumbing Service at affordable pricing</p>
        <p className='font-normal text-secondary mt-[1rem] lg:mt-[2rem] text-[16px] leading-[28px] lg:w-[90%] w-[85%]'>Our highly trained and skilled plumbers offer a full range of services for residential plumbing and commercial plumbing.</p>
        <div className='mt-[2rem] lg:mt-[3rem] flex items-center gap-6 w-full'>
          <div className='lg:basis-[30%] basis-[50%]'>
            <Button caption='Request Service' />
          </div>
          <div className='flex-1 flex items-center gap-2 cursor-pointer'>
            <Link href="" className='inline-block hover:text-primary-400'>Our Services</Link>
            <ArrowRightIcon
              strokeWidth={2.5}
              className={`h-5 w-5 transition-transform text-secondary hover:text-primary-400`}
            />
          </div>
        </div>
      </div>
      <div className='lg:mt-[0rem] mt-[2rem] lg:pl-[0rem] pl-[1rem]'>
        <Image src={BannerPlumber} alt="BannerPlumber" className='w-full' />
      </div>
    </div>
  )
}

export default Banner