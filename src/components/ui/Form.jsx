import React from 'react';
import GoogleButton from './GoogleButton';
import { AuthContextConsumer } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const { setUser } = AuthContextConsumer()
    const navigate = useNavigate()
    const user = {
        id : crypto.randomUUID(),
        email : "defaultEmail@example.com",
        password : "123456",
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-centerp-8 text align">
      <h1 className="text-4xl py-1 mb-5">Welcome to Apple Reminders clone</h1>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email address
          </label>
          <input
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            id="email"
            type="email"
            placeholder="Email address"
            defaultValue={user.email}
          />
          <label className="block text-gray-700 text-sm  mb-2 mt-5" htmlFor="email">
            Password
          </label>
          <input
            className=" appearance-none border rounded w-full py-3 px-4 text-gray-700 focus:outline-none"
            id="password"
            type="password"
            placeholder="Password"
            defaultValue={user.password}
          />
        </div>
        <button
          className="bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
          type="button"
          onClick={(e) => { 
            e.preventDefault()
            navigate('/home')
            setUser(user)
           }}
        >
          Email and Password
        </button>
        <GoogleButton/>
        <hr className="w-full mb-4" />
      </form>
    </div>
  );
}

export default Form;