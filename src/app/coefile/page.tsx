'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/coe.css';
import {
	faClipboardUser,
	faReceipt,
	faQuestionCircle,
	faAddressCard,
	faRightFromBracket,
	faClock,
    faCertificate,
    faDownload,
    faPhone,
    faEnvelope,
    faHome,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Coe() {

    const generatePayslip = async () => {
        const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'in',
          format: [8.5, 11],
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
    
    
              doc.addImage(url, 'JPEG', .1, .3, 7.9, 10.2);
              
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
            <div className="center-wrapper">
  <div className="coe-wrapper">
    <div id="content">
      <div className="coe-container">
        <div className="header">
          {/* Conditionally render PAYSLIP text content */}
          <h1></h1>
        </div>

              <div className="company-name">WB MAJESTY
           <p>	<FontAwesomeIcon
								icon={faHome}
								className="fas-comp"
							/> #23 pag-asa avenue. barangay katuparan taguig city.</p>

           <p>	<FontAwesomeIcon
								icon={faPhone}
								className="fas-comp"
							/>0927 214 2311</p>

           <p>	<FontAwesomeIcon
								icon={faEnvelope}
								className="fas-comp"
							/>wbmajesty@gmail.com</p>

           </div>
<div className="coe-paragraph">
<h1>CERTIFICATION</h1>

<p className="first-paragraph" >This is a certify that <strong><input type = "text"/> </strong> was employed at 
<strong> WB Majesty</strong> as <strong><input type = "text"/><br/>
</strong> from <strong> <input type = "text" /></strong> 
 to  <strong><input type = "text"/></strong>. </p>

<p className="second-paragraph">This certificate is issued this  
<strong><input type = "text"/></strong>
 upon the request of <strong><input type = "text"/></strong> 
<br/> for whatever purpose it may serve best</p>

<div className="Signature">
<Image
   src="/images/signture.png"
   width={100}
   height={100}
   alt="Picture of the author"
   className="colored-logo"
/>
<p >Certified and Correct  </p>
<p ><strong><input type = "text"/></strong>  <br/> <strong><input type = "text"/></strong>  </p>

</div>




</div>
           
           </div>
      

          </div>
          <button onClick={generatePayslip}><FontAwesomeIcon icon={faDownload} className="fas-download" /><p>Download</p> </button>
         
			</div>
            </div>
            
            </div>
	
	);
}
