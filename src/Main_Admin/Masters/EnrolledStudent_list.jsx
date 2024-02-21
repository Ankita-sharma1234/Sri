
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

    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc"); // or "desc"
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


    // /////////////////////////////////name sort/////////////////////////
    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    const sortedStudents = [...studentdata].sort((a, b) => {
        if (sortBy === "name") {
            return sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        }

        return 0;
    });
    // ///////////////////////////////////////////////////////////////////////////////////

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
                                        style={{ backgroundColor: '#023047' }}
                                    >
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
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                            }}
                                        >
                                            Enrollment No
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{
                                            backgroundColor: '#023047', color: 'white', minWidth: '200px', position: "sticky",
                                            top: 0,
                                            zIndex: 1,
                                        }}
                                        // /////////////for sorting name//////////////////
                                        onClick={() => handleSort("name")}
                                    >

                                        <h5>
                                            <b>Student Name</b>
                                            {/* /////////////name sort////////////////////////// */}
                                            {sortBy === "name" && (
                                                <span>{sortOrder === "asc" ? " ↑" : " ↓"}</span>
                                            )}
                                        </h5>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '200px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Father's Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047', minWidth: '200px' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                // width: "150px"
                                            }}
                                        >
                                            Mother's Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                width: "200px"
                                            }}
                                        >
                                            Course Branch
                                        </h1>
                                    </TableCell>

                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                width: "200px"
                                            }}
                                        >
                                            Course Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder",
                                                color: "white",
                                                fontFamily: "-moz-initial",
                                                width: "200px"
                                            }}
                                        >
                                            College Name
                                        </h1>
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        style={{ backgroundColor: '#023047' }}
                                    >
                                        <h1
                                            style={{
                                                fontSize: "20px",
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
                                {sortedStudents &&
                                    sortedStudents?.map((student, index) => (
                                        <TableRow key={index}>

                                            <TableCell align="center" typeof='check' ><Checkbox /></TableCell>
                                            <TableCell align="center">


                                            </TableCell>
                                            <TableCell align="center" style={{ color: "red" }}>
                                                {student.enrollmentNumber}
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
                                            <TableCell align="center" style={{ color: "green" }}>
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