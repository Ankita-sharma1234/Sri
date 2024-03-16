import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Button } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import domtoimage from "dom-to-image";
import logo from "../../AdminComponent/12.png"
import { Link } from "react-router-dom";
import StudentDashboard from "../../AdminComponent/StudentDashboard";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

const theme = createTheme();
function StudentAllDetail() {
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

  const userData = JSON.parse(sessionStorage.getItem("currentUser"));


  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem("currentUser"));
    setIsEnrollGenerated(userData.IsEnrollGenerated);

    if (userData.IsEnrollGenerated === true) {

    } else {
      // setIsEnrollGenerated(false)
      swal({
        icon: 'warning',
        title: 'Contact Admin',
        text: 'Please contact the admin to generate the enrollment Number.',
      })
    }
  }, []);

  const handleDownloadClick = () => {
    if (userData.IsEnrollGenerated === true) {
      generatePDF()
    } else {
      swal({
        icon: 'success',
        title: 'Contact Admin',
        text: 'Please chythhhshhddm.',
      });
    }
  };


  const shouldDisplaySection = (data) => {
    return data !== undefined && data !== null;
  };
  const generatePDF = async () => {
    const pdf = new jsPDF();

    // Set font size for the entire document
    pdf.setFontSize(12);

    const formatDate = (inputDate) => {
      const date = new Date(inputDate);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    };
    const imageDataUrl = await getImageDataUrl(userData.Documents?.applicantPhoto);


    pdf.addImage(logo, "JPEG", 10, 7, 30, 30);
    pdf.setFont("helvetica", "bold");
    pdf.text("Sri Satya Sai University of Technology and Medical Science Sehore", 105, 10, { align: "center" });
    pdf.text("[Establiish Under Govt. of (M.P.) & Registered UGC 2(F),1956]", 105, 18, { align: "center" });
    pdf.text("Sh-18 Bhopal-Indore Road, Opposite Oilfed Plant, Pachama,", 105, 26, { align: "center" });
    pdf.text("ACADEMIC YEAR: 2023-2024", 105, 34, { align: "center" });

    pdf.line(10, 45, 200, 45);
    pdf.text("ENROLLMENT FORM", 105, 50, { align: "center", color: "gray" });




    let yCoordinate = 50;


    yCoordinate += 10;


    const detailsHeaders = ["", ""];
    const detailsData = [
      ["Enrollment No.", userData?.enrollmentNumber],
      ["Name", userData.name],
      ["Father's Name", userData.fathersname],
      ["Mother's Name", userData.mothersname],
      ["Gender", userData.gender],
      ["Date of Birth", formatDate(userData.dob)],
      ["Address", userData.address.address2],
      ["Domicile", userData.domicile],
      ["Category", userData.category],
      ["Mobile No.", userData.mobile],
      ["Email", userData.email],
      ["Course Name", userData.courseName],
      ["Course Type", userData.courseType],
      ["Specialization", userData.courseBranch],
      ["Institute", userData.assignedCollege],
      ["Mode of Admission", "University Level"],
    ];


    const tableOptions = {
      startY: yCoordinate,
      startX: 20,
      margin: { top: 10 },
      columnStyles: { 0: { cellWidth: 70 }, 1: { cellWidth: 120 } },
      styles: { overflow: "linebreak" },
    };

    pdf.autoTable(detailsHeaders, detailsData, tableOptions);

    yCoordinate = 10;
    pdf.setFont("helvetica", "bold");
    pdf.text("EDUCATION DETAILS:-", 20, (yCoordinate += 190));
    pdf.setFont("helvetica", "normal");

    const educationHeaders = ["Degree/Course", "Specialization/Subject", "Board/University", "Passing Year", "Obtain Marks", "Percentage"];
    const educationData = [
      ["10th", "ALL COMPULSORY", `${userData.academicDetails.tenthBoard}`, `${userData.academicDetails?.tenthPassingYear}`, `${userData.academicDetails.tenthMarksObtain}`, `${userData.academicDetails.tenthPercentage}`],
      ["12th/Diploma", `${userData.QualifiedCourse}`, `${userData.academicDetails.twelfthBoard}`, `${userData.academicDetails.twelfthPassingYear}`, `${userData.academicDetails.twelfthMarksObtain}`, `${userData.academicDetails.twelfthPercentage}`],
      ["Other", " ", " ", " ", " ", " "],
    ];

    const colWidths = [40, 50, 25, 22, 25, 25];


    const educationOptions = {
      startY: 210,
      startX: 20,
      margin: { top: 40 },
      columnStyles: { 0: { cellWidth: colWidths[0] }, 1: { cellWidth: colWidths[1] }, 2: { cellWidth: colWidths[2] }, 3: { cellWidth: colWidths[3] }, 4: { cellWidth: colWidths[4] }, 5: { cellWidth: colWidths[5] } },
      styles: { overflow: "linebreak" },
    };

    pdf.autoTable(educationHeaders, educationData, educationOptions);




    const signatureImageDataUrl = await getImageDataUrl(userData.Documents.applicantSignature);
    pdf.addImage(imageDataUrl, "JPEG", 165, 70, 30, 30);

    pdf.addImage(signatureImageDataUrl, "JPEG", 150, 250, 40, 20);
    pdf.save("student_details.pdf");



    const imageLink = document.createElement("a");
    imageLink.href = imageDataUrl;
    // imageLink.download = "student_image.jpeg";
    document.body.appendChild(imageLink);
    imageLink.click();
    document.body.removeChild(imageLink);
  };

  // Helper function to convert image to data URL
  const getImageDataUrl = async (imageUrl) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        resolve(canvas.toDataURL("image/jpeg"));
      };
      img.onerror = (error) => reject(error);
      img.src = imageUrl;
    });
  };
  return (
    <>
      <style>
        {`
          .student-profile .card {
            border-radius: 10px;
            height:80px;
            width:80px;
          }



          .student-profile .card h3 {
            font-size: 20px;
            font-weight: 700;
          }

          .student-profile .card p {
            font-size: 26px;
            color: #000;
          }

          .student-profile .table th,
          .student-profile .table td {
            font-size: 40px;
            padding: 0px 10px;
            color: #000;
          }

          @media (max-width: 800px) {
            .card {
              width: 100%;
              margin-Top:75px;
            }
          }

          @media (min-width: 600px) {
            .card {
              width: 80%;
              margin-Top:40px;
            }
          }
        `}
      </style>

      <ThemeProvider theme={theme}>
        <StudentDashboard />
        <Box
          sx={{
            marginTop: "3%",
            backgroundColor: "#b0c4b1",
            boxShadow: "2px solid black",
          }}
        >
          <Grid container sx={{ justifyContent: "center"}}>
            <Grid item xs={12} sm={5} >
              <Item style={{ marginTop: '80px' }}>
                <div class="card shadow-lg" style={{ height: "80%" }}>
                  <div
                    class="card-header bg-transparent text-center"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      class="profile_img"
                      src={userData?.Documents?.applicantPhoto}
                      alt="img"
                      style={{
                        width: "171px",
                        height: "180px",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    ></img>
                    <h3>{userData?.name}</h3>
                  </div>
                  <div class="card-body">
                    <p class="mb-0">
                      <strong class="pr-1">Course Type: </strong>
                      {userData?.courseType}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Course Name: </strong>
                      {userData?.courseName}
                    </p>
                    <p class="mb-0">
                      <strong class="pr-1">Branch: </strong>
                      {userData?.courseBranch}
                    </p>
                    <p class="mb-0" >
                      <strong class="pr-1">Fee Status: </strong>
                      {userData?.isPaid ? "Paid" : "Not Paid"}
                    </p>

                  </div>
                </div>

              </Item>
              <div >
                <Button variant="contained" color="warning"><Link to='/erp/studentlogin'>Logout</Link></Button>
                <Button variant="contained" color="success" onClick={handleDownloadClick} disabled={!isEnrollGenerated}>
                  Download Now
                </Button>
              </div>

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
                      <b style={{ fontFamily: "italic" }}>Personal Information</b>
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
                              Enrollment Number
                            </th>
                            <td width="2%">:</td>
                            <td>{userData.enrollmentNumber ? `${userData.enrollmentNumber}` : "Not Generated"}</td>
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
                              Gender
                            </th>
                            <td width="2%">:</td>
                            <td>{userData?.gender}</td>
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
                            <td>{userData?.category}</td>
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
                            <td>{userData?.fathersname}</td>
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
                            <td>{userData?.mothersname}</td>
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
                            <td>{userData?.mobile}</td>
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
                            <td>{userData?.dob}</td>
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
                            <td>{userData?.email}</td>
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
                            <td>{userData?.domicile}</td>
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
                            <td>{userData?.lastExamType}</td>
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

                            <td>
                              {userData?.professional?.ScholarshipRequired
                                ? userData.professional.ScholarshipRequired
                                : "Not Eligible"}
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
                              Current Address{" "}
                            </th>
                            <td width="2%">:</td>
                            <td>{userData?.address?.address1}</td>
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
                            <td>{userData?.address?.address2}</td>
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
                            <td>{userData?.address?.country}</td>
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
                            <td>{userData?.address?.state}</td>
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
                            <td>{userData?.address?.district}</td>
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
                            <td>{userData?.address?.pinCode}</td>
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
                      <b style={{ fontFamily: "italic" }}>
                        Professional Information
                      </b>
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
                          <td>{userData?.professional?.Handicapped}</td>
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
                          <td>{userData?.professional?.Medium}</td>
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
                          <td>{userData?.professional?.AadharNumber}</td>
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
                          <td>
                            {userData?.professional?.SamagraId
                              ? userData.professional.SamagraId
                              : "Not Available"}
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
                            Father's Occupation
                          </th>
                          <td width="2%">:</td>
                          <td>{userData?.professional?.FathersOccupation}</td>
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
                          <td>{userData?.professional?.MothersOccupation}</td>
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
                          <td>{userData?.professional?.FathersIncome}</td>
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
                          <td>{userData?.professional?.MothersIncome}</td>
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
                          <td>{userData?.professional?.ParentMobile}</td>
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
                          <td>{userData?.qualification}</td>
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
                          <td>{userData?.qualificationPercentage}%</td>
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
                            {userData && userData.Documents?.aadharCard && (
                              <a
                                href={userData?.Documents?.aadharCard}
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
                            {userData &&
                              userData?.Documents?.applicantSignature && (
                                <a
                                  href={userData?.Documents?.applicantSignature}
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
                            {userData &&
                              userData?.Documents?.domicileCertificate && (
                                <a
                                  href={userData?.Documents?.domicileCertificate}
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
                            {userData &&
                              userData?.Documents?.incomeCertificate && (
                                <a
                                  href={userData?.Documents?.incomeCertificate}
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
                            {userData && userData.Documents?.marksheet10th && (
                              <a
                                href={userData?.Documents?.marksheet10th}
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
                            {userData && userData.Documents?.marksheet12th && (
                              <a
                                href={userData?.Documents?.marksheet12th}
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
                            {userData &&
                              userData?.Documents?.transferCertificate && (
                                <a
                                  href={userData?.Documents?.transferCertificate}
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
                            {userData &&
                              userData?.Documents?.migrationCertificate && (
                                <a
                                  href={userData?.Documents?.migrationCertificate}
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
                        {shouldDisplaySection(userData?.academicDetails) && (
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
                              <td>{userData?.academicDetails?.tenthPassingYear}</td>
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
                              <td>{userData?.academicDetails?.tenthMaxMarks}</td>
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
                              <td>{userData?.academicDetails?.tenthMarksObtain}</td>
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
                              <td>{userData?.academicDetails?.tenthPercentage}</td>
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
                              <td>{userData?.academicDetails?.tenthRollNo}</td>
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
                              <td>{userData?.academicDetails?.twelfthPassingYear}</td>
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
                              <td>{userData?.academicDetails?.twelfthMaxMarks}</td>
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
                              <td>{userData?.academicDetails?.twelfthMarksObtain}</td>
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
                              <td>{userData?.academicDetails?.twelfthPercentage}</td>
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
                              <td>{userData?.academicDetails?.twelfthRollNo}</td>
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

export default StudentAllDetail;