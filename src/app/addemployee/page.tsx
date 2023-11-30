"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUserPlus,
  faFile,
  faRightFromBracket,
  faSearch,
  faReceipt,
  faHistory,
  faArrowRight,
  faArrowLeft,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import "src/styles/addemployee.css";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import Image from 'next/image';
export default function Addnew() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    name: "",
    employee_id: "",
    password: "asd1",
    phone: "",
    address: "",
    position: "",
    daysofWork: "",
    rateperDay: "",
  });
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/addemployee", user);
      console.log("Signup Success", response.data);
      toast.success("Signup Success");
      window.location.href = "/admin";
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const toggleAddEmployeeForm = () => {
    setShowAddEmployeeForm(!showAddEmployeeForm);
  };

  const [contractType, setContractType] = useState("Regular");

  const handleContractTypeChange = (e) => {
    setContractType(e.target.value);
  };   
  
  const renderContractRow = () => {
    if (contractType === "Contract") {
      return (
        <tr className="row">
          <td>End Of Contract</td>
          <td>
           
            <input type="date" id="dateInputRow2" className="date-inputs" />
             
          </td>
        </tr>
      );
    }
    return null;
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
            <a href="/searchemployee" >
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

      <div className="table-container">
        <div className="outer">
          {/*Back Funtion*/}
          {showAddEmployeeForm ? (
            <div className="new-ui">
              <div className="tables">
                <table>
                  <thead>
                    <tr>
                      <th>{loading ? "Processing ..." : "WB MAJESTY"}</th>
                      <th className="requested">Add Employee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row">
                      <td>Days Of Work</td>
                      <td>
                        <input
                          className=" "
                          id="password"
                          type="text"
                          placeholder="30 D"
                          value={user.daysofWork}
                          onChange={(e) =>
                            setUser({ ...user, daysofWork: e.target.value })
                          }
                        />
                      </td>
                    </tr>
                    
                    <tr className="row">
                      <td>Rate Per Day</td>
                      <td>
                        <input
                          id="rate"
                          type="text"
                          value={user.rateperDay}
                          placeholder="570 PHP"
                          onChange={(e) =>
                            setUser({ ...user, rateperDay: e.target.value })
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="button-form">
                <button onClick={toggleAddEmployeeForm}><FontAwesomeIcon icon={faArrowLeft} className="fass" /> <p>Previous</p></button>
                <button
                  onClick={onSignup}
                  
                >
                    <FontAwesomeIcon icon={faSave} className="fass" /> <p>Save</p>
                </button>
              </div>
            </div>
          ) : (
            <div className="tables">
              <table>
                <thead>
                  <tr>
                    <th>{loading ? "Processing ..." : "Register"}</th>
                    <th className="requested">Add Employee</th>
                  </tr>
                </thead>
                <tbody>

                  <tr className="row">
                    <td>Employee Name</td>
                    <td>
                      <input
                        type="text"
                        id="employeeNo"
                        value={user.name}
                        onChange={(e) =>
                          setUser({
                            ...user,
                            name: e.target.value,
                            password: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="row">
                      <td>Email</td>
                      <td>
                        <input
                          className=" "
                          id="email"
                          type="text"
                         
                          
                          
                        />
                      </td>
                    </tr>
                  <tr className="row">
                    <td>Employee ID</td>
                    <td>
                      <input
                        type="text"
                       
                        
                      />
                    </td>
                  </tr>
                  <tr className="row">
                    <td>Phone No.</td>
                    <td>
                      <input
                        type="number"
                        
                        id="PhoneNo"
                        value={user.phone}
                        onChange={(e) =>
                          setUser({ ...user, phone: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="row">
                    <td>Employee Address</td>
                    <td>
                      <input
                        type="text"
                        value={user.address}
                        onChange={(e) =>
                          setUser({ ...user, address: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="row">
                    <td> Contract of Employee </td>
                    <td> <select onChange={handleContractTypeChange}>
            <option value="Regular"> Fixed term contract</option>
            <option value="Contract">probationary contract</option>
            </select></td>
                  </tr>

              
                       
                  {renderContractRow()}
                
                  <tr className="row">
                    <td>Role</td>
                    <td>
                      <select
                        className="position"
                        name="position"
                        value={user.position} // Assuming user.role is part of your state
                        onChange={(e) =>
                          setUser({ ...user, position: e.target.value })
                        }
                      >
                        <option value="Admin">Admin</option>
                        <option value="Employee">Employee</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {!showAddEmployeeForm && (
            <div className="btn-form">
              <button onClick={toggleAddEmployeeForm}><FontAwesomeIcon icon={faArrowRight} className="fas-next" /><p>Next</p></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
