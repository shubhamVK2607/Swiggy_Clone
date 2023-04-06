import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { ALL_RESTAURANT_LIST } from "./Constants";
import Shimmer from "./Shimmer";

function RestaurantList() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // console.log("arra", restaurantList[0]?.data);

  const getRestaurantData = async () => {
    const data = await fetch(
      ALL_RESTAURANT_LIST
     
    );
    const json = await data.json();
    // console.log(json.data.cards[2].data.data)
    setRestaurantList(json?.data?.cards[2]?.data?.data.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data.cards)
  };

  

  useEffect(() => {
    getRestaurantData();
  }, []);

  function filterTheRestaurant(searchValue,restaurantList)
  {
     console.log("FTR",searchValue,restaurantList)
     const result=restaurantList.filter((restaurant)=>(
         restaurant.data.cuisines.join("").toLowerCase().includes(searchValue.toLowerCase())
     ))
   setFilteredRestaurant(result)
  }

  if(filteredRestaurant.length==0)
  {
    return(
      <Shimmer/>
    )
  }



    return (
      <div className="mx-[4rem] my-5 ">
        <input
        className="w-[40%] ml-[19rem] h-10 border border-gray-500 px-2 focus:outline-none"
          placeholder="Get your Favourite Food..."
          type="text"
          name=""
          id=""
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="bg-black text-white h-10 w-20" onClick={()=>filterTheRestaurant(searchValue, restaurantList)}>
          Search
        </button>
        <div className="flex flex-wrap">
          {filteredRestaurant.map((restaurant,index) => (
            <RestaurantCard key={index} {...restaurant?.data} />
          ))}
        </div>
      </div>
    );
}

export default RestaurantList;
