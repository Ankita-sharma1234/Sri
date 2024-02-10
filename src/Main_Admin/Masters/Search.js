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
import SearchIcon from "@mui/icons-material/Search";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const Search = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);
  const [dataNotFound, setDataNotFound] = useState(false);
  const [enrollmentGenerated, setEnrollmentGenerated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { session, courseType, course, branch, college } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://sssutms.ac.in/apitest/v2/newenrollmentrequest';
        const requestData = {
          session,
          courseType,
          course,
          branch,
          college
        };

        const response = await axios.post(url, requestData);
        const data = response.data;

        if (!data || data.length === 0) {
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

    fetchData();
  }, [session, courseType, course, branch, college]);

  useEffect(() => {
    filterData();
  }, [searchQuery, studentdata]);

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
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = async (studentId) => {
    try {
      const response = await axios.post(`https://sssutms.ac.in/apitest/generate-enrollment2/`, {
        branchname: studentdata[0]?.courseBranch,
        studentId,
        coursename: studentdata[0]?.courseName,
        collegename: studentdata[0]?.assignedCollege,
      });

      swal({
        title: "Success",
        text: "Enrollment Generated Successfully!",
        icon: "success",
        buttons: "OK",
      });

      setEnrollmentGenerated(true);
      setStudentData(prevStudentData => prevStudentData.filter(student => student._id !== studentId));
    } catch (error) {
      console.error('Error generating enrollment:', error);
    }
  };

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
        
              <Paper sx={{ width: "100%", overflow: "auto" }}>
            
                <SearchIcon sx={{ mr: 1 }} />
                <input
                  type="text"
                  placeholder="Search  by ID or Name"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />

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
                            Enrollment Status
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
                            Registration No
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
                              fontSize: "20px",
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
                            Edit
                          </h1>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {filteredData && filteredData.map((student, index) => (
                        <TableRow key={index}>

                          <TableCell align="center">{index + 1}</TableCell>
                          {/* <TableCell align="center">2023</TableCell>
                        <TableCell align="center">{student.name}</TableCell>
                        <TableCell align="center">{student.email}</TableCell>
                        {/* Replace the line below with the DatePicker component */}


                          <TableCell align="center">
                            {/* <Button variant="danger">Not generated</Button> */}
                            <img src={closebutton} alt="" height="40px" width="40px" />
                          </TableCell>
                          <TableCell align="center">
                            {student.randomId}
                          </TableCell>
                          <TableCell align="center">

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
                          <TableCell align="center"> <Button
                            variant="success"
                            onClick={() => handleClick()}
                            disabled={enrollmentGenerated}
                          >
                            Generate Enrollment
                          </Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                rowsPerPageOptions={[2, 25, 100]}
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
          </CardContent>
          <br></br>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default Search;