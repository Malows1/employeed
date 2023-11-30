"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRouter} from "next/navigation";
import React, { useEffect } from "react";
import '../login.css';
import Link from "next/link";



function YourComponent() {

  
 
  return (
    <div className="LoginForm">
       <h1>Login to Your Account</h1>
        <p>Welcome to WBMAJESTY</p>

        <form id="loginForm" >
       <div className='form-group'>
        
       <input type="text" placeholder="Username" 
            id="username" name="username" required 
             />  <svg xmlns="http://www.w3.org/2000/svg" 
             height="1em"
              viewBox="0 0 448 512"  
              className="icon " 
               fill='white'>
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        
      
         
            
        </div>
        <div className="form-group">
            
            <input type="password" placeholder="Password"
            id="password" name="password" required></input>

  <svg xmlns="http://www.w3.org/2000/svg" 
  height="1em" viewBox="0 0 448 512" 
  className="icon " 
   fill='white'>

  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
          
            </div>
           
            <div className="form-group">
            <button type = "submit" >Log in</button>
           
          </div>
          <div className="error" id="errorMessage">
 <Link href="/dashboard">Visit Login Page</Link>
            
          </div>
          </form>
    </div>
  );
}

export default YourComponent;

