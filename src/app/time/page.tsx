'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/time.css';
import {
	faClipboardUser,
	faReceipt,
	faQuestionCircle,
	faAddressCard,
	faRightFromBracket,
    faClock,
	faCertificate
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Swal from 'sweetalert2';

export default function Time() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());
	const [isTimeIn, setIsTimeIn] = useState(true);
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		setCurrentDateTime(new Date());
	  }, 1000);
  
	  return () => clearInterval(intervalId);
	}, []);
  
	const handleTimeInClick = () => {

		try{
			Swal.fire({
				position: 'top-end', // Position to top-end
				icon: 'success',
				title: 'Time In Successfully!',
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
		}catch(error: any){
			Swal.fire({
				position: 'top-end', // Position to top-end
				icon: 'error',
				title: 'Unsuccessful Time In!',
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
		}
	  setIsTimeIn(true);

	};
  
	const handleTimeOutClick = () => {
	  setIsTimeIn(false);
	};
  
	const formattedTime = currentDateTime.toLocaleTimeString([], {
	  hour: '2-digit',
	  minute: '2-digit',
	 
	});
	return (
		
		<div>

			<div className="Sidebar">
				<header className="head"></header>

				<ul>
					<li>
						<a
							href="#"
							className="logo"
						>
							<Image
								src="/images/logo.png"
								width={50}
								height={50}
								alt="Picture of the author"
							/>
							<span className="nav-e">
							
							</span>
						</a>
					</li>
					<li>
						<a href="/time">
							<FontAwesomeIcon
								icon={faClock}
								className="fas"
							/>
							<span className="nav-item">TimeIn</span>
						</a>
					</li>
					<li>
						<a href="/dashboard">
							<FontAwesomeIcon
								icon={faClipboardUser}
								className="fas"
							/>
							<span className="nav-item">Attendance</span>
						</a>
					</li>

					<li>
						<a href="/payslip">
							<FontAwesomeIcon
								icon={faReceipt}
								className="fas"
							/>
							<span className="nav-item">Payslip</span>
						</a>
					</li>

					<li>
						<a href="/201files">
							<FontAwesomeIcon
								icon={faQuestionCircle}
								className="fas"
							/>
							<span className="nav-item">201 files</span>
						</a>
					</li>
                    
				
					<li>
						<a href="/coe">
							<FontAwesomeIcon
								icon={faCertificate}
								className="fas"
							/>
							<span className="nav-item">CoE Request</span>
						</a>
					</li>
					<li>
						<a href="/aboutme">
							<FontAwesomeIcon
								icon={faAddressCard}
								className="fas"
							/>
							<span className="nav-item">About Me</span>
						</a>
					</li>

					<li>
						<a
							href="/login"
							className="logout"
							onClick={(e) => {
								e.preventDefault();
								
							}}
						>
							<FontAwesomeIcon
								icon={faRightFromBracket}
								className="fas"
							/>
							<span className="nav-item">Log-Out</span>
						</a>
					</li>
				</ul>
			</div>
			<div className="Clock-container">
        <div className="clock">
          <h2>Digital Clock and Date</h2>
          <p className="digital-clock">
            {formattedTime}
          </p>
          <p>
             {currentDateTime.toLocaleDateString()}
          </p>
        </div>

        {isTimeIn ? (
          <button type="button" onClick={handleTimeInClick} className="time-in-button">
            Time In
          </button>
        ) : (
          <button type="button" onClick={handleTimeOutClick} className="time-out-button">
            Time Out
          </button>
        )}
      </div>
    </div>
  );
}