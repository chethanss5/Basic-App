import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {Container, Navbar, Button, FormControl, Nav, Dropdown, Badge} from 'react-bootstrap';

const CreateNewAccount = () => {
  const [fullname, setFullname] = useState()
  const [gender, setGender] = useState()
  const [college, setCollege] = useState()
  const [place, setPlace] = useState()
  const [phone, setPhone] = useState()
  const [code, setCode] = useState()
  const [email, setEmail] = useState()
  const [pswd, setPswd] = useState()

  const handleFullname = (e) =>{
    setFullname(e.target.value)

  }
  const handleGender = (e) =>{
    setGender(e.target.value)

  }
  const handleCollege = (e) =>{
    setCollege(e.target.value)

  }
  const handlePlace = (e) =>{
    setPlace(e.target.value)

  }
  
  const handlePhone = (e) =>{
    setPhone(e.target.value)

  }
  const handleCode = (e) =>{
    setCode(e.target.value)

  }
  const handleEmail = (e) =>{
    setEmail(e.target.value)

  }
  const handlePswd = (e) =>{
    setPswd(e.target.value)

  }
  const handleSubmit = (e) =>{

    axios.post('https://api.bigwave.in/test_bigwave/api/UserController/signup',{
      
        full_name: fullname,
        gender: gender,
        pu_college: college,
        place: place,
        ph_num: phone,
        email:email,
        password:pswd,
        referral_code: code
    
     })
     .then((response)=>{
       console.log(response) 
       alert("Created New Account Successfully")
     })
     .catch((error)=>{
      alert(error.msg)
     })
     console.log(fullname, college, gender,)
  }
  return (
    
        <div className='container'>
        <form className='form-outer-wrapper'>
      <label>
        Full Name:
        <input type="text" value={fullname} onChange={handleFullname} />
      </label>
      <label>
      <br/><br/>
        Gender:
        <select value={gender} onChange={handleGender}>
          <option value="select">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        <br/><br/>
        PU College:
        <input type="text" value={college} onChange={handleCollege} />
      </label>
      <label>
        Place:
        <input type="text" value={place} onChange={handlePlace} />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phone} onChange={handlePhone} />
      </label>
      <label>
        Referral Code:
        <input type="text" value={code} onChange={handleCode} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleEmail} />
      </label>
      <label>
        Password:
        <input type="text" value={pswd} onChange={handlePswd} />
      </label>
      
      <Link to="/verify"><Button onClick={handleSubmit}>Submit</Button></Link>
      
      <Container>
            <Navbar.Brand>
                <Link to="/"><Button>Already have an account</Button></Link>
            </Navbar.Brand>
      </Container>
      
    </form>
    </div>
  )
}

export default CreateNewAccount