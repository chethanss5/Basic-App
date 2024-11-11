import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Button } from 'react-bootstrap';

const ResetPassword = () => {
  const [newp, setNewp] = useState()
  const [confirm, setConfirm] = useState()
  const [ID, setID] = useState()

  const handleID = (e) =>{
    setID(e.target.value)
  }
  
  const handleClick = () => {
    axios.put('https://api.bigwave.in/test_bigwave/api/UserController/forgot_password',{
      id: ID,
      newPassword: newp,
      confirmPassword: confirm  
      })
     .then((response)=>{
       console.log(response) 
       alert("Verified")
     })
     .catch((error)=>{
      alert("Not verified")
     })
  }

  return (
    <div className='container'>
        <form className='form-outer-wrapper'>
      <label>
        Change Password:
        <input type="text" value={newp} placeholder='New Password'
        onChange={(e)=> setNewp(e.target.value)}  />
        <input type="text" value={confirm} placeholder= 'Confirm New Password'
        onChange={(e)=> setConfirm(e.target.value)}   />
        Enter ID:
        <input type="text" value={ID} onChange={handleID} />

      </label>
      
      <Link to="/"><Button onClick={handleClick}>Submit</Button></Link>
      </form>
      </div>
  )
}

export default ResetPassword