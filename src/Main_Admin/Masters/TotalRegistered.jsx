import React, { useEffect, useState } from "react";
import { Modal, label, Button } from "react-bootstrap";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import edit1 from "../images/edit1.png";
import DatePicker from "react-datepicker";
import {
  TableCell,
  Box
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import SearchIcon from '@mui/icons-material/Search';

import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import swal from "sweetalert";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});


function TotalRegistered() {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [studentdata, setStudentData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState([]);

  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API based on selected parameters
        const response = await fetch(
          `https://sssutms.ac.in/apitest/admin/students/totallist`
        );
        const data = await response.json();
        setStudentData(data.students);
        setFilteredData(data.students);
        // console.log(data, "data from api");
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
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
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Box sx={{ width: "90%", height: "50%", marginLeft: "100px", marginTop: "80px" }}>
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
              <TableContainer sx={{ maxHeight: "430px" }}>
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
                          Registered Date
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
                          Mother's Name
                        </h1>
                      </TableCell>
                      <TableCell
                        align="center"
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
                          Course Type
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
                            width: "150px"
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
                            width: "150px"
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

                        <TableCell align="center">
                          {student?.randomId}
                        </TableCell>
                        <TableCell align="center">
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
                          {student?.courseType}
                        </TableCell>
                        <TableCell align="center">
                          {student?.courseName}
                        </TableCell>
                        <TableCell align="center">
                          {student?.courseBranch}
                        </TableCell>
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

          <br></br>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default TotalRegistered