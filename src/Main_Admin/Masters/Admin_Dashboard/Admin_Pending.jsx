import React, { useEffect, useState } from "react";
import { Button, TableCell, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});

function Admin_Pending(props) {
  const { pendingStudents } = props.location.state || { pendingStudents: [] };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);
  const [studentdata, setStudentData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <Box sx={{ width: "90%", marginLeft: "100px", marginTop: "100px" }}>
        <Paper sx={{ width: "100%", overflow: "auto" }}>
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
                </TableRow>
              </TableHead>
              <TableBody>
              {pendingStudents.length > 0 ? (
                    pendingStudents.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index + 1}</TableCell>
                      <TableCell align="center">
                        <Button variant="danger">Not generated</Button>
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
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={9} align="center">
                      No data available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[2, 25, 100]}
            component="div"
            count={studentdata.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <br></br>
      </Box>
    </ThemeProvider>
  );
}

export default Admin_Pending;