import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek,faCalendarCheck,faHardDrive,faFlag,faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import CategoryContextConsumer from '../../context/CategoryContext'
import { useState } from 'react'

const Buttons = [
    {
        icon:faCalendarWeek,
        count:0,
        title:'Today',
        // activeColor :'bg-blue-500',
        activeColor :'#0387FF',

    },
    {
        icon:faCalendarCheck,
        count:0,
        title:'Scheduled',
        // activeColor :'bg-red-600',
        activeColor :'#FE2C2E',

    },
    {
        icon:faHardDrive,
        count:0,
        title:'All',
        // activeColor :'bg-gray-700',
        activeColor :'#636365',
        
      },
      {
        icon:faFlag,
        count:0,
        title:'Flagged',
        // activeColor :'bg-orange-500',
        activeColor :'#FF9900',

    },
    {
        icon:faCircleCheck,
        count:0,
        title:'Completed',
        // activeColor :'bg-green-500',
        activeColor :'#6E7D87',
    },
]


const Button = () => {
  const {Category,setCategory} = CategoryContextConsumer()
  return (
    Buttons.map((btn) => {
      if(btn.title === Category.title) btn.count = Category.count; 
      return (
        <div  
        aria-label={btn.title}
        onClick={(e) => { 
          setCategory({
            title:e.currentTarget.ariaLabel,
            count: btn.count,
            activeColor:btn.activeColor
          })}}
        style = {{backgroundColor:((Category.title === btn.title))? btn.activeColor : "#494779"}}
        key={btn.title}
        className={`p-2 rounded-lg  text-gray-300 focus:text-white cursor-pointer `}>
        <div className='flex justify-between items-center'>
            <FontAwesomeIcon icon={btn.icon}></FontAwesomeIcon>
            <span className='text-xl font-semibold hidden sm:block'>{btn.count}</span>
        </div>
            <span className='text-xs font-normal hidden sm:block'>{btn.title}</span>
    </div>
      )
     })
  )
}

export default Button