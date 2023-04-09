import React from 'react'
import { useSelector } from 'react-redux';

function Shimmer() {

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-black text-light' : '';
  const dartModeForDiv=isDarkMode?'bg-slate-900':'bg-gray-100'


  return (

      <div className={'flex pt-2 h-1/2 flex-wrap ml-[8rem] my-[3rem] '+darkModeClass}>
      {Array(15).fill("").map((e, index)=>( 
             <div className='mb-8 mt-5' key={index}>
            <div key={index} className={" h-[10rem] w-[16rem] p-2 mx-4 mt-4 "+dartModeForDiv}></div>
            <div className={'h-[1rem] w-[13rem] my-2  mx-4 rounded-lg '+dartModeForDiv}></div>
            <div className={'h-[0.5rem] w-[10rem] my-2  mx-4 rounded-lg '+dartModeForDiv}></div>
            <div className={'h-[0.5rem] w-[4rem] my-2   mx-4 rounded-lg '+dartModeForDiv}></div>
            <div className={'h-[0.5rem] w-[7rem] my-2  mx-4 rounded-lg '+dartModeForDiv}></div>
            <div className={'h-[0.5rem] w-[12rem] my-2 mx-4 rounded-lg '+dartModeForDiv}></div>
            <div className={'h-[0.5rem] w-[3rem] my-2  mx-4 rounded-lg '+dartModeForDiv}></div>






            </div>
        )) }
        </div>
  
  )
}

export default Shimmer
