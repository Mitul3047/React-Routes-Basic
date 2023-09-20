import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import ContactUs from './Components/ContactUs/Contact.jsx';
import Users from './Components/Users/Users.jsx';


const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App></App>,
  // },
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/users",
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      }, 

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
