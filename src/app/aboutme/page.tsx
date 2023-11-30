"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'src/styles/aboutme.css';
import Image from 'next/image';
import {
  faClipboardUser,
  faReceipt,
  faQuestionCircle,
  faAddressCard,
  faRightFromBracket,
  faUser,
  faHouse,
  faUserGroup,
  faGraduationCap,
  faMedkit,
  faBicycle,
  faClock,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {useRouter} from "next/navigation";
export default function AboutMePage() {
  const [activeNavItem, setActiveNavItem] = useState(0);
  const router = useRouter();
  const [userdata, setData] = React.useState({
    fname:"", 
    religion: "", 
    birthplace: "", 
    status: "", 
    address: "", 
    gender: "", 
    phone: "", 
    father: "", 
    mother: "", 
    siblings: "", 
    father_attainment: "", 
    mother_attainment: "", 
    father_occupation: "", 
    mother_occupation: "",
  });
  const get = async () => {
    const res = await axios.get("/api/users/aboutmeget");
    setData({
      fname:'',     
     religion: res.data.user.religion,
      birthplace: res.data.user.birthplace,
      status: res.data.user.status,
      address: res.data.user.address,
      gender: res.data.user.gender,
      phone: res.data.user.phone,
      father: res.data.user.father,
      mother: res.data.user.mother,
      siblings: res.data.user.siblings,
      father_attainment: res.data.user.father_attainment,
      mother_attainment: res.data.user.mother_attainment,
      father_occupation: res.data.user.father_occupation, 
      mother_occupation: res.data.user.mother_occupation,
    });
  };
  useEffect(() => {
    get();
  }, []);
  const [loading, setLoading] = React.useState(false);
  const navItems = [
    'Basic Information',
    'Address Information',
    'Family Background',
    'Educational Background',
    'Medical Information',
    'Skills & Hobbies',
    
  ];

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const [formData, setFormData] = useState({
    //basic info
    fname: '',
    status: '',
    religion: '',
    birthpalce:'',
    Phone:'',
    gender:'',
  //address info
  blk: '',
  street: '',
 barangay:'',
 skill:'',
 hobby:'',
  city:'',
  region:'',
  zipcode:'',
  //fam back 
  father: '',
    M_maiden: '',
    sibling: '',
    F_Attainment: '',
    M_Attainment: '',
    M_Occupation: '',
    F_Occupation: '',
  });
  const [editMode, setEditMode] = useState({
  basicinfo:false,
  addressinfo:false,
  faminfo:false,
  educbackground:false,
  medbackground:false,
  skillhobby:false,
  });

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
						<a href="/time">
							<FontAwesomeIcon
								icon={faClock}
								className="fas"
							/>
							<span className="nav-item">TimeIn</span>
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
              <FontAwesomeIcon icon={faAddressCard} className="fas" />
              <span className="nav-item">About Me</span>
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

      
      <div className="box1">

             <p>Employee</p>

        </div>

        <div className="box2">
          <ul style={{ listStyle: 'none' }}>
            <p>Employee Information</p>
            {navItems.map((item, index) => (
              <li key={index}>
                <a onClick={() => handleNavItemClick(index)}>
                <FontAwesomeIcon icon={getIconForNavItem(index)} className="fas" />
                  <span className={`nav-item ${index === activeNavItem ? 'active' : ''}`}>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="box3">{renderContentForNavItem(activeNavItem)}</div>
      </div>
   
  );
  function getIconForNavItem(index) {
    const icons = [faUser, faHouse, faUserGroup, faGraduationCap, faMedkit, faBicycle];
    return icons[index];
  }

  


  
  function renderContentForNavItem(index) {
    switch (index) {
      case 0:
        return (
          <div className="content active">
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
                  value={formData.fname}
                  onChange={(e) => handleInputChange(e, 'fname')}
                />
              </>
            ) : (
              <>
                <span>{formData.fname}</span>
              </>
            )}
          </div>

      <div className="form-group">
        <label>Birthplace: </label>
        {editMode.basicinfo ? (
          <>
            <input
              type="text"
              name="birthplace"
              value={formData.birthpalce}
              onChange={(e) => handleInputChange(e, 'birthpalce')}
            />


          </>
        ) : (
          <>
 <span>{formData.birthpalce}</span>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Status:</label>
        {editMode.basicinfo ? (
          <>
            <input
              type="text"
              name="gender"
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
        <label>Gender:</label>
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
            <span>{formData.gender}</span>
            
          </>
        )}
      </div>
           
      <div className="form-group">
        <label>PhoneNo:</label>
        {editMode.basicinfo? (
          <>
            <input
              type="text"
              name="Phone"
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
        {editMode.addressinfo ? (
          <>
            <input
              type="text"
              name="blk"
              value={formData.blk}
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
        {editMode.addressinfo ? (
          <>
            <input
              type="text"
              name="street"
              value={formData.street}
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
        {editMode.addressinfo ? (
          <>
            <input
              type="text"
              name="barangay"
              value={formData.barangay}
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
        {editMode.addressinfo ? (
          <>
            <input
              type="text"
              name="city"
              value={formData.city}
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
        {editMode.addressinfo? (
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
        {editMode.addressinfo ? (
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
       
       {editMode.addressinfo? (
         <>
          

            
           <button onClick={() => handleSaveClick('addressinfo')}>Save</button>
         </>
       ) : (
         <>
          
           <button onClick={() => handleEditClick('addressinfo')}>Edit</button>
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
        {editMode.faminfo ? (
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
        {editMode.faminfo ? (
          <>
            <input
              type="text"
              name="mother"
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
        {editMode.faminfo ? (
          <>
            <input
              type="text"
              name="sibling"
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
              <label>{"Father's Attainment"}</label>
              <span id="Father_Attainment">user input</span>
            </div>

            <div className="form-group">
              <label>{"Mother's Attainment"}</label>
              <span id="Mother_Attainment">user input</span>
            </div>
            
            <div className="form-group">
             <label>{"Father's Occupation"}</label>
              <span id="Mother_Attainment">user input</span>
            </div>
            
            <div className="form-group">
              <label>{"Mother's Occupation"}</label>
              <span id="Mother_Attainment">user input</span>
            </div>
            <div className="btn my-custom-btn">
       
       {editMode.faminfo? (
         <>
          

            
           <button onClick={() => handleSaveClick('faminfo')}>Save</button>
         </>
       ) : (
         <>
          
           <button onClick={() => handleEditClick('faminfo')}>Edit</button>
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
              <label>Tertiary School </label>
              <span id="Tertiary_School">user input</span>
            </div>

            <div className="form-group">
              <label>Secondary School</label>
              <span id="Secondary_School">user input</span>
            </div>

            <div className="form-group">
              <label >Primary School</label>
              <span id="Primary_School">user input</span>
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
              <label>Height </label>
              <span id="Height"></span>
            </div>

            <div className="form-group">
              <label>Weight</label>
              <span id="Weight"></span>
            </div>

            <div className="form-group">
              <label >Blood Type</label>
              <span id="Blood_Type"></span>
            </div>
            <div className="form-group">
              <label >Medical History</label>
              <span id="Medical_History"></span>
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
        {editMode.skillhobby ? (
          <>
            <input
              type="text"
              name="hobby"
              value={formData.hobby}
              onChange={(e) => handleInputChange(e, 'hobby')}
            />

             
          </>
        ) : (
          <>
            <span>{formData.hobby}</span>
          
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
};