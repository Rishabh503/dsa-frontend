import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../components/navbar/NavBar'
import { Outlet } from 'react-router'
import { Login } from '../components/login/Login'

export const User = () => {
  return (
    <div className="">
        coming from user page
    <div className="flex flex-col justify-between">
    <ToastContainer />
    
    <Navbar/>
    {/* <Login/> */}
    {/* <AdminDashBoard/> */}
    {/* <p></p> */}
    <Outlet/>

    </div>
    {/* <UserDashBoard/> */}
  </div>
  )
}
