import React, { useEffect, useState } from 'react'
import UserList from './UserList';

const usedebounce = (name,delay)=>{
      const [debounce, setdebounce] = useState("hi");
      const [load, setload] = useState(true);
      
        useEffect(() => {
          const time = setTimeout(()=>{
              setdebounce(name);  
              setload(false);
          },delay);
        
          return () => {
             clearTimeout(time);
          }
        }, [name],[delay])
    
        return {debounce,load};
}

const Searchbar = () => {
  const [name, setname] = useState("");
  const debouncy = usedebounce(name,500);
  

  return (
    <div className='flex flex-col justify-center items-center'>
       <input type='string' placeholder="Search users" className='w-[97%] h-[2rem] border border-[silver] mb-[1rem]' onChange={(e)=>{setname(e.target.value)}}></input>
       {!debouncy.load ? <UserList name={debouncy.debounce} load={debouncy.load} ></UserList>:<div>Loading.........</div> }
    </div>
  )
}

export default Searchbar