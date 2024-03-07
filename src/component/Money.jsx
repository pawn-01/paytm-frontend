import React, { useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import axios from "axios";

const Money = () => {
  const navigate = useNavigate();
  const [value, setvalue] = useState(0);
  const [search] = useSearchParams();
  const name = search.get("name");
  const id = search.get("id");

  async function Transcation(){
       const res = await axios.post("https://paytm-backend-yufy.onrender.com/api/v1/account/transfer",{
         amount:value,
         to:id
       },{
          headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
          }   
       },
       );

       if(res.data.flag==1){
             navigate("/Transcation");
       }
   }

  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <div className='flex flex-col gap-[1rem] shadow-md w-1/3 h-[50%] shadow-black px-[3rem]'>
      <h1 className='text-center text-[2.5rem] font-custom font-semibold pl-[0rem] pb-[3rem] pt-[1rem]'>Send Money</h1>
      <div className='flex items-center gap-[1rem]'>
        <div className='w-[3rem] h-[3rem] bg-green-400 flex justify-center items-center rounded-full font-bold text-2xl'>{name.charAt(0).toUpperCase()}</div>
        <h2 className='font-custom font-semibold text-2xl'>{name}</h2>
      </div>
      <h3 className='font-custom'>Amount (in Rs)</h3>
      <div className=''><input type='number' placeholder='Enter Amount' min={1} max={5} className='border border-[gray] w-[93%] h-[2.6rem] rounded-md' onChange={(e)=>{setvalue(e.target.value)}}></input></div>
      <button className='bg-green-400 w-[93%] h-[3rem] rounded-lg font-custom font-bold' onClick={Transcation}>initiate Transfer</button>
    </div>
    </div>
  )
}

export default Money