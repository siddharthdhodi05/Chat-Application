import React from 'react'
import { BsSearch } from "react-icons/bs";
import OtherUsers from './OtherUsers';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const navigate = useNavigate()
  const logoutHandler = async () =>{
    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout')
      navigate("/login")
      toast.success(res.data.message)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className=' border-r border-slate-500 p-4 flex flex-col'>
      <form className=' flex items-center gap-1'>
        <input
         className=' input input-bordered rounded-md text-white'
         type='text'
         placeholder='Search...'
          />
        <button type='submit' className=' btn bg-slate-600 text-white'>
           <BsSearch size={"24px"}/>
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers/>
      <div className=" mt-2">
        <button onClick={logoutHandler} className=' btn btn-sm bg-gray-400 text-black rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:text-white'>Logout</button>
      </div>
    </div>

  )
}

export default Sidebar
