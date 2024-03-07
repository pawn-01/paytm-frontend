import React, { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signin = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState("");


  function Notify(data){
    toast.warn(data, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
 
  }

async function getdata(){
 const res =  await fetch("https://paytm-backend-yufy.onrender.com/api/v1/user/signin",{
         method:'POST',
         mode:"cors",
         headers: {
          "Content-Type": "application/json"
            },
         body:JSON.stringify({
             "username":email,
             "password":password
         })
      });

   const data = await res.json(); 
  
   if(data.int==1){
    localStorage.setItem("token", data.token)
       navigate("/Dashboard");
   }
   else{
      Notify(data.message)
   }

}
useEffect(() => {
  const fetchData = async () => {
    try {
        const response = await axios.post(
            "https://paytm-backend-yufy.onrender.com/api/v1/user/me",
             {}, // Empty data as no data is being sent in the POST request body
            {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.data.flag === true) {
            navigate("/Dashboard");
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error as per your application's requirements
    }
};

fetchData(); // Call the async function inside useEffect

}, [])  

  return (
    <div className='flex h-[100vh] flex-col justify-center items-center bg-[gray]'>
      <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition= {Bounce}
            />
     <div className='flex flex-col h-[53%] w-[20%] bg-white rounded-lg shadow-2xl shadow-white/40'>
            <h1 className='text-[2.5rem] font-[600] font-custom text-center w-[100%] '>Sign in</h1>
            <h4 className='font-bold-sm text-[#636363ed] px-[2rem] text-center py-1'>Enter yours information to access your account</h4>
            <form>
              <h3 className='font-sans font-semibold text-[1rem] px-[1.5rem] pt-[1rem] pb-[.5rem]'>Email</h3>
              <div className='w-[100%] pl-[1.5rem] pb-[1.5rem]'><input type="email"  placeholder="Xyz@gmail.com" required onChange={function(v){setemail(v.target.value)}} className='w-[90%] border-2 h-[2rem] border-[#d4d4d4]'></input></div>
              <h3 className='font-sans font-semibold text-[1rem] px-[1.5rem] pt-[0rem] pb-[.5rem]'>Password</h3>
              <div className='w-[100%] pl-[1.5rem] pb-[1.5rem]'><input type="password"  placeholder="1234567" minLength="7" required onChange={function(v){setpassword(v.target.value)}} className='w-[90%] border-2 h-[2rem] border-[#d4d4d4]'></input></div>
              <div className='flex justify-center items-center'><button className='bg-black text-white w-[90%] h-[2.5rem] rounded-lg' 
                    onClick={function(event){
                      event.preventDefault();
                       getdata();
              }}>Sign In</button></div>
              <div className='flex justify-center items-center py-[1rem]'>
               <h3 className='font-sans font-semibold text-[.9rem]'>Don't have an account?<Link to="/Signup"> Signup</Link></h3>
            </div>
            </form>
            
     </div>
   </div> 
  )
}

export default Signin;