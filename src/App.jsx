import { useEffect, useState } from "react";
import { getAllQuestions } from "./data/server";
// import { AdminDashBoard } from "./components/AdminDashBoard";
import { UserDashBoard } from "./components/user/UserDashBoard";
import { AdminDashBoard } from "./components/admin/AdminDashBoard";
import Navbar from "./components/navbar/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./context/AuthContext";
import AdminNavBar from "./components/navbar/AdminNavBar";

export default function App() {
  // const data=getAllQuestions();
 const {user}=useAuth()
 console.log(user)
  return (
    <div className="">
      <div className="flex justify-between">
      <ToastContainer />
      {user?user.role=="user"?<Navbar/>:<AdminNavBar/>:''}
      {/* <Navbar/> */}
      {/* <AdminDashBoard/> */}
      <Outlet/>
      </div>
      {/* <UserDashBoard/> */}
    </div>
  )
}