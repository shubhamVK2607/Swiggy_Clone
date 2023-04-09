import React from 'react'
import { useSelector } from 'react-redux';





function Footer() {

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

const darkModeClass = isDarkMode ? 'bg-black text-white' : 'bg-slate-400';
  return (
    <div className={'h-[4.5rem] z-10 w-full flex items-center justify-center '+darkModeClass}>
      <div className={' flex justify-center items-center '+darkModeClass}>
        <span>Created By ❤️ <span className='font-bold'>Shubham Singh </span><span> © 2023 </span> <span className="font-semibold">Spice</span><span className="text-red-500 font-semibold">Hub</span></span>
      </div>
    </div>
  )
}

export default Footer
