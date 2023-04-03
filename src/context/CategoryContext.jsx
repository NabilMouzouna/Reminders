import { useState,createContext,useContext  } from "react";



const CategoryContext = createContext()

export const CategoryContextProvider = ({children}) => { 
    const [ Category , setCategory ] = useState({
        title: 'Today',
        count: 0,
        activeColor :''
    })
    return <CategoryContext.Provider value={{Category,setCategory}}>{children}</CategoryContext.Provider>
 }
const CategoryContextConsumer = () => { 
    return useContext(CategoryContext);
 }


export default CategoryContextConsumer;