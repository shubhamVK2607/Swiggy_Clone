import React from 'react'
import aboutImg from '../assets/HomeImage.png'
import DeliveryImg from '../assets/delivery_online.png'
import { useSelector } from 'react-redux'


const About = () => {

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-black';


  return (
    <div className={"flex flex-col overflow-x-hidden h-[90.5vh] "+darkModeClass}>
       <div className=" mt-[4.5rem] w-full mx-[2rem] p-[2rem] flex ">
          <img src={aboutImg} alt="About Image" className='h-[45vh] w-[40vw] rounded-lg' />
          <div className="mx-[3rem] my-[2rem] w-[45vw] flex flex-col items-start"> 
          <h1 className="text-3xl font-bold my-2 py-2">SpiceFood -Discover the Best food & drinks</h1>
            <p className="font-custom italic">
              SpiceFood is an online food ordering system which we
              have developed for restaurant owners and food lovers. Through
              SpiceFood we are helping customers to discover the best restaurants
              in city. If you are restaurant owner, you can easily register your
              restaurant and upload restaurant menu to start receiving online
              orders through this fast growing portal without any cost.
            </p>
            </div>
      
       </div>
       <div className="w-full mx-[2rem]  px-[2rem] flex">
          <div className="flex flex-col items-start w-[40vw] mr-[4rem]">
            <h1 className='text-3xl font-bold mb-3'>Vision</h1>
            <p className="font-custom italic">
              For food lovers who want to order food from local restaurants
              online, the Food Ordering System will be an Internet-based
              application that will accept individual or group meal orders,
              process payments, and trigger delivery of the prepared meals to a
              designated location. For Restaurant owner who wants to take and grow
              their business online, with low budget can start their online
              restaurant business and get orders from many more customers.
            </p>
          </div>
          <img src={DeliveryImg} alt="food ring" className="w-[30vw] ml-[5rem] h-[25vh] rounded-lg" />
        </div>
    </div>
  )
}

export default About
