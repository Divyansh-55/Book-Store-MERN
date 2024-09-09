import React from 'react'
import { useAuth } from '../Context/AuthProvider';
function Logout() { 
    const [authUser,setAuthUser]=useAuth();
    const handleLogout =()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.clear()
            alert("Logout Sucessfull");
            window.location.reload();
            setTimeout(()=>{
            },3000)
        } catch (error) {
            alert("Error",error);
            setTimeout(()=>{},2000)
        }
    }
  return (
    <div className='px-3 py-2 bg-red-500 text-white cursor-pointer'
    onClick={handleLogout}>
        <button>Logout</button>   
    </div>
  )
}

export default Logout
