import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/AuthContext"
import { useData } from "@/context/DataContext"
import { createReminder, markAsStar, updateStatus } from "@/data/server"
import { useState } from "react"
import { useParams } from "react-router"
import { toast } from "react-toastify"

export function Star({color,icon,questionId,userId}) {
    const [status, setStatus] = useState('')
    const {findQuesDetails}=useData();
    const quesDetails=findQuesDetails(questionId)

const {user}=useAuth()
// console.log(user._id,questionId)
// const userId=user._idn
console.log("color laya",color)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(status);
        const formData={
          starred:status
        }
        try {
          const marking=await markAsStar(questionId,userId,formData)
          console.log(marking)
          toast.success(marking.message)
        } catch (error) {
          toast.error(error.message)
          console.log("error from here frontend in star",error)
        }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`border-none shadow-none ${color?"text-yellow-400":"text-black"}`} variant="outline">{icon}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{quesDetails.name}</DialogTitle>
          <DialogDescription>
            {/* {quesDetails.name} */}
           Mark as Star??
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e)=>handleSubmit(e)} className="grid gap-4 py-4">
          <div className="flex  items-center gap-4">
            <Label htmlFor="status" className="text-start text-xl">
          Click to mark it as Star             </Label>
            <input className="mt-2"
                type="checkbox" 
                checked={status} 
                onChange={(e)=>setStatus(e.target.checked)} 
  />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div> */}
          {/* <button type="submit" >Save changes</button> */}
          <Button className='bg-blue-400' type="submit">Save </Button>
        </form>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
