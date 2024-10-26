import React from 'react'

const Heading = ({login}) => {
  return (
  <div className='flex flex-col gap1'>
      <p className='text-4xl capitalize font-medium'>{login?'Log in':'sign up'}</p>
  </div>
  )
}

export default Heading