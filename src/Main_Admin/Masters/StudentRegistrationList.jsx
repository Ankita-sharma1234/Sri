import React, { useEffect, useState } from "react";
import { Modal, label, Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import edit1 from "../images/edit1.png";

import {
  TableCell,
  Box
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

// import gallery from "../images/gallery.png";
// import trash from "../images/trash.png";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import swal from "sweetalert";
import SearchIcon from '@mui/icons-material/Search';
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

const StudentRegistrationList = () => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const [selectedOption, setSelectedOption] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(
          `https://sssutms.ac.in/apitest/students/today/list`
        );
        const data = await response.json();
        setStudentData(data.students);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };


    fetchData();
  }, []);
  useEffect(() => {

    filterData();
  }, [searchQuery, studentdata]);


  const filterData = () => {
    const filtered = studentdata.filter(student =>
      student.randomId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
  const branchname = studentdata.courseBranch;
  const coursename = studentdata.coursename;
  const studentId = studentdata._id;
  const assignedCollege = studentdata.assignedCollege;

  // /////////////////////////////////name sort/////////////////////////
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
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <>
        <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
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
              <TableContainer sx={{ maxHeight: 500 }}>
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
                          Registered  Date
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
                          Registration ID
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
                          Registration Password
                        </h1>
                      </TableCell>


                      <TableCell
                        align="center"
                        style={{
                          backgroundColor: "#004e92", color: 'white', minWidth: '200px', position: "sticky",
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
                          Mother's Name
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
                          Email
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
                          Mobile No.
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
                            <Button variant="danger">Not generated</Button>
                          </TableCell>
                          <TableCell align="center">
                            {student?.createdAt}
                          </TableCell>

                          <TableCell align="center">
                            {student?.randomId}
                          </TableCell>
                          <TableCell align="center">
                            {student?.randomPassword}
                          </TableCell>

                          <TableCell align="center">
                            {student?.name}
                          </TableCell>
                          <TableCell align="center">
                            {student?.fathersname}
                          </TableCell>
                          <TableCell align="center">
                            {student?.mothersname}
                          </TableCell>
                          <TableCell align="center">
                            {student?.email}
                          </TableCell>
                          <TableCell align="center">
                            {student?.mobile}
                          </TableCell>
                          <TableCell align="center">
                            {student && student.courseBranch ? student.courseBranch : "Not Choose"}
                          </TableCell>

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
          </CardContent>
          {/* </Card> */}
          <br></br>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default StudentRegistrationList;