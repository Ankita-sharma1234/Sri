import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  TableCell,
  Box
} from "@mui/material";
import { Button, CircularProgress } from "@mui/material";
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
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const [studentdata, setStudentData] = useState([]);
  const [dataNotFound, setDataNotFound] = useState(false);
  const [enrollmentGenerated, setEnrollmentGenerated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading,setLoading] = useState(false)

  const { session, courseType, course, branch, college } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
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
      } finally{
        setLoading(false)
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
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = async () => {
    const  studentId = studentdata[0]?._id
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
      // Handle other columns for sorting if needed
      return 0;
    });

    // Get the sliced data based on current page and rows per page
    const startIndex = page * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  };
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
          {loading && <CircularProgress color="success" />} {/* Display spinner if loading is true */}
      {dataNotFound ? (
        <div>
          <h2>Oops! No Student Available in this Course!!!!</h2>
        </div>
      ) : (

              <Box sx={{ width: "90%", marginTop: "20px" }}>
              <CardContent>
                <Paper sx={{ width: "100%", overflow: "auto" }}>

<Box sx={{ p: 2 }}>
                <SearchIcon sx={{ mr: 1 }} />
                <input
                  type="text"
                  placeholder="Search  by ID or Name"
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
                            // /////////////for sorting name//////////////////
                            onClick={() => handleSort("name")}
                          >
                            Candidate Name
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
                      {getSortedAndSlicedData().map((student, index) => (
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
                           variant="contained" color="success"
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
                  rowsPerPageOptions={[5, 25, 100]}
                  component="div"
                  count={filteredData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
          </CardContent>
          <br />
        </Box>
      )}
    </Box>
  </ThemeProvider>
  );
};

export default Search;
