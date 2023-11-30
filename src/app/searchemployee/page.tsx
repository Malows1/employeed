"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "src/app/adminstyles/searchem.css";

import {
  faChartLine,
  faUserPlus,
  faFile,
  faRightFromBracket,
  faUser,
  faHouse,
  faUserGroup,
  faGraduationCap,
  faMedkit,
  faBicycle,
  faSearch,
  faHistory,
  faReceipt,
  faFileEdit,
  faLeftLong,
  faCircle, // Changed from faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
export default function About() {
  const [activeNavItem, setActiveNavItem] = useState(0);

  const navItems = [
    "Basic Information",
    "Address Information",
    "Family Background",
    "Educational Background",
    "Medical Information",
    "Skills & Hobbies",
  ];

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const [formData, setFormData] = useState({
    //basic info
    fName:"",
    status: "",
    religion: "",
    birthplace: "",
    Phone: "",
    gender: "",
    //address info
    blk: "",
    street: "",
    barangay: "",
    city: "",
    region: "",
    zipcode: "",
    //fam back
    father: "",
    M_maiden: "",
    sibling: "",
    F_Attainment: "",
    M_Attainment: "",
    M_Occupation: "",
    F_Occupation: "",
    //school
    tertiary: "",
    secondary: "",
    primary: "",
    //med his
    height: "",
    weight: "",
    blood: "",
    med_his: "",
    //skill
    skill: "",
    hobbies: "",
  });
  const [editMode, setEditMode] = useState({

    basicinfo: false,
    AddressInfo:false,
    fambackground:false,
    educbackground:false,
    medBackground:false,
    skillhobby:false,
  });
  function getIconForNavItem(index) {
    const icons = [
      faUser,
      faHouse,
      faUserGroup,
      faGraduationCap,
      faMedkit,
      faBicycle,
    ];
    return icons[index];
  }
  const handleEditClick = (fieldName) => {
    setEditMode({
      ...editMode,
      [fieldName]: true,
    });
  };

  const handleSaveClick = (fieldName) => {
    setEditMode({
      ...editMode,
      [fieldName]: false,
    });
  };
  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  const [uiMode, setUIMode] = useState("main"); // 'main' or 'next'

  const handleSwitchUIMode = () => {
    setUIMode(uiMode === "main" ? "next" : "main");
  };
  const data = [
    {
      requesterName: "Frhansriel Maniquiz",
      position: " employee",
      ID: "02",
      accountstatus: "Deactivate",
    },
    {
      requesterName: "Joseph Miana",
      position: " admin",
      ID: "002",
      accountstatus: "Activate",
    },
    {
      requesterName: "Lian Perez",
      position: " admin",
      ID: "01",
      accountstatus: "Activate",
    },
    {
      requesterName: "Charles Pascual",
      position: " employee",
      ID: "001",
      accountstatus: "Deactivate",
    },

    // Add more rows as needed
  ];
  //changing ui
    
  function renderContentForNavItem(index) {
    switch (index) {
      case 0:
        return (
          <div className="conten-active">
            <h1>Basic Information</h1>
            <div className="employee-info">
              <div className="details">
              
                <div className="form-group">
            <label>Full Name: </label>
            {editMode.basicinfo ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.fName}
                  onChange={(e) => handleInputChange(e, 'fName')}
                />
              </>
            ) : (
              <>
                <span>{formData.fName}</span>
              </>
            )}
          </div>
          <div className="form-group">
            <label>Religion: </label>
            {editMode.basicinfo ? (
              <>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={(e) => handleInputChange(e, 'religion')}
                />
              </>
            ) : (
              <>
                <span>{formData.religion}</span>
              </>
            )}
          </div>
          <div className="form-group">
            <label>Birthplace: </label>
            {editMode.basicinfo ? (
              <>
                <input
                  type="text"
                  name="religion"
                  value={formData.birthplace}
                  onChange={(e) => handleInputChange(e, 'birthplace')}
                />
              </>
            ) : (
              <>
                <span>{formData.birthplace}</span>
              </>
            )}
          </div>
          <div className="form-group">
            <label>Civil Status: </label>
            {editMode.basicinfo ? (
              <>
                <input
                  type="text"
                  name="civilstat"
                  value={formData.status}
                  onChange={(e) => handleInputChange(e, 'status')}
                />
              </>
            ) : (
              <>
                <span>{formData.status}</span>
              </>
            )}
          </div>
          <div className="form-group">
            <label>Gender: </label>
            {editMode.basicinfo ? (
              <>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={(e) => handleInputChange(e, 'gender')}
                />
              </>
            ) : (
              <>
                <span>{formData.status}</span>
              </>
            )}
          </div>
          <div className="form-group">
            <label>Phone No: </label>
            {editMode.basicinfo ? (
              <>
                <input
                  type="text"
                  name="gender"
                  value={formData.Phone}
                  onChange={(e) => handleInputChange(e, 'Phone')}
                />
              </>
            ) : (
              <>
                <span>{formData.Phone}</span>
              </>
            )}
          </div>
      <div className="btn my-custom-btn">
     
        {editMode.basicinfo? (
          <>
        
      

             
            <button onClick={() => handleSaveClick('basicinfo')}>Save</button>
          </>
        ) : (
          <>

          
            <button onClick={() => handleEditClick('basicinfo')}>Edit</button>
          </>
        )}
  </div>
  </div>
  </div>
  </div>
    );

      case 1:
        return (
          <div className="content active">
            <h1>Address Information</h1>
            <div className="employee-info">
              <div className="details">

              <div className="form-group">
        <label>BlkNo:</label>
        {editMode.AddressInfo ? (
          <>
            <input
              type="text"
              name="blk"
              
              onChange={(e) => handleInputChange(e, 'blk')}
            />

        
          </>
        ) : (
          <>
            <span>{formData.blk}</span>
          
          </>
        )}
      </div>
      <div className="form-group">
        <label>Street:</label>
        {editMode.AddressInfo ? (
          <>
            <input
              type="text"
              name="street"
              
              onChange={(e) => handleInputChange(e, 'street')}
            />

             
          
          </>
        ) : (
          <>
            <span>{formData.street}</span>
         
          </>
        )}
      </div>
      <div className="form-group">
        <label>Barangay:</label>
        {editMode.AddressInfo ? (
          <>
            <input
              type="text"
              name="barangay"
              
              onChange={(e) => handleInputChange(e, 'barangay')}
            />

             
            
          </>
        ) : (
          <>
            <span>{formData.barangay}</span>
           
          </>
        )}
      </div>
      <div className="form-group">
        <label>City:</label>
        {editMode.AddressInfo? (
          <>
            <input
              type="text"
              name="city"
              
              onChange={(e) => handleInputChange(e, 'city')}
            />

             
          </>
        ) : (
          <>
            <span>{formData.city}</span>
         
          </>
        )}
      </div>
      <div className="form-group">
        <label>Region:</label>
        {editMode.AddressInfo? (
          <>
            <input
              type="text"
              name="Region"
              value={formData.region}
              onChange={(e) => handleInputChange(e, 'region')}
            />

             
            
          </>
        ) : (
          <>
            <span>{formData.region}</span>
         
          </>
        )}
      </div>
            
      <div className="form-group">
        <label>ZipCode:</label>
        {editMode.AddressInfo? (
          <>
            <input
              type="text"
              name="ZipCode"
              value={formData.zipcode}
              onChange={(e) => handleInputChange(e, 'zipcode')}
            />

             
          
          </>
        ) : (
          <>
            <span>{formData.zipcode}</span>
     
          </>
        )}
      </div>
            
            
          
      <div className="btn my-custom-btn">
     
     {editMode.AddressInfo? (
       <>
     
   

          
         <button onClick={() => handleSaveClick('AddressInfo')}>Save</button>
       </>
     ) : (
       <>
       
         <button onClick={() => handleEditClick('AddressInfo')}>Edit</button>
       </>
     )}
   </div>
              </div>
            </div>
          </div>
        );


      case 2:
        return (
          <div className="content active">
            <h1>Family Background</h1>
            <div className="employee-info">
              <div className="details">
                
     

       <div className="form-group">
        <label>Father:</label>
        {editMode.fambackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.father}
              onChange={(e) => handleInputChange(e, 'father')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.father}</span>
            
          </>
        )}
      </div>


      <div className="form-group">
        <label>Mother Maiden Name:</label>
        {editMode.fambackground  ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.M_maiden}
              onChange={(e) => handleInputChange(e, 'M_maiden')}
            />

             
         
          </>
        ) : (
          <>
            <span>{formData.M_maiden}</span>
           
          </>
        )}
      </div>

      <div className="form-group">
        <label>Siblings:</label>
        {editMode.fambackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.sibling}
              onChange={(e) => handleInputChange(e, 'sibling')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.sibling}</span>
        
          </>
        )}
      </div>
      <div className="form-group">
        <label>Fathers Attainment:</label>
        {editMode.fambackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.F_Attainment}
              onChange={(e) => handleInputChange(e, 'F_Attainment')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.F_Attainment}</span>
        
          </>
        )}
      </div>
      <div className="form-group">
        <label>Mophters Attainment</label>
        {editMode.fambackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.M_Attainment}
              onChange={(e) => handleInputChange(e, 'M_Attainment')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.M_Attainment}</span>
        
          </>
        )}
      </div>
      <div className="form-group">
        <label>Fathers Occupation:</label>
        {editMode.fambackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.F_Occupation}
              onChange={(e) => handleInputChange(e, 'F_Occupation')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.F_Occupation}</span>
        
          </>
        )}
      </div>
            
      <div className="form-group">
        <label>Fathers Occupation:</label>
        {editMode.fambackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.M_Occupation}
              onChange={(e) => handleInputChange(e, 'M_Occupation')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.M_Occupation}</span>
        
          </>
        )}
      </div>
            <div className="btn my-custom-btn">
     
     {editMode.fambackground? (
       <>
     
   

          
         <button onClick={() => handleSaveClick('fambackground')}>Save</button>
       </>
     ) : (
       <>
       
         <button onClick={() => handleEditClick('fambackground')}>Edit</button>
       </>
     )}
   </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="content active">
            <h1>Educational Background</h1>
            <div className="employee-info">
              <div className="details">

              <div className="form-group">
        <label>Tertiary:</label>
        {editMode.educbackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.tertiary}
              onChange={(e) => handleInputChange(e, 'tertiary')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.tertiary}</span>
        
          </>
        )}
      </div>

         
      <div className="form-group">
        <label>Secondary:</label>
        {editMode.educbackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.secondary}
              onChange={(e) => handleInputChange(e, 'secondary')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.secondary}</span>
        
          </>
        )}
      </div>

      <div className="form-group">
        <label>Primary:</label>
        {editMode.educbackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.primary}
              onChange={(e) => handleInputChange(e, 'primary')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.primary}</span>
        
          </>
        )}
      </div>
            <div className="btn my-custom-btn">
     
     {editMode.educbackground? (
       <>
     
   

          
         <button onClick={() => handleSaveClick('educbackground')}>Save</button>
       </>
     ) : (
       <>
       
         <button onClick={() => handleEditClick('educbackground')}>Edit</button>
       </>
     )}
   </div>

             
         
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="content active">
            <h1>Medical Information</h1>
            <div className="employee-info">
              <div className="details">

               
              <div className="form-group">
        <label>Height:</label>
        {editMode.medBackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.height}
              onChange={(e) => handleInputChange(e, 'height')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.height}</span>
        
          </>
        )}
      </div>

      <div className="form-group">
        <label>Weight:</label>
        {editMode.medBackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.weight}
              onChange={(e) => handleInputChange(e, 'weight')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.weight}</span>
        
          </>
        )}
      </div>

      <div className="form-group">
        <label>Blood:</label>
        {editMode.medBackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.blood}
              onChange={(e) => handleInputChange(e, 'blood')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.blood}</span>
        
          </>
        )}
      </div>
      <div className="form-group">
        <label>Medical History:</label>
        {editMode.medBackground ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.med_his}
              onChange={(e) => handleInputChange(e, 'med_his')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.med_his}</span>
        
          </>
        )}
      </div>
            <div className="btn my-custom-btn">
     
     {editMode.medBackground? (
       <>
     
   

          
         <button onClick={() => handleSaveClick('medBackground')}>Save</button>
       </>
     ) : (
       <>
       
         <button onClick={() => handleEditClick('medBackground')}>Edit</button>
       </>
     )}
   </div>

         

              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="content active">
            <h1>Skills & Hobbies</h1>
            <div className="employee-info">
              <div className="details">


              <div className="form-group">
              <label>Skill</label>
        {editMode.skillhobby ? (
          <>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={(e) => handleInputChange(e, 'skill')}
            />

             
   
          </>
        ) : (
          <>
            <span>{formData.skill}</span>
      
          </>
        )}
            </div>
            <div className="form-group">
            <label>Hobbies</label>
        {editMode.skillhobby? (
          <>
            <input
              type="text"
              name="hobby"
              value={formData.hobbies}
              onChange={(e) => handleInputChange(e, 'hobbies')}
            />

             
           
          </>
        ) : (
          <>
            <span>{formData.hobbies}</span>

          </>
        )}
            </div>
            <div className="btn my-custom-btn">
     
     {editMode.skillhobby? (
       <>
     
   

          
         <button onClick={() => handleSaveClick('skillhobby')}>Save</button>
       </>
     ) : (
       <>
       
         <button onClick={() => handleEditClick('skillhobby')}>Edit</button>
       </>
     )}
   </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  const getStatusColor = (status) =>
    status === "Deactivate" ? "red" : "#69DF06";
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
      {uiMode === "main" ? (
        <div className="container">
          <h1>Account Status</h1>
          <table id="clickable-table">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee ID</th>
                <th>Position</th>
                <th>Status</th>

                <th>EDIT</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.ID}>
                  <td>{item.requesterName}</td>
                  <td>{item.position}</td>
                  <td>{item.ID}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="fas-status"
                      style={{ color: getStatusColor(item.accountstatus) }}
                    />
                  </td>
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
        <div>
          <div className="box1">
            <p>Employee Information</p>
          </div>
          <div className="box2">
            <ul style={{ listStyle: "none" }}>
              <p>Employee Information </p>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a onClick={() => handleNavItemClick(index)}>
                    <FontAwesomeIcon
                      icon={getIconForNavItem(index)}
                      className="fas"
                    />
                    <span
                      className={`nav-item ${
                        index === activeNavItem ? "active" : ""
                      }`}
                    >
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="box3">
            {renderContentForNavItem(activeNavItem)}
            <div className="search-form">
              <form>
                <input type="text" id="search-input" />

                <button type="button" onClick={() => {}}>
                  Search
                </button>
              </form>
            </div>
            <div className="previous">
              <button onClick={handleSwitchUIMode}>
                {" "}
                <FontAwesomeIcon icon={faLeftLong} className="fas-back" />
                <p>Previous</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
