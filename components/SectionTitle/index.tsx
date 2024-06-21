import React from 'react'

type SectionTitleProps = {
  title: string;
  color?: string;
}
const SectionTitle = ({ title, color="white" }: SectionTitleProps) => {
  const textColor = color === 'black' ? 'text-black' : 'text-white';
  return (
    <p className={`${textColor} basis-[50%] md:text-[40px] text-[20px] font-medium`}>{title}</p>
  )
}

export default SectionTitle