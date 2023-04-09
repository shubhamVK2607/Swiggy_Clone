import React from 'react'
import { useSelector } from 'react-redux';

const Shimmer2 = () => {


  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-black text-light' : '';
  const darkForDiv=isDarkMode?'bg-slate-900':'bg-gray-100'
  return (
    <div className={'w-full h-screen mt-0 '+darkModeClass}> 
    <div className={'flex pt-2 flex-wrap mt-[9vh] flex-col items-start mx-[20vw] '+darkModeClass}>
            <div className={" h-[12rem] w-[60vw] p-2 rounded-lg "+darkForDiv}></div>
            <div className={' h-[1rem] w-[40vw] p-2 my-[1rem] rounded-lg '+darkForDiv}></div>

            <div className={' h-[1rem] w-[15vw] p-2 my-[1rem] rounded-lg '+darkForDiv}></div>

            <div className='flex justify-between w-[60vw] mt-[2rem]'>
                <div className={'w-[12rem] h-[3rem] '+darkForDiv}></div>
                <div className={'w-[5rem] h-[5rem] '+darkForDiv}></div>

            </div>
            <div className='flex justify-between w-[60vw] mt-[1rem]'>
                <div className={'w-[10rem] h-[3rem] '+darkForDiv}></div>
                <div className={'w-[5rem] h-[5rem] '+darkForDiv}></div>

            </div>
            <div className='flex justify-between w-[60vw] mt-[1rem]'>
                <div className={'w-[10rem] h-[3rem] '+darkForDiv}></div>
                <div className={'w-[5rem] h-[5rem] '+darkForDiv}></div>

            </div>
            <div className='flex justify-between w-[60vw] mt-[1rem]'>
                <div className={'w-[10rem] h-[3rem] '+darkForDiv}></div>
                <div className={'w-[5rem] h-[5rem] '+darkForDiv}></div>

            </div>

        </div>
        </div>
  )
}

export default Shimmer2
