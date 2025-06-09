import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/authen-form/LoginForm';

function LoginPage() {

  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-background'>
       <header className="bg-card shadow-sm py-0 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://www.shutterstock.com/image-vector/blood-donation-logo-design-vector-600nw-2233019493.jpg"
            alt="Blood Drop Logo"
            className="h-20 w-40 object-contain"
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600">
          LifeStream: Connecting Donors, Saving Lives
        </h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-semibold transition duration-300">
          Login
        </button>
      </header>

      <nav className="bg-red-600 shadow-sm py-3">
        <ul className="flex justify-between max-w-6xl mx-auto px-6 text-white font-semibold text-xl">
          <li
            className="cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary transition-all"
            onClick={() => navigate("/news")}
          >
            New
          </li>
          <li
            className="cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary transition-all"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary transition-all"
            onClick={() => navigate("/about-us")}
          >
            About Us
          </li>
          <li
            className="cursor-pointer hover:text-primary hover:border-b-2 hover:border-primary transition-all"
            onClick={() => navigate("/find-blood")}
          >
            Find Blood
          </li>
        </ul>
      </nav>

      <LoginForm></LoginForm>
    </div>
  )
}

export default LoginPage