// import React, { useState, useEffect } from "react";
// import Paper from "@mui/material/Paper";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";

// import { StyledTableCell, StyledTableRow } from "../AdminComponent/Style";
// import { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { Container } from "react-bootstrap";
// import Form from "react-bootstrap/Form";

// import axios from "axios";
// import Sidebar from "./HodDashboard";
// import DatePicker from "react-datepicker";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import swal from "sweetalert";
// import { Box } from "@mui/material";

// const theme = createTheme();

// function TotalSession() {
//   const [approvedStudents, setApprovedStudents] = useState([]);
//   const [collegeAssignments, setCollegeAssignments] = useState({});
//   const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
//   const [assignedCollege, setAssignedCollege] = useState();
//   const hodId = userData?.user;
//   const branch1 = userData.Branch;
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterData, setFilteredData] = useState([]);

//   const collegeOptions = {
//     HOMEOPATHY: ["School of Homeopathy"],
//     AYURVEDIC: ["School of Ayurveda and Siddha Studies"],
//   };
//   const handleCollegeChange = (studentId, collegeName) => {
//     setCollegeAssignments((prevAssignments) => {
//       // console.log(` yhi clg milega dekho ${studentId}: ${collegeName}`);
//       setAssignedCollege(collegeName);
//       return {
//         ...prevAssignments,
//         [studentId]: collegeName,
//       };
//     });
//   };


//   const fetchApprovedStudents = async () => {
//     try {
//       const response = await axios.get(
//         `https://sssutms.ac.in/apitest/hod/students/branchtotallist?Branch=${branch1}`
//       );

//       setApprovedStudents(response.data.students);
//       setFilteredData(response.data.students)
//       const initialAssignments = {};
//       response.data.students.forEach((student) => {
//         initialAssignments[student._id] = null;
//       });
//       setCollegeAssignments(initialAssignments);

//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     filterdata()
//   }, [searchQuery, approvedStudents])
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(2);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value)
//   }
//   useEffect(() => {
//     fetchApprovedStudents();
//   }, []);
//   const filterdata = () => {
//     const filtered = approvedStudents.filter(student =>
//       student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.name.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     setFilteredData(filtered)
//   }

//   ////////////////////datepicker/////////////////
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <Sidebar />
//         <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "85px" }}>
//         <Container
//           className="shadow p-3  bg-body rounded"         
//         >
//           <Box  >
//           <input
//                   type="text"
//                   placeholder="Search  by ID or Name"
//                   value={searchQuery}
//                   onChange={handleSearchChange}
//                 />
//           </Box>
//           <h4>TOTAL STUDENT IN {branch1}</h4>
//           <Paper sx={{ width: "100%" }}>
//             <TableContainer sx={{ maxHeight: "440px" }} component={Paper}>
//               <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }} >
//                 <TableHead>
//                   <TableRow>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>

//                       <h5 style={{ color: 'black' }}>
//                         <b>S.No.</b>
//                       </h5>
//                     </StyledTableCell>

//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>Session</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>Registered On</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>

//                       <h5 style={{ color: 'black' }}>
//                         <b>Registration ID</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", minWidth: '200px' }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b> Name</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", minWidth: '200px' }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>Email</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0" }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>DOB</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>Father's Name</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>Mother's Name</b>
//                       </h5>
//                     </StyledTableCell>
//                     <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0" }}>
//                       <h5 style={{ color: 'black' }}>
//                         <b>Contact</b>
//                       </h5>
//                     </StyledTableCell>




//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {filterData.map((student, index) => (
//                     <StyledTableRow key={index}>
//                       <StyledTableCell align="left">{index + 1}</StyledTableCell>
//                       <StyledTableCell align="left">2023</StyledTableCell>

//                       <StyledTableCell align="center">
//                         <DatePicker
//                           selected={selectedDate || (student?.createdAt ? new Date(student.createdAt) : null)}
//                           onChange={(date) => handleDateChange(date)}
//                           dateFormat="dd/MM/yyyy"
//                           className="text-center"
//                         />
//                       </StyledTableCell>
//                       <StyledTableCell align="left">{student.randomId}</StyledTableCell>
//                       <StyledTableCell align="left">{student.name}</StyledTableCell>
//                       <StyledTableCell align="left">{student.email}</StyledTableCell>
//                       <StyledTableCell align="left">
//                         <DatePicker
//                           selected={selectedDate || new Date(student.dob)}
//                           onChange={(date) => handleDateChange(date)}
//                           dateFormat="dd/MM/yyyy"
//                           className="text-center"
//                         />
//                       </StyledTableCell>
//                       <StyledTableCell align="left">{student.fathersname}</StyledTableCell>
//                       <StyledTableCell align="left">{student.mothersname}</StyledTableCell>

//                       <StyledTableCell align="left">{student.mobile}</StyledTableCell>

//                       <StyledTableCell align="left">{student.domicile}</StyledTableCell>



//                       <StyledTableCell align="center">
//                         {student && student.Documents?.marksheet12th && (
//                           <a
//                             href={student.Documents.marksheet12th}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             View Marksheet
//                           </a>
//                         )}
//                       </StyledTableCell>


