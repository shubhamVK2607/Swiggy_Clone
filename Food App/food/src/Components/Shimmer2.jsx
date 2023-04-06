import React from 'react'

const Shimmer2 = () => {
  return (
    <div className='flex pt-2 flex-wrap mt-[15vh] flex-col items-start mx-[20vw]'>
            <div className="bg-gray-100 h-[12rem] w-[60vw] p-2 rounded-lg"></div>
            <div className='bg-gray-100 h-[1rem] w-[40vw] p-2 my-[1rem] rounded-lg'></div>

            <div className='bg-gray-100 h-[1rem] w-[15vw] p-2 my-[1rem] rounded-lg'></div>

            <div className='flex justify-between w-[60vw] mt-[2rem]'>
                <div className='w-[12rem] h-[3rem] bg-gray-100'></div>
                <div className='w-[5rem] h-[5rem] bg-gray-100'></div>

            </div>
            <div className='flex justify-between w-[60vw] mt-[1rem]'>
                <div className='w-[12rem] h-[3rem] bg-gray-100'></div>
                <div className='w-[5rem] h-[5rem] bg-gray-100'></div>

            </div>

        </div>
  )
}

export default Shimmer2
