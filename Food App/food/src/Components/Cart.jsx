import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyRupee from "@mui/icons-material/CurrencyRupee";
import {clearCart} from "../stateManagement/cartSlice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  //we have used useSelector hook to read the data from stice.

  console.log("From Cart", cartItems);

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

function cartAddHandler(id)
{
    console.log("Now adding id from cart component is",id)
    //  dispatch(addItems(menu.card.info))

}

function cartRemoveHandler(id)
{
    console.log("Now removing id from component is",id)
    // dispatch(removeItems(id))
}

  return (
    <div className="w-full h-full flex items-center flex-col">
      <div className="mt-[12rem] border border-black w-[35vw] h-[80vh]">
        {cartItems.map((item) => (
          <ul className="flex justify-between">
            <li><div className="w-[15vw]">{item.name}</div></li>

            <div className="flex justify-between">
        <button
            className="bg-white text-lg h-[2rem] w-[2rem] border border-gray-100 rounded-r-lg rounded-l-lg rounded-b-lg hover:shadow-lg text-gray-400 font-bold"
            onClick={()=>cartRemoveHandler(item.id)}
          >
            <RemoveIcon/>
          </button>
          
          {/* <h1 className="text-green-500 font-semibold mt-1">{cartItems.filter((item)=>item.id===menu?.card?.info?.id).length}</h1> */}
          
          <button
            className="bg-white h-[2rem] w-[2rem] border border-gray-100 rounded-r-lg rounded-l-lg rounded-b-lg hover:shadow-lg text-green-500 font-bold"
            onClick={()=>cartAddHandler(item.id)}
          >
            <AddIcon/>
          </button>
          </div>
            <li
              className=""
              style={{
                fontSize: "11px",
                fontWeight: "600",
                fontFamily:
                  "ProximaNovaCondensedRegular,arial,Helvetica Neue,sans-serif",
                color: "#8b8d97",
              }}
            >
              <CurrencyRupee fontSize="small" />
              
                
              
              {item.price?item.price/100:item.defaultPrice/100}
            </li>
          </ul>
        ))}
        
      </div>
      <button className="bg-green-300 h-[2rem]" onClick={clearCartHandler}>Clear Cart</button>
      
    </div>
  );
};

export default Cart;
