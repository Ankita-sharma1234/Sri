// import React, { useEffect, useState } from "react";
// import { Modal, label, Button } from "react-bootstrap";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import closebutton from "../../images/close-button.png"
// // import edit1 from "../images/edit1.png";

// import {
//     Switch,
//     TableCell,
//     Box,
//     Card,

//     TextField,
//     FormControl,
//     MenuItem,
// } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
// import axios from "axios";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// // import gallery from "../images/gallery.png";
// // import trash from "../images/trash.png";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { useParams } from 'react-router-dom';
// import CardContent from "@mui/material/CardContent";
// import swal from "sweetalert";
// import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
// // import Sidebar from "./Sidebar";

// const theme = createTheme({
//     typography: {
//         fontWeightBold: 700,
//     },
// });

// const EnrolledStudentlist = () => {
//     const [selectedOption, setSelectedOption] = React.useState("");
//     const [page, setPage] = React.useState(0);
//     const [rows, setRows] = React.useState([]);
//     const [rowsPerPage, setRowsPerPage] = React.useState(8);
//     const [studentdata, setStudentData] = useState([])
//     const [dataNotFound, setDataNotFound] = useState(false);
//     const [enrollmentGenerated, setEnrollmentGenerated] = useState(false);

// const { session, courseType, course, branch, college } = useParams();
// console.log(session, courseType, course, branch, college, "data from query")
// useEffect(() => {
//     const fetchData = async () => {
//         try {

//             const response = await fetch(`https://sssutms.ac.in/apitest/v2/listofenrolledstudent?session=${session}&courseType=${courseType}&course=${course}&branch=${branch}&college=${college}`);
//             const data = await response.json();

//             if (data.length === 0) {
//                 setDataNotFound(true);
//             } else {
//                 setDataNotFound(false);
//                 setStudentData(data);
//             }

//             console.log(data, "data from api")
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setDataNotFound(true);
//         }
//     };

//     // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
//     fetchData();
// }, [session, courseType, course, branch, college]);

// const handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);
// };

// const handleChangePage = (event, newPage) => {
//     setPage(newPage);
// };

// const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
// };
// console.log(studentdata, "data of student from use state")
// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const branchname = studentdata[0]?.courseBranch
// const coursename = studentdata[0]?.courseName
// const studentId = studentdata[0]?._id
// const collegename = studentdata[0]?.assignedCollege
// console.log(branchname, coursename, collegename, ' message from K4LI ..............')

// // const handleClick = async () => {
// //     try {
// //         const response = await axios.post(`https://sssutms.ac.in/apitest/generate-enrollment2/`, {
// //             branchname,
// //             studentId,
// //             coursename,
// //             collegename,
// //         });
// //         console.log(response.data.message);
// //         swal({
// //             title: "Success",
// //             text: "Enrollment Generated Successfully!",
// //             icon: "success",
// //             buttons: "OK",
// //         });
// //         // Set enrollmentGenerated to true and reset state values
// //         setEnrollmentGenerated(true);
// //         setStudentData([]);
// //     } catch (error) {
// //         console.log(error)
// //     }

// // }

//     return (
//         <ThemeProvider theme={theme}>
//             <AdminDashboard />
//             <>
//                 <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
//                     <CardContent>
//                         {dataNotFound ? (
//                             <div>
//                                 <h2>Oops! No Student Available in this Course!!!!</h2>
//                             </div>
//                         ) : (
//                             <Paper sx={{ width: "100%", overflow: "auto" }}>
//                                 <TableContainer sx={{ maxHeight: 500 }}>
//                                     <Table stickyHeader aria-label="sticky table">
//                                         <TableHead>
//                                             <TableRow>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         S.No.
//                                                     </h1>
//                                                 </TableCell>

//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Enrollment Status
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Enrollment No
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Candidate Name
//                                                     </h1>
//                                                 </TableCell>

//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Father's Name
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Mother's Name
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Branch
//                                                     </h1>
//                                                 </TableCell>

//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Course Name
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         College Name
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Fee Status
//                                                     </h1>
//                                                 </TableCell>
//                                                 <TableCell
//                                                     align="left"
//                                                     style={{ backgroundColor: "#004e92" }}
//                                                 >
//                                                     <h1
//                                                         style={{
//                                                             fontSize: "20px",
//                                                             fontWeight: "bolder",
//                                                             color: "white",
//                                                             fontFamily: "-moz-initial",
//                                                         }}
//                                                     >
//                                                         Edit
//                                                     </h1>
//                                                 </TableCell>
//                                             </TableRow>
//                                         </TableHead>
// <TableBody>
//     {studentdata && studentdata.map((student, index) => (
//         <TableRow key={index}>

