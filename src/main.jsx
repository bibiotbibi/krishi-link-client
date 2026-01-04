import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from '../../../ASSIGNMENT/krishi-link-client/src/contexts/ThemeContext.jsx';

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
import NatureSection from './components/NatureSection/NatureSection.jsx';
import Story from './components/Story/Story.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import About from './components/About/About.jsx';



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
        path: '/story',
        element: <Story></Story>
      },
      {
        path: "/naturesection",
        element: <NatureSection></NatureSection>
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
          fetch(`https://krishi-link-server-flax.vercel.app/products/${params.id}`).then(res => res.json()),
        element: (

          <CropDetails />

        )
      },

      {
        path: "/details",
        loader: async () => {
          const res = await fetch("https://krishi-link-server-flax.vercel.app/products");
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
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/dashboardlayout",
    Component: DashboardLayout,
    children: [
      {
        path: "/dashboardlayout/dashboard",
        element: <Dashboard></Dashboard>
      },

      {
        path: "/dashboardlayout/myinterests",
        element: <PrivateRoute>
          <MyIntests></MyIntests>
        </PrivateRoute>

      },
      {
        path: '/dashboardlayout/myposts',
        element: <MyPosts></MyPosts>
      },
      {
        path: "/dashboardlayout/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
    </ThemeProvider>
  </StrictMode>
)
