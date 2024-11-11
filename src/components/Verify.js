import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {Container, Navbar, Button, FormControl, Nav, Dropdown, Ba, Buttondge} from 'react-bootstrap';


const Verify = () => {
  const [code, setCode] = useState()
  const [ID, setID] = useState()
  

  const handleCode = (e) =>{
    setCode(e.target.value)

  }
  

const handleID = (e) =>{
    setID(e.target.value)
  }
  
   
  const handleConfirm = () => {
    axios.post('https://api.bigwave.in/test_bigwave/api/UserController/verify', {
      id: ID,
      verification_code: code
      
    })
    .then((response)=>{
        alert(response.data.message)
      
    })
    .catch((error)=>{
      console.log(error)
     alert("Invalid Code")
    })
    
 }
 const handleSubmit = (e) =>{

  axios.put('https://api.bigwave.in/test_bigwave/api/UserController/send_code',{
    
      id: ID,      
     
  
   })
   .then((response)=>{
     console.log(response) 
     alert(response.data.message)
   })
   .catch((error)=>{
    console.log(error)
    alert(error.message)
   })
   console.log()
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
      
      <Link to="/verify"><Button onClick={handleConfirm}>Confirm</Button></Link>
      <br/>
      <Link to="/change-mail"><Button>Change Email</Button></Link>
      <Link to="/verify"><Button onClick={handleSubmit}>Send Code Again</Button></Link>
      
      </form>
      </div>
  )
}

export default Verify