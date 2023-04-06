import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_ITEM } from "./Constants";
import { RESTAURANT_IMAGE } from "./Constants";
import { OneMore } from "./Constants";
import FoodItem from "./FoodItem";
import RestaurantDetails from "./RestaurantDetails";
import Shimmer from "./Shimmer";
import Shimmer2 from "./Shimmer2";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails,setRestaurantDetails]=useState([])

  console.log("Hello", restaurantMenu);

  const { resId } = useParams(); //To read , what id this component receiving from the routing configuration, We use useParams.
  //useParams is a hook, which return an object containing {id: someting}. We just destructured it.

  const getRestaurantMenu = async () => {
    const data = await fetch(OneMore + resId);
    const json = await data.json();
    console.log("JSON Value",json)
    console.log("Inside Function",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card.itemCards)
        const temp=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
        const total=temp.cards[1].card.card.itemCards ? temp.cards[1].card.card.itemCards : temp.cards[2].card.card.itemCards 
    setRestaurantMenu(
      total
    );
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info)
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  if (restaurantMenu.length===0) {
    return <Shimmer2/>
  }

 
    return (
      <div className="h-full w-full flex justify-center my-[2rem]">
        <div className="w-[60vw]">
          <RestaurantDetails restaurant={restaurantDetails}/>
          <h1 className="font-extrabold">Recommended ({restaurantMenu.length})</h1>
          {restaurantMenu.map((menu,index) => (
            <FoodItem menu={menu} />
          ))}
        </div>
        
      </div>
    );

};

export default RestaurantMenu;
