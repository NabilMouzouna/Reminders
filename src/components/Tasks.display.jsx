import CategoryContextConsumer from '../context/CategoryContext'
import { collection, getDocs,addDoc,deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React from 'react'
import { useState,useEffect } from 'react'
import { db } from '../config/firebase.config'

const TasksDisplay = ({id,clicked}) => {


//* VARIABLES :
    const [ tasks , setTasks ] = useState([])
    const { Category,setCategory } = CategoryContextConsumer()
  const [ update , setUpdate ] = useState({})


//* FUNCTIONS :
      const StoreInCompleted = async(TaskID,data) => {
        const refCompleted = collection(db,'Users',id,"Completed")
        await addDoc(refCompleted,{task : data}).then(async() => { DeleteTask(TaskID);})
      }

      const DeleteTask = async (TaskID) => { 
        const refTask = doc(db,"Users",id,Category.title,TaskID)
        await deleteDoc(refTask).then(() => { alert('Task Completed') }).catch((err) => { alert(err.message) })
       }

      const GetTasks = async() => { 
        const refCollection = collection(db,"Users",id,Category.title)
          const taskArray = []
          await getDocs(refCollection).then((querySnap) => { 
              querySnap.forEach((doc) => { 
                      taskArray.push({...doc.data(),id:doc.id})
                     })
                     setCategory(prev => ({...prev,count:taskArray.length}))
                     setTasks(taskArray)
               }).catch((err) => { throw err })
             }
      const UpdateTask = async(TaskID,UpdatedTask)=>{
        const refTask = doc(db,"Users",id,Category.title,TaskID)
        await updateDoc(refTask,UpdatedTask).catch((err) => { throw err })
      }
      useEffect(() => { 
          GetTasks()
          
       },[tasks])


  return (
    tasks.map((task) => { 
      return (
        <div className="flex items-center w-full my-2" key={task.id}>
        <span 
            onClick={() => { 
              if((Category.title === 'Completed')) return
              StoreInCompleted(task.id,task.task);
             }}
             style={{backgroundColor:(Category.title === 'Completed')? "#0387FF":'transparent'}}
            className="w-5 h-5 border-[#0387FF] border-2 rounded-full active:bg-[#0387FF] hover:bg-blue-900"></span>
           {!(Category.title === "Completed")? 
           <input 
           onChange={(e) => { 
              setUpdate({
                id :task.id,
                task : e.target.value
              })
              if(update.task !=='') UpdateTask(update.id,{task:update.task})
            }}
            autoFocus
            placeholder="add Task"
            type="text"
            defaultValue={task.task}
            className="w-full bg-transparent border-b-[0.5px] border-fontColor outline-none ml-3 p-2 pb-3 text-white z-50"/>
            : 
            <h3 className='w-full bg-transparent border-b-[0.5px] border-fontColor ml-3 p-2 pb-3 text-white line-through'>{task.task}</h3>
          }
    </div>  
      )
     })
  )
}

export default TasksDisplay