import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Money from '../component/Money';

const UserList = ({name,load}) => {
    const [list, setlist] = useState([]);
    const navi = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://paytm-backend-yufy.onrender.com/api/v1/user/bulk?filter="+name, 
                     {
                        headers:{
                            Authorization:"Bearer "+localStorage.getItem("token")
                        }
                     }
                );
               
                setlist(response.data.user);
               
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle error as per your application's requirements
            }
        };
    
       fetchData(); // Call the async function inside useEffect
    }, [name])
    
    //if(name=="") return<></>;

  return (
    
    <div>
       {list.map((elem)=>{
           return<div className='w-[97vw] h-[4rem] flex justify-between rounded-lg px-[0.2rem] hover:bg-sky-700 items-center hover:text-white'>
           <div className='flex gap-2'>
           <div className='h-[2rem] w-[2rem] bg-[#6f6df6] rounded-full flex justify-center items-center font-bold'>{elem.name.charAt(0).toUpperCase()}</div>
           <div className='text-custom '>{elem.name}</div>
           </div>
           <button className='h-[2.5rem] px-[0.5rem] bg-[#6ed2e3] rounded-md' onClick={()=>{navi("/money?id="+elem._id+"&name="+elem.name)}}>send money</button>
           </div>
       })}
    </div>
  )
}

export default UserList;