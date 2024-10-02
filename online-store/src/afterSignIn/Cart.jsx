import React from 'react'
import UserNavBar from '../Components/UserNavBar'

const Cart = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-40'>
        <h1 className='shadow-sm shadow-purple-400 p-4'>Add items to cart to view cart</h1>
      </div>
      <UserNavBar />
    </div>
  )
}

export default Cart