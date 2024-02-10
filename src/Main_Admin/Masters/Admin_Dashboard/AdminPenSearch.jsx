// import React, { useState, useEffect } from "react";
// import { FormControl } from "@mui/material";
// import { Button, Row, Col, Container } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import AdminDashboard from './Admin_Dashboard/AdminDashboard';

// function AdminPenSearch() {
//     const [session, setSession] = useState('');
//     const [courseType, setCourseType] = useState('');
//     const [course, setCourse] = useState('');
//     const [branch, setBranch] = useState('');
//     const [college, setCollege] = useState('');
//     const [pendingStudents, setPendingStudents] = useState([]);

//     useEffect(() => {

//         if (branch) {
//             fetchPendingStudents();
//         }
//     }, [branch]);

//     const fetchPendingStudents = async () => {
//         try {
//             const response = await fetch("https://sssutms.ac.in/apitest/admin/pendingstudentlist", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     courseName: course,
//                     assignedCollege: college,
//                     courseBranch: branch,
//                     admissionSession: session,
//                     courseType: courseType,
//                 }),
//             });
//             console.log(response, "respohgghhhhfh.")
            
//             if (response.ok) {
//                 const data = await response.json();
//                 setPendingStudents(data);
//             } else {
//                 console.error("Failed to fetch data");
//             }
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };
//   console.log(pendingStudents, "pendingstudentttttttttttttttttttttttttttttttttt")
//     return (
//         <>
//             <AdminDashboard />
//             <style>
//                 {`
//           .shadow-box {
//             box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
//             border-radius: 10px;
//             padding: 10px;
//             margin-top: 20px;
//             margin-right:600px;
//           }

//           .header {
//             height: 50px;
//             background: linear-gradient(#004e92, #990033);
//             border-radius: 10px;
//             color: white;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-size: 20px;
//             font-family: italic;
//           }

//           .scroll-container {
//             overflow-y: auto;
//             margin-top: 10px;
//           }

//           .login-input {
//             width: 100%;
//             border: none;
//             border-bottom: 2px solid rgba(0, 0, 0, 0.2);
//             background: transparent;
//             font-size: 1rem;
//             font-family: 'Roboto', sans-serif;
//             font-weight: 500;
//             transition: border-bottom 0.2s;
//           }

//           .login-input:focus {
//             outline: none;
//             border-bottom: 2px solid #344e41;
//           }

//           @media (max-width: 768px) {
//             .shadow-box {
//               padding: 10px;
//               margin-top: 10px;
//             }

//             .header {
//               font-size: 16px;
//               height: 40px;
//             }

//             .login-input {
//               font-size: 0.9rem;
//             }
//           }
          
//           @media (max-width: 576px) {
//             .shadow-box {
//               margin: 10px;
//               margin-Left:76px;
//             }

//             .container-fluid {
//               width: 100%;
//               padding-right: 0;
//               padding-left: 0;
//             }
//           }
//           @media (min-width: 992px) { 
//     .custom-laptop-style {
//        margin-left:5%;
//     }
// }

//         `}
//             </style>

//             <Container fluid style={{ paddingTop: '80px' }}>
//                 <Row>
//                     <Col xs={12} sm={12} md={10} lg={9} xl={8} className="custom-laptop-style">
//                         <div className="shadow-box">
//                             <div className="header">Student Pending List</div>
//                             <div className="scroll-container" style={{ height: "460px" }}>
//                             <form style={{ padding: "30px" }} >
//                                     <Row>
//                                         <FormControl>
//                                             <label>
//                                                 <h1
//                                                     style={{
//                                                         color: "#264653",
//                                                         fontSize: "18px",
//                                                         fontWeight: "bold",
//                                                         fontFamily: "sans-serif",
//                                                     }}
//                                                 >
//                                                     Session  <span style={{color:"red"}}>*</span>
//                                                 </h1>
//                                             </label>
//                                             <select
//                                                 className="login-input"
//                                                 required={true}
//                                                 onChange={(e) => setSession(e.target.value)}
//                                                 autoFocus={true}>
//                                                 <option value="option1">Select</option>
//                                                 <option value="2023">2023</option>
//                                             </select>
//                                         </FormControl>
//                                     </Row>
//                                     <br></br>
//                                     <Row>
//                                         <FormControl>
//                                             <label>
//                                                 <h1
//                                                     style={{
//                                                         color: "#264653",
//                                                         fontSize: "18px",
//                                                         fontWeight: "bold",
//                                                         fontFamily: "sans-serif",
//                                                     }}
//                                                 >
//                                                     Course Type  <span style={{color:"red"}}>*</span>
//                                                 </h1>
//                                             </label>
//                                             <select
//                                                 className="login-input"
//                                                 required={true}
//                                                 onChange={(e) => setCourseType(e.target.value)}
//                                                 autoFocus={true}
//                                             >
//                                                 <option value="option1"> Select</option>
//                                                 <option value="UG">UG</option>
//                                             </select>
//                                         </FormControl>
//                                     </Row>

