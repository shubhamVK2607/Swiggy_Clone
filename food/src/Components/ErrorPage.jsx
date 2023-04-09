import React from 'react'
import {useRouteError} from 'react-router-dom'


const ErrorPage = () => {
    const err=useRouteError()  //This hook give us some extra information about the error.

    console.log("error",err)



  return (
    <div className='w-full h-screen bg-slate-100'>
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl">Oops!!!</h1>
      <h2 className="font-semibold text-3xl">Something went wrong...</h2>
      <h3 className="font-semibold text-2xl italic">{err.status} : {err.statusText}</h3>
    </div>
    </div>
  )
}

export default ErrorPage
