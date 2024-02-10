import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TableCell,
  Box
} from "@mui/material";
import axios from "axios";
import closebutton from "../../images/close-button.png"
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
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
// import Sidebar from "./Sidebar";

import DatePicker from "react-datepicker";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const SearchPen = () => {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata1, setStudentData] = useState({ students: [] });
  const [dataNotFound, setDataNotFound] = useState(false);
  const [enrollmentGenerated, setEnrollmentGenerated] = useState(false);

  const { admissionSession, courseType,  courseName, courseBranch  } = useParams();
 console.log(admissionSession, courseType,  courseName, courseBranch ,  "data from query")
  useEffect(() => {
    const fetchData = async () => {
        try {
            const url = 'https://sssutms.ac.in/apitest/admin/pendingstudentlist';
        
            const requestData = {
              admissionSession,
              courseType,
              courseName,
              courseBranch,
            
            };
        
            const response = await axios.post(url, requestData);
        
            const data = response.data;
         console.log(data , "data")
         if (!data.students || data.students.length === 0) {
            setDataNotFound(true);
          } else {
            setDataNotFound(false);
            setStudentData(data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setDataNotFound(true);
        }
    };

    // Call the fetchData function whenever any of the dependencies (session, courseType, etc.) change
    fetchData();
  }, [admissionSession, courseType,   courseName, courseBranch]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    /////////////////////datepicker/////////////////
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
  // console.log(studentdata, "data of student from use state")
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const branchname = studentdata1[0]?.courseBranch
  const coursename = studentdata1[0]?.courseName
  const studentId = studentdata1[0]?._id
//   const collegename = studentdata1[0]?.assignedCollege
  // console.log(branchname, coursename, collegename, ' message from K4LI  ..............')

  const handleClick = async () => {
    // try {
    //   const response = await axios.post(`https://sssutms.ac.in/apitest/generate-enrollment2/`, {
    //     courseName,
    //     // assignedCollege,
    //     courseBranch,
    //     admissionSession,
    //     courseType,
    //   });
    //   // console.log(response.data.message);
    //   swal({
    //     title: "Success",
    //     text: "Enrollment Generated Successfully!",
    //     icon: "success",
    //     buttons: "OK",
    //   });
    //   // Set enrollmentGenerated to true and reset state values
    //   setEnrollmentGenerated(true);
    //   setStudentData([]);
    // } catch (error) {
    //   // console.log(error)
    // }

  }
console.log(studentdata1, "helllo world")
  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <>
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
          <CardContent>
          {dataNotFound ? (
            <div>
            <h2>Oops! No Student Available in this Course!!!!</h2>
          </div>
        ) : (
      
            <Paper sx={{ width: "100%",overflow:'auto' }}>
            <TableContainer sx={{ maxHeight: "440px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                     
                    >
                      <h5>
                        <b>S.No.</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Session</b>
                      </h5>
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Registration No.</b>
                      </h5>
                    </TableCell>
                    <TableCell 
                      align="left"
                     style={{ backgroundColor: "#004e92",color:'white',minWidth:'200px'}}>
                      
              
                      <h5>
                        <b>Student Name</b>
                      </h5>
                    </TableCell>
                    <TableCell 
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b> Email</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Date of Birth</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Father's Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Mother's Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Contact</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Nationality</b>
                      </h5>
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Qualification</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",minWidth:'150px' }}
                    >
                      <h5>
                        <b>Qualification %</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white'}}
                    >
                      <h5>
                        <b>Course Type</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",color:'white',minWidth:'200px'}}
                    >
                      <h5>
                        <b>Course Name</b>
                      </h5>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#004e92",minWidth:'200px' }}
                    >
                      <h5>
                        <b>Course Branch</b>
                      </h5>
                    </TableCell>
                  
                  </TableRow>
                </TableHead>
                <TableBody>
                {studentdata1 && studentdata1.students && studentdata1.students.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">{index + 1}</TableCell>
                                
                      <TableCell align="left">2023</TableCell>
                      <TableCell align="center">
                    {student.randomId}
                       </TableCell>
                      <TableCell align="left">{student.name}</TableCell>
                      <TableCell align="left">{student.email}</TableCell>
                      <TableCell align="left">
                        <DatePicker
                          selected={selectedDate || new Date(student.dob)}
                          onChange={(date) => handleDateChange(date)}
                          dateFormat="dd/MM/yyyy"
                          className="text-center"
                        />
                      </TableCell>
                      <TableCell align="left">{student.fathersname}</TableCell>
                      <TableCell align="left">{student.mothersname}</TableCell>
                      <TableCell align="left">{student.mobile}</TableCell>
                      <TableCell align="left">{student.domicile}</TableCell>
                      <TableCell align="left">
                        {student.qualification}
                      </TableCell>
                      <TableCell align="left">
                        {`${student.qualificationPercentage}%`}
                      </TableCell>

                      <TableCell align="left">{student.courseType}</TableCell>
                      <TableCell align="left">{student.courseName}</TableCell>
                      <TableCell align="left">{student.courseBranch}</TableCell>
                    
                  
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[25, 50, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )
                      }
          </CardContent>
          <br></br>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default SearchPen;