//                                     <br></br>
//                                     <Row>
//                                         <FormControl>
//                                             <label>
//                                                 <h1
//                                                     style={{
//                                                         color: "#264653",
//                                                         fontSize: "18px",
//                                                         fontWeight: "bold",
//                                                         fontFamily: "sans-serif",
//                                                     }}
//                                                 >
//                                                     Course  <span style={{color:"red"}}>*</span>
//                                                 </h1>
//                                             </label>
//                                             <select
//                                                 className="login-input"
//                                                 required={true}
//                                                 onChange={(e) => setCourse(e.target.value)}
//                                                 autoFocus={true}
//                                             >

//                                                 <option value="option1"> Select</option>
//                                                 <option value="BACHELOR OF AYURVEDIC MEDICINE AND SURGERY">BAMS</option>
//                                                 <option value="BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY">BHMS</option>
//                                             </select>
//                                         </FormControl>
//                                     </Row>
//                                     <br></br>
//                                     <Row>
//                                         <FormControl>
//                                             <label>
//                                                 <h1
//                                                     style={{
//                                                         color: "#264653",
//                                                         fontSize: "18px",
//                                                         fontWeight: "bold",
//                                                         fontFamily: "sans-serif",
//                                                     }}
//                                                 >
//                                                     Branch  <span style={{color:"red"}}>*</span>
//                                                 </h1>
//                                             </label>
//                                             <select
//                                                 className="login-input"
//                                                 required={true}
//                                                 onChange={(e) => setBranch(e.target.value)}
//                                                 autoFocus={true}
//                                             >

//                                                 <option value="option1"> Select</option>
//                                                 {course === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="AYURVEDIC MEDICINE AND SURGERY">AYURVEDIC MEDICINE AND SURGERY</option>}
//                                                 {course === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="HOMEOPATHY">HOMEOPATHY</option>}
//                                             </select>
//                                         </FormControl>
//                                     </Row>



//                                     <br></br>
//                                     <Row>
//                                         <FormControl>
//                                             <label>
//                                                 <h1
//                                                     style={{
//                                                         color: "#264653",
//                                                         fontSize: "18px",
//                                                         fontWeight: "bold",
//                                                         fontFamily: "sans-serif",
//                                                     }}
//                                                 >
//                                                     College <span style={{color:"red"}}>*</span>
//                                                 </h1>
//                                             </label>
//                                             <select
//                                                 className="login-input"
//                                                 required={true}
//                                                 onChange={(e) => setCollege(e.target.value)}
//                                                 autoFocus={true}
//                                             >
//                                                 <option value="option1"> Select</option>
//                                                 {course === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="School of Ayurveda and Siddha Studies">School of Ayurveda and Siddha Studies</option>}
//                                                 {course === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="School of Homoeopathy">School of Homoeopathy</option>}
//                                             </select>
//                                         </FormControl>
//                                     </Row>                                                                                                                               
//                                     <br></br>



//                                     <br></br>
//                                     <Link
//                     to={{
//                         pathname: "/admin/search/student-pending/list",
//                         state: { pendingStudents: pendingStudents },
//                     }}
//                     >
//                                         <Button 
//                                          type="submit"
//                                             style={{
//                                                 marginLeft: "50px",
//                                                 backgroundColor: "#004e92",
//                                                 width: "110px",
//                                                 height: "40px"
                                            
//                                             }}
//                                             onClick={(e) => { e.preventDefault(); fetchPendingStudents(); }}   >
                                            
//                                             Search
//                                         </Button>
//                                         </Link>
//                                 </form>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </>
//     );
// }
// export default AdminPenSearch;
import React, { useEffect, useState } from "react";
import { FormControl, Select } from "@mui/material";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import AdminDashboard from './Admin_Dashboard/AdminDashboard';

