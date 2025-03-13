import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router'
import { AdminDashBoard } from './components/admin/AdminDashBoard.jsx'
import { UserDashBoard } from './components/user/UserDashBoard.jsx'
import { Register } from './components/login/Register.jsx'
import FrontPage from './components/front/FrontPage.jsx'
// import { LogIn } from 'lucide-react'
import { Login } from './components/login/Login.jsx'
import { QuestionForm } from './components/question/QuestionForm.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
// import { Route } from 'lucide-react'

export const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<FrontPage/>}/>
      <Route path='/admin' element={<AdminDashBoard/>}/>
      <Route path='/user' element={<UserDashBoard/>}/>
      <Route path='/user/:userId' element={<UserDashBoard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/add' element={<QuestionForm/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,  
) 
