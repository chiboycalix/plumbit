import React from 'react';
import Button from '@/components/Button'
import SectionTitle from '@/components/SectionTitle'
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import Link from 'next/link';
import {   Plumbing, FixtureInstallation, DrainCleaning } from '@/constants';

type ServiceProps = {
  title: string;
  shortDescription: string;
  image: any;
}
const Service = ({ image, title, shortDescription }: ServiceProps) => {
  return (<div className='p-[1rem] shadow-xl rounded'>
    <div className='rounded'>
      <Image src={image} alt="serice photo" className='w-full' /></div>
    <div className='mt-[1.2rem]'>
      <p className='mb-[1.2rem] text-[20px] font-medium'>{title}</p>
      <p className='w-[90%] text-secondary'>{shortDescription}</p>
    </div>
    <div className='flex items-center justify-between cursor-pointer my-[1.5rem]'>
      <Link href="/book" className='text-primary-400'>Book Now</Link>
      <ArrowRightIcon
        strokeWidth={2.5}
        className={`h-5 w-5 transition-transform text-primary-400 hover:text-primary-400`}
      />
    </div>
  </div>)
}
const OurServices = () => {
  return (
    <div className='py-[1rem] md:py-[5rem] xl:px-[10rem] lg:px-[5rem] px-[1rem]'>
      <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between mb-[3rem]'>
        <div>
          <SectionTitle title='Our Services' color="black" />
          <p className='text-secondary mt-[0.8rem]'>Discover our complete range of plumbing services tailored to meet your need.</p>
        </div>
        <div>
          <Button caption='See all' />
        </div>
      </div>
      <div className='grid sm:grid-cols-3 gap-5 grid-cols-1'>
        <Service title='Emergency Plumbing Solutions'
          shortDescription='Reliable 24/7 emergency plumbing responders at your service.'
          image={Plumbing}
        />
        <Service title='Drain Cleaning Expertise'
          shortDescription='Say goodbye to clogged drains with our professional drain cleaning services.'
          image={DrainCleaning}
        />
        <Service title='Fixture Installation'
          shortDescription='Count on us for precise and reliable fixture installations, from faucets to toilets.'
          image={FixtureInstallation}
        />
      </div>
    </div>
  )
}

export default OurServices