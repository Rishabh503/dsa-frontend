import { useState } from "react";
import { Menu, X, Star, Clock, Users, BarChart, List } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

export default function AdminNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  const handleLogout=async()=>{
    try {
      const response=await fetch(`https://dsa-backend-yr7z.onrender.com/api/v1/user/logout`,
        {
          method:"POST",
          credentials: 'include'
        }
  
      )
      if(!response.ok) throw new Error("error logging our")
        window.location.reload()
        navigate('/')
        console.log(response)
    } catch (error) {
      console.log("error loggggint ot",error)
    }
  }
  return (
    <nav className="bg-blue-900 text-gray-100 font-mono w-full p-4 shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center px-3 mx-auto">
        {/* Logo */}
        <NavLink to='/' className="text-xl font-semibold">DSA Manager</NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
           <NavLink to='/admin'>
             <NavItem icon={<List size={20} />} label="Admin" />
            </NavLink> 
            {/* <NavLink to='/user'>
             <NavItem icon={<List size={20} />} label="User" />
            </NavLink> */}
            <NavLink to='/add'>
            <NavItem icon={<List size={20} />} label="Ques" />
            </NavLink>
          {/* <NavItem icon={<Clock size={20} />} label="Reminders" />
          <NavItem icon={<Users size={20} />} label="Groups" />
          <NavItem icon={<Star size={20} />} label="Starred Ques" /> */}
          <NavItem icon={<BarChart size={20} />} label="Progress" />
          <button onClick={()=>{handleLogout()}} >
                      <NavItem icon={<BarChart size={20} />} label="Logout" />
                   </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
         <NavLink to='/admin'>
             <NavItem icon={<List size={20} />} label="Admin" />
            </NavLink> 
            <NavLink to='/add'>
            <NavItem icon={<List size={20} />} label="Ques" />
            </NavLink>
          {/* <NavItem icon={<Users size={20} />} label="Groups" />
          <NavItem icon={<Star size={20} />} label="Starred Ques" />
          <NavItem icon={<LogOut size={20} />} label="Progress" /> */}
        </div>
      )}
    </nav>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2 p-2 cursor-pointer hover:text-gray-400 transition-colors">
      {icon}
      <span>{label}</span>
    </div>
  );
}