import React, { useState } from 'react'
import contactMe from "../assets/contactMe.png"
import { useSelector } from 'react-redux'

const Contact = () => {

  const [submit,setSubmit]=useState(false)

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100';

  const darkForInput=isDarkMode?'text-black':""

  function submitHandler()
  {
    setSubmit(true)
  }
 
  return (
    <div className={" w-full h-[81vh] mt-[4.5rem]  pt-[5rem] flex items-start "+darkModeClass}>
      <div className={'flex justify-between w-[80vw] h-[60vh] '}>
         <img src={contactMe} alt="" className='ml-[10vw]' />
         <div className={'flex flex-col w-[30vw] '}>
          <div className='flex justify-center mb-[2rem]'>
            <h1 className=" text-5xl font-custom font-bold italic">Contact us</h1>
          </div>
           <div className={'mx-4 my-1 p-2 w-full '+darkForInput}>
           <input type="text" placeholder='Name' className="border rounded-md border-blue-900 p-2 w-full shadow-lg shadow-blue-100 " />
           </div>
           <div className={'mx-4 my-1 p-2 w-full '+darkForInput}>
           <input type="email" placeholder='Email' name="" id="" className="border rounded-md p-2 border-blue-900 w-full shadow-lg shadow-blue-100" />
           </div>
           <div className={'mx-4 my-1 p-2 w-full '+darkForInput}>
           <textarea name="" placeholder='Type your Message here...' id="" cols="30" rows="3" className="rounded-md p-2 border border-blue-900 w-full shadow-lg shadow-blue-100" ></textarea>
           </div>
           <div className='flex justify-center'>
            <button onClick={submitHandler} className="bg-sky-700 hover:bg-green-800 m-2 py-2 px-4 text-white rounded-md text-sm">Submit</button>
           </div>
           <div className='w-[100vw] mr-[2rem]'> 
         {submit && <h1 className="font mono font-bold text-2xl m-2 p-2 italic">Thanks for contacting SpiceHub, We will reply ASAP</h1>}
         </div>
         </div>

      </div>
    </div>
  )
}

export default Contact
