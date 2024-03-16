import React, { useEffect, useState } from "react";
import {  Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TableCell,

} from "@mui/material";
import Paper from "@mui/material/Paper";
import DatePicker from "react-datepicker";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import swal from "sweetalert";
import HodDashboard from "./HodDashboard"
import { Container } from "react-bootstrap";
// import Sidebar from "./Sidebar";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const TotalEnrolled = () => {
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);

  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const branch1 = userData?.Branch;


  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(
          `https://sssutms.ac.in/apitest/students/enrolledlist?branch=${branch1}`
        );
        const data = await response.json();
        setStudentData(data.students);
       
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  const handleChangePage = ( newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // console.log(studentdata, "data of student from use state");

  const branchname = studentdata?.courseBranch; // Using optional chaining to handle null or undefined
  const coursename = studentdata?.coursename;
  const studentId = studentdata?._id;
  const assignedCollege = studentdata?.assignedCollege;


  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://sssutms.ac.in/apitest/generate-enrollment2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            branchname,
            studentId,
            coursename,
            assignedCollege,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data.message);

      swal({
        title: "Success",
        text: "Enrollment Generated Successfully!",
        icon: "success",
        buttons: "OK",
      });

      setStudentData((prevStudentData) => {
        return prevStudentData.filter((student) => student._id !== studentId);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <HodDashboard />
      <>
        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            marginTop: "80px",
            width: "90%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h4 style={{ textAlign: 'center' }}>TODAY'S ENROLLED STUDENT</h4>
          <Paper sx={{ width: "100%", overflow: "auto" }}>
            <TableContainer sx={{ maxHeight: "440px" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                        }}
                      >
                        S.No.
                      </h1>
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0", minWidth: '200px' }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                        }}
                      >
                        Enrollment Status
                      </h1>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                        }}
                      >
                        Registration ID
                      </h1>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                        }}
                      >
                        Registration Password
                      </h1>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                        }}
                      >
                        Registered On
                      </h1>
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                          minWidth: '200px'
                        }}
                      >
                        Candidate Name
                      </h1>
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                          minWidth: '200px'
                        }}
                      >
                        Father's Name
                      </h1>
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                          minWidth: '200px'
                        }}
                      >
                        Mother's Name
                      </h1>
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                        }}
                      >
                        Contact
                      </h1>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ backgroundColor: "#e6ecf0" }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          fontWeight: "bolder",
                          color: 'black',
                          fontFamily: "-moz-initial",
                          minWidth: '200px'
                        }}
                      >
                        Email
                      </h1>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentdata &&
                    studentdata?.map((student, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{index + 1}</TableCell>
                        {/* <TableCell align="center">2023</TableCell>
                        <TableCell align="center">{student.name}</TableCell>
                        <TableCell align="center">{student.email}</TableCell>
                        {/* Replace the line below with the DatePicker component */}

                        <TableCell align="center">
                          <Button variant="danger">Not generated</Button>
                        </TableCell>
                        <TableCell align="left">
                          {student?.randomId}
                        </TableCell>
                        <TableCell align="left">
                          {student?.randomPassword}
                        </TableCell>

                        <TableCell align="center">
                          <DatePicker
                            selected={selectedDate || (student?.createdAt ? new Date(student.createdAt) : null)}
                            onChange={(date) => handleDateChange(date)}
                            dateFormat="dd/MM/yyyy"
                            className="text-center"
                          />
                        </TableCell>

                        <TableCell align="left">
                          {student?.name}
                        </TableCell>
                        <TableCell align="left">
                          {student?.fathersname}
                        </TableCell>
                        <TableCell align="left">
                          {student?.mothersname}
                        </TableCell>

                        <TableCell align="center">
                          {student?.mobile}
                        </TableCell>
                        <TableCell align="center">
                          {student?.email}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[2, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
        {/* </Card> */}
        <br></br>
      </>
    </ThemeProvider>
  );
};

export default TotalEnrolled;