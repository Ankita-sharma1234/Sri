import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HodDashboard from "./HodDashboard";
import { useParams } from "react-router-dom";
import axios from "axios";

import Box from "@mui/material/Box";

import { Grid, Button } from '@mui/material';

const theme = createTheme();
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

function VerifyDetailed() {


  const [showDetails, setShowDetails] = useState(false);
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [isEnrollGenerated, setIsEnrollGenerated] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };
  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };
  const id = useParams();
  const [studentData, setStudentData] = useState(null);
  // console.log("ye dekho id ", id.id);
  useEffect(() => {
    axios
      .get(`https://sssutms.ac.in/apitest/getstudentdetail/${id.id}`)
      .then((response) => {
        console.log(response.data);
        setStudentData(response.data.student);
      })
      .catch((error) => {
        console.error("Error fetching student details:", error);
      });
  }, [id]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>

      <ThemeProvider theme={theme}>
        <HodDashboard />





        <Box
          sx={{
            marginTop: "3%",
            backgroundColor: "#b0c4b1",
            boxShadow: "2px solid black",
          }}
        >
          <Grid container sx={{ justifyContent: "center", }}>
            <Grid item xs={12} sm={4} >
              <Item style={{ marginTop: '80px' }}  >
                {/* <div class="card shadow-lg" style={{ height: "80%" }}> */}
                <div

                  class="card-header bg-transparent text-center"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                > {studentData && studentData.Documents?.applicantPhoto && (
                  <img
                    class="profile_img"
                    src={studentData && studentData.Documents?.applicantPhoto}
                    alt="img"
                    style={{
                      width: "171px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  ></img>

                )}


                </div>
                {studentData && (
                  <div class="card-body">

                    <p class="mb-0">

                      <h3 style={{ color: "black",textAlign:"center" }}> {studentData.name}</h3>
                    </p>
                    <p class="mb-0" style={{ color: "black",marginTop:"10px" }}>
                      <strong class="pr-1" >Course Type: </strong>
                      {studentData.courseType}
                    </p>
                    <p class="mb-0" style={{ color: "black" }} >
                      <strong  class="pr-1">Course Name: </strong>
                      {studentData.courseName}
                    </p>
                  
                    <p class="mb-0" style={{ color: "black" }}>
                      <strong class="pr-1" >Branch: </strong>
                      {studentData.courseBranch}
                    </p>
                    <p class="mb-0" style={{ color: "black" }}>
                      <strong class="pr-1" >Assigned College: </strong>
                      {studentData.assignedCollege
}
                    </p>
                    <p class="mb-0" style={{ color: "black" }}>
                      <strong class="pr-1" >Fee: </strong>
                      {studentData.isPaid ? "Paid" : "Not Paid"}
                    </p>

                  </div>)}
                {/* </div> */}

              </Item>


            </Grid>


            <Grid container style={{ marginTop: '40px', marginLeft: '20px', width: '600px' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                <Item>
                  {/* <div class="card -sm"> */}
                  <div class="card-header bg-transparent border-0 ">
                    <h3
                      class="mb-0"
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                    >
                      <i class="far fa-clone pr-1"></i>
                      <b style={{ fontFamily: "italic" }}> Personal Information</b>
                    </h3>

                    {/* </div> */}
                    <hr></hr>
                    <Button onClick={toggleDetails}>
                      {showDetails ? 'Hide Details' : 'Show Details'}
                    </Button>

                    {showDetails && (
                      <div class="card-body pt-0">
                        <table
                          class="table "
                          style={{ marginTop: "20px", marginLeft: "20px" }}
                        >
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Gender
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.gender}</td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Category
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.category}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Father's Name
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.fathersname}</td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Mother's Name
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.mothersname}</td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Contact
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.mobile}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              DOB
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.dob}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Email
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.email}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Domicile
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.domicile}</td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              LastExamType
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.lastExamType}</td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Scholarship Required
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.professional.ScholarshipRequired}Not Eligible </td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Current Address{" "}
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.address?.address1}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Permanent Address{" "}
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.address.address2}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Country
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.address.country}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              State
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.address.state}</td>
                          </tr>

                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              City
                            </th>
                            <td width="2%">:</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              District
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.address.district}</td>
                          </tr>
                          <tr>
                            <th
                              width="30%"
                              style={{
                                color: "#233d4d",
                                fontSize: "15px",
                                fontWeight: "bold",
                              }}
                            >
                              Pin Code
                            </th>
                            <td width="2%">:</td>
                            <td>{studentData.address.pinCode}</td>
                          </tr>
                        </table>
                      </div>
                    )}

                  </div>
                </Item>
              </Grid>


              <br></br>


              <Grid item xs={12}>
                <Item>
                  <div class="card-header bg-transparent border-0 ">
                    <h3
                      class="mb-0"
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                    >
                      <i class="far fa-clone pr-1"></i>
                      <b style={{ fontFamily: "italic" }}> Proffessional Information</b>
                    </h3>

                  </div>
                  <hr></hr>
                  <Button onClick={toggleDetails1}>
                    {showDetails1 ? 'Hide Details' : 'Show Details'}
                  </Button>
                  {showDetails1 && (
                    <div class="card-body pt-0">
                      <table
                        class="table "
                        style={{ marginTop: "20px", marginLeft: "20px" }}
                      >
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Handicapped
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.Handicapped}</td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Medium
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.Medium}</td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Aadhar Number
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.AadharNumber}</td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Samagra ID
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.SamagraId}</td>
                        </tr>

                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Father's Occupation
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.FathersOccupation}</td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Mother's Occupation
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.MothersOccupation}</td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Father's Income
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.FathersIncome}</td>
                        </tr>

                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Mother's Income
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.MothersIncome}</td>
                        </tr>

                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Parent Mobile
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.professional.ParentMobile}</td>
                        </tr>

                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Qualification
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.qualification}</td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Qualification Percentage
                          </th>
                          <td width="2%">:</td>
                          <td>{studentData.qualificationPercentage}%</td>
                        </tr>
                      </table>
                    </div>
                  )}
                </Item>
              </Grid>

              <br></br>

              <Grid item xs={12}>
                <Item>
                  <div class="card-header bg-transparent border-0 ">
                    <h3
                      class="mb-0"
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                    >
                      <i class="far fa-clone pr-1"></i>
                      <b style={{ fontFamily: "italic" }}>
                        {" "}
                        Document Information
                      </b>
                    </h3>
                  </div>
                  <hr></hr><Button onClick={toggleDetails2}>
                    {showDetails2 ? 'Hide Details' : 'Show Details'}
                  </Button>
                  {showDetails2 && (
                    <div class="card-body pt-0">
                      <table
                        class="table "
                        style={{ marginTop: "20px", marginLeft: "20px" }}
                      >
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Aadhar card
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData && studentData.Documents?.aadharCard && (
                              <a
                                href={studentData.Documents.aadharCard}
                                // target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Aadhar
                              </a>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Applicant Signature
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData &&
                              studentData.Documents?.applicantSignature && (
                                <a
                                  href={studentData.Documents.applicantSignature}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Signature
                                </a>
                              )}
                          </td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Domicile Certificate
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData &&
                              studentData.Documents?.domicileCertificate && (
                                <a
                                  href={studentData.Documents.domicileCertificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Ceretificate
                                </a>
                              )}
                          </td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Income Certificate
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData &&
                              studentData.Documents?.incomeCertificate && (
                                <a
                                  href={studentData.Documents.incomeCertificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Certificate
                                </a>
                              )}
                          </td>
                        </tr>

                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            10th Marksheet
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData && studentData.Documents?.marksheet10th && (
                              <a
                                href={studentData.Documents.marksheet10th}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Marksheet
                              </a>
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            12th Marksheet
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData && studentData.Documents?.marksheet12th && (
                              <a
                                href={studentData.Documents.marksheet12th}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Marksheet
                              </a>
                            )}
                          </td>
                        </tr>



                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Transfer Certificate
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData &&
                              studentData.Documents?.transferCertificate && (
                                <a
                                  href={studentData.Documents.transferCertificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Certificate
                                </a>
                              )}
                          </td>
                        </tr>

                        <tr>
                          <th
                            width="30%"
                            style={{
                              color: "#233d4d",
                              fontSize: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Migration Certificate
                          </th>
                          <td width="2%">:</td>
                          <td>
                            {studentData &&
                              studentData.Documents?.migrationCertificate && (
                                <a
                                  href={studentData.Documents.migrationCertificate}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View Certificate
                                </a>
                              )}
                          </td>
                        </tr>
                      </table>
                    </div>


                  )}
                </Item>
              </Grid>

              <br></br>

              <Grid item xs={12}>
                <Item>
                  <div class="card-header border-0">
                    <h3
                      class="mb-0"
                      style={{
                        textAlign: "left",
                        marginTop: "10px",
                        marginLeft: "20px",
                      }}
                    >
                      <i class="far fa-clone pr-1"></i>
                      <b style={{ fontFamily: "italic" }}>
                        {" "}
                        Academic Information
                      </b>
                    </h3>
                  </div>
                  <hr></hr>
                  <Button onClick={toggleDetails3}>
                    {showDetails3 ? 'Hide Details' : 'Show Details'}
                  </Button>

                  {showDetails3 && (
                    <div class="card-body pt-0">
                      <table
                        class="table "
                        style={{ marginTop: "20px", marginLeft: "20px" }}
                      >
                        {(studentData.academicDetails) && (
                          <>
                            <th style={{ fontSize: "20px" }}>
                              <b>10th</b>
                            </th>

                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Passing Year
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.tenthPassingYear}</td>
                            </tr>

                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Max. Marks
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.tenthMaxMarks}</td>
                            </tr>

                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Marks Obtained
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.tenthMarksObtain}</td>
                            </tr>

                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Percentage
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.tenthPercentage}</td>
                            </tr>
                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Roll No
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.tenthRollNo}</td>
                            </tr>
                            <br></br>
                            <tr style={{ fontSize: "20px" }}>
                              <b>12th</b>
                            </tr>

                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Passing Year
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.twelfthPassingYear}</td>
                            </tr>
                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Max. Marks
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.twelfthMaxMarks}</td>
                            </tr>
                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Marks Obtained
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.twelfthMarksObtain}</td>
                            </tr>

                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Percentage
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.twelfthPercentage}</td>
                            </tr>
                            <tr>
                              <th
                                width="30%"
                                style={{
                                  color: "#233d4d",
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                }}
                              >
                                Roll No
                              </th>
                              <td width="2%">:</td>
                              <td>{studentData.academicDetails.twelfthRollNo}</td>
                            </tr>
                          </>
                        )}
                      </table>

                    </div>


                  )}
                </Item>
              </Grid>
            </Grid>
          </Grid>


          <br></br>


        </Box>
      </ThemeProvider>
    </>
  );
}

export default VerifyDetailed;