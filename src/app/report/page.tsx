"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/app/adminstyles/reports.css';
import Image from 'next/image';
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';


import {
  faChartLine,
  faReceipt,
  faUserPlus,
  faSearch,
  faFile,
  faRightFromBracket,
  faClipboardUser,
  faHistory,
  faLeftLong,
  faSave,

} from '@fortawesome/free-solid-svg-icons';

const cursorToPointer = {
  cursor: 'pointer',
};

export default function SignupPage() {
  const [uiMode, setUIMode] = useState('main'); 

  const handleSwitchUIMode = (newMode) => {
    setUIMode(newMode);
  };




  const generateAttendance   = async () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [8, 11],
    });
  
    const contentElement = document.getElementById('content');
  
    if (contentElement) {
      try {
       
        const canvas = await html2canvas(contentElement, {
          scale: 2,
         
        });
  
        if (!canvas) {
          console.error('Canvas is null.');
          return;
        }
  

        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Blob is null.');
            return;
          }
  
          const url = URL.createObjectURL(blob);
  
          // Add the image to the jsPDF instance
          doc.addImage(url, 'JPEG', 1, 0, 9.1, .80);
  
          // Save the PDF
          doc.save('Attendance.pdf');
  
          // Clean up the URL object
          URL.revokeObjectURL(url);
        });
      } catch (error) {
        console.error('Error during canvas conversion:', error);
      }
    } else {
      console.log('No content element found');
    }
  };


  const generatePayslip = async () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [10, 16.2],
    });
  
    const contentElement = document.getElementById('content');
  
    if (contentElement) {
      try {
     
        const canvas = await html2canvas(contentElement, {
          scale: 2,
         
        });
  
        if (!canvas) {
          console.error('Canvas is null.');
          return;
        }
  
  
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Blob is null.');
            return;
          }
  
          const url = URL.createObjectURL(blob);
  
    
          doc.addImage(url, 'JPEG', .1, 0, 0, .84);
  
          // Save the PDF
          doc.save('Payslip.pdf');
  
          URL.revokeObjectURL(url);
        });
      } catch (error) {
        console.error('Error during canvas conversion:', error);
      }
    } else {
      console.log('No content element found');
    }
  };
  const generate201file   = async () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [8, 11],
    });
  
    const contentElement = document.getElementById('content');
  
    if (contentElement) {
      try {
      
        const canvas = await html2canvas(contentElement, {
          scale: 2,
         
        });
  
        if (!canvas) {
          console.error('Canvas is null.');
          return;
        }
  
       
        canvas.toBlob((blob) => {
          if (!blob) {
            console.error('Blob is null.');
            return;
          }
  
          const url = URL.createObjectURL(blob);
  
        
          doc.addImage(url, 'JPEG', 1, 0, 9.1, 0);
  
          // Save the PDF
          doc.save('Attendance.pdf');
  
      
          URL.revokeObjectURL(url);
        });
      } catch (error) {
        console.error('Error during canvas conversion:', error);
      }
    } else {
      console.log('No content element found');
    }
  };

  

  
 

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
              <span className="nav-e">Admin</span>
            </a>
          </li>

          <li>
            <a href="/admin">
              <FontAwesomeIcon icon={faChartLine} className="fas" />
              <span className="nav-item">Attendance</span>
            </a>
          </li>

          <li>
            <a href="/addemployee">
              <FontAwesomeIcon icon={faUserPlus} className="fas" />
              <span className="nav-item">Add Employee</span>
            </a>
          </li>
          <li>
            <a href="/searchemployee">
              <FontAwesomeIcon icon={faSearch} className="fas" />
              <span className="nav-item">Employee Info</span>
            </a>
          </li>

          <li>
            <a href="/approveemployee">
              <FontAwesomeIcon icon={faFile} className="fas" />
              <span className="nav-item">Request</span>
            </a>
          </li>
          <li>
            <a href="/process">
              <FontAwesomeIcon icon={faReceipt} className="fas" />
              <span className="nav-item">Payslip-Process</span>
            </a>
          </li>

          <li>
            <a href="/Reports">
              <FontAwesomeIcon icon={faHistory} className="fas" />
              <span className="nav-item">Report</span>
            </a>
          </li>

          <li>
            <a href="Login.html" className="logout">
              <FontAwesomeIcon icon={faRightFromBracket} className="fas" />
              <span className="nav-item">Log-Out</span>
            </a>
          </li>
        </ul>
      </div>

      {uiMode === 'main' ? (
        <div className="container">
        <button className= "mainbtn"onClick={() => handleSwitchUIMode('attendance')}> <FontAwesomeIcon icon={faClipboardUser} className="fas-button" /><p>Attendance</p></button>
          <button className= "mainbtn" onClick={() => handleSwitchUIMode('Payslip')}> <FontAwesomeIcon icon={faReceipt} className="fas-button" /> <p>  &nbsp;  &nbsp;Payslip</p></button>
          <button className= "mainbtn" onClick={() => handleSwitchUIMode('201File')}> <FontAwesomeIcon icon={faFile} className="fas-button" /><p>  &nbsp;  &nbsp;201files</p></button>
        </div>
      ) : uiMode === 'Payslip' ? (
        // Next UI content here
        
        <div className="container-nextui">
                  <h1>Payslip</h1>

                  <div className="search-form">
        <form>
        <input type="text" id="search-input" />
          <button type="button" onClick={() => {}}>
            Search
          </button>
        </form>
        </div>
        <div id="content">
        <div className="Payslip">
      
           

                <table>
            <thead>
                            <tr>
                            <th>Name</th>
                                <th>ID</th>
                                <th>Position</th>
                                <th>Period Covered</th>
                                <th>Days of work</th>
                                <th>Basic Salary</th>
                                <th>Overtime</th>
                                <th>Gross Earning</th>
                                <th>Total Deduction</th>
                              
                            </tr>
                          
                        </thead>
                        <tbody>
                             
                              </tbody>
                        </table>
          </div>
          </div>
          <div className="Selection-Container">
          <div className="MonthSelection">
                <label htmlFor="monthSelect">Select a Month:</label>
                <select id="monthSelect" >
                <option value="" disabled>-- Select Option --</option>
                
                </select>
                </div>
                <div  className="PeriodSelection" >
                <label htmlFor="periodSelect">Select a Period:</label>
                <select id="periodSelect" >
                  <option value="" disabled>-- Select Option --</option>
                  
                </select>
                </div>
                </div>
         
          <button onClick={() => handleSwitchUIMode('main')}> <FontAwesomeIcon icon={faLeftLong} className="fas-attendance" /><p>Go Back</p></button>
          <button onClick={generatePayslip}><FontAwesomeIcon icon={ faSave} className="fas-attendance " /><p>Download </p> </button>
        </div>
        
      ) : uiMode === 'attendance' ? (
        <div className="container-nextui">
                  <h1>Attendance</h1>
                  <div className="search-form">
        <form>
        <input type="text" id="search-input" />
          <button type="button" onClick={() => {}}>
            Search
          </button>
        </form>
        </div>
        <div id="content">
        <div className="attendance-ui">
      
           

                <table>
            <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>Date</th>
                                <th>TimeIn</th>
                                <th>Timeout</th>
                            </tr>
                        </thead>
                        </table>
          </div>
          </div>
          <div className="Selection-Container">
          <div className="MonthSelection">
                <label htmlFor="monthSelect">Select a Month:</label>
                <select id="monthSelect" >
                <option value="" disabled>-- Select Option --</option>
                
                </select>
                </div>
                <div  className="PeriodSelection" >
                <label htmlFor="periodSelect">Select a Period:</label>
                <select id="periodSelect" >
                  <option value="" disabled>-- Select Option --</option>
                  
                </select>
                </div>
                </div>
          <button onClick={() => handleSwitchUIMode('main')}> <FontAwesomeIcon icon={faLeftLong} className="fas-attendance" /><p>Go Back</p></button>
          <button onClick={generateAttendance}><FontAwesomeIcon icon={ faSave} className="fas-attendance " /><p>Download</p> </button>
        
        </div>
      ) : uiMode === '201File' ? (
        // Custom UI content here
        <div className="container-nextui">
        <h1>201 Files Request</h1>
        
        <div className="search-form">
          
        <form>
          
        <input type="text" id="search-input" />
          <button type="button" onClick={() => {}}>
            Search
          </button>
        </form>
        </div>
       
<div id="content">
<div className="201files">

 

      <table>
  <thead>
                  <tr>
                      <th>Name of Requester</th>
                      <th>Request File</th>
                      <th>Description</th>
                      <th>note</th>
                   
                  </tr>
              </thead>
              </table>
</div>
</div>

<div className="Selection-Container">
     
                </div>
<button onClick={() => handleSwitchUIMode('main')}> <FontAwesomeIcon icon={faLeftLong} className="fas-attendance" /><p>Go Back</p></button>
          <button onClick={generate201file}><FontAwesomeIcon icon={faSave} className="fas-attendance" /><p>Download</p></button>
        </div>
      ) : null}
    </div>
  );
}
