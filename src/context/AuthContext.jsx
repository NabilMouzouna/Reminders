import { createContext,useState,useContext } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => { 
    const [ User , setUser ] = useState()
    return <AuthContext.Provider value={{User,setUser}}>{children}</AuthContext.Provider>
 }
export const AuthContextConsumer = () => { 
    return useContext(AuthContext)
 }
