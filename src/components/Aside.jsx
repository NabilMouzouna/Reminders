import React from 'react'
import Button from './Button'
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/firebase.config"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
const Aside = () => {
  const navigate = useNavigate()
    const LogOut = async () => { 
        await signOut(auth).then(() => {
             navigate("/")
            alert("logged Out!!") })
     }
  return (
    <aside className="min-h-full bg-darkAsideColor w-1/6 flex flex-col justify-between sm:w-1/5">
        <div className='grid grid-cols-1 grid-rows-3 p-3 pt-12  gap-2 my-5 sm:grid-cols-2 '>
            <Button/>
        </div>
        <div className='text-center p-3'>
          <button onClick={LogOut} className='bg-darkButtonColor text-red-500 p-3 rounded-lg w-4/5 text-sm flex mx-auto justify-center items-center'>
            <span className='mx-3 hidden sm:block'>Logout</span>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
          </div>
    </aside>

  )
}

export default Aside