import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const ChangeMail = () => {
    const [email, setEmail] = useState()
    const [ID, setID] = useState()

    const handleEmail = (e) =>{
      setEmail(e.target.value)
      
    }
    const handleID = (e) =>{
        setID(e.target.value)
      }
       
      const handleConfirm = () => {
        axios.put('https://api.bigwave.in/test_bigwave/api/UserController/update_email', {
          id: ID,
        email: email,        
  
          
        })
        .then((response)=>{
            console.log(response)
           alert(response.data.message)
          
        })
        .catch((error)=>{
            alert(error.message)
        })
        
     }
    
    return (
      <div className='container'>
          <form className='form-outer-wrapper'>
        <label>
          Enter New Email ID:
          <input type="text" value={email} onChange={handleEmail}/>
          Enter ID:
        <input type="text" value={ID} onChange={handleID} />

  
        </label>
        <Link to="/change-mail"><Button onClick={handleConfirm}>Submit</Button></Link>
        </form>
        </div>
  
    )
}

export default ChangeMail