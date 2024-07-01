import { useState ,useEffect} from "react"
import TaskContextConsumer from "../../context/AddTaskContext"
import {db} from '../../config/firebase.config'

import {AuthContextConsumer}  from '../../context/AuthContext'
import CategoryContextConsumer from "../../context/CategoryContext"
import { addDoc,collection } from "firebase/firestore"
import TasksDisplay from "./Tasks.display"

const Tasks = () => {

//*VARIABLES :
    const isEmpty = false
    const {addTask , setAddTask} = TaskContextConsumer()
    const [inputValue , setInputValue ] =useState('')
    const { User } = AuthContextConsumer()
    const { Category } = CategoryContextConsumer()

//*FUNCTIONS :
    const AddTask = async(userID,category,task) => {
        const collectionRef = collection(db,'Users',userID,category)
        const TaskData = {
            task: task,
            date: new Date()
        }
        await addDoc(collectionRef,TaskData).then(() => { alert('task added');setInputValue('') }).catch((err) => { alert(err) })
     }

    return(isEmpty)? <div className="h-4/5 my-4 overflow-scroll grid place-content-center text-2xl">No Reminders</div> :(

        <div 
        onClick={(e) => {
            if((e.target === e.currentTarget) && !(Category.title == "Completed")) {setAddTask(!addTask)}
            if(addTask && (inputValue !== '')) AddTask(User.email,Category.title,inputValue)
         }}
        className="h-4/5 my-4 overflow-scroll">
         
         <TasksDisplay id={User.email} clicked = {addTask}/>

{/* THIS IS RESPONSIBLE FOR ADDING NEW TASKS  */}
            {addTask && 
            <div className="flex items-center w-full my-2">
            <span 
            className="w-5 h-5 border-[#0387FF] border-2 rounded-full"></span>
            <input 
            onChange={(e) => { setInputValue(e.target.value) }}
            autoFocus
            placeholder="add Task"
            type="text" 
            className="w-full bg-transparent border-b-[0.5px] border-fontColor outline-none ml-3 p-2 pb-3 text-white"/>
        </div>}
        </div>
    )
}

export default Tasks


/*

*/