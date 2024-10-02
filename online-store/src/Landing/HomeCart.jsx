import React from 'react'
import NavBar from './NavBar'

const HomeCart = () => {
  return (
    <div>
        <div className='flex items-center justify-center mt-40'>
        <h1 className='shadow-sm p-4 shadow-purple-500'>
        Log in to add items to cart
        </h1>
        </div>
        <NavBar />
    </div>
  )
}

export default HomeCart