//                     </StyledTableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             <TablePagination
//               rowsPerPageOptions={[25, 50, 100]}
//               component="div"
//               count={approvedStudents.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </Paper>
//         </Container>
//         </Box>
//       </ThemeProvider>
//     </>
//   )
// }

// export default TotalSession


import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

import { StyledTableCell, StyledTableRow } from "../AdminComponent/Style";
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import Sidebar from "./HodDashboard";
import DatePicker from "react-datepicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import swal from "sweetalert";
import { Box } from "@mui/material";

const theme = createTheme();

function TotalSession() {
  const [approvedStudents, setApprovedStudents] = useState([]);
  const [collegeAssignments, setCollegeAssignments] = useState({});
  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const [assignedCollege, setAssignedCollege] = useState();
  const hodId = userData?.user;
  const branch1 = userData.Branch;
  const [searchQuery, setSearchQuery] = useState("");
  const [filterData, setFilteredData] = useState([]);

  const collegeOptions = {
    HOMEOPATHY: ["School of Homeopathy"],
    AYURVEDIC: ["School of Ayurveda and Siddha Studies"],
  };
  const handleCollegeChange = (studentId, collegeName) => {
    setCollegeAssignments((prevAssignments) => {
      // console.log(` yhi clg milega dekho ${studentId}: ${collegeName}`);
      setAssignedCollege(collegeName);
      return {
        ...prevAssignments,
        [studentId]: collegeName,
      };
    });
  };


  const fetchApprovedStudents = async () => {
    try {
      const response = await axios.get(
        `https://sssutms.ac.in/apitest/hod/students/branchtotallist?Branch=${branch1}`
      );

      setApprovedStudents(response.data.students);
      setFilteredData(response.data.students)
      const initialAssignments = {};
      response.data.students.forEach((student) => {
        initialAssignments[student._id] = null;
      });
      setCollegeAssignments(initialAssignments);

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    filterdata()
  }, [searchQuery, approvedStudents])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  useEffect(() => {
    fetchApprovedStudents();
  }, []);
  const filterdata = () => {
    const filtered = approvedStudents.filter(student =>
      student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredData(filtered)
  }

  ////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <Container
          className="shadow p-3  bg-body rounded"
          style={{
            marginTop: "80px",
            width: "90%",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ p: 2 }}>
            <SearchIcon sx={{ mr: 1 }} />
            <input
              type="text"
              placeholder="Search  by ID or Name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Box>
          <h4 style={{ fontFamily: 'fantasy' }}>TOTAL STUDENT IN {branch1} </h4>
          <br></br>
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: "440px" }} component={Paper}>
              <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 700 }} >
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >

                      <h5 style={{ color: 'white', }}>
                        <b>S.No.</b>
                      </h5>
                    </TableCell>

                    <TableCell align="left" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >
                      <h5 style={{ color: 'white' }}>
                        <b>Session</b>
                      </h5>
                    </TableCell>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >
                      <h5 style={{ color: 'white' }}>
                        <b>Registered On</b>
                      </h5>
                    </TableCell>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', minWidth: '200px', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}>
                      <h5 style={{ color: 'white' }}>
                        <b> Name</b>
                      </h5>
                    </TableCell>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', minWidth: '200px', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}>
                      <h5 style={{ color: 'white' }}>
                        <b>Email</b>
                      </h5>
                    </TableCell>
                    <TableCell align="center" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >
                      <h5 style={{ color: 'white' }}>
                        <b>DOB</b>
                      </h5>
                    </TableCell>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >
                      <h5 style={{ color: 'white' }}>
                        <b>Father's Name</b>
                      </h5>
                    </TableCell>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >
                      <h5 style={{ color: 'white' }}>
                        <b>Mother's Name</b>
                      </h5>
                    </TableCell>
                    <TableCell align="left" style={{
                      backgroundColor: '#023047', color: 'white', position: "sticky",
                      top: 0,
                      zIndex: 1,
                    }}
                    >
                      <h5 style={{ color: 'white' }}>
                        <b>Contact</b>
                      </h5>
                    </TableCell>




                  </TableRow>
                </TableHead>
                <TableBody>
                  {approvedStudents.map((student, index) => (
                    <TableRow key={index}>

                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell align="left" >2023</TableCell>
                      <TableCell align="center" >
                        <DatePicker
                          selected={selectedDate || (student?.createdAt ? new Date(student.createdAt) : null)}
                          onChange={(date) => handleDateChange(date)}
                          dateFormat="dd/MM/yyyy"
                          className="text-center"
                        />
                      </TableCell>
                      <TableCell align="left" style={{ color: 'brown', fontSize: '16px', fontWeight: 'bold' }}>{student.name}</TableCell>
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



                      <TableCell align="center">
                        {student && student.Documents?.marksheet12th && (
                          <a
                            href={student.Documents.marksheet12th}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Marksheet
                          </a>
                        )}
                      </TableCell>


                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              rowsPerPageOptions={[25, 50, 100]}
              component="div"
              count={approvedStudents.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default TotalSession