import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import StarIcon from "@mui/icons-material/Star";

const RestaurantDetails = ({ restaurant }) => {
  console.log("Restaurant Details me hai", restaurant);
  return (
    <div className="w-full my-[2rem] mr-[2rem] py-[2rem] pr-[2rem]">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold my-2">{restaurant.name}</h1>
          <h1 className="text-gray-500 text-xs">
            {restaurant.cuisines.join(", ")}
          </h1>
          <div className="flex">
            <h1 className="text-gray-500 text-xs">{restaurant.areaName},</h1>
            <h1 className="text-gray-500 text-xs mx-1">
              {restaurant.sla.lastMileTravelString}
            </h1>
          </div>
          <div className="flex my-2">
            <DirectionsBikeIcon
              fontSize="mediam"
              className="mt-2 mr-2 text-gray-600"
            />
            <h1 className="text-gray-500 mt-2 text-sm">
              {restaurant.feeDetails.message}
            </h1>
          </div>
        </div>
       
        <div className="border border-gray-400 shadow-md rounded-lg h-[4.5rem] p-[0.5rem]">
          <div className="flex">
            <StarIcon style={{ color: "green",margin:'4px 0' }} fontSize="small" />{" "}
            <h1 className="text-sm my-1">{restaurant.avgRating}</h1>
          </div>
          <div className="border-b rounded-lg my-1"></div>
          <h1 className="font-light my-1 " style={{fontSize:"11px",fontWeight:"600",fontFamily:"ProximaNovaCondensedRegular,arial,Helvetica Neue,sans-serif",color:"#8b8d97"}}>{restaurant.totalRatings}+ ratings</h1>
        </div>
      
      </div>
      <div className="border-b w-full my-[1rem]"></div>
      <div className="flex w-[17vw] justify-between">
        <div className="flex">
          <AccessTimeIcon fontSize="mediam" />
          <h1 className="font-extrabold text-sm">{restaurant.sla.slaString}</h1>
        </div>

        <h1 className="font-extrabold text-sm">
          {restaurant.costForTwoMessage}
        </h1>
      </div>
    </div>
  );
};

export default RestaurantDetails;
