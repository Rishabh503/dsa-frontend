import { useEffect, useState } from "react";
import { getAllQuestions } from "./data/server";
// import { AdminDashBoard } from "./components/AdminDashBoard";
import { UserDashBoard } from "./components/user/UserDashBoard";
import { AdminDashBoard } from "./components/admin/AdminDashBoard";
import Navbar from "./components/navbar/NavBar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

export default function App() {
  // const data=getAllQuestions();
 
  return (
    <div className="">
      <div className="flex justify-between">
      <ToastContainer />
      <Navbar/>
      {/* <AdminDashBoard/> */}
      <Outlet/>
      </div>
      {/* <UserDashBoard/> */}
    </div>
  )
}