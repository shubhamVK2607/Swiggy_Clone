import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from 'react-router-dom';
import { RESTAURANT_IMAGE,OneMore } from './Constants';

function RestaurantCard({id,name,cloudinaryImageId,cuisines,costForTwoString,slaString,aggregatedDiscountInfo}) {
    
  
  return (
    <Link to={"/restaurant/"+id}>
    <div className='m-5 p-6 transition-width duration-100 ease-linearse-linear brounded-lg  w-[18rem] h-[24rem] hover:bg-slate-50 hover:border-gray-400 hover:shadow-lg break-wordshover:shadow-2xl'>
        
       <img src={RESTAURANT_IMAGE+cloudinaryImageId} alt="Restaurant Image" />
 
       <h1 className="font-bold py-2 my-1">{name}</h1>
       <h1 className="text-xs break-words">{cuisines.join(",")}</h1>
       <div className="flex justify-between py-3 text-center">
        <h1 className="bg-green-600 text-white font-semibold text-[0.725rem] w-[3rem]"><StarIcon fontSize="small"/>4.4</h1>
         <h1 className="text-[0.725rem]">{slaString}</h1>
         <h1 className="text-[0.725rem]">{costForTwoString}</h1>
       </div>
       <div className="border-b w-full my-2"></div>
       <h1 className="text-xs text-amber-800"><LocalOfferIcon fontSize='small' className='pr-1'/>{aggregatedDiscountInfo?.descriptionList[0]?.meta}</h1>

    </div>
    </Link>
  )
}

export default RestaurantCard
