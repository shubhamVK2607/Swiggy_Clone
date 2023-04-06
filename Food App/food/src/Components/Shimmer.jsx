import React from 'react'

function Shimmer() {


  return (

      <div className='flex pt-2 h-1/2 flex-wrap ml-[8rem] my-[3rem]'>
      {Array(15).fill("").map((e, index)=>(
             <div className='mb-8 mt-5' key={index}>
            <div key={index} className="bg-gray-100 h-[10rem] w-[16rem] p-2 mx-4 mt-4"></div>
            <div className='h-[1rem] w-[13rem] my-2 bg-gray-100 mx-4 rounded-lg'></div>
            <div className='h-[0.5rem] w-[10rem] my-2 bg-gray-100 mx-4 rounded-lg'></div>
            <div className='h-[0.5rem] w-[4rem] my-2 bg-gray-100  mx-4 rounded-lg'></div>
            <div className='h-[0.5rem] w-[7rem] my-2 bg-gray-100 mx-4 rounded-lg'></div>
            <div className='h-[0.5rem] w-[12rem] my-2 bg-gray-100 mx-4 rounded-lg'></div>
            <div className='h-[0.5rem] w-[3rem] my-2 bg-gray-100 mx-4 rounded-lg'></div>






            </div>
        )) }
        </div>
  
  )
}

export default Shimmer
