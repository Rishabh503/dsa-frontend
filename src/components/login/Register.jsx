import React, { useState } from 'react'
import { registerUser } from '../../data/server.js'
import { toast } from 'react-toastify';

export const Register = () => {

    // !username|| !name || !email || !password || !role || !branch || !year
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [branch, setBranch] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData={
            username,
            name,
            email,
            password,
            branch,
            year
        }
        console.log(formData)
       try {
         const user=await registerUser(formData);
         toast.success(user.message)
         setUsername(''),setName(''),setBranch(''),setEmail(''),setPassword(''),setYear('')
       } catch (error) {
        toast.error(error.message)
       }
        console.log(user)
    }


  return (

    <section className='min-h-screen w-full bg-gray-200'>
        <div className='py-10 px-40  w-full h-full '>
        <div className='p-2 h-full w-full flex bg-white mt-10' >
            {/* image part */}
                <div className='p-2 h-full w-1/2  mt-10' >
                        
                    <img src="photo.jpg" alt="" />
                    </div>
            {/* details part */}
                    <div className='p-2 h-full w-1/2   mt-10' >
                            <h1 className='text-2xl text-center font-semibold'>Register</h1>

                        <form onSubmit={(e)=>handleSubmit(e)}  className='mt-2 gap-4 flex flex-col '>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Name</label>
                                <input className='w-[80%] rounded-md shadow-sm border pl-2' placeholder='Name' value={name} required type="text" onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Email</label>
                                <input className='w-[80%] rounded-md shadow-sm border pl-2' placeholder='Email' value={email} required type="email" onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Password</label>
                                <input className='w-[80%] rounded-md shadow-sm border pl-2' placeholder='password' value={password} required type="password" onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>User Name</label>
                                <input className='w-[80%] rounded-md shadow-sm border pl-2' placeholder='User Name' value={username} required type="text" onChange={(e)=>setUsername(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Branch</label>
                                <input className='w-[80%] rounded-md shadow-sm border pl-2' placeholder='Branch' value={branch}  required type="text" onChange={(e)=>setBranch(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Year</label>
                                <input className='w-[80%] rounded-md shadow-sm border pl-2' placeholder='Year' value={year} required type="text" onChange={(e)=>setYear(e.target.value)} />
                            </div>
                            <button className='px-5 py-2 w-[30%] items-center rounded-lg text-white text-lg border bg-blue-400 text white'>
                                    Submit
                                </button>
                        </form>
                    </div>
           </div>
        </div>
    </section>
  )
}
