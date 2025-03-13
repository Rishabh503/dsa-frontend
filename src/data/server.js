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