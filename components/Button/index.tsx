import React from 'react'

type ButtonProps = {
  caption: string;
}
const Button = ({ caption }: ButtonProps) => {
  return (
    <button className='w-full bg-primary-400 text-white rounded px-[1.2rem] py-[0.8rem] text-sm hover:bg-primary-500'>{caption}</button>
  )
}

export default Button;