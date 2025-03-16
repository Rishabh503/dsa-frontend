import { getAllQuestions, getOneUser } from '@/data/server';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { useParams } from 'react-router';

    const DataContext = createContext();
    
export const DataProvider = ({ children }) => {
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
        console.log("quesd",questions)
    
        
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
    
        // const finnal=loading?reminders.map((reminder)=>findQuesDetails(reminder.question)):"";
        // console.log("final data",finnal)
    
    
      return (
        <DataContext.Provider value={{questions,findQuesDetails }}>
          {children}
        </DataContext.Provider>
      );
    };
    
    export const useData = () => useContext(DataContext);
    