import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css"
import App from './App';
import Home from './pages/Home';
import Sobre from './pages/About';
import ErrorPage from './pages/Error';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Recover from './pages/Recover';
import Edital from './pages/Edital';
import VidAndImage from './pages/VidAndImage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>
//   },
//   {
//     path: "/sobre",
//     element: <Sobre/>
//   },
//   {
//     path: "/tutorial",
//     element: <Tutorial/>
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/sobre",
          element: <Sobre/>
        },
        {
          path: "/chat",
          element: <Chat/>
        }
        ,
        {
          path: "/login",
          element: <Login/>
        }
        ,
        {
          path: "/recover",
          element: <Recover/>
        },
        {
          path: "/edital",
          element: <Edital/>
        },
        {
          path: "/home/starts",
          element: <VidAndImage/>
        }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
);


