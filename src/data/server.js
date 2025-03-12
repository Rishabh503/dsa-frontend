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