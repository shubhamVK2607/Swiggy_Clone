import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {


  const cartItems=useSelector(store=>store.cart)

  console.log("cartItems",cartItems)
  return (
    <div className="h-[4.5rem] z-10 bg-black text-white flex justify-between fixed top-0 left-0 w-full">

      


        <a href="/"><img src="https://s3.amazonaws.com/ODNUploads/6359840a1174dRoyalFoodHouse300.png" alt="Royal Food" className="w-[4rem] h-[4rem] col-span-3 mx-12"/></a>

        <div className='py-2 pr-12 my-3 mx-1-'>
          <ul className='flex'>
           <Link to='/'> <li className='px-4'>Home</li></Link>
           <Link to='/contact'> <li className='px-4'>Contact</li></Link>
            <Link to='/about'><li className='px-4' >About</li></Link>
            
            <Link to='/cart'><li className='px-4'><span className='mx-2 bg-green-500 px-2 rounded-lg'>{cartItems.items.length}</span>cart</li></Link>
            <Link to='help'><li className='px-4'>Help</li></Link>

          </ul>
          
        </div>
      

    </div>
  )
}

export default Header

