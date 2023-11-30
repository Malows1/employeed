  "use client";
 import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/app/adminstyles/approve.css';
import Image from 'next/image';
import {
    faChartLine,
    faReceipt,
    faUserPlus,
    faSearch,
    faFile,
    faRightFromBracket,
    faFileEdit,
    faHistory,
   faLeftLong,
    faTimes,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';

const cursorToPointer = {
    cursor: 'pointer',
};

export default function SignupPage() {
    const [uiMode, setUIMode] = useState('main'); // 'main' or 'next'

    const handleSwitchUIMode = () => {
        setUIMode(uiMode === 'main' ? 'next' : 'main');
    };

    // Sample data for rows in the main UI
    const mainUIRows = [
        { requesterName: 'Frhansriel Maniquiz', position: ' employee',Date: 'Nov 11 2023',requestFile: 'file 1', note: 'Note 1', requestDescription: '201 files Request' },
        { requesterName: 'Joseph Miana',position: ' admin', Date: 'Nov 11 2023',requestFile: 'file 2', note: 'Note 2', requestDescription: 'CoE Request' },
        { requesterName: 'Lian Perez',position: ' admin',Date: 'Nov 15 2023', requestFile: 'file 3', note: 'Note 3', requestDescription: '201 Files Request' },
        { requesterName: 'Charles Pascual',position: ' employee',Date: 'Nov 18 2023', requestFile: 'file 3', note: 'Note 3', requestDescription: 'CoE Request' },
        
        // Add more rows as needed
    ];

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
                        <a href="/report">
                            <FontAwesomeIcon icon={faHistory} className="fas" />
                            <span className="nav-item">report</span>
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
                    <h1>Approval Requests</h1>
                    <table id="clickable-table">
                        <thead>
                            <tr>
                                <th>Requester Name</th>
                                 <th>Date of request</th>
                                 <th>Position</th>
                                <th>Request file</th>
                                <th>Description</th>
                                <th>Note</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mainUIRows.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.requesterName}</td>
                                    <td>{row.Date}</td>
                                    <td>{row.position}</td>
                                    <td>{row.requestFile}</td>
                                    <td>{row.requestDescription}</td>
                                    <td>{row.note}</td>
                          <td>
                                    <button className="i" onClick={handleSwitchUIMode}>
                        <FontAwesomeIcon icon={faFileEdit} className="fass" />
                    </button>
                    </td>  
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                    
                </div>
            ) : (
                // Next UI content here
                <div className="content-active">
             
                    <form id="employee-form">
            <div className="form-group">
                <label >Requester Name:</label>
                <input type="text" id="Name" />
            </div>
            <div className="form-group">
                <label >Date of request:</label>
                <input type="text" id="RequestFile" />
            </div>
            <div className="form-group">
                <label >Position:</label>
                <input type="text" id="RequestFile" />
            </div>
            <div className="form-group">
                <label >Request File:</label>
                <input type="text" id="RequestFile" />
            </div>
            <div className="form-group">
                <label >Description:</label>
                <input type="text" id="Description" />
            </div>
          
            <div className="form-group">
                <label >Note:</label>
                <input type="text" id="Note" />
            </div>
            </form>
                    <button onClick={handleSwitchUIMode}> <FontAwesomeIcon icon={faLeftLong} className="fas-back" /><p>Previous</p></button>
                    <button onClick={handleSwitchUIMode}> <FontAwesomeIcon icon={faCheck} className="fas-check" /><p>Approve</p></button>
                    <button onClick={handleSwitchUIMode}> <FontAwesomeIcon icon={faTimes} className="fas-times" /><p>Deny</p></button>
                </div>
            )}
        </div>
    );
}
