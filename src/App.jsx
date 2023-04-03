import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ProtectedRoute from "./pages/ProtectedRoute"
function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
    </Routes>
  )
}

export default App
