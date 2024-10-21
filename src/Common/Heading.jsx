import React from 'react'

const Heading = ({heading}) => {
  return (
  <div className='flex flex-col gap1'>
      <p className='text-4xl capitalize font-medium'>{heading}</p>
  </div>
  )
}

export default Heading