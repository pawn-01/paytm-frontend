import React, { useEffect, useState } from 'react'
import Headingdashboard from '../Smallcomponent/Headingdashboard';
import { ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import Balance from '../Smallcomponent/Balance';
import Searchbar from '../Smallcomponent/Searchbar';



const Dashboard = () => {
  const navigate = useNavigate();
   const [user, setuser] = useState({
     name:"",
     balance:"...."
   });
   //const [account, setaccount] = useState({});

  function Notify(){
    toast.success('Your Account', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
    }

  useEffect(() => {
    Notify();
    console.log("bahi yaha kya ho rha hai -->  Bearer "+localStorage.getItem("token"));

    const fetchData = async () => {
      try {
          const response = await axios.get(
              "https://paytm-backend-yufy.onrender.com/api/v1/account/balance",
                // Empty data as no data is being sent in the POST request body
              {
                  headers:{
                      'Authorization': "Bearer " + localStorage.getItem("token"),
                      'Content-Type': 'application/json'
                  }
              }
          );
          setuser({name:response.data.username,
               balance:response.data.balance})
      } catch (error) {
          console.error('Error fetching user data:', error);
           navigate("/signup");
          // Handle error as per your application's requirements
      }
    }

    fetchData();
   
  }, [])
  
  
  
  return (
     <>
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        />
      <Headingdashboard user={user}></Headingdashboard>
      <Balance balance={user.balance}></Balance>
      <h1 className='font-bold text-[1.3rem] px-[1.5rem]'>User</h1>
      <Searchbar></Searchbar>
     </>
  )
}

export default Dashboard;