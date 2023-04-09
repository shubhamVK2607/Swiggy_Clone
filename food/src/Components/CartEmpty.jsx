import React from 'react'
import EmptyCart from '../assets/CartIsEmpty.png'
import { useSelector } from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const CartEmpty = () => {

  const isDarkMode=useSelector(store=>store.darkMod.isDarkMod)
  

  const darkModeClass = isDarkMode ? 'bg-black text-light' : '';
  const darkForMsg=isDarkMode? 'text-red-100':"text-brown-500"
  return (
    <div className={"w-full h-screen flex flex-col items-center p-[6rem] "+darkModeClass}>
      <div className='w-[50vw] h-[60vh] object-fill flex justify-center bg-bl'>
      <img src={EmptyCart} alt="EmptyCart" className='w-[40vw] rounded-2xl' />
      </div>
      <h1 className={"text-3xl font-bold font-mono "+darkForMsg}>Your Cart is Empty!</h1>
      <span className="bg-green-600 p-2 m-2 rounded-lg hover:shadow-2xl hover:bg-green-500">
     <Link to='/body'><button className={"font-mono "+darkForMsg}><ArrowBackIcon/>Go Back and get your favourite food</button></Link> 
      </span>

    </div>
  )
}

export default CartEmpty
