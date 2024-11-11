import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import "./App.css"
// import { useForm } from "react-hook-form"
import {Container, Navbar, Button, FormControl, Nav, Dropdown, Badge} from 'react-bootstrap';



const Main = () => {
  const [mail, setMail] = useState()
  const [pwd, setPwd] = useState()

  const handleMail = (e) => {
    setMail(e.target.value)

  }

  const handlePwd = (e) =>{
    setPwd(e.target.value)


  }

  const handleApi = (e) =>{
    console.log({mail, pwd})
    axios.post('https://api.bigwave.in/test_bigwave/api/UserController/login' ,{
      email: mail,
      password: pwd

    })
    .then((res)=>{  
      console.log(res)  
      alert(res.data.message)
          
    })
    .catch((error)=>{
      
      e.preventDefault()
      
      console.log(error) 
      
      alert(error.message)
      
    })
    

  }

  return (
    <div className='container'>
    <form className='form-outer-wrapper'>
  <label>
    Email:
    <input type="email" value={mail} onChange={handleMail} />
  </label>
  <label>
    Password:
    <input type="password" value={pwd} onChange={handlePwd} />
  </label>
  <Container>
  <Navbar.Brand>
  <Link to="/subscribe"><Button onClick={handleApi} >Log In</Button></Link>
  </Navbar.Brand>
  </Container>
  <Container>
        <Navbar.Brand>
            <Link to="/forgot-password"><Button>Forgot Password ?</Button></Link>
        </Navbar.Brand>
  </Container>
  
  <Container>
        <Navbar.Brand>
            <Link to="/create-new-account"><Button>Craete New Account</Button></Link>
        </Navbar.Brand>
  </Container>
  
</form>
</div>
  )
}

export default Main