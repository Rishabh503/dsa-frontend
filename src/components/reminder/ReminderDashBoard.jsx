import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAuth } from '../../context/AuthContext';
import { getAllQuestions, getOneUser } from '../../data/server';
import { FaRegHospital } from 'react-icons/fa';

export const ReminderDashBoard = () => {
    const userId=useParams();
    const {user}=useAuth();
    // console.log(user)
    console.log(userId.userId)
    const[loading,setLoading]=useState(false)
    const [userData,setUserData]=useState();
    const [questions,setQuestions]=useState()
    const [reminders,setReminders]=useState()

    useEffect(()=>{
        const getData=async()=>{
            try {
                const data=await getOneUser(userId.userId);
                const quesd=await getAllQuestions();
                setLoading(true)
                setQuestions(quesd.data)
                setUserData(data.data)
                setReminders(data.data.reminders)
                // if(!response.ok) throw new Error("erroe geting")
                console.log("response",response)
            } catch (error) {
                console.log("error",error)
            }
        }
        getData();
    },[])
    // console.log("userdata",userData)
    // console.log("quesd",questions)

    
    // console.log("reminders",reminders)

    // const reminderQues=reminders.map((reminder)=>reminder.question) || []
    // console.log(reminderQues)
    // const reminderQuesInfo=questions.find((ques)=>reminderQues.includes(ques._id)) || [] 
    // console.log(reminderQuesInfo)

    const findQuesDetails=(questionId)=>{
        const data=loading?questions.filter((ques)=>ques._id.includes(questionId)):[]
        return data[0];
    }

    // const tryy=findQuesDetails("67d34b69e5966e4550dd1b3c");

    // console.log("data of reminder ques",tryy)

    const finnal=loading?reminders.map((reminder)=>findQuesDetails(reminder.question)):"";
    console.log("final data",finnal)
    return (
        <div className="container mt-20 mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Hi {user.name} Here are your all Reminders </h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Question Name</th>
                  <th className="border border-gray-300 px-4 py-2">Link</th>
                  <th className="border border-gray-300 px-4 py-2">Level</th>
                  {/* <th className="border border-gray-300 px-4 py-2">Deadline</th> */}
                  <th className="border border-gray-300 px-4 py-2">Solve Again Date</th>
                  <th className="border border-gray-300 px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading?finnal.map((reminder,i) => (
                  <tr
                    key={i}
                    className={`${
                      reminder.done ? "bg-green-100" : "bg-white"
                    } hover:bg-gray-50`}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {reminder.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href={reminder.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Open Link
                      </a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <span
                        className={`px-2 py-1 text-sm rounded text-center ${
                          reminder.level === "easy"
                            ? "bg-green-200"
                            : reminder.level === "medium"
                            ? "bg-yellow-200"
                            : "bg-red-200"
                        }`}
                      >
                        {reminder.level}
                      </span>
                    </td>
                    {/* <td className="border border-gray-300 px-4 py-2">
                      {reminder.deadlineByAdmin.slice(0,10)}
                    </td> */}
                    <td className="border text-center border-gray-300 px-4 py-2">
                      {reminders[i].date.slice(0,10)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reminder.done ? (
                        <span className="text-green-500">Completed</span>
                      ) : (
                        <button
                        //   onClick={() => markAsDone(reminder.id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                        >
                          Mark as Done
                        </button>
                      )}
                    </td>
                  </tr>
                )):""}
              </tbody>
            </table>
          </div>
        </div>
      );
    };