//             <TableCell align="center">{index + 1}</TableCell>
//             <TableCell align="center">
//                 {/* <Button variant="danger">Not generated</Button> */}
//                 <img src={closebutton} alt="" />
//             </TableCell>
//             <TableCell align="center">
//                 {student.randomId}
//             </TableCell>
//             <TableCell align="center">

//             </TableCell>
//             <TableCell align="center">
//                 {student.name}
//             </TableCell>
//             <TableCell align="center">{student.fathersname
//             }</TableCell>
//             <TableCell align="center">{student.courseBranch}</TableCell>
//             <TableCell align="center">
//                 {student.courseName}
//             </TableCell>
//             <TableCell align="center">
//                 {student.assignedCollege}
//             </TableCell>
//             <TableCell align="center"> <Button
//                 variant="success"
//                 onClick={""}
//                 disabled={enrollmentGenerated}
//             >
//                 Generate Enrollment
//             </Button></TableCell>
//         </TableRow>
//     ))}
// </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                                 <TablePagination
//                                     rowsPerPageOptions={[2, 25, 100]}
//                                     component="div"
//                                     count={rows.length}
//                                     rowsPerPage={rowsPerPage}
//                                     page={page}
//                                     onPageChange={handleChangePage}
//                                     onRowsPerPageChange={handleChangeRowsPerPage}
//                                 />
//                             </Paper>
//                         )
//                         }
//                     </CardContent>
//                     <br></br>
//                 </Box>
//             </>
//         </ThemeProvider>
//     );
// };

// export default EnrolledStudentlist;

// // import React from 'react'
// // import AdminDashboard from './Admin_Dashboard/AdminDashboard'
// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import { DataGrid } from '@mui/x-data-grid';

// // const theme = createTheme({
// //     typography: {
// //         fontWeightBold: 700,
// //     },
// // });

// // const columns = [
// //     { field: 'id', headerName: 'ID', width: 70 },
// //     { field: 'firstName', headerName: 'First name', width: 130 },
// //     { field: 'lastName', headerName: 'Last name', width: 130 },
// //     {
// //       field: 'age',
// //       headerName: 'Age',
// //       type: 'number',
// //       width: 90,
// //     },
// //     {
// //       field: 'fullName',
// //       headerName: 'Full name',
// //       description: 'This column has a value getter and is not sortable.',
// //       sortable: false,
// //       width: 160,
// //       valueGetter: (params) =>
// //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //     },
// //   ];

// //   const rows = [
// //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
// //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
// //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
// //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// //   ];

// // function EnrolledStudent_list() {
// //     return (
// //         <ThemeProvider theme={theme}>
// //             <AdminDashboard />
// //             <>
// //                 {/* <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
// //                     <CardContent>
// //                         {dataNotFound ? (
// //                             <div>
// //                                 <h2>Oops! No Student Available in this Course!!!!</h2>
// //                             </div>
// //                         ) : (
// //                             <Paper sx={{ width: "100%", overflow: "auto" }}>
// //                                 <TableContainer sx={{ maxHeight: 500 }}>
// //                                     <Table stickyHeader aria-label="sticky table">
// //                                         <TableHead>
// //                                             <TableRow>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         S.No.
// //                                                     </h1>
// //                                                 </TableCell>

// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Enrollment Status
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Enrollment No
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Candidate Name
// //                                                     </h1>
// //                                                 </TableCell>

// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Father's Name
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Mother's Name
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Branch
// //                                                     </h1>
// //                                                 </TableCell>

// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Course Name
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         College Name
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Fee Status
// //                                                     </h1>
// //                                                 </TableCell>
// //                                                 <TableCell
// //                                                     align="left"
// //                                                     style={{ backgroundColor: "#004e92" }}
// //                                                 >
// //                                                     <h1
// //                                                         style={{
// //                                                             fontSize: "20px",
// //                                                             fontWeight: "bolder",
// //                                                             color: "white",
// //                                                             fontFamily: "-moz-initial",
// //                                                         }}
// //                                                     >
// //                                                         Edit
// //                                                     </h1>
// //                                                 </TableCell>
// //                                             </TableRow>
// //                                         </TableHead>
// //                                         <TableBody>
// //                                             {studentdata && studentdata.map((student, index) => (
// //                                                 <TableRow key={index}>

// //                                                     <TableCell align="center">{index + 1}</TableCell>
// //                                                     <TableCell align="center">
// //                                                         <Button variant="danger">Not generated</Button>
// //                                                     </TableCell>
// //                                                     <TableCell align="center">
// //                                                         {student.randomId}
// //                                                     </TableCell>
// //                                                     <TableCell align="center">

