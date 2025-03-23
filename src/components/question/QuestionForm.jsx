import React, { useState } from 'react'
import { NavLink, useLinkClickHandler } from 'react-router'
import { addQues } from '../../data/server'
import { toast } from 'react-toastify';

export const QuestionForm = () => {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [level, setLevel] = useState('')
    const [deadlineByAdmin, setDate] = useState('')



    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData={
            name,
            link,
            level,
            deadlineByAdmin
        }
        console.log(formData)
        try {
            const question=await addQues(formData)
            toast.success(question.message)
            console.log(question)
            setDate('');setName('');setLink('');
        } catch (error) {
            console.log("ERR",error)
        }
    }
  return (
    <section className='w-full bg-gray-100 h-full min-h-screen'>
        {/* sara samana */}
        <div className='h-full w-full flex mt:16  items-center shadow-sm sm:px-64 sm:py-32'>
            {/* isko kreegee center */}
            <div className='p-3 bg-white rounded-md mx-auto border w-[80%]'>
                <div className='flex justify-between w-full'>
                    <h1 className='text-2xl font-semibold'>Add New Question</h1>
                    <NavLink to='/admin' className='text-blue-400' >Back to DashBoard...</NavLink>
                </div>
                {/* forn cintent  */}
                <div className='p-2 h-full ' >
                            

                        <form onSubmit={(e)=>handleSubmit(e)}  className='mt-2 gap-4 flex flex-col '>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Question Name</label>
                                <input className='w-full rounded-md shadow-sm border pl-2' placeholder='Name' value={name} required type="text" onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Link</label>
                                <input className='w-full rounded-md shadow-sm border pl-2' placeholder='Link' value={link} required type="text" onChange={(e)=>setLink(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Level</label>
                                <input className='w-full rounded-md shadow-sm border pl-2' placeholder='Level' value={level} required type="text" onChange={(e)=>setLevel(e.target.value)} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-lg pl-1 '>Question Name</label>
                                <input className='w-full rounded-md shadow-sm border pl-2' placeholder='Date' value={deadlineByAdmin} required type="date" onChange={(e)=>setDate(e.target.value)} />
                            </div>
                            <button className='px-5 py-2 w-[30%] items-center rounded-lg text-white text-lg border bg-blue-400 text white'>
                                    Add Question
                             </button>
                        </form>
                    </div>
            </div>

        </div>
    </section>
  )
}