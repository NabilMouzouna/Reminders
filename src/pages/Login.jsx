import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import {auth,googleAuthProvider} from '../config/firebase.config'
import { signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContextConsumer} from '../context/AuthContext'
const Login = () => {
//* VARIABLES:
    const { setUser } = AuthContextConsumer()
    const navigate = useNavigate()


//* Functions :
    const LoginWithGoogle = async () => { 
        await signInWithPopup(auth,googleAuthProvider).then(() => { alert('logged in') })
        .catch((error) => { alert(error.message) })
     }
     useEffect(() => { 
        const unsub = auth.onAuthStateChanged(
            (user) => { 
                if(user){
                    navigate('/home')
                    setUser(user)
                }
             }
        )
        return () => { unsub() }
      },[])
  return (
    <div className=" min-h-screen text-center mt-[15%]">
        <h1 className="text-4xl py-1 ">Welcome to Apple Reminders clone</h1>
        <h3 className="py-1">please sign in first</h3>
        <button 
        onClick={
            (e) => { 
                e.preventDefault();
                LoginWithGoogle()
             }
        }
        className="py-3 px-4 bg-gray-200 rounded-lg mt-8 active:bg-gray-300">
            <FontAwesomeIcon icon={faGoogle} className="text-blue-500"></FontAwesomeIcon>
            <span className="mx-3 ">Login with google</span>
        </button>
    </div>
  )
}

export default Login