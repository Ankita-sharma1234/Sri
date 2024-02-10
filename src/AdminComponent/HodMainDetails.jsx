import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import HodDashboard from "./HodDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const HodMainDetails = () => {
  const [selectedRadioButton, setSelectedRadioButton] = useState("E-Pravesh");
  const [selectedRadioButton1, setSelectedRadioButton1] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [admissionSession, setAdmissionSession] = useState("");
  const navigate = useNavigate();



  const handleRadioChange = (event) => {
    setSelectedRadioButton(event.target.value);
    setSelectedRadioButton1(event.target.value);
  };

  const handleSearchDetails = async () => {
    setShowList(true);
    setShowForm(false);
    setShowSidebar(false);
    if (selectedRadioButton1 === "Pending Student List") {
      navigate("/studentpending", {
        state: { admissionSession: admissionSession },
      });
    } else if (selectedRadioButton1 === "Verified Student List") {
      navigate("/studentverify", {
        state: { admissionSession: admissionSession },
      });
    }
  };
  // console.log(admissionSession, "session");

  return (
    <ThemeProvider theme={theme}>
      <HodDashboard />
      {showForm && (
        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            backgroundColor: "#e8e5d5",
            width: "25%",
            marginLeft: "10%",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              backgroundImage: "linear-gradient(#1d2671, #C33764)",
              color: "#ffff",
              borderRadius: "7px",
            }}
          >
            <h5 style={{ padding: "10px" }}>Registration Verification</h5>
          </div>

          <Container
            className="shadow p-3 mb-3 bg-body rounded"
            style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
          >


            <h5>Student Registration</h5>


            <h5>
              <b>Admission Session</b>
            </h5>
            <Form.Group className="mb-3" controlId="">
              {/* <Form.Control
                // aria-label="Default select example"
                // name=""
                // onChange={(e) => setAdmissionSession(e.target.value)}
              >

              </Form.Control> */}
              <b>2023</b>
            </Form.Group>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={selectedRadioButton1}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="Pending Student List"
                control={<Radio />}
                label="Check Pending Student List"
              />
              <FormControlLabel
                value="Verified Student List"
                control={<Radio />}
                label="Check Verified Student List"
              />
            </RadioGroup>

            <div
              style={{
                backgroundColor: "skyblue",
                borderRadius: "7px",
              }}
            >
              <Button
                size="small"
                style={{ padding: "10px", marginLeft: "30%" }}
                onClick={handleSearchDetails}
              >
                Search Details
              </Button>
            </div>
          </Container>
        </Container>
      )}
    </ThemeProvider>
  );
};

export default HodMainDetails;
