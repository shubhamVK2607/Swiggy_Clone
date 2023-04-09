import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DarkModeButton from '../utils/DarkModeButton'


function Header() {

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)

  console.log("from header is darkmode",isDarkMode)

  



  const cartItems=useSelector(store=>store.cart)
  

  const darkModeClass = isDarkMode ? 'h-[4.5rem] z-10 text-black flex justify-between fixed top-0 left-0 w-full bg-sky-700' : 'h-[4.5rem] z-10 bg-black text-white flex justify-between fixed top-0 left-0 w-full';
  
  const darkForLink=isDarkMode?'hover:bg-slate-800 hover:text-white px-4 h-7 rounded-lg':'px-4 h-7 hover:bg-green-400 hover:text-black rounded-lg'
  return (
    <div className={`${darkModeClass}`}>

      


        <a href="/"><img src="https://spicehubceylon.com/wp-content/uploads/2022/07/Spicehub_logo-mobile.png" alt="Royal Food" className="w-[4rem] h-[4rem] col-span-3 mx-12"/></a>

        <div className='py-2 pr-12 my-3 mx-1-'>
          <ul className='flex'>
           <Link to='/'> <li className={darkForLink}>Home</li></Link>
           <Link to='/contact'> <li className={darkForLink}>Contact</li></Link>
            <Link to='/about'><li className={darkForLink} >About</li></Link>
            
            <Link to='/cart'><li className={darkForLink}><span className='mx-2 bg-green-500 px-2 rounded-lg'>{cartItems.items.length}</span>cart</li></Link>
          <li className=""><DarkModeButton className="hover:bg-orange-500 rounded-2xl"/></li>
           


          </ul>
          
        </div>
      

    </div>
  )
}

export default Header

