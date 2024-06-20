import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return (
    <main className='px-[1rem] lg:px-[10rem] lg:py-4'>{children}</main>
  )
}

export default Container