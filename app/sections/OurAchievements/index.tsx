import React from 'react'
import SectionTitle from '@/components/SectionTitle'

type AchievementStatisticsProps = {
  metric: string;
  value: string;
}
const AchievementStatistics = ({ metric, value }: AchievementStatisticsProps) => {
  return <div className='border-t border-white py-[2rem]'>
    <p className='text-white md:text-[48px] text-[20px] font-medium mb-[1rem]'>{value}</p>
    <p className='text-white text-[14px] md:text-[16px]'>{metric}</p>
  </div>
}
const OurAchievements = () => {
  return (
    <div className='py-[1rem] md:py-[5rem] xl:px-[10rem] lg:px-[5rem] px-[1rem] bg-primary-400'>
      <div className='flex md:justify-between md:items-center items-start flex-col lg:flex-row justify-start'>
        <SectionTitle title='Our Achievements in Numbers'/>
        <div className='flex-1'>
          <p className='text-white lg:w-[70%] w-[100%]'>Turning satisfied clients into smiling faces is our ultimate metric for success.</p>
        </div>
      </div>
      <div className='mt-[2rem] md:mt-[5rem] grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 md:gap-10'>
        <AchievementStatistics metric="Happy Customers" value="1.5K" />
        <AchievementStatistics metric="Years of Expertise" value="10+" />
        <AchievementStatistics metric="Expert Team Members" value="60+" />
        <AchievementStatistics metric="Customer Satisfaction Rate" value="100%" />
      </div>
    </div>
  )
}

export default OurAchievements