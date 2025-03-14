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
import { ProtectedRoute } from './context/ProtectedRoute.jsx'
import { Admin } from './pages/Admin.jsx'
import { User } from './pages/User.jsx'
import { ReminderDashBoard } from './components/reminder/ReminderDashBoard.jsx'
import { ReminderForm } from './components/reminder/ReminderForm.jsx'
import { DataProvider } from './context/DataContext'
import { StarredDashBoard } from './components/starred/StarredDashBoard'
// import { Route } from 'lucide-react'

export const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<FrontPage/>}/>
      <Route path='/admin' element={
          <ProtectedRoute>
             <AdminDashBoard/>
          </ProtectedRoute>
        }/>
      {/* <Route path='/user' element={<UserDashBoard/>}/> */}
      <Route path='/user/:userId' element={
        <ProtectedRoute>
          <UserDashBoard/>
        </ProtectedRoute>
      }/>
       <Route path='/user/reminder/:userId' element={
        <ProtectedRoute>
          <ReminderDashBoard/>
        </ProtectedRoute>
      }/>
       <Route path='/user/starred/:userId' element={
        <ProtectedRoute>
          <StarredDashBoard/>
        </ProtectedRoute>
      }/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/add' element={<QuestionForm/>}/>
      <Route path='/addReminder/:questionId' element={<ReminderForm/>}/>
      <Route path='/adminn' element={<Admin/>}/>
      <Route path='/user' element={<User/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
      <RouterProvider router={router} />
      </DataProvider>
    </AuthProvider>
  </StrictMode>,  
) 
