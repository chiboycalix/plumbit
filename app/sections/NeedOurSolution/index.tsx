import Button from '@/components/Button'
import { PlumberTwo } from '@/constants'
import Image from 'next/image'
import React from 'react'

const NeedOurSolution = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-between lg:py-[5rem] lg:px-[10rem] px-[1rem] py-[1rem]'>
      <div className='lg:basis-1/2 basis-full'>
        <Image src={PlumberTwo} alt="PlumberTwo" />
      </div>
      <div className='flex-1 mb-[2rem] lg:mb-[0rem]'>
        <p className='text-[1.5rem] sm:text-[2rem] lg:text-[3rem] lg:w-[95%] w-full font-medium leading-[2rem] sm:leading-[3rem] lg:leading-[4rem]'>Expert Plumbing Solutions for Every Need</p>
        <p className='text-secondary mt-[2rem]'>We pride ourselves on being your go-to solution for all plumbing needs. Our expertise extends far beyond traditional plumbing tasks. With a diverse skill set and a range of tools at our disposal, We handle everything from intricate plumbing jobs to household repairs and installations.</p>
        <div className='lg:w-[20%] mt-[2rem] w-[40%]'>
          <Button caption='Learn more' />
        </div>
      </div>
    </div>
  )
}

export default NeedOurSolution