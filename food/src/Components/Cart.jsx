import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import {clearCart} from "../stateManagement/cartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { removeDuplicates } from "../utils/function";
import { addItems } from "../stateManagement/cartSlice";
import { removeItems } from "../stateManagement/cartSlice";
import { calculatePrice } from "../utils/function";
import { FOOD_ITEM_IMAGE } from "./Constants";
import CartEmpty from "./CartEmpty";
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-black text-white' : 'bg-slate-100';

  const darkForMsg=isDarkMode?'text-green-400':""
  const darkForBox=isDarkMode?"bg-slate-900 text-white":"bg-white text-black"
  const darkForRuppees=isDarkMode?"bg-slate-900 text-white":"bg-white text-[#8b8d97]"

  //we have used useSelector hook to read the data from stice.

  console.log("From Cart", cartItems);

  let totalPrice=calculatePrice(cartItems)



  const updatedCartItems=removeDuplicates(cartItems)

  console.log("From cart updated items",updatedCartItems)

 

  var price



//   cartItems.map((item)=>{
//       if(item.price)
//         price=item.price
//       else if(item.defaultPrice)
//         price=item.defaultPrice
//   })

function clearCartHandler()
{
   dispatch(clearCart())
}

const dispatch=useDispatch()

function cartAddHandler(item)
{
    console.log("Now adding item from cart component is",item)
     dispatch(addItems(item.key))

}

function cartRemoveHandler(id)
{
    console.log("Now removing id from component is",id)
    dispatch(removeItems(id))
}

if(updatedCartItems.length===0)
{
    return(
        <CartEmpty/>
    )
}

  return (
    <div className={"w-full h-full flex items-center mt-[4.5rem] justify-center p-[2rem]  flex-col object-cover "+darkModeClass}>
         <h1 className={"text-3xl font-mono font-bold "+darkForMsg}>Your Items<span className="mx-3">😋</span></h1>
      <div className={"mt-[3rem] w-[38vw] mx-[2rem] p-[2rem] "+darkForBox}>
       
        {updatedCartItems.map((item) => (
          <ul className="flex justify-between items-center my-3">
            <img
            src={
              FOOD_ITEM_IMAGE +
              item.key.imageId
            }
            alt={item.key.name}
            className="h-[50px] w-[50px] rounded-lg bg-contain"
          />
            <li><div className="w-[15vw] mx-2 px-2 ">{item.key.name}</div></li>
            <div className="flex justify-between border m-1 border-gray-400">
        <button
            className="bg-white text-lg h-[2rem] w-[2rem] border-b-gray-500 border-t-gray-500 border-l-gray-500 hover:shadow-lg text-gray-400 font-bold"
            onClick={()=>cartRemoveHandler(item.key.id)}
          >
            <RemoveIcon/>
          </button>
          
          <h1 className="text-green-500 font-semibold mt-1 px-2  border-t-gray-400 border-b-gray-400">{item.value}</h1>
          
          <button
            className="bg-white h-[2rem] w-[2rem]   border-b-gray-500 border-t-gray-500 border-r-gray-500  hover:shadow-lg text-green-500 font-bold"
            onClick={()=>cartAddHandler(item)}
          >
            <AddIcon/>
          </button>
          </div>
            <li
              className={darkForRuppees}
              style={{
                fontSize: "11px",
                fontWeight: "600",
                fontFamily:
                  "ProximaNovaCondensedRegular,arial,Helvetica Neue,sans-serif",
               
              }}
            >
              <CurrencyRupee fontSize="small" />
              
                
              
              {item.key.price?item.key.price*item.value/100:item.key.defaultPrice*item.value/100}
            </li>
          </ul>
        ))}
        
      </div>
    
      <div className="border-b border-black border-y-2 w-[38vw]"></div>
     <div className={"w-[38vw] mx-[2rem] p-[2rem] "+darkForBox}>
        <div className="flex justify-between">
            <h1 className="font-bold">To Pay</h1>
            <h1 className="font-bold"><CurrencyRupee fontSize="small"/>{totalPrice/100}</h1>
            
        </div>
     
     </div>
     <div className={"w-[38vw] flex justify-start "+darkForBox }>
     <span className="flex bg-red-500 hover:bg-red-700 justify-center items-center p-2 ">
     <DeleteIcon/>
      <button className="" onClick={clearCartHandler}>Clear Cart</button>
      </span>
      </div>

    </div>
  );
};

export default Cart;