// //                                                     </TableCell>
// //                                                     <TableCell align="center">
// //                                                         {student.name}
// //                                                     </TableCell>
// //                                                     <TableCell align="center">{student.fathersname
// //                                                     }</TableCell>
// //                                                     <TableCell align="center">{student.courseBranch}</TableCell>
// //                                                     <TableCell align="center">
// //                                                         {student.courseName}
// //                                                     </TableCell>
// //                                                     <TableCell align="center">
// //                                                         {student.assignedCollege}
// //                                                     </TableCell>
// //                                                     <TableCell align="center"> <Button
// //                                                         variant="success"
// //                                                         onClick={""}
// //                                                         disabled={enrollmentGenerated}
// //                                                     >
// //                                                         Generate Enrollment
// //                                                     </Button></TableCell>
// //                                                 </TableRow>
// //                                             ))}
// //                                         </TableBody>
// //                                     </Table>
// //                                 </TableContainer>
// //                                 <TablePagination
// //                                     rowsPerPageOptions={[2, 25, 100]}
// //                                     component="div"
// //                                     count={rows.length}
// //                                     rowsPerPage={rowsPerPage}
// //                                     page={page}
// //                                     // onPageChange={handleChangePage}
// //                                     // onRowsPerPageChange={handleChangeRowsPerPage}
// //                                 />
// //                             </Paper>
// //                         )
// //                         }
// //                     </CardContent>
// //                     <br></br>
// //                 </Box> */}
// //                  <div style={{ height: 400, width: '100%' }}>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         initialState={{
// //           pagination: {
// //             paginationModel: { page: 0, pageSize: 5 },
// //           },
// //         }}
// //         pageSizeOptions={[5, 10]}
// //         checkboxSelection
// //       />
// //     </div>
// //             </>
// //         </ThemeProvider>
// //     )
// // }

// // export default EnrolledStudent_list


import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import { Button } from 'react-bootstrap';
import swal from "sweetalert";
import axios from 'axios';
import TableRow from '@mui/material/TableRow';
import { Checkbox, Container, ThemeProvider, createTheme } from '@mui/material';
import AdminDashboard from './Admin_Dashboard/AdminDashboard';
import { useParams } from 'react-router-dom';




const theme = createTheme();


function EnrolledStudent_list() {
    const [selectedOption, setSelectedOption] = React.useState("");
    const [rows, setRows] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [studentdata, setStudentData] = useState([])


    const { session, courseType, course, branch, college } = useParams();
    // console.log(session, courseType, course, branch, college, "data from query")
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(`https://sssutms.ac.in/apitest/v2/listofenrolledstudent?session=${session}&courseType=${courseType}&course=${course}&branch=${branch}&college=${college}`);
                const data = await response.json();

                if (data.length === 0) {
                    setDataNotFound(true);
                } else {
                    setDataNotFound(false);
                    setStudentData(data);
                }

                // console.log(data, "data from api")
            } catch (error) {
                console.error('Error fetching data:', error);
                setDataNotFound(true);
            }
        };

        // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
        fetchData();
    }, [session, courseType, course, branch, college]);



    // console.log(studentdata, "data of student from use state")
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const branchname = studentdata[0]?.courseBranch
    const coursename = studentdata[0]?.courseName
    const studentId = studentdata[0]?._id
    const collegename = studentdata[0]?.assignedCollege
    // console.log(branchname, coursename, collegename, ' message from K4LI ..............')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <ThemeProvider theme={theme}>
            <AdminDashboard />
            <Container
                className="shadow p-3  bg-body rounded"
                style={{
                    marginTop: "80px",
                    width: "100%",
                    textAlign: "center",
                    justifyContent: "center",
                }}
            >
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: "#004e92" }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
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
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: "#004e92" }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Enrollment No
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: "#004e92" }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Candidate Name
                                        </h1>
                                    </TableCell>

                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: "#004e92" }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
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
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Mother's Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: "#004e92" }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "15px",
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
                                                fontSize: "15px",
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
                                                fontSize: "15px",
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
                                                fontSize: "15px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Fee Status
                                        </h1>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {studentdata && studentdata.map((student, index) => (
                                    <TableRow key={index}>

                                        <TableCell align="center" typeof='check' ><Checkbox /></TableCell>
                                        <TableCell align="center">


                                        </TableCell>
                                        <TableCell align="center">
                                            {student.randomId}
                                        </TableCell>

                                        <TableCell align="center">
                                            {student.name}
                                        </TableCell>
                                        <TableCell align="center">{student.fathersname
                                        }</TableCell>
                                        <TableCell align="center">{student.mothersname
                                        }</TableCell>
                                        <TableCell align="center">{student.courseBranch}</TableCell>
                                        <TableCell align="center">
                                            {student.courseName}
                                        </TableCell>
                                        <TableCell align="center">
                                            {student.assignedCollege}
                                        </TableCell>
                                        <TableCell align="center">
                                            {student.isPaid ? "Paid" : "unpaid"}
                                        </TableCell>

                                        <TableCell align="center">

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Container>
        </ThemeProvider>
    )
}

export default EnrolledStudent_list