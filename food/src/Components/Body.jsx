import React from 'react'
import RestaurantList from './RestaurantList'
import { useSelector } from 'react-redux';

function Body() {

   const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-black text-light' : '';
  return (
    <div className={`mt-[4.5rem] ${darkModeClass}`}>
      <RestaurantList/>
    </div>
  )
}

export default Body
