import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import {auth,googleAuthProvider} from '../../config/firebase.config'
import { signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContextConsumer} from '../../context/AuthContext'

const GoogleButton = () => {
//* VARIABLES:
    const { setUser } = AuthContextConsumer()
    const navigate = useNavigate()

//* Functions :
    const LoginWithGoogle = async () => { 
        await signInWithPopup(auth,googleAuthProvider).then(() => { alert('logged in') })
        .catch((error) => { alert(error.message) })
     }
     useEffect(() => { 
        console.log(import.meta.env.firebase_Config)
        const unsub = auth.onAuthStateChanged(
            (user) => { 
                if(user){
                    console.log(user)
                    navigate('/home')
                    setUser(user)
                }
             }
        )
        return () => { unsub() }
      },[])
  return (
        <button 
        onClick={
            (e) => { 
                e.preventDefault();
                LoginWithGoogle()
             }
        }
        className="py-3 px-4 bg-gray-200 rounded-lg active:bg-gray-300">
            <FontAwesomeIcon icon={faGoogle} className="text-blue-500"></FontAwesomeIcon>
            <span className="mx-3 ">Login with google</span>
        </button>
  )
}

export default GoogleButton