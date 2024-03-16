import React, { useState } from "react";
import { Form } from "react-bootstrap";
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <HodDashboard />
                {showForm && (
                    <div 

                        className="shadow p-3 bg-body rounded"
                        style={{
                            backgroundColor: "#e8e5d5",
                            width: "90%",
                            marginLeft: "90px",
                            marginRight: "auto",
                            marginTop: "100px",
                            maxWidth: "350px",
                        }}
                    >
                        <div
                            style={{
                                backgroundImage: "linear-gradient(#1d2671, #C33764)",
                                color: "#ffff",
                                borderRadius: "7px",
                                width: '300px'
                            }}
                        >
                            <h5 style={{ padding: "10px" }}>Registration Verification</h5>
                        </div>

                        <div
                            className="shadow p-3 mb-3 bg-body rounded"
                            style={{ backgroundColor: "#e8e5d5", marginTop: "20px" }}
                        >
                            <h5>Student Registration</h5>
                            <h5>
                                <b>Admission Session</b>
                            </h5>
                            <Form.Group className="mb-3" controlId="">
                                <b>{admissionSession}</b>
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
                            <Button
                                backgroundColor='yellow'
                                size="small"
                                style={{ padding: "10px" }}
                                onClick={handleSearchDetails}
                            >
                                Search Details
                            </Button>
                            {/* </div> */}
                        </div>
                    </div>
                )}
            </ThemeProvider>
        </>
    );
};

export default HodMainDetails;