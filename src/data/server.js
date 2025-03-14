export const getAllQuestions=async()=>{
    // let data=[];
    try {
        const response=await fetch('http://localhost:5000/api/v1/question/getAllQuestions')
        if(!response.ok) throw new Error("error fetchiing the data")
        const data=await response.json()
    return data;
    } catch (error) {
        console.log("error from fetching the data",error)
        return []
    }
    // return data.json();
}

export const getAllUsers=async()=>{
    try {
        const response=await fetch('http://localhost:5000/api/v1/user/allUsers')
        if(!response.ok) throw new Error("error fetchiing the data")
        const data=await response.json()
    return data;
    } catch (error) {
        console.log("error from fetching the data",error)
        return []
    }
}

export const getOneUser=async(userId)=>{
    try {
        const response=await fetch(`http://localhost:5000/api/v1/user/oneUser/${userId}`)
        if(!response.ok) throw new Error("error fetchiing the data",error)
        const data=await response.json()
    return data;
    } catch (error) {
        console.log("error from fetching the data",error)
        return []
    }
}

export const registerUser=async(formData)=>{
    console.log(formData)
    try{
        const response =await fetch('http://localhost:5000/api/v1/user/register',{
            method:'POST',
            headers:{
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }
        )
        if(!response.ok){
            throw new Error(response.message)
        }
        return response.json()
    }catch(error){
            console.log("error resgitering the user",error)
    }
}

export const addQues=async(formData)=>{
    console.log(formData)
    try{
        const response =await fetch('http://localhost:5000/api/v1/question/newQuestion',{
            method:'POST',
            headers:{
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }
        )
        if(!response.ok){
            throw new Error(response.message)
        }
        return response.json()
    }catch(error){
            console.log("error resgitering the user",error)
    }
}
export const updateStatus=async(questionId,userId,formData)=>{
    try {
        const response=await fetch(`http://localhost:5000/api/v1/question/${questionId}/question/${userId}`,{

            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
           },
            body:JSON.stringify(formData)
        })
        console.log(response)
        if(!response.ok){
            throw new Error("error getting response from backend")
        }
        console.log(response)
        return response.json()
    } catch (error) {
        console.log("error ",error)
    }
}

export const createReminder=async(questionId,userId,formData)=>{
    console.log("from reminders",questionId,userId)
    try {
        const response=await fetch(`http://localhost:5000/api/v1/question/reminder/${questionId}/question/${userId}`,
          {  method:'POST',
            headers:{
                 'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)}
        )
        console.log(response)
        if(!response.ok){
            throw new Error("error getting response from backend")
        }
        console.log(response)
        return response.json();
    } catch (error) {
        console.log("errorid ",error)
    }
}