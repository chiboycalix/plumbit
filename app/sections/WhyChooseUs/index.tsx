import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { TimelyService, SatisfactionGuaranteed, UnparalledExpertise } from "@/constants";

type ChoicesProps = {
  icon: any;
  title: string;
  shortDescription: string;
}

const Choices = ({ icon, title, shortDescription }: ChoicesProps) => {
  return <div className='flex flex-col lg:gap-5 gap-3 lg:w-[90%] w-[100%]'>
    <div className='w-[60px] h-[60px] bg-primary-300 flex items-center justify-center rounded-md shadow-lg'>
      <Image src={icon} alt='icon' />
    </div>
    <div>
      <p className='text-white font-medium text-[18px]'>{title}</p>
    </div>
    <div>
      <p className='text-white text-opacity-70'>{shortDescription}</p>
    </div>
  </div>
}
const WhyChooseUs = () => {
  return (
    <div className='bg-primary-400 py-[1rem] md:py-[5rem] xl:px-[10rem] lg:px-[5rem] px-[1rem]'>
      <div className='flex justify-between items-center gap-0 sm:flex-row flex-col'>
        <div className='basis-[30%] sm:mb-0 mb-[2rem]'>
          <div className='lg:w-[60%] w-[100%]'>
            <SectionTitle title='Why choose us' color="white" />
          </div>
            <p className='text-white w-[100%] sm:w-[90%] lg:w-[70%] mt-[1rem] text-opacity-70'>Choose us for a plumbing experience that blends expertise, reliability, and a customer-centric approach. Your plumbing concerns are our priority.</p>
        </div>
        <div className='flex-1 grid sm:grid-cols-3 grid-cols-1 gap-5'>
          <Choices
            icon={UnparalledExpertise}
            title='Unparalleled Expertise'
            shortDescription='Our skilled and experienced plumbers are dedicated to delivering top-notch service.'
          />
          <Choices
            icon={TimelyService}
            title='Reliable and Timely Service'
            shortDescription='We value your time and understand the urgency of plumbing problems.'
          />
          <Choices
            icon={SatisfactionGuaranteed}
            title='Satisfaction guaranteed'
            shortDescription='Customer satisfaction is at the core of everything we do.'
          />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs