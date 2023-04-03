import { createContext,useState ,useContext  } from "react";

const taskContext = createContext()

export const TaskContextProvider = ({children}) => { 
    const [ addTask , setAddTask ] = useState(false)
    return <taskContext.Provider value={{addTask,setAddTask}}>{children}</taskContext.Provider>
 }
const TaskContextConsumer = () => { 
    return useContext(taskContext)
  }
export default TaskContextConsumer