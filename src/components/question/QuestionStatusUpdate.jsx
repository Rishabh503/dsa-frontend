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
import { createReminder, updateStatus } from "@/data/server"
import { useState } from "react"
import { useParams } from "react-router"
import { toast } from "react-toastify"

export function QuestionStatusUpdate({questionId,userId}) {
    const [status, setStatus] = useState('')
    const {findQuesDetails}=useData();
    const quesDetails=findQuesDetails(questionId)

const {user}=useAuth()
// console.log(user._id,questionId)
// const userId=user._idn

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(status)
        const formData={
            status:status
        }
        try {
            const reminder=await updateStatus(questionId,userId,formData);
            console.log(reminder)
            toast.success(reminder.message)
            setStatus("")
        } catch (error) {
            toast.error(error.message)
            console.log("errorid ",error)
        }
    }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-green-400' variant="outline">Update Status</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{quesDetails.name}</DialogTitle>
          <DialogDescription>
            {/* {quesDetails.name} */}
            Update Status
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e)=>handleSubmit(e)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              type="text"
              value={status}
              onChange={(e)=>setStatus(e.target.value)}
              className="col-span-3"
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
          <Button className='bg-blue-400' type="submit">Save changes</Button>
        </form>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
