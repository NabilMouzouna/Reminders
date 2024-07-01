import { Navigate } from "react-router-dom"
import {AuthContextConsumer} from "../context/AuthContext"

const ProtectedRoute = ({children}) => {
    const {User} = AuthContextConsumer()
  return (
    (User === undefined || null)? <Navigate to="/" /> : children
  )
}

export default ProtectedRoute