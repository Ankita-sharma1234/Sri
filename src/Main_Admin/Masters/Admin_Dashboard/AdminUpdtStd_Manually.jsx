import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AdminDashboard from './AdminDashboard';
import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { StyledTableCell, StyledTableRow } from '../../../AdminComponent/Style';
import axios from 'axios';
import swal from 'sweetalert';

const theme = createTheme();

const AdminUpdtStd_Manually = ({ userData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);
  const [enrollmentNumber, setEnrollmentNumber] = useState('');
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = async (userId) => {
    try {
      const response = await axios.put("https://sssutms.ac.in/apitest/admin/manualenrollment-generate", {
        enrollmentNumber,
        studentId: userId
      });

      swal({
        title: "Success",
        text: "Enrollment Generated Successfully!",
        icon: "success",
        buttons: "OK",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AdminDashboard />
      <Container className="shadow p-3 bg-body rounded" style={{ width: "90%", backgroundColor: "#00cdac", marginTop: "10%", marginLeft: "5%" }}>
        <TableContainer component={Paper} sx={{ minWidth: 50 }}>
          <Table sx={{ minWidth: 50 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Name</StyledTableCell>
                <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Enrollment No.</StyledTableCell>
                <StyledTableCell style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Registration No</StyledTableCell>
                <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Mobile No.</StyledTableCell>
                <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Email</StyledTableCell>
                <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Enrolled Student</StyledTableCell>
                <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Enrollment Generation Status</StyledTableCell>
                <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user, index) => (
                <StyledTableRow key={index}>
                  {user ? (
                    <>
                      <StyledTableCell component="th" scope="row">
                        {user.name}
                      </StyledTableCell>
                      <Box sx={{ p: 2 }}>
                        <Form.Control
                          type="text"
                          name='enrollmentNumber'
                          value={enrollmentNumber} // Setting input value from state
                          onChange={(e) => setEnrollmentNumber(e.target.value)}
                        />
                      </Box>
                      <StyledTableCell align="right">{user.randomId}</StyledTableCell>
                      <StyledTableCell align="right">{user.mobile}</StyledTableCell>
                      <StyledTableCell align="right">{user.email}</StyledTableCell>
                      <StyledTableCell align="center" style={{ color: user?.isEnrollment ? "green" : "red", font: "bold" }}>
                        {user?.isEnrollment ? "Yes" : "No"}
                      </StyledTableCell>
                      <StyledTableCell align="center" style={{ color: user?.IsEnrollGenerated ? "green" : "red", font: "bold" }}>
                        {user?.IsEnrollGenerated ? "Yes" : "No"}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Button variant="contained" color="success" onClick={() => handleClick(user._id)}>Generate</Button>
                      </StyledTableCell>
                    </>
                  ) : (
                    <p>No user data available</p>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={userData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
    </ThemeProvider>
  );
}

export default AdminUpdtStd_Manually;