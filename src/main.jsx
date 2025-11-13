import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import Home from './components/Home/Home.jsx';
import AllCrops from './components/AllCrops/AllCrops.jsx';
import AuthProvaider from './contexts/AuthProvaider.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthLayout from './layout/AuthLayout.jsx';
import MyPosts from './components/MyPosts/MyPosts.jsx';
import AddCrops from './components/AddCrops/AddCrops.jsx';
import MyIntests from './components/MyInterests/MyIntests.jsx';
import Profile from './components/Profile/Profile.jsx';
// import PrivateRoute from './routes/PrivateRoute.jsx';
import CropDetails from './components/CropDetails/CropDetails.jsx';
import Details from './components/Details/Details.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/allcrops",
        Component: AllCrops
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: '/myposts',
        element: <MyPosts></MyPosts>
      },
      {
        path: "/addcrops",
        element: <AddCrops></AddCrops>
      },
      {
        path: "/myinterests",
        element: <PrivateRoute>
          <MyIntests></MyIntests>
        </PrivateRoute>
          
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
     {
  path: '/cropdetails/:id',
  loader: ({ params }) =>
    fetch(`http://localhost:3000/products/${params.id}`).then(res => res.json()),
  element: (
    <PrivateRoute>
      <CropDetails />
    </PrivateRoute>
  )
},

      {
        path: "/details",
        loader: async () => {
          const res = await fetch("http://localhost:3000/products");
          if (!res.ok) throw new Error('Failed to fetch crops');
          return res.json(); 
        },
        element: <Details></Details>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }



    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
  </StrictMode>,
)
