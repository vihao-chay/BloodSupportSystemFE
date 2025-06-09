import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewsPage from './pages/home/news';
import AboutUsPage from './pages/home/AboutUs';
import Homepage from './pages/home/home';
import FindBloodPage from './pages/home/FindBlood';
import LoginPage from './pages/login/login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/news",
      element: <NewsPage />,
    },
    {
      path: "/about-us",
      element: <AboutUsPage />,
    },
    {
      path: "/find-blood",
      element: <FindBloodPage />,
    },
     {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App