import React from 'react'
import foodImage from '../assets/food.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  const styles = {
    backgroundImage: `url(${foodImage})`,
  }

  return (
    <div className="bg-cover h-[92vh]  relative flex flex-col justify-center" style={styles}>
        <div className=" flex items-center w-[44vw] mx-[2rem] p-[1rem]">
            <h1 className="text-6xl font-bold font-serif">Get your favourite Indian Food in just one click</h1>
        </div>
        <div>
        <Link to="/body"><button className="bg-black text-white w-[7rem] m-[3rem] h-[3rem] rounded-lg cursor-pointer font-semibold">ORDER NOW</button></Link>
        </div>
    </div>
  )
}

export default Home
