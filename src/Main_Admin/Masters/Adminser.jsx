import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TableCell,
  Box
} from "@mui/material";
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
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from "react-datepicker";
import * as XLSX from 'xlsx';
import Button from "@mui/material/Button"


const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
})
const Adminser = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata1, setStudentData] = useState({ students: [] });
  const [dataNotFound, setDataNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const moye = studentdata1.students.map(student => ({
    EnrollmentNumber: student.enrollmentNumber,
    Name: student.name,
    Fathers_Name: student.fathersname,
    Email: student.email,
    Mobile: student.mobile,


    Registered: student?.isRegistered ? "YES" : "NO",
    Enrolled: student?.isEnrolled ? "Yes" : "No",

    FEE_PAID: student?.isPaid ? "Yes" : "No",
    Student_address: student.address ?
      (Object.values(student.address ||
        {}).some(value => value === "") ?
        'Pending' : 'Update')
      : 'Pending',

    Academic_details: student.academicDetails &&

      Object.keys(student.academicDetails).filter(key => [
        'tenthBoard', 'tenthMarksObtain',
        'tenthMaxMarks', 'tenthPassingYear',
        'tenthPercentage', 'tenthRollNo',
        'tenthSchool', 'twelfthBoard',
        'twelfthMarksObtain',
        'twelfthMaxMarks', 'twelfthPassingYear',
        'twelfthPercentage',
        'twelfthRollNo', 'twelfthSchool'
      ].includes(key)).every(key =>
        student.academicDetails[key] !== "") ? 'Update' : 'Pending',

    Documents: student.Documents ? (
      ['incomeCertificate',
        'otherCertificate', 'postgraduateCertificate',
        'undergraduateCertificate', "migrationCertificate"]
        .every(key =>
          !student.Documents[key] || student.Documents[key].trim() === "")
        ? 'Pending' : 'Updated'
    ) : 'Pending',







  }))

  const { admissionSession, courseType, courseName, courseBranch } =
    useParams();
  console.log(admissionSession, courseType, courseName, courseBranch,
    "data from query")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://sssutms.ac.in/apitest/admin/statusofstudent';
        const requestData = {
          admissionSession,
          courseType,
          courseName,
          courseBranch,
        };
        const response = await axios.post(url, requestData);

        const data = response.data;
        console.log(data, "data")
        if (!data.students || data.students.length === 0) {
          setDataNotFound(true);
        } else {
          setDataNotFound(false);
          setStudentData(data);
          setFilteredData(data.students);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setDataNotFound(true);
      }
    };
    fetchData();
  }, [admissionSession, courseType, courseName, courseBranch]);


  const handleChangePage = (newPage) => {
    setPage(newPage);
  };


  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);

    const filteredResults = studentdata1.students.filter(student => {
      return student.randomId.toLowerCase().includes(event.target.value.toLowerCase())
        ||
        student.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        student.courseBranch.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredData(filteredResults);
  };
  ////////////////export to excel///////////////////////////
  const ExportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(moye);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "enrolled")
    XLSX.writeFile(workbook, "STUDENTS_STATUS.xlsx");

  }

  console.log(studentdata1, "helllo world")
  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <>
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "70px" }}>
          <CardContent>
            <Paper sx={{ width: "100%", overflow: "auto" }}>
              <Button style={{ float: "right", marginRight: "10px", marginBottom: "10px" }} variant="outlined" onClick={ExportToExcel}>Export to Excel</Button>


              <Box style={{ float: "left", marginBottom: "10px" }}>

                <SearchIcon sx={{ mr: 1 }} />
                <input
                  type="text"

                  placeholder="Search by ID,Name or Branch"
                  onChange={handleSearchInputChange}
                  value={searchQuery}
                />
              </Box>
              {dataNotFound ? (
                <div>
                  <h2>Oops! No Student Available in this Course!!!!</h2>
                </div>
              ) : (

                <Paper sx={{ width: "100%" }}>
                  <TableContainer sx={{ maxHeight: "420px" }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>S.No.</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>Session</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Registration No.</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Student Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Professional</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>Email</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white',
                            }}
                          >
                            <h5>
                              <b>Date of Birth</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '150px'
                            }}>

                            <h5>
                              <b>Father's Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '150px'
                            }}>

                            <h5>
                              <b>Mother's Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>Contact</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>Nationality</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Address</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>Qualification</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '150px'
                            }}>

                            <h5>
                              <b>Qualification %</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92",
                              color: 'white'
                            }}
                          >
                            <h5>
                              <b>Course Type</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '250px' }}>

                            <h5>
                              <b>Course Name</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '250px'
                            }}>

                            <h5>
                              <b>Course Branch</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Academic Details</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Enrollment Documents</b>
                            </h5>
                          </TableCell>
                          {/* <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '200px'
                            }}>

                            <h5>
                              <b>Registration Documents</b>
                            </h5>
                          </TableCell> */}
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '100px'
                            }}>

                            <h5>
                              <b>Enrolled Student</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '100px'
                            }}>

                            <h5>
                              <b>Register Student</b>
                            </h5>
                          </TableCell>
                          <TableCell
                            align="left"
                            style={{
                              backgroundColor: "#004e92", color:
                                'white', minWidth: '100px'
                            }}>

                            <h5>
                              <b>Fees Status</b>
                            </h5>
                          </TableCell>

                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filteredData.map((student, index) => (
                          <TableRow key={index}>
                            <TableCell align="center">{index + 1}</TableCell>
                            <TableCell align="center">2023</TableCell>
                            <TableCell
                              align="center">{student.randomId}</TableCell>
                            <TableCell align="center">{student.name}</TableCell>
                            <TableCell align="center" style={{
                              backgroundColor: "red", color: "whitesmoke", fontWeight: "bold"
                            }}>
                              {(!student.professional ||
                                !student.professional.SamagraId ||
                                !student.professional.ScholarshipRequired) ? 'Update' :

                                (Object.values(student.professional).some(value => value === "") ?
                                  'Pending' : 'Update')}
                            </TableCell>
                            <TableCell
                              align="center">{student.email}</TableCell>
                            <TableCell align="center">
                              <DatePicker
                                selected={selectedDate || new Date(student.dob)}
                                onChange={(date) => handleDateChange(date)}
                                dateFormat="dd/MM/yyyy"
                                className="text-center"
                              />
                            </TableCell>
                            <TableCell
                              align="center">{student.fathersname}</TableCell>
                            <TableCell
                              align="center">{student.mothersname}</TableCell>
                            <TableCell
                              align="center">{student.mobile}</TableCell>

                            <TableCell
                              align="center">{student.domicile}</TableCell>
                            <TableCell align="center"
                              style={{
                                backgroundColor: "green",
                                color: "whitesmoke", fontWeight: "bold"
                              }}>
                              {student.address ?
                                (Object.values(student.address ||
                                  {}).some(value => value === "") ?
                                  'Pending' : 'Update')
                                : 'Pending'
                              }
                            </TableCell>

                            <TableCell
                              align="center">{student.qualification}</TableCell>
                            <TableCell

                              align="center">{student.qualificationPercentage}</TableCell>
                            <TableCell
                              align="center">{student.courseType}</TableCell>
                            <TableCell
                              align="center">{student.courseName}</TableCell>
                            <TableCell
                              align="center">{student.courseBranch}</TableCell>

                            <TableCell align="center" style={{
                              backgroundColor: "cadetblue",
                              color: "whitesmoke",
                              fontWeight: "bold"
                            }}>
                              {student.academicDetails &&

                                Object.keys(student.academicDetails).filter(key => [
                                  'tenthBoard', 'tenthMarksObtain',
                                  'tenthMaxMarks', 'tenthPassingYear',
                                  'tenthPercentage', 'tenthRollNo',
                                  'tenthSchool', 'twelfthBoard',
                                  'twelfthMarksObtain',
                                  'twelfthMaxMarks', 'twelfthPassingYear',
                                  'twelfthPercentage',
                                  'twelfthRollNo', 'twelfthSchool'
                                ].includes(key)).every(key =>
                                  student.academicDetails[key] !== "") ? 'Update' : 'Pending'}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{
                                backgroundColor: "grey", color:
                                  "whitesmoke", fontWeight: "bold"
                              }}
                            >
                              {/* {student.Documents ? (
                                ['incomeCertificate',
                                  'otherCertificate', 'postgraduateCertificate',
                                  'undergraduateCertificate', "migrationCertificate"]
                                  .every(key =>
                                    !student.Documents[key] || student.Documents[key].trim() === "")
                                  ? 'Pending' : 'Updated'
                              ) : 'dekho'} */}
                              {student.Documents ? (
                                ['incomeCertificate',
                                  'otherCertificate', 'postgraduateCertificate',
                                  'undergraduateCertificate', "migrationCertificate"]
                                  .every(key =>
                                    !student.Documents[key] || student.Documents[key].trim() === "")
                                  ? 'Pending' : 'Updated'
                              ) : 'Pending'}
                            </TableCell>

                            <TableCell align="center">
                              {student?.isEnrolled ? "Yes" : "No"}
                            </TableCell>
                            <TableCell align="center">
                              {student?.isRegistered ? "True" : "False"}
                            </TableCell>
                            <TableCell align="center">
                              {student?.isPaid ? "Paid" : "Not Paid"}
                            </TableCell>

                          </TableRow>
                        ))}
                      </TableBody>








                    </Table>
                  </TableContainer>

                  <TablePagination
                    rowsPerPageOptions={[25, 50, 100]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </Paper>
              )
              }
            </Paper>
          </CardContent>
          <br></br>
        </Box>
      </>
    </ThemeProvider>
  )
}
export default Adminser;
