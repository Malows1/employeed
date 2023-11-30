"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "src/styles/login.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";


export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({ name: '', password: '' });
const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login Success");
      Swal.fire  ({
        position: 'top-end', // Position to top-end
				icon: 'success',
				title: 'Unsuccessful Save!',
				showConfirmButton: false,
				timer: 2000,
				toast: true, // Enable toast mode
				background: '#efefef',
				showClass: {
					popup: 'animate__animated animate__fadeInDown',
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp',
				},
			});
 
      window.location.href = "/dashboard";
    } catch (error:any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.name.length > 1 && user.password.length > 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const [selectedRole, setSelectedRole] = useState("Portal");
  const [bundy, setBundy] = React.useState({
    employee_id: "",
    time: "",
  });

  const onLogInandOut = () => {
    const currentTime = new Date().toLocaleTimeString();
    setBundy({ ...bundy, time: currentTime });
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post("/api/users/bundyclock", bundy);
        console.log("Recorded!", response.data);
        toast.success("Record Success!");
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    if (bundy.time !== "") {
      postData();
    }
  }, [bundy.time]);

  const handleDropdownChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="LoginForm">
      <h1>{loading ? "Processing ..." : "Login to Your Account"}</h1>
      <p>Welcome to WBMAJESTY</p>

      <form id="loginForm">
     

        
          <div className="form-group">
            <input
              type="text"
              placeholder="username"
              id="username"
              name="username "
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="icon "
              fill="black"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
          </div>
 

          <div className="form-group">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          id="password"
          name="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <svg
          onClick={handleTogglePassword}
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          fill="black"
          className="icon"
          style={{ cursor: 'pointer' }}
        >
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
        </svg>
      </div>
   
        <div className="form-group">
        <a href="/changepassword">  <p className="forgotpass">Forgot Password</p></a>
          {selectedRole !== "Attendance" && (
            <button type="button" onClick={onLogin} disabled={buttonDisabled}>
              Log in
            </button>
          )}
          
        </div>
        <div className="error" id="errorMessage"></div>
      </form>

      <div>
        {selectedRole !== "Portal" && (
          <div>
            <button className="time" onClick={() => onLogInandOut()}>
              Time
            </button>
            <p className="my-6">Time right now: {bundy.time}</p>
          </div>
        )}
        {/* Render the current time */}
      </div>
    </div>
  );
}
