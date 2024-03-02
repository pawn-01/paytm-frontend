import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Headingdashboard = ({ user }) => {
   const [turn, setturn] = useState(false);
   const navigate = useNavigate();

 function logout(){
     localStorage.clear("token");
     navigate("/signup");
 }

  function menu(){
       if(turn){
        console.log(turn);
        setturn(!turn);
       }
       else{
        console.log(turn);
         setturn(!turn);
       }
  }

  return (
    <div className='flex justify-between px-[2rem] py-[1rem] shadow-lg shadow-black/30 border-[1px] border-black font-bold font-custom text-[1.2rem]'>
        <h3>PayTM App</h3>
         <div className='flex gap-2 items-center'>
          <h3>Hello</h3>
          <div className='flex justify-center items-center rounded-full bg-blue-400 w-[35px] h-[35px] cursor-pointer' onClick={menu}>{user.name.charAt(0).toUpperCase()}
          </div>
          {turn?(<div className='flec flex-col bg-black text-white font-sans rounded-sm'><div className=''>Profile</div><div className='cursor-pointer ' onClick={logout}>Logout</div></div>):(<div></div>)}
         </div>
    </div>
  )
}

export default Headingdashboard