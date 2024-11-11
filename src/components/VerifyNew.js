import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const VerifyNew = () => {
  const [code, setCode] = useState()
  const [ID, setID] = useState()
  

  const handleCode = (e) =>{
    setCode(e.target.value)

  }
  

const handleID = (e) =>{
    setID(e.target.value)}
  
   
  const handleConfirm = () => {
    axios.post('https://api.bigwave.in/test_bigwave/api/UserController/verify', {
      id: ID,
      verification_code: code
      
    })
    .then((response)=>{
        alert(response.data.message)
      
    })
    .catch((error)=>{
     alert("Invalid Code")
    })
    console.log(code)
 }
 
       
  return (
    <div className='container'>
        <form className='form-outer-wrapper'>
      <label>
        Enter OTP:
        <input type="text" value={code} onChange={handleCode} />
        Enter ID:
        <input type="text" value={ID} onChange={handleID} />

      </label>
      
      <Link to="/reset-password"><Button onClick={handleConfirm}>Confirm</Button></Link>
      
      
      </form>
      </div>
  )
}

export default VerifyNew