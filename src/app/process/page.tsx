"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import 'src/app/adminstyles/process_payslip.css';
import axios from "axios";
import Image from "next/image";
import { toast } from "react-hot-toast";
import {
  faRightFromBracket,
  faChartLine,
  faUserPlus,
  faReceipt,
  faFile,
  faEnvelope,
  faHistory,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export default function ProcessPage() {

  //variables declaration
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [payslipData, setpayslipData] = React.useState({
    name: "",
    employee_id: "",
    role: "",
    periodcovered: "",
    days: "",
    salary: "",
    overtime: "",
    grossearnings: "",
    tax: "",
    pagibig: "",
    philhealth: "",
    sss: "",
    totalcontribution: "",
    netpay: "",
    datecreated: "",
  });
  function ItemOptions({ userItem }: ItemProps) {
    return (
      <option>{userItem.EmployeeInformation.name}</option>
    );
  }
  type ItemProps = {
    userItem: InformationType;
    key: React.Key; // You can use 'React.Key' for the type of 'key'
  };
  type InformationType = {
    _id: string;
    EmployeeInformation: {
      name: string;
      employee_id: string;
      phone: string;
      address?: string;
      role: string;
    };
    PayInformation: {
      days: string;
      rate: string;
    };
    datecreated?: string;
  };

  const [userData, setuserData] = useState<InformationType[]>([]);
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = async(e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    console.log('this is selected values', selectedValue);
    
    // Find the corresponding attendance item based on the selected value
    const selectedAttendanceItem = userData.find(item => item.EmployeeInformation.name === selectedValue);

    // Print the time_in value
    if (selectedAttendanceItem) {
      try {
        const currentDate = new Date();
        const month = currentDate.toLocaleString('en-US', { month: 'long' });
        const re = await axios.get(`/api/users/process?employee_id=${selectedAttendanceItem.EmployeeInformation.employee_id}`);
        console.log('this is the datas',re.data, re.data.days, month);
        let time = parseInt(selectedAttendanceItem.PayInformation.days) / 2;
        let rate = parseInt(selectedAttendanceItem.PayInformation.rate);
        let computesalary = time * rate;
        let netsalary = computesalary - 1139.20;
        setpayslipData({
        name: selectedAttendanceItem.EmployeeInformation.name,
        employee_id: selectedAttendanceItem.EmployeeInformation.employee_id,
        role: selectedAttendanceItem.EmployeeInformation.role,
        periodcovered: "",
        days: re.data.days,
        salary: computesalary.toString(),
        overtime: "",
        grossearnings: computesalary.toString(),
        tax: "N/A",
        pagibig: "50 PHP",
        philhealth: "159.6 PHP",
        sss: "360 PHP",
        totalcontribution: "1139.20 PHP",
        netpay: netsalary.toString(),
        datecreated: month,
      })
      } catch (error:any) {
        console.log("Fetch failed", error.message);
        
      }
    }
  };
  //function for saving and submit
  const onSaveandSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/process", payslipData);
      console.log("Saved & Submit successfully", response.data);
      toast.success("Saved & Submit successfully");

      Swal.fire({
				position: 'top-end', // Position to top-end
				icon: 'success',
				title: 'Save Successfully!',
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
      window.location.href = "/admin";
    } catch (error: any) {
      console.log("Processing Payslip", error.message);
      toast.error(error.message);
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
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (payslipData.employee_id.length > 1 && payslipData.netpay.length > 1) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [payslipData]);
  const getAttendanceData = async () => {
    try {
      const res = await axios.get('/api/users/process'); 
      setuserData(res.data.user); 
      
    } catch (error: any) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getAttendanceData(); 
  }, []);
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
            <a href="/logins" className="logout">
              <FontAwesomeIcon icon={faRightFromBracket} className="fas" />
              <span className="nav-item">Log-Out</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="center-wrapper">
        <div className="payslip-wrapper">
          <div id="content">
            <div className="payslip-container">
              <div className="header">
                <h1>{loading ? "Processing ..." : "PAYSLIP PROCESS"}</h1>
              </div>


            
              {/* Employee information */}
              <div className="employee-info">
                <p>Employee Information</p>
                <div className="info-row">
                  <span className="label">
                    Employee Name:
                  </span>
                  <select value={selectedOption} onChange={handleChange}>
                    <option value="">-- Select Option --</option>
                    {userData.map((userItem, index) => (
                      <ItemOptions key={index} userItem={userItem} />
                    ))}
                  </select>
                </div>
                <div className="info-row">
                  <span className="label">Employee ID:</span>
                  <input
                    type="text"
                    name="employeeNo"
                    id="employeeNo"
                    value={payslipData.employee_id}
                    onChange={(e) => setpayslipData({ ...payslipData, employee_id: e.target.value })}
                  />
                </div>

                <div className="info-row">
                  <span className="label">Position:</span>
                  <input
                    type="text"
                    name="employeeNo"
                    id="employeeNo"
                    value={payslipData.role}
                    onChange={(e) => setpayslipData({ ...payslipData, role: e.target.value })} />
                </div>
                <div className="info-row">
                  <span className="label">Period Covered:</span>
                  <select value={payslipData.periodcovered}
                    onChange={(e) => setpayslipData({ ...payslipData, periodcovered: e.target.value })}>
                    <option value="">-- Select Option --</option>
                    <option value="1st period">1st period</option>
                    <option value="2nd period">2nd period</option>
                  </select>
                </div>

                <div className="info-row">
                  <span className="label">Days of Work:</span>
                  <input
                    type="text"
                    name="employeeNo"
                    id="employeeNo"
                    value={payslipData.days}
                    onChange={(e) => setpayslipData({ ...payslipData, days: e.target.value })}
                  />
                </div>

              </div>

              {/* Taxable income */}
              <div className="earnings">
                <h3 className="section-title">Taxable Income</h3>

                <div className="earning-row">
                  <span className="label">Basic Salary:
                    <input
                      type="text"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.salary}
                      onChange={(e) => setpayslipData({ ...payslipData, salary: e.target.value })}
                    /></span>
                </div>
                <div className="earning-row">
                  <span className="label">Overtime:
                    <input
                      type="number"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.overtime}
                      style={{ appearance: 'textfield', MozAppearance: 'textfield' }}
                      onChange={(e) => setpayslipData({ ...payslipData, overtime: e.target.value })}
                    /></span>

                </div>
              </div>

              {/* Deductions */}
              <div className="deductions">
                <h3 className="section-title">Deductions</h3>

                <div className="deduction-row">
                  <span className="label">Tax:
                    <input
                      type="text"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.tax}
                      onChange={(e) => setpayslipData({ ...payslipData, tax: e.target.value })}
                    /></span>

                </div>

                <div className="deduction-row">
                  <span className="label">Pag-Ibig:
                    <input
                      type="text"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.pagibig}
                      onChange={(e) => setpayslipData({ ...payslipData, pagibig: e.target.value })}
                    /></span>

                </div>

                <div className="deduction-row">

                  <span className="label">PhilHealth:

                    <input
                      type="text"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.philhealth}
                      onChange={(e) => setpayslipData({ ...payslipData, philhealth: e.target.value })}
                    /></span>

                </div>

                <div className="deduction-row">
                  <span className="label">SSS:
                    <input
                      type="text"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.sss}
                      onChange={(e) => setpayslipData({ ...payslipData, sss: e.target.value })}
                    /></span>

                </div>
                <div className="deduction-row">
                  <span className="label">Total Deduction:
                    <input
                      type="text"
                      name="employeeNo"
                      id="employeeNo"
                      value={payslipData.totalcontribution}
                      onChange={(e) => setpayslipData({ ...payslipData, totalcontribution: e.target.value })}
                    /></span>

                </div>
              </div>

              {/* Net Pay */}
              <div className="total">
                <span className="label">{"Net Pay: " + payslipData.netpay}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="new-btn">
          <button className="btn-save"
            onClick={() => onSaveandSubmit()} 
          > 
          <FontAwesomeIcon icon={faEnvelope} className="fass" />Save & Submit </button>

        </div>
      </div>

    </div>
  );
};


