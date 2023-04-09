import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from 'react-router-dom';
import { RESTAURANT_IMAGE,OneMore } from './Constants';
import { useSelector } from 'react-redux';

function RestaurantCard({id,name,avgRating,cloudinaryImageId,cuisines,costForTwoString,slaString,aggregatedDiscountInfo}) {
    
  const RatingColor=avgRating>=4 ?"bg-green-600":"bg-orange-400"
  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)

  console.log("isDarkMode from card",isDarkMode)
  

  const darkModeClass = isDarkMode ? 'mx-5 my-1 p-6 transition-width duration-100 ease-linearse-linear brounded-lg w-[18rem] h-[24rem] bg-slate-900 hover:bg-gray-800 hover:text-white hover:border-gray-400 hover:shadow-lg break-words hover:shadow-2xl':'mx-5 my-10 p-6 transition-width duration-100 hover:bg-slate-50 hover:shadow-2xl ease-linearse-linear brounded-lg  w-[18rem] h-[24rem] text-black hover:text-black';

  const darkForOffer=isDarkMode?'text-amber-300':'text-amber-800'
  
  return (
    <Link to={"/restaurant/"+id}>
    <div className='mt-[4rem]'>
      <div className={`${darkModeClass}`}>
        
       <img src={RESTAURANT_IMAGE+cloudinaryImageId} alt="Restaurant Image" />
 
       <h1 className="font-bold py-2 my-1">{name}</h1>
       <h1 className="text-xs break-words">{cuisines.join(",")}</h1>
       <div className="flex justify-between py-3 text-center">
        <h1 className={"text-white font-semibold text-[0.725rem] w-[3rem] "+RatingColor}><StarIcon fontSize="small"/>{avgRating}</h1>
         <h1 className="text-[0.725rem]">{slaString}</h1>
         <h1 className="text-[0.725rem]">{costForTwoString}</h1>
       </div>
       <div className="border-b w-full my-2"></div>
       <h1 className={"text-xs "+darkForOffer}><LocalOfferIcon fontSize='small' className='pr-1'/>{aggregatedDiscountInfo?.descriptionList[0]?.meta}</h1>

    </div>
    </div>
    </Link>
  )
}

export default RestaurantCard
