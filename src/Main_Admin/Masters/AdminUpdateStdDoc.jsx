
import React, { useState} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminDashboard from './Admin_Dashboard/AdminDashboard';
import { StyledTableCell, StyledTableRow } from "../../AdminComponent/Style.jsx"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";


const theme = createTheme();

const AdminUpdateStdDoc = ({ userData }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };



  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Container className="shadow p-3 bg-body rounded" style={{ width: "110%", backgroundColor: "#00cdac", marginTop: "10%", marginLeft: "10%" }}>
          <TableContainer component={Paper} sx={{ minWidth: 50 }}>
            <Table sx={{ minWidth: 50 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Name</StyledTableCell>
                  <StyledTableCell style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Registration No</StyledTableCell>
                  <StyledTableCell align="left" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Mobile No.</StyledTableCell>
                  <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Email</StyledTableCell>
                  <StyledTableCell align="center" style={{ backgroundColor: "#e6ecf0", color: "black", fontWeight: "bold" }}>Edit</StyledTableCell>
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
                        <StyledTableCell align="right">{user.randomId}</StyledTableCell>
                        <StyledTableCell align="right">{user.mobile}</StyledTableCell>
                        <StyledTableCell align="right">{user.email}</StyledTableCell>
                        <StyledTableCell align="right">
                          <Link
                            to={{
                              pathname: `/erpdashboard/student/updatedocuments/${user._id}`,
                              state: { userData }, // Pass the userData to the target component
                            }}
                          >

                            <Button variant="contained">Update...</Button></Link></StyledTableCell>
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
    </>
  );
};

export default AdminUpdateStdDoc;
