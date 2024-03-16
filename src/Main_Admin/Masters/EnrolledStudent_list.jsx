
import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {
    TableCell,
    Box
  } from "@mui/material";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Button from "@mui/material/Button"

import TableRow from '@mui/material/TableRow';
import {  CircularProgress, Container, ThemeProvider, createTheme } from '@mui/material';
import AdminDashboard from './Admin_Dashboard/AdminDashboard';
import { useParams } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { SearchIcon } from '@chakra-ui/icons';


const theme = createTheme();

const EnrolledStudent_list = ({
    session,
    courseType,
    course,
    branch,
    college,
  }) => {
console.log(session, courseType, course,  branch,  college, "session")

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [studentdata, setStudentData] = useState([])
    const [loading, setLoading] = useState(false)

    const [searchQuery,setSearchQuery] = useState("")
    const [filteredData, setFilteredData] = useState([])

    const Ankit = studentdata.map(student => ({
        EnrollmentNumber: student.enrollmentNumber,
        Name: student.name,
        Fathers_Name: student.fathersname,
        Mothers_Name: student.mothersname,
        Branch: student.courseBranch,
        Course: student.courseName,
        Course_Type: student.courseType,
        College_Name: student.assignedCollege,
        Fee_Status: student.isPaid ? "Paid" : "Not Paid",

    }))
    console.log(Ankit, "excel ka data")

    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    //const { session, courseType, course, branch, college } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://sssutms.ac.in/apitest/v2/listofenrolledstudent?session=${session}&courseType=${courseType}&course=${course}&branch=${branch}&college=${college}`);
               const requestData ={
                session,
                courseType,
                course,
                branch,
                college
               }
                const data = await response.json();

                if (data.length === 0) {
               
                } else {
              
                    setStudentData(data);
                }

                // console.log(data, "data from api")
            } catch (error) {
                console.error('Error fetching data:', error);
             
            } finally {
                setLoading(false)
            }
        };

        // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
        fetchData();
    }, [session, courseType, course, branch, college]);



    const filterData = () => {
        const filtered = studentdata.filter(student =>
          student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
      };
      useEffect(()=>{
        filterData()
    },[searchQuery,studentdata])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    const handleSearchChange = (e) =>{
        setSearchQuery(e.target.value)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
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
    

    const getSortedAndSlicedData =()=>{
        const sortedStudents = [...filteredData].sort((a, b) => {
            if (sortBy === "name") {
                return sortOrder === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }
    
            return 0;
        });
  
        const startIndex = page * rowsPerPage;
        return sortedStudents.slice(startIndex, startIndex + rowsPerPage);
      };
   
    //////////////////////export data to excel ////////////////////////
    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(Ankit);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Enrolled Students');
        XLSX.writeFile(workbook, 'enrolled_students.xlsx');
    };

    // ///////////////////////////////////////////////////////////////////////////////////

    return (
        <ThemeProvider theme={theme}>
            <AdminDashboard />
            {loading ? (<CircularProgress color="inherit" style={{ marginTop: "90px", marginLeft: " 40%" }} />) : (
                <Container
                    className="shadow p-3  bg-body rounded"
                    style={{
                        marginTop: "70px",
                        // marginLeft:"8%",
                        width: 'auto',
                
                        textAlign: "center",
                        justifyContent: "center",
                        backgroundColor:"red",
                    }}
                >


                    <Paper sx={{ width: '80%', overflow: 'hidden' , backgroundColor:"skyblue"}}>

                        <Button   style={{ float: "right", marginRight: "10px", marginBottom: "10px" }} onClick={exportToExcel}>Export to Excel</Button>
                        <Box style={{ float: "left", marginBottom: "10px" }}>
                            <SearchIcon sx={{mr:1}}/>
                            <input
                            type="text"
                            placeholder= "search by ID or Name"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            />
                        </Box>
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
                                    {getSortedAndSlicedData().map((student, index) => (
                                            <TableRow key={index}>

                                                <TableCell align="center"  >{index + 1}</TableCell>
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
                                            </TableRow>
                                        ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[4, 10, 25, 100]}
                            component="div"
                            count={filteredData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>

                </Container>
            )}
        </ThemeProvider>
    )
}

export default EnrolledStudent_list