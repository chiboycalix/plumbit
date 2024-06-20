import React from 'react';

type ContainerProps = {
  children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return (
    <main className='py-2 lg:py-4'>{children}</main>
  )
}

export default Container;