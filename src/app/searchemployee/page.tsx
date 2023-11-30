"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import 'src/app/adminstyles/searchem.css';
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
    faReceipt// Changed from faRightFromBracket
  } from '@fortawesome/free-solid-svg-icons';
  export default function About () {
  const [activeNavItem, setActiveNavItem] = useState(0);

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
    status: '',
    religion: '',
    birthplace:'',
    Phone:'',
    gender:'',
  //address info
  blk: '',
  street: '',
 barangay:'',
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
    //school
    tertiary:'',
    secondary:'',
    primary:'',
    //med his
    height: '',
    weight: '',
    blood: '',
    med_his: '',
    //skill
    skill:'',
    hobbies:'',
  });
  const [editMode, setEditMode] = useState({
    status: false,
    religion: false,
    birthplace:false,
    Phone:false,
    gender:false,
    //address info
    blk: false,
    street: false,
    barangay: false,
    city:false,
    region:false,
    zipcode:false,
    //fam back
    father: false,
    M_maiden: false,
    sibling: false,
    F_Attainment: false,
    M_Attainment: false,
    M_Occupation: false,
    F_Occupation: false,
//school
    tertiary:false,
    secondary:false,
    primary:false,
    //med his 
    height: false,
    weight: false,
    blood: false,
    med_his: false,
    //skill
    skill:false,
    hobbies:false,

    

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
        <div className="box3">{renderContentForNavItem(activeNavItem)}
       
        </div>
        <div className="search-form">
        <form>
        <input type="text" id="search-input" />
          <button type="button" onClick={() => {}}>
            Search
          </button>
        </form>
        </div>
        
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
          <div className="content-active">
            <h1>Basic Information</h1>
            <div className="employee-info">

              <div className="details">
              <div className="form-group">
        <label>Religion:</label>
        {editMode.religion ? (
          <>
            <input
              type="text"
              name="gender"
              value={formData.religion}
              onChange={(e) => handleInputChange(e, 'religion')}
            />

             
            <button onClick={() => handleSaveClick('religion')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.religion}</span>
            <button onClick={() => handleEditClick('religion')}>Edit</button>
          </>
        )}
  </div>

      <div className="form-group">
        <label>Birthplace:</label>
        {editMode.birthplace ? (
          <>
            <input
              type="text"
              name="birthplace"
              value={formData.birthplace}
              onChange={(e) => handleInputChange(e, 'birthplace')}
            />

             
            <button onClick={() => handleSaveClick('birthplace')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.birthplace}</span>
            <button onClick={() => handleEditClick('birthplace')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Status:</label>
        {editMode.status ? (
          <>
            <input
              type="text"
              name="gender"
              value={formData.status}
              onChange={(e) => handleInputChange(e, 'status')}
            />

             
            <button onClick={() => handleSaveClick('status')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.status}</span>
            <button onClick={() => handleEditClick('status')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Gender:</label>
        {editMode.gender ? (
          <>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={(e) => handleInputChange(e, 'gender')}
            />

             
            <button onClick={() => handleSaveClick('gender')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.gender}</span>
            <button onClick={() => handleEditClick('gender')}>Edit</button>
          </>
        )}
      </div>
           
      <div className="form-group">
        <label>PhoneNo:</label>
        {editMode.Phone ? (
          <>
            <input
              type="text"
              name="Phone"
              
              value={formData.Phone}
              onChange={(e) => handleInputChange(e, 'Phone')}
            />
     
     
        {editMode.basicinfo? (
          <>

        {editMode.basicinfo? (
          <>
             
            <button onClick={() => handleSaveClick('Phone')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.Phone}</span>
            <button onClick={() => handleEditClick('Phone')}>Edit</button>
          </>
        )}
      </div>
              </div>
            </div>
          </div>
        );


      case 1:
        return (
          <div className="content-active">
            <h1>Address Information</h1>
            <div className="employee-info">
              <div className="details">

              <div className="form-group">
        <label>Address:</label>
        {editMode.blk ? (
          <>
              
              
              onChange={(e) => handleInputChange(e, 'blk')}
            />
        
              onChange={(e) => handleInputChange(e, 'blk')}
            />

     <div className="note">
    <textarea  
              name="Phone"
              value={formData.blk}
              onChange={(e) => handleInputChange(e, 'blk')}></textarea>
 
      </div>
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


             
            <button onClick={() => handleSaveClick('blk')}>Save</button>
          </>
        ) : (
          <>
          <div className="note">
            <textarea readOnly className="address">{formData.blk}</textarea>
            </div>
            <button onClick={() => handleEditClick('blk')}>Edit</button>
          </>
        )}
      </div>
     </div>
     </div>
     </div>
);
      case 2:
        return (
          <div className="content-active">
            <h1>Family Background</h1>
            <div className="employee-info">
              <div className="details">
                
    

       <div className="form-group">
        <label>Father:</label>
        {editMode.father ? (
          <>
            <input
              type="text"
              name="father"
              value={formData.father}
              onChange={(e) => handleInputChange(e, 'father')}
            />

             
            <button onClick={() => handleSaveClick('father')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.father}</span>
            <button onClick={() => handleEditClick('father')}>Edit</button>
          </>
        )}
      </div>


      <div className="form-group">
        <label>Mother Maiden Name:</label>
        {editMode.M_maiden ? (
          <>
            <input
              type="text"
              name="M_maiden"
              value={formData.M_maiden}
              onChange={(e) => handleInputChange(e, 'M_maiden')}
            />

             
            <button onClick={() => handleSaveClick('M_maiden')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.M_maiden}</span>
            <button onClick={() => handleEditClick('M_maiden')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Siblings:</label>
        {editMode.sibling ? (
          <>
            <input
              type="text"
              name="sibling "
              value={formData.sibling}
              onChange={(e) => handleInputChange(e, 'sibling')}
            />

             
            <button onClick={() => handleSaveClick('sibling')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.sibling}</span>
            <button onClick={() => handleEditClick('sibling')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>{"Father's Attainment:"}</label>
        {editMode.F_Attainment ? (
          <>
            <input
              type="text"
              name="F_Attainment "
              value={formData.F_Attainment}
              onChange={(e) => handleInputChange(e, 'F_Attainment')}
            />

             
            <button onClick={() => handleSaveClick('F_Attainment')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.F_Attainment}</span>
            <button onClick={() => handleEditClick('F_Attainment')}>Edit</button>
          </>
        )}
      </div>

     
      <div className="form-group">
        <label>{"Mother's Attainment:"}</label>
        {editMode.M_Attainment ? (
          <>
            <input
              type="text"
              name="M_Attainment"
              value={formData.M_Attainment}
              onChange={(e) => handleInputChange(e, 'M_Attainment')}
            />

             
            <button onClick={() => handleSaveClick('M_Attainment')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.M_Attainment}</span>
            <button onClick={() => handleEditClick('M_Attainment')}>Edit</button>
          </>
        )}
      </div>

            
      <div className="form-group">
        <label>{"Father's Occupation:"}:</label>
        {editMode.F_Occupation ? (
          <>
            <input
              type="text"
              name="F_Occupation "
              value={formData.F_Occupation }
              onChange={(e) => handleInputChange(e, 'F_Occupation')}
            />

             
            <button onClick={() => handleSaveClick('F_Occupation')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.F_Occupation}</span>
            <button onClick={() => handleEditClick('F_Occupation')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>{"Mother's Occupation:"}</label>
        {editMode.M_Occupation ? (
          <>
            <input
              type="text"
              name="M_Occupation"
              value={formData.M_Occupation}
              onChange={(e) => handleInputChange(e, 'M_Occupation ')}
            />

             
            <button onClick={() => handleSaveClick('M_Occupation')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.M_Occupation}</span>
            <button onClick={() => handleEditClick('M_Occupation')}>Edit</button>
          </>
        )}
      </div>
     
     
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
          <div className="content-active">
            <h1>Educational Background</h1>
            <div className="employee-info">
              <div className="details">

              <div className="form-group">
        <label>Tertiary:</label>
        {editMode.tertiary ? (
          <>
            <input
              type="text"
              name="tertiary"
              value={formData.tertiary}
              onChange={(e) => handleInputChange(e, 'tertiary')}
            />

             
            <button onClick={() => handleSaveClick('tertiary')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.tertiary}</span>
            <button onClick={() => handleEditClick('tertiary')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Secondary:</label>
        {editMode.secondary ? (
          <>
            <input
              type="text"
              name="secondary"
              value={formData.secondary}
              onChange={(e) => handleInputChange(e, 'secondaryy')}
            />

             
            <button onClick={() => handleSaveClick('secondary')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.secondary}</span>
            <button onClick={() => handleEditClick('secondary')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Primary:</label>
        {editMode.primary? (
          <>
            <input
              type="text"
              name="primary"
              value={formData.primary}
              onChange={(e) => handleInputChange(e, 'primary')}
            />

             
            <button onClick={() => handleSaveClick('primary')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.primary}</span>
            <button onClick={() => handleEditClick('primary')}>Edit</button>
          </>
        )}
      </div>

         
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="content-active">
            <h1>Medical Information</h1>
            <div className="employee-info">
              <div className="details">

             
      <div className="form-group">
        <label>Height:</label>
        {editMode.height? (
          <>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={(e) => handleInputChange(e, 'height')}
            />

             
            <button onClick={() => handleSaveClick('height')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.height}</span>
            <button onClick={() => handleEditClick('height')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Weight:</label>
        {editMode.weight? (
          <>
            <input
              type="text"
              name="weight"
              value={formData.height}
              onChange={(e) => handleInputChange(e, 'weight')}
            />

             
            <button onClick={() => handleSaveClick('weight')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.weight}</span>
            <button onClick={() => handleEditClick('weight')}>Edit</button>
          </>
        )}
      </div>

      <div className="form-group">
        <label>Blood Type:</label>
        {editMode.blood? (
          <>
            <input
              type="text"
              name="blood"
              value={formData.blood}
              onChange={(e) => handleInputChange(e, 'blood')}
            />

             
            <button onClick={() => handleSaveClick('blood')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.blood}</span>
            <button onClick={() => handleEditClick('blood')}>Edit</button>
          </>
        )}
      </div>
      <div className="form-group">
        <label>Medical History:</label>
        {editMode.med_his? (
          <>
            <input
              type="text"
              name="med_his"
              value={formData.med_his}
              onChange={(e) => handleInputChange(e, 'med_his')}
            />

             
            <button onClick={() => handleSaveClick('med_his')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.med_his}</span>
            <button onClick={() => handleEditClick('med_his')}>Edit</button>
          </>
        )}
      </div>


              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="content-active">
            <h1>Skills & Hobbies</h1>
            <div className="employee-info">
              <div className="details">


              <div className="form-group">
        <label>Skills:</label>
        {editMode.skill? (
          <>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={(e) => handleInputChange(e, 'skill')}
            />

             
            <button onClick={() => handleSaveClick('skill')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.skill}</span>
            <button onClick={() => handleEditClick('skill')}>Edit</button>
          </>
        )}
      </div>


      <div className="form-group">
        <label>Hobbies:</label>
        {editMode.hobbies? (
          <>
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={(e) => handleInputChange(e, 'hobbies')}
            />

             
            <button onClick={() => handleSaveClick('hobbies')}>Save</button>
          </>
        ) : (
          <>
            <span>{formData.hobbies}</span>
            <button onClick={() => handleEditClick('hobbies')}>Edit</button>
          </>
        )}
            </div>
            </div>
            <div className="btn my-custom-btn">
     
     {editMode.skillhobby? (
       <>
     
   

      </div>
            <div className="btn my-custom-btn">
     
     {editMode.skillhobby? (
       <>
     
   

          
          
         <button onClick={() => handleSaveClick('skillhobby')}>Save</button>
       </>
     ) : (
       <>

         <button onClick={() => handleSaveClick('skillhobby')}>Save</button>
       </>
     ) : (
       <>
       
       
         <button onClick={() => handleEditClick('skillhobby')}>Edit</button>
       </>
     )}

         <button onClick={() => handleEditClick('skillhobby')}>Edit</button>
       </>
     )}
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
  }
};