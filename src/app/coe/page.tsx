"use client";
import React, {useRef}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/coeemprequest.css';
import {
    faClipboardUser,
    faReceipt,
    faQuestionCircle,
    faAddressCard,
    faRightFromBracket,
    faEnvelope,
    faCancel,
    faClock,
    faCertificate
} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from "next/navigation";
import Image from 'next/image';
import axios from 'axios';
import toast from "react-hot-toast"
import Swal from 'sweetalert2';


export default  function Files(){
    const router = useRouter()
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const chooseFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    
    

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            // Handle the selected file here
            console.log('Selected file:', selectedFile);
        }
    };
    const logout = async () => {
        try{
           await axios.get('/api/users/logout')
            setLoading(true);
            Swal.fire({
				position: 'top-end', // Position to top-end
				icon: 'error',
				title: 'Logout Success!',
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
            router.push("/login");
        }catch(error: any){
            console.log(error.message);
            Swal.fire({
				position: 'top-end', // Position to top-end
				icon: 'error',
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
        }finally{
            setLoading(false);
        }
    }
    const [loading, setLoading] = React.useState(false);
    return (
        <div>
            <div className="Sidebar">
                <header className="head"></header>

                <ul>
                    <li>
                        <a href="#" className="logo">
                        <Image
                  src="/images/logo.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
              />
                            <span className="nav-e">Employee</span>
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
                            <FontAwesomeIcon icon={faClipboardUser} className="fas" />
                            <span className="nav-item">Attendance</span>
                        </a>
                    </li>
                    

                    <li>
                        <a href="/payslip">
                            <FontAwesomeIcon icon={faReceipt} className="fas" />
                            <span className="nav-item">Payslip</span>
                        </a>
                    </li>

                    <li>
                        <a href="/201files">
                            <FontAwesomeIcon icon={faQuestionCircle} className="fas" />
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
                        <a 
                            href="/aboutme">
                                <FontAwesomeIcon icon={faAddressCard} 
                            className="fas" />
                            <span className="nav-item">About Me</span>
                        </a>
                    </li>

                    <li>
                        <a 
                            href="/login" 
                            className="logout"
                            onClick={(e) => {
								e.preventDefault();
								logout();
                            }}
                        >
                            <FontAwesomeIcon icon={faRightFromBracket} className="fas" />
                            <span className="nav-item">Log-Out</span>
                        </a>
                    </li>
                </ul>

            </div>
            <div className="table-container">
            <div className="outer">
                <div className="tables">
                    <table>
                        <thead>
                            <tr>
                                <th>INFORMATION</th>
                                <th className="requested">REQUESTED</th>
                        
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="row1">
                                <td>Employee Name</td>
                                <td><input type="text" name="employeeNo" id="employeeNo" /></td>
                       
                            </tr>
                            <tr className="row2">
                                <td>Date of Request</td>
                                <td><input type="date" id="dateInputRow2" className="date-input" /></td>
                           
                            </tr>
                            <tr className="row3">
                                <td> Position</td>
                                <td><input type="text" /></td>
                              
                            </tr>
                            
                        </tbody>
                    </table>
              
              
             
            </div>
            <div className="new-btn">
            <button className="btn-save"> <FontAwesomeIcon icon={faEnvelope} className="fass" /> Pending Request CoE</button>
           
                </div>
        </div>
                    </div>
                </div>
         
    );
};




