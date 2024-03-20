import React, { useEffect, useState } from "react";
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
import { CircularProgress } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CardContent from "@mui/material/CardContent";
import * as XLSX from "xlsx" ;

import AdminDashboard from "./Admin_Dashboard/AdminDashboard";
import { Button } from "@mui/material";

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
  const [loading, setLoading] = useState(false)

  /////////////////////datepicker/////////////////
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

const Excel = studentdata.map(student=>({

  Random_Id: student.randomId,
  Random_Password: student.randomPassword,
  Admitted_Date: student.createdAt,
  Name: student.name,
  Fathers_Name: student.fathersname,
  Mothers_Name: student.mothersname,
  Email: student.email,
  Mobile: student.mobile,
  Course_Type: student.courseType,
  Course: student.courseName,
  Branch: student.courseBranch
}))

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const response = await fetch(
          `https://sssutms.ac.in/apitest/admin/students/totallist`
        );
        const data = await response.json();
        setStudentData(data.students);
        setFilteredData(data.students);

      } catch (error) {
        console.error("Error fetching data:", error);

      } finally {
        setLoading(false)
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

      return 0;
    });


    const startIndex = page * rowsPerPage;
    return sortedData.slice(startIndex, startIndex + rowsPerPage);
  };
  ////////////////////////Export to Excel//////////////////////////////////
  const ExportToExcel = ()=>{
   const worksheet = XLSX.utils.json_to_sheet(Excel)
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook,worksheet,"Enrolled Student")
   XLSX.writeFile(workbook,"Student_Data.xlsx")
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Box sx={{ width: "90%", height: "50%", marginLeft: "100px", marginTop: "80px" }}>
          {loading ? (<CircularProgress color="success" style={{ marginTop: "80px", marginLeft: "50%" }} />) : (
            <CardContent>
              <Paper sx={{ width: "100%", overflow: "auto" }}>
              <Button style={{float:"right",marginRight:"10px"}} variant="outlined"  onClick={ExportToExcel}>Export to Excel</Button>
                <Box sx={{ p: 2 }}>
                  <SearchIcon sx={{ mr: 1 }} />
                  <input
                    type="text"
                    placeholder="Search  by ID or Name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </Box>
                <TableContainer sx={{ maxHeight: "400px" }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="left"
                          style={{ backgroundColor: "#004e92" }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
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
                              fontSize: "18px",
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
                              fontSize: "18px",
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
                              fontSize: "18px",
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
                          style={{ backgroundColor: "#004e92", minWidth: '150px' }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
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
                          style={{ backgroundColor: "#004e92", minWidth: '150px' }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
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
                          style={{ backgroundColor: "#004e92", minWidth: '150px' }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
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
                              fontSize: "18px",
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
                              fontSize: "18px",
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
                              fontSize: "18px",
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
                          style={{ backgroundColor: "#004e92", minWidth: '250px' }}
                        >
                          <h1
                            style={{
                              fontSize: "18px",
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
                              fontSize: "18px",
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

                          <TableCell align="center" style={{ color: "red" }}>
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
                          <TableCell align="center" style={{ color: '#6a040f', fontWeight: 'bold' }}>
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
                            {student?.courseType ? `${student?.courseType}` : "Not choose"}
                          </TableCell>
                          {/* <TableCell align="center">
                            {student.courseName === 'BACHELOR OF AYURVEDIC MEDICINE AND SURGERY' ? (
                              <span style={{ color: '#01161e', fontWeight: 'bold' }}>{student.courseName}</span>
                            ) : (
                              <span style={{ color: '#6930c3', fontWeight: 'bold' }}>{student.courseName}</span>
                            )}
                          </TableCell> */}
                          <TableCell align="center" style={{
                            fontWeight: 'bold',
                            color: student?.courseName === 'BACHELOR OF AYURVEDIC MEDICINE AND SURGERY' ? '#01161e' :
                              student?.courseName === 'BACHELOR OF HOMEOPATHY MEDICINE AND SURGERY' ? '#6930c3' :
                                student?.courseName === '' ? 'red' : 'inherit'
                          }}>
                            {student?.courseName ? student?.courseName : <span style={{ color: 'red' }}>Not chosen</span>}
                          </TableCell>

                          <TableCell align="center" style={{
                            fontWeight: 'bold', color: student?.courseBranch === 'AYURVEDIC MEDICINE AND SURGERY' ? '#01161e' :
                            student?.courseBranch === 'HOMEOPATHY' ? '#6930c3' :
                            student?.courseBranch === '' ? 'red' : 'inherit'
                          }}>
                            {student?.courseBranch ? student?.courseBranch :  <span style={{ color: 'red' }}>Not chosen</span>}
                          </TableCell>

                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 25, 100, 300, 500]}
                  component="div"
                  count={filteredData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </CardContent>
          )}
          <br></br>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default TotalRegistered


