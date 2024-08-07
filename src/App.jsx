import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
