import React from 'react'
import NavBar from './NavBar'
import { SignInButton } from '@clerk/clerk-react';

const Customize = () => {
  
  return (
    <div>
      <div className='flex items-center justify-center mt-40'>
      <h1 className='shadow-sm py-4 shadow-purple-300 px-2'>
      You can request customized products tailor made just for you,
      <SignInButton forceRedirectUrl="/HomeUser" className='hover:text-purple-400 ml-2'/>
      </h1>
      </div>
      <NavBar />
    </div>
  )
}

export default Customize