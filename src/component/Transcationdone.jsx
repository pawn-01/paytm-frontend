import React, { useEffect } from 'react'
import { MdDone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transcationdone = () => {
    useEffect(() => {
        toast.success('Transcation done', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            })
   
    }, [])
    

  return (
    <div className='h-[100vh] flex justify-center items-center flex-col gap[1rem]'>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    <h1 className='font-custom text-[3rem]'>Transcation done</h1>
    <div className='h-[15rem] w-[15em] bg-green-400 flex justify-center items-center rounded-full'><MdDone className='text-[10rem]'/></div>
    <h3 className='font-custom pt-[2rem]'>go to dashboard to check Your Balance: <Link to="/dashboard" className='text-red-400'>Dashboard</Link></h3>
    </div>
  )
}

export default Transcationdone