import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import OurAllApplication from '../Pages/OurAllApplication';
import Installation from '../Pages/Installation';
import AppDetails from '../Pages/AppDetails';
import AppNotFound from '../Pages/AppNotFound';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
            loader: () => fetch("/TrendingApps.json")
        },
        {
            path:"/allApplication",
            Component: OurAllApplication,
            loader: () => fetch("/AllApps.json")
        },
        {
         path: "/installation",
         Component: Installation,
         loader: async () => {
        const res = await fetch("/AllApps.json");
        return res.json();
                       }
        },
        {
    
        path: "/appDetails/:id",
        Component: AppDetails,
        loader: async () => {
          const res = await fetch("/AllApps.json");
          return res.json();
        }
      },
        {
            path:'/appNotFound',
            Component: AppNotFound
        }
    ]
  },
]);