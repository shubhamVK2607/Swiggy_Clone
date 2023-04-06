import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {createBrowserRouter,errorElement, Outlet} from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import RestaurantMenu from './Components/RestaurantMenu';
import Profile from './Components/Profile';
import Home from './Components/Home';
import store from './stateManagement/store';
import { Provider } from 'react-redux';
import { Card } from '@mui/material';
import Cart from './Components/Cart';


/*
 So here We will provide our store to whole app using Provider component. And will past store as a props
 */

function App() {
  return (
    <Provider store={store}>
    <>
      <Header/>
      <Outlet/>
      {/* If path is "/" then render Body componet, And if path is '/about' then render About componen 
         Thats why we have written the routing confugration for this inside children, And children will come
         in Outlet

         Outlet will be filled by children.
      
      */}
      <Footer/>
      </>
      </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/body",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[{
          path:"profile",
          element:<Profile/>
        }]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:resId",  //Dynamic Routing : If we give /restaurant/{any ID}. It will render below RestaurantMenu Component
        element:<RestaurantMenu/>
      },
    ]
  },
  
])



export default appRouter;
