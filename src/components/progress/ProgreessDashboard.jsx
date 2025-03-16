import { useAuth } from '@/context/AuthContext'
import React from 'react'

export const ProgreessDashboard = () => {
    const {user}=useAuth();
    console.log(user)

    const userQuestions=user.questions;
    console.log(userQuestions)

    const pending=userQuestions.filter((ques)=>ques.status.includes("pending"))
    const solved=userQuestions.filter((ques)=>ques.status.includes("Done"))
    const left=userQuestions.filter((ques)=>ques.status.includes("left"))
    const cantSolve=userQuestions.filter((ques)=>ques.status.includes("Cant solve"))
    console.log("pending ques ",pending)
    console.log("cant ques ",cantSolve)
    console.log("left ques ",left)
    console.log("solve ques ",solved)
  return (
    <section className='mt-20 min-h-screen w-full bg-red-\'>
    <div className=' text-2xl font-semibold  rounded-sm w-full p-10 items-center justify-between'>
       <p>
       hi {user.name }
       </p>

       <div className='grid gap-4 text-white  h-full w-full grid-cols-4'>
                <div className='bg-[#4CAF50] flex flex-col items-center justify-center  h-36 rounded-xl '>
                    <p className=''>Done</p> 
                    <p>{solved.length}</p>


                </div>
                <div className='bg-[#FF9800] flex flex-col items-center justify-center  h-36 rounded-xl '>
                <p>Left</p> 
                    <p>{left.length}</p>

                </div>
                <div className='bg-[#2196F3] flex flex-col items-center justify-center  h-36 rounded-xl '> <p>Cant solve</p> 
                    <p>{cantSolve.length}</p>
             </div>
              <div className='bg-[#e0ce2c] flex flex-col items-center justify-center  h-36 rounded-xl '><p>Pending</p> 
                    <p>{pending.length}</p>
</div>
              
       </div>
    </div>
    </section>
  )
}
