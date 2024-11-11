import React from 'react';
import './App.css';
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ForgotPassword from './components/ForgotPassword';
import CreateNewAccount from './components/CreateNewAccount';
import Verify from './components/Verify';
import Subscription from './components/Subscription';
import VerifyNew from './components/VerifyNew';
import ResetPassword from './components/ResetPassword';
import ChangeMail from './components/ChangeMail';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path="/" element={<Main />} />   
       <Route exact path="/forgot-password" element={<ForgotPassword />} />        
       <Route exact path="/create-new-account" element={<CreateNewAccount />} /> 
       <Route exact path="/verify" element={<Verify />} />        
       <Route exact path="/subscribe" element={<Subscription />} />        
       <Route exact path="/verify-new" element={<VerifyNew />} />        
       <Route exact path="/reset-password" element={<ResetPassword />} />        
       <Route exact path="/change-mail" element={<ChangeMail />} />        

     </Routes>    
    </BrowserRouter>
  );
}

export default App;
