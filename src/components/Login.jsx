import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import {auth,googleAuthProvider} from '../config/firebase.config'
import { signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {AuthContextConsumer} from '../context/AuthContext'
import Form from "./ui/Form"
import GoogleButton from "./ui/GoogleButton"
const Login = () => {
    return (
        <Form/>
    )
}

export default Login