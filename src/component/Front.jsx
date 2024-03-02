import React from 'react'
import { useNavigate } from 'react-router-dom'

const Front = () => {
    const navi = useNavigate();

  return (
    <div>
        <button className='w-[5rem] h-[3rem] bg-[skyblue] font-custom font-semibold rounded-2xl my-[2rem] mx-[2rem]' onClick={()=>{navi("/signup")}}>Signup</button>
    </div>
  )
}

export default Front