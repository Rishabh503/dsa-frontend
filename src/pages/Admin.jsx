import React from 'react'
import AdminNavBar from '../components/navbar/AdminNavBar'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router'
import { Login } from '../components/login/Login'

export const Admin = () => {
  return (
    <div className="">
    <div className="flex flex-col justify-between">
    <ToastContainer />
    <AdminNavBar/>
    {/* <AdminDashBoard/> */}
    <Login/>
    <Outlet/>
    </div>
    {/* <UserDashBoard/> */}
  </div>
  )
}
