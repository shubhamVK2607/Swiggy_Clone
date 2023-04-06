import React from 'react'
import {useRouteError} from 'react-router-dom'

const ErrorPage = () => {
    const err=useRouteError()  //This hook give us some extra information about the error.

    console.log("error",err)
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong...</h2>
      <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default ErrorPage
