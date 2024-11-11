import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {Container, Navbar, Button, FormControl, Nav, Dropdown, Badge} from 'react-bootstrap';


const ForgotPassword = () => {
  const [email, setEmail] = useState()

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    
  }
     
    const handleConfirm = () => {
      axios.post('https://api.bigwave.in/test_bigwave/api/UserController/reenter_email', {
        email: email,
       

        
      })
      .then((response)=>{
          console.log(response)
          alert("ok")
        
      })
      .catch((error)=>{
        console.log(error)
        alert("Not ok")
        
      })
      
   }
  
  return (
    <div className='container'>
        <form className='form-outer-wrapper'>
      <label>
        Enter email ID:
        <input type="text" value={email} onChange={handleEmail}/>

      </label>
      <Link to="/verify-new"><Button onClick={handleConfirm}>Submit</Button></Link>
      </form>
      </div>

  )
}

export default ForgotPassword