import React, { useEffect, useState } from 'react'
import { getAllQuestions, getAllUsers, getOneUser } from '../../data/server.js'
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useParams } from 'react-router';

export const UserDashBoard = () => {
    const userId=useParams();
    console.log(userId.userId)
    const [questions,setQuestions]=useState([])
    const [user,setUser]=useState([])


    useEffect(()=>{
    const loadData=async()=>{
      try {
        const data=await getAllQuestions();
        const user=await getOneUser(userId.userId);
        setQuestions(data.data)
        setUser(user.data)
      } catch (error) {
        console.log("errrrr",error)
      }
    }
      loadData()
    },[])
    // console.log("all ques",questions)
    // console.log("user ka data",user.questions)
    const userQues=user.questions || []
    const quesData=userQues.map((ques)=>ques.questionId) || ["hello"]
    // console.log("ques of user aa ",userQues)
    // console.log("ques of user ",quesData)

    // console.log()
    const quesDisplay=questions.filter(ques=>quesData.includes(ques._id)) || ["trying"];
    // console.log("quesdisplay",quesDisplay)

    const findStatus=(userId)=>{
      const statusData= userQues.filter((ques)=>ques.questionId==userId) || []
      // console.log(statusData.status)
      return (statusData[0]) || ""
    }

    // console.log(findStatus("67d1f0f727fadbd89ec28d37"));


  return (
    <section className='min-h-screen w-full p-2'>
        User DashBoard
        {/* sara content  */}
        <div className='p-4 w-full '>
            {/* title filter and button */}
            <div className='flex justify-between items-center font-semibold mt-10'> 
                <h1 className='text-3xl'>
                    User DashBoard
                </h1>
                <div className='flex gap-5'>
                    <button className='px-5 py-2 rounded-lg text-white text-lg border bg-red-400 text white'>
                        filters
                    </button>
                    <button className='px-5 py-2 rounded-lg text-white text-lg border bg-yellow-400 text white'>
                        Add Questions
                    </button>
                </div>
            </div>
            {/* tables view  */}
            <div className=' p-2 w-full'>
            <div className='w-full border bg-blue-200 pl-3 shadow-md h-auto py-2 rounded-lg flex '>
                    <h1 className='w-1/2'>Question</h1>
                    <h1 className='w-1/4'>Level</h1>
                    <h1 className='w-1/4'>Deadline</h1>
                    <h1 className='w-1/4'>Status</h1>
                    <h1 className='w-1/4'>Actions</h1>
                    
                </div>
                <div className='flex flex-col gap-2'>
                         {
                               quesDisplay.map((question)=>(
                                      <div className='w-full pl-3 border items-center shadow-md h-auto py-4 rounded-lg flex '>
                                          <div className='w-1/2'>
                                            <p>{question.name}</p>
                                            <a href={question.link} className='text-sm'>Visit</a>
                                          </div>
                                          <h1 className='w-1/4'>{question.level}</h1>
                                          <h1 className='w-1/4'>{question.deadlineByAdmin.slice(0,10)}</h1>
                                          {/* <h1 className='w-1/4'>{question.status}</h1> */}
                                          <h1 className='w-1/4'>
                                            {findStatus(question._id).status}
                                          </h1>
                                      <div className='w-1/4 flex gap-1 text-2xl'>
                                              <FaRegEdit className='text-fuchsia-400'/>
                                              <AiOutlineDelete className='text-red-400'/>
                                     </div>
                                          
                                 </div>
                               ))
                            }
                      </div>
            </div>

        </div>
        

    </section>
  )
}
