import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../stateManagement/cartSlice";
import { removeItems } from "../stateManagement/cartSlice";
import { FOOD_ITEM_IMAGE } from "./Constants";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const FoodItem = ({ menu}) => {
   
//    console.log("menu.card.info",menu.card.info)
//    console.log("key",menu.card.info.id)


const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

const darkModeForLine = isDarkMode ? 'border-gray-600' : '';


  const cartItems = useSelector((store) => store.cart.items);

// console.log("Insid foodItems with cartItem is",cartItems )

  

  const price = menu.card.info.price
    ? menu.card.info.price
    : menu.card.info.defaultPrice;

  



    const dispatch=useDispatch()

    function cartAddHandler(id)
    {
        console.log("Now adding id is",id)
         dispatch(addItems(menu.card.info))

    }

    function cartRemoveHandler(id)
    {
        console.log("Now removing id is",id)
        dispatch(removeItems(id))
    }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <h1 className="mr-[5rem] mt-[2rem] p-2 font-semibold">
            {menu?.card?.info?.name}
          </h1>
          <div className="flex pl-2">
            <CurrencyRupee fontSize="mediam" />
            <h1 className="text-sm mt-[-0.1rem]">{price / 100}</h1>
          </div>
        </div>
        <div className="w-[7rem] mx-[5rem] my-[2rem] h-[8.5rem] bg-cover flex flex-col">
          <img
            src={
              FOOD_ITEM_IMAGE +
              menu?.card?.info?.imageId
            }
            alt={menu?.card?.info?.name}
            className="h-[100%] w-[100%] rounded-lg object-cover"
          />
        <div className="flex justify-between">
        <button
            className="bg-white text-lg h-[2rem] w-[2rem] border border-gray-100 rounded-r-lg rounded-l-lg rounded-b-lg hover:shadow-lg text-gray-400 font-bold"
            onClick={()=>cartRemoveHandler(menu.card.info.id)}
          >
            <RemoveIcon/>
          </button>
          
          <h1 className="text-green-500 font-semibold mt-1">{cartItems.filter((item)=>item.id===menu?.card?.info?.id).length}</h1>
          
          <button
            className="bg-white h-[2rem] w-[2rem] border border-gray-100 rounded-r-lg rounded-l-lg rounded-b-lg hover:shadow-lg text-green-500 font-bold"
            onClick={()=>cartAddHandler(menu.card.info.id)}
          >
            <AddIcon/>
          </button>
          </div>
        
        </div>
      </div>
      <div className={"border-b w-[88%] ml-[1rem] "+darkModeForLine}></div>
    </>
  );
};

export default FoodItem;
