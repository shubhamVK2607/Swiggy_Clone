import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { ALL_RESTAURANT_LIST } from "./Constants";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurant } from "../stateManagement/restaurantSlice";
import { AllRestaurant } from "../utils/function";

function RestaurantList() {

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-black text-white' : '';
  const darkForButton=isDarkMode?'bg-green-600':'bg-black'
  const darkForInput=isDarkMode?'text-black bg-slate-100':''
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const dispatch=useDispatch()

  console.log("arra", restaurantList[0]?.data);

  const getRestaurantData = async () => {
    const data = await fetch(
      ALL_RESTAURANT_LIST
     
    );
    const json = await data.json();
    console.log("main json value",json)

    const jsonData=AllRestaurant(json?.data)
    console.log("jsonData from fun",jsonData)
    setRestaurantList(jsonData?.data?.data.cards);
    setFilteredRestaurant(jsonData?.data?.data.cards)
    dispatch(addRestaurant(jsonData?.data?.data.cards))
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

  if(filteredRestaurant.length===0)
  {
    return(
      <Shimmer/>
    )
  }



    return (
      <div className={"mx-[4rem] mt-5 "+darkModeClass}>
        <div className="flex top-[5rem] left-[4rem] fixed w-full">
        <input
        className={"w-[40%] ml-[19rem] bg-slate-100 h-10 border border-gray-500 px-2 focus:outline-none "+darkForInput}
          placeholder="Get your Favourite Food..."
          type="text"
          name=""
          id=""
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={"text-white h-10 w-20 "+darkForButton} onClick={()=>filterTheRestaurant(searchValue, restaurantList)}>
          Search
        </button>
        </div>
        <div className={"flex flex-wrap mt-[4rem] "+darkModeClass}>
          {filteredRestaurant.map((restaurant,index) => (
            <RestaurantCard key={index} {...restaurant?.data} />
          ))}
        </div>
      </div>
    );
}

export default RestaurantList;
