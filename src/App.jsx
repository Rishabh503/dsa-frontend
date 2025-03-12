import { useEffect, useState } from "react";
import { getAllQuestions } from "./data/server";
import { AdminDashBoard } from "./components/AdminDashBoard";
import { UserDashBoard } from "./components/user/UserDashBoard";

export default function App() {
  // const data=getAllQuestions();
 
  return (
    <div className="">
      <AdminDashBoard/>
      <UserDashBoard/>
    </div>
  )
}