import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const StudentMainDetails = () => {
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();

  const handleSearchDetails = () => {
    navigate("/student/Enrollement/Form");
    setShowForm(false);
  };

  return (
    <>
    <style>{`
    .student-details-container {
      background-color: #e8e5d5;
      margin-top: 150px;
      width:30%;
      margin-Left:-260px;
    }

    .student-details-header {
      background-color: #697581;
      border-radius: 7px;
      padding: 10px;
      color: #fff;
    }

    @media (max-width: 768px) {
      .student-details-container {
        width: 83%;
        margin-left: 65px;
        margin-top:150px;
      }
    }`}</style>
    <ThemeProvider theme={theme}>
      <Row>
        <Col xs={12} md={3}>
          < StudentDashboard/>
        </Col>
        <Col xs={12} md={9}>
          {showForm && (
            <Container
              className="shadow p-3 bg-body rounded student-details-container"
            >
              <div className="student-details-header">
                <h5>Student Details</h5>
              </div>

              <Container
                className="shadow p-3 mb-3 bg-body rounded"
                onClick={handleSearchDetails}
              >
                <h5>Update Details</h5>
              </Container>
            </Container>
          )}
        </Col>
      </Row>
    </ThemeProvider></>
  );
};

export default StudentMainDetails;