import React, { useState } from "react";
import AdminDashboard from './Admin_Dashboard/AdminDashboard'
import Form from 'react-bootstrap/Form';
import { FormControl } from "@mui/material";
import { Button, Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import AdminUpdtStdt_Detail from "./AdminUpdtStdt_Detail";

function AdminStdtSearch() {
  const [selectedField, setSelectedField] = useState("option1");
  const [enteredValue, setEnteredValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSearch = async () => {
    if (selectedField === "option1" || !enteredValue) {
      alert("Please select a valid search field and enter a value.");
      return;
    }

    try {
      const api = `https://sssutms.ac.in/apitest/admin/search2?search=${enteredValue}`;
      const response = await axios.get(api);
      setUserData(response.data);
      setShowTable(true); // Show the table when data is fetched
    
    } catch (error) {
      console.error("API Error:", error);
    }
  };
 
  return (
    <>
      <style>
        {`
          .shadow-box {
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            padding: 10px;
            width:300px;
            margin-Top:10%;
          
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
      <AdminDashboard />
      <div style={{ marginLeft: '5%', display: "flex" }}>
        <div>
          <Container fluid style={{ paddingTop: '80px' }}>
            <Row>
              <Col xs={12} sm={12} md={10} lg={9} xl={8} className="custom-laptop-style">
                <div className="shadow-box">
                  <div className="header">Search Student</div>
                  <div className="scroll-container" style={{ height: "290px" }}>
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
                              Search by *
                            </h1>
                          </label>
                          <Form.Select
                            className="login-input"
                            value={selectedField}
                            onChange={(e) => setSelectedField(e.target.value)}
                            required={true}
                            autoFocus={true}
                          >
                            <option value="option1">Select</option>
                            <option value="Regestration No">Regestration No</option>
                            <option value="Mobile">Mobile No.</option>
                            <option value="Name">Name</option>
                            <option value="Email">Email</option>
                          </Form.Select>
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
                              Enter *
                            </h1>
                          </label>
                          <Form.Control className="login-input"
                            type="text"
                            value={enteredValue}
                            onChange={(e) => setEnteredValue(e.target.value)} />
                          <br />
                        </FormControl>
                      </Row>
                      <Button
                        onClick={handleSearch}
                        style={{
                          marginLeft: "40px",
                          backgroundColor: "#004e92",
                          width: "110px",
                          height: "40px",
                          padding:"5px"
                        }}
                      >
                        Search
                      </Button>
                    </form>


                  </div>
                </div>
              </Col>
            </Row>
          </Container>

        </div>
        <div>
          {showTable && userData.length > 0 && (
            <div>
              <AdminUpdtStdt_Detail userData={userData} />
            </div>
          )}
        </div>
      </div>
    </>

  )
}

export default AdminStdtSearch
