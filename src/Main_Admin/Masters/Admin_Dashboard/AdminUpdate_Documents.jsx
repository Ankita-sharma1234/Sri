import React, { useState, useEffect } from "react";
import { Container, Button, Form, FormControl } from "react-bootstrap";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

import "react-datepicker/dist/react-datepicker.css";

const theme = createTheme();

function AdminUpdate_Documents() {
  const { id } = useParams()
  const userID = id;
  const [fileUrls, setFileUrls] = useState({
    applicantPhoto: '',
    applicantSignature: '',
    aadharCard: '',
    marksheet10th: '',
    marksheet12th: '',
    domicileCertificate: '',
    transferCertificate: '',
    incomeCertificate: '',
    migrationCertificate: '',
    otherCertificate: '',
  });

  const [errors7, setErrors7] = useState({
    applicantPhoto: '',
    applicantSignature: '',
    aadharCard: '',
    marksheet10th: '',
    marksheet12th: '',
    undergraduateCertificate: '',
    postgraduateCertificate: '',
    domicileCertificate: '',
    transferCertificate: '',
    incomeCertificate: '',
    migrationCertificate: '',
    otherCertificate: '',
  });

  const handleFileChange = async (fieldName, e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'upload');

      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/dszawxz7y/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const cloudinaryData = await cloudinaryResponse.json();
      const fileUrl = cloudinaryData.secure_url;

      // console.log("File URL:", fileUrl);

      setFileUrls((prevFileUrls) => ({
        ...prevFileUrls,
        [fieldName]: fileUrl,
      }));

      // console.log("Updated File URLs:", fileUrls);

      setErrors7((prevErrors) => ({
        ...prevErrors,
        [fieldName]: '',
      }));



    } catch (error) {
      console.error("Error handling file change:", error);
    }
  };

  const HandleUpdateData = async () => {

    // console.log("Data to be sent to the server:", fileUrls);
    const response = await fetch(
      `https://sssutms.ac.in/apitest/admin/updatedocuments2`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: userID,
          fileUrls,
        }),
      }
    );

    const data = await response.json();
    // console.log("Response from the server:", data);
  };

  return (
    <div>
      <AdminDashboard />
      <ThemeProvider theme={theme}>
        {/* /////////////////////////////////////////////DOCUMENTS & PHOTOS/////////////////////////////////////////// */}
        <Container
          className="shadow p-3 bg-body rounded"
          style={{
            width: "100%",
            backgroundColor: "#e8e5d1",
            marginTop: "80px",
          }}
        >
            <h3 style={{fontWeight:"inherit",backgroundImage: "linear-gradient(to right, #004e92, #990033)",borderRadius:"10px",color:'whitesmoke',padding:"5px"}}>Update Documents</h3>
          <br></br>

          <Grid container>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Applicant's Photo 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("applicantPhoto", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.applicantPhoto && (
                <div style={{ color: 'red' }}>{errors7.applicantPhoto}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Applicant's Signature{" "}
                    
                  </h5>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("applicantSignature", e)}
                  ></input>
                  <h6 style={{ backgroundColor: " #ffe6e6" }}>
                    Maximum 1000KB
                  </h6>
                </div>
              </div>
              {errors7.applicantSignature && (
                <div style={{ color: 'red' }}>{errors7.applicantSignature}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Aadhar Card 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("aadharCard", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.aadharCard && (
                <div style={{ color: 'red' }}>{errors7.aadharCard}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Marksheet 10th 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("marksheet10th", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.marksheet10th && (
                <div style={{ color: 'red' }}>{errors7.marksheet10th}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Marksheet 12th 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("marksheet12th", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.marksheet12th && (
                <div style={{ color: 'red' }}>{errors7.marksheet12th}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Domicile Certificate 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("domicileCertificate", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.domicileCertificate && (
                <div style={{ color: 'red' }}>{errors7.domicileCertificate}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Transfer Certificate 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("transferCertificate", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.transferCertificate && (
                <div style={{ color: 'red' }}>{errors7.transferCertificate}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Income Certificate 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("incomeCertificate", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.incomeCertificate && (
                <div style={{ color: 'red' }}>{errors7.incomeCertificate}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    Migration Certificate 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("migrationCertificate", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.migrationCertificate && (
                <div style={{ color: 'red' }}>{errors7.migrationCertificate}</div>
              )}
              <hr></hr>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <h5>
                    OtherCertificate 
                  </h5>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    type="file"
                    placeholder="choose"
                    onChange={(e) => handleFileChange("otherCertificate", e)}
                  ></input>
                  <h6 style={{ backgroundColor: "#ffe6e6" }}>Maximum 1000KB</h6>
                </div>
              </div>
              {errors7.otherCertificate && (
                <div style={{ color: 'red' }}>{errors7.otherCertificate}</div>
              )}
              <hr></hr>
            </Grid>


            <Grid item xs={12}>
              <Button
                style={{
                  marginLeft: "85%",
                  padding:"7px",
                  marginTop: "4px",
                  backgroundImage: "linear-gradient(96deg, #ffc371 0%, #ff5f6d 100%)",
                  color: "white",
                  width: "15%",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "14px !important"
                }}
                type="submit"
                onClick={HandleUpdateData}
              >
                Update
              </Button>
            
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default AdminUpdate_Documents;
