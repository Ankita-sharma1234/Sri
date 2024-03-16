import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    TableCell,
    Box
} from "@mui/material";
import { Button, CircularProgress, Checkbox } from "@mui/material";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from 'react-router-dom';
import CardContent from "@mui/material/CardContent";

import swal from "sweetalert";
import SearchIcon from "@mui/icons-material/Search";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
import jsPDF from "jspdf";
import logo from "../../AdminComponent/12.png"
const theme = createTheme({
    typography: {
        fontWeightBold: 700,
    },
});

const Admission_Slip = () => {
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const [studentdata, setStudentData] = useState([]);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [selectedStudentIds, setSelectedStudentIds] = useState([]);
    const [newAdmissionDate, setAdmissionDate] = useState("");
    const { session, courseType, course, branch, college } = useParams();
    console.log(session, courseType, course, branch, college, "data from search ")
    useEffect(() => {
        const fetchData = async () => {
            try {
           setLoading(true)
                const url = 'https://sssutms.ac.in/apitest/admin/admissionSlipsearch';
                const requestData = {
                    session,
                    courseType,
                    course,
                    branch,
                    college
                };


                const response = await axios.post(url, requestData);
                const data = response.data;
                console.log(data.students, "data")
                if (!data || data.length === 0) {
                    setDataNotFound(true);
                } else {
                    setDataNotFound(false);
                    setStudentData(data.students);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setDataNotFound(true);
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [session, courseType, course, branch, college]);

    useEffect(() => {
        filterData();
    }, [searchQuery, studentdata, newAdmissionDate]);

    const filterData = () => {
        const filtered = studentdata.filter(student =>
            student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            student.courseBranch.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const generatePDF = (student) => {
        const pdf = new jsPDF();
        console.log(student, "student")
        pdf.setFillColor(255, 255, 255); // White color
        pdf.rect(0, 0, 210, 297, 'F'); // A4 size

        // Add title
        pdf.addImage(logo, "JPEG", 3, 5, 25, 25);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.setTextColor(0, 0, 0);
        pdf.text("SRI SATYA SAI UNIVERSITY OF TECHONOLOGY AND MEDICAL ", 120, 10, { align: "center" });
        pdf.text("SCIENCES SEHORE", 120, 17, { align: "center" });
        pdf.setFontSize(13);
        pdf.text("[Established Under Govt. of (M.P.) & Registered UGC 2(F), 1956]", 120, 24, { align: "center" });
        pdf.text("Sh-18 Bhopal-Indore Road, Opposite Oilfed Plant, Pachama,", 120, 30, { align: "center" });
        pdf.text("ACADEMIC YEAR: 2023-2024", 120, 38, { align: "center" });

        pdf.setDrawColor(255, 0, 0); // Red color

        pdf.setFontSize(13);
        pdf.setTextColor(255, 0, 0); // Red color
        pdf.setTextColor(0, 0, 0);

        pdf.text("Admission Slip", 118, 47, { align: "center" });

        // Add payment details
        // Black color
        pdf.setFontSize(10);
        pdf.text(`Enrollment Number : ${student?.enrollmentNumber}`, 10, 60);
        pdf.text(`Name of Candidate   :          ${student?.name}`, 10, 70);
        pdf.addImage(student?.Documents?.applicantPhoto, "JPEG", 150, 60, 30, 30);
        pdf.text(`Father's Name   :                 ${student?.fathersname}`, 10, 80);
        pdf.text(`Mother's Name   :                ${student?.mothersname}`, 10, 90);
        pdf.text(`gender  :                               ${student?.gender}`, 10, 100);
        const formattedDOB = new Date(student?.dob).toLocaleDateString('en-GB'); // Assuming 'en-GB' format (DD-MM-YYYY)
        pdf.text(`Date of Birth :                      ${formattedDOB}`, 10, 110);
        //pdf.text(`Date of Birth :                      ${student?.dob}`, 10, 110);
        pdf.text(`Address  :                            ${student?.address.address1}`, 10, 120);

        pdf.text(`Domicile :                            ${student?.domicile}`, 10, 130);
        pdf.text(`Category :                           ${student?.category}`, 10, 140);
        pdf.text(`Mobile Number :                 ${student?.mobile}`, 10, 150);
        pdf.text(`Email :                                ${student?.email}`, 10, 160);

        pdf.text(`Specialization :                  ${student?.courseBranch}`, 10, 170);
        pdf.text(`Institute :                            ${student?.assignedCollege}`, 10, 180);
        pdf.text(`Mode of Admission  :               university Level`, 10, 190);
        pdf.text(`Marks of Entrance :               `, 10, 200);
        pdf.text(`Date of Admission  :             ${student?.admissionDate ? student.admissionDate : " "}`, 10, 210);
        pdf.text(`- I have checked all the original documents and verified  the eligibility of the candidate.`, 10, 220);
        pdf.text(`- If it found that candidate hide any information or provide any incorrect information at the time of admission ,`, 10, 230);
        pdf.text(` University  has right to cancel the  admission at the stage,`, 10, 235);


        pdf.addImage(student?.Documents?.applicantSignature, "JPEG", 10, 260, 40, 10);
        pdf.text(`Name & Signature With Seal`, 145, 262)
        pdf.text(`Officer in charge`, 153, 267)
        pdf.text(`${student?.assignedCollege}`, 140, 272)
        pdf.save("Admission_slip.pdf");
    };

    const handleDateInputChange = (e) => {
        setAdmissionDate(e.target.value);
    };

    const handleCheckboxChange = (studentId) => {
        const updatedSelectedStudentIds = selectedStudentIds.includes(studentId)
            ? selectedStudentIds.filter(id => id !== studentId)
            : [...selectedStudentIds, studentId];

        setSelectedStudentIds(updatedSelectedStudentIds);
        console.log("Selected Student IDs:", updatedSelectedStudentIds);
    };


    const handleClick = async () => {
        console.log(selectedStudentIds)
        try {
            const response = await axios.post(`https://sssutms.ac.in/apitest/admin/admissionSlip`, {
                newAdmissionDate,
                studentIds: selectedStudentIds
            });

            console.log(response.message)
            swal({
                title: "Success",
                text: "Updated successfully",
                icon: "success",
                buttons: "OK",
            });


        } catch (error) {
            console.error('Error generating enrollment:', error);
        }
    };



    /////////////////////////name sort ////////////////////////////
    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };
    const getSortedAndSlicedData = () => {
        // Sort the data
        const sortedData = [...filteredData].sort((a, b) => {
            if (sortBy === "name") {
                return sortOrder === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }

            return 0;
        });

        // Get the sliced data based on current page and rows per page
        const startIndex = page * rowsPerPage;
        return sortedData.slice(startIndex, startIndex + rowsPerPage);
    };
    // console.log("input date" , newAdmissionDate)
    return (
        <ThemeProvider theme={theme}>
            <AdminDashboard />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "50px",
                }}
            >
                {dataNotFound ? (
                    <div>
                        <h2>Oops! No Student Available in this Course!!!!</h2>
                    </div>
                ) : (
                    <>

                        <Box sx={{ width: "90%", marginTop: "20px" }}>
                            {loading ? (<CircularProgress color="success" style={{ marginTop: "80px", marginLeft: "50%" }} />) : (
                                <CardContent>
                                    <Paper sx={{ width: "100%", overflow: "auto" }}>
                                        <Box sx={{display:"flex"}}>

                                        
                                        <Box sx={{ p: 2 ,width:"50%"}}>
                                            <SearchIcon sx={{ mr: 1 }} />
                                            <input
                                                type="text"
                                                placeholder="Search  by ID or Name"
                                                value={searchQuery}
                                                onChange={handleSearchChange}
                                            />
                                        </Box>
                                        <Box sx={{ p: 2,width:"50%",paddingLeft:"35%"}}>
                                            
                                                <input
                                                    type="date"
                                                    placeholder="Admission Date"
                                                    value={newAdmissionDate}
                                                    onChange={handleDateInputChange}
                                                />
                                            </Box>
                                            </Box>
                                        {/* Date input on the right */}


                                        <TableContainer sx={{ maxHeight: 440 }}>
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                S.No.
                                                            </h1>
                                                        </TableCell>


                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                Enrollment Number
                                                            </h1>
                                                        </TableCell>


                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                                // /////////////for sorting name//////////////////
                                                                onClick={() => handleSort("name")}
                                                            >
                                                                Random Id
                                                                {sortBy === "name" && (
                                                                    <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                                                                )}
                                                            </h1>
                                                        </TableCell>
                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                Student Name
                                                            </h1>
                                                        </TableCell>
                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                Father's Name
                                                            </h1>
                                                        </TableCell>
                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                Branch
                                                            </h1>
                                                        </TableCell>

                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                Course Name
                                                            </h1>
                                                        </TableCell>
                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                College Name
                                                            </h1>
                                                        </TableCell>
                                                        <TableCell
                                                            align="left"
                                                            style={{ backgroundColor: "#004e92" }}
                                                        >
                                                            <h1
                                                                style={{
                                                                    fontSize: "20px",
                                                                    fontWeight: "bolder",
                                                                    color: "white",
                                                                    fontFamily: "-moz-initial",
                                                                }}
                                                            >
                                                                Download Admission Slip
                                                            </h1>
                                                        </TableCell>

                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    {getSortedAndSlicedData().map((student, index) => (
                                                        <TableRow key={index}>
                                                            <TableCell align="center" typeof='check' onClick={() => handleCheckboxChange(student._id)} ><Checkbox /></TableCell>




                                                            <TableCell align="center">

                                                                {student?.enrollmentNumber}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {student.randomId}
                                                            </TableCell>

                                                            <TableCell align="center">
                                                                {student.name}
                                                            </TableCell>
                                                            <TableCell align="center">{student.fathersname
                                                            }</TableCell>
                                                            <TableCell align="center">{student.courseBranch}</TableCell>
                                                            <TableCell align="center">
                                                                {student.courseName}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                {student.assignedCollege}
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <Button
                                                                    variant="contained" color="success"
                                                                    onClick={() => generatePDF(student)}

                                                                >
                                                                    Download
                                                                </Button>


                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>

                                            </Table>

                                        </TableContainer>

                                        <TablePagination
                                            rowsPerPageOptions={[5, 25, 100]}
                                            component="div"
                                            count={filteredData.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />

                                    </Paper>
                                    <Button
                                        variant="contained" color="success"
                                        onClick={() => handleClick()}

                                    >
                                        UPDATE
                                    </Button>
                                </CardContent>)}

                            <br />
                        </Box>
                    </>
                )}
            </Box>
        </ThemeProvider>
    );
};

export default Admission_Slip;