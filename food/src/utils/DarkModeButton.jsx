import { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../stateManagement/darkModSlice';

function DarkModeButton() {

    const dispatch=useDispatch()

    function toggleDarkMode()
    {
        dispatch(toggle())
    }
 
    const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)

  const darkModeClass = isDarkMode ? 'bg-colored text-light' : '';

  return (
    <button className={`py-2 px-4   mt-[-7px]  ${darkModeClass}`} onClick={toggleDarkMode}>
      {isDarkMode ? <WbSunnyIcon/>:<DarkModeIcon />}
    </button>
  );
}

export default DarkModeButton;