function AdminPenSearch() {
  const [admissionSession, setSession] = useState(''); // Add state for selected session
  const [courseType, setCourseType] = useState(''); // Add state for selected course type
  const [courseName, setCourse] = useState(''); // Add state for selected course
  const [courseBranch, setBranch] = useState(''); // Add state for selected branch
  const [assignedCollege, setCollege] = useState(''); // Add state for selected college
  //const history = useHistory();
// console.log(session , courseType, course , branch , college , " data of use State")
  

  return (
    <>
      <AdminDashboard/>
      <style>
        {`
          .shadow-box {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            padding: 10px;
            margin-top: 20px;
            margin-right:600px;
          }

          .header {
            height: 50px;
            background: linear-gradient(#004e92, #990033);
            border-radius: 10px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-family: italic;
          }

          .scroll-container {
            overflow-y: auto;
            margin-top: 10px;
          }

          .login-input {
            width: 100%;
            border: none;
            border-bottom: 2px solid rgba(0, 0, 0, 0.2);
            background: transparent;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            transition: border-bottom 0.2s;
          }

          .login-input:focus {
            outline: none;
            border-bottom: 2px solid #344e41;
          }

          @media (max-width: 768px) {
            .shadow-box {
              padding: 10px;
              margin-top: 10px;
            }

            .header {
              font-size: 16px;
              height: 40px;
            }

            .login-input {
              font-size: 0.9rem;
            }
          }
          
          @media (max-width: 576px) {
            .shadow-box {
              margin: 10px;
              margin-Left:76px;
            }

            .container-fluid {
              width: 100%;
              padding-right: 0;
              padding-left: 0;
            }
          }
          @media (min-width: 992px) { 
    .custom-laptop-style {
       margin-left:5%;
    }
}

        `}
      </style>

      <Container fluid style={{ paddingTop: '80px' }}>
        <Row>
          <Col xs={12} sm={12} md={10} lg={9} xl={8} className="custom-laptop-style">
            <div className="shadow-box">
              <div className="header">Student Pending List</div>
              <div className="scroll-container" style={{ height: "520px" }}>
                <form style={{ padding: "30px" }}>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Session *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setSession(e.target.value)}
                        autoFocus={true}
                    
                      >
                        
                        <option value="option1"> Select</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </FormControl>
                  </Row>
                  
                
                

                  
                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Course Type *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setCourseType(e.target.value)}
                        autoFocus={true}
                      >

                        <option value="option1"> Select</option>
                        <option value="UG">UG</option>
                       
                      </select>
                    </FormControl>
                  </Row>

                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Course *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setCourse(e.target.value)}
                        autoFocus={true}
                      >
                        {/* Add your dropdown options here */}
                        <option value="option1"> Select</option>
                        <option value="BACHELOR OF AYURVEDIC MEDICINE AND SURGERY">BAMS</option>
                        <option value="BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY">BHMS</option>
                      </select>
                    </FormControl>
                  </Row>
                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          Branch *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setBranch(e.target.value)}
                        autoFocus={true}
                      >
                        {/* Add your dropdown options here */}
                        <option value="option1"> Select</option>
                        {courseName === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="AYURVEDIC MEDICINE AND SURGERY">AYURVEDIC MEDICINE AND SURGERY</option>}
                        {courseName === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="HOMEOPATHY">HOMEOPATHY</option>}
                      </select>
                    </FormControl>
                  </Row>



                  <br></br>
                  <Row>
                    <FormControl>
                      <label>
                        <h1
                          style={{
                            color: "#264653",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "sans-serif",
                          }}
                        >
                          College *
                        </h1>
                      </label>
                      <select
                        className="login-input"
                        required={true}
                        onChange={(e) => setCollege(e.target.value)}
                        autoFocus={true}
                      >
                        <option value="option1"> Select</option>
                        {courseName === "BACHELOR OF AYURVEDIC MEDICINE AND SURGERY" && <option value="School of Ayurveda and Siddha Studies">School of Ayurveda and Siddha Studies</option>}
                        {courseName === "BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY" && <option value="School of Homoeopathy">School of Homoeopathy</option>}
                      </select>
                    </FormControl>
                  </Row>
                  <br></br>
                 


                  <br></br>
                  <Link to={`/search/${admissionSession}/${courseType}/${courseName}/${courseBranch}`} >
                    <Button
                      style={{
                        marginLeft: "50px",
                        backgroundColor: "#004e92",
                        width: "110px",
                        height: "40px",
                        padding:"5px",
                      }}
                    >
                      Search
                    </Button>
                  </Link>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AdminPenSearch;

