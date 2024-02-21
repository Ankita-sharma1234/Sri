import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import AdminDashboard from "./AdminDashboard.jsx";
//mport logo from "../../AdminComponent/12.png"
import {
    TableCell, Table, TableBody, Box, TableHead, TableRow, Paper,
    TablePagination, ThemeProvider, createTheme
} from "@mui/material";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Button } from "react-bootstrap";
import logo from "../../../AdminComponent/12.png"
const theme = createTheme();

const Paymen = ({ userData }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(2);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    const generatePDF = () => {
        const pdf = new jsPDF();

        pdf.setFillColor(255, 255, 255); // White color
        pdf.rect(0, 0, 210, 297, 'F'); // A4 size

        // Add title
        pdf.addImage(logo, "JPEG", 3, 7, 30, 30);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.setTextColor(0, 0, 0); // Black color
        pdf.text("Sri Satya Sai University of Technology and Medical Science Sehore", 115, 10, { align: "center" });
        pdf.text("[Established Under Govt. of (M.P.) & Registered UGC 2(F), 1956]",  115, 18, { align: "center" });
        pdf.text("Sh-18 Bhopal-Indore Road, Opposite Oilfed Plant, Pachama,",  115, 26, { align: "center" });
        pdf.text("ACADEMIC YEAR: 2023-2024",  120, 34, { align: "center" });

        pdf.setDrawColor(255, 0, 0); // Red color
        pdf.line(10, 45, 200, 45);
        pdf.setFontSize(14);
        pdf.setTextColor(255, 0, 0); // Red color
        pdf.text("Payment Details", 105, 54, { align: "center" });

        // Add payment details
        pdf.setTextColor(0, 0, 0); // Black color
        pdf.setFontSize(12);
        pdf.text(`Student name   :   ${userData[0].name}`, 10, 70);
        pdf.text(`Father's Name   :   ${userData[0].fathersname}`, 60, 80);
        pdf.text(`Payment Mode  :  ${userData[0].paymentMode}`, 60, 90);
        pdf.text(`Transaction Amount  :  ${userData[0].txnAmount}`, 60, 100);
        pdf.text(`Transaction Date  :  ${userData[0].txnDate}`, 60, 110);
        pdf.text(`Bank Transaction ID  :  ${userData[0].bankTxnId}`, 60, 120);

        pdf.save("payment_details.pdf");
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <AdminDashboard />
                <>
                    <Box sx={{
                        width: "90%", marginLeft: "100px",
                        marginTop: "100px"
                    }}>
                        <TableContainer sx={{ maxHeight: 500 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>S.No.</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>orderId</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>txnId</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>bankTxnId</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>paymentMode</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>txnDate</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>txnAmount</h1>
                                        </TableCell>
                                        <TableCell align="center" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>responseMessage</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>status</h1>
                                        </TableCell>

                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>name</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>randomId</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>email</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>Mobile</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>fathersname</h1>
                                        </TableCell>
                                        <TableCell align="left" style={{
                                            backgroundColor: "#004e92"
                                        }}>
                                            <h1 style={{
                                                fontSize: "20px",
                                                fontWeight: "bolder", color: "white", fontFamily: "-moz-initial"
                                            }}>mothersname</h1>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {userData.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="left">{index
                                                + 1}</TableCell>
                                            <TableCell
                                                align="left">{row.orderId}</TableCell>
                                            <TableCell
                                                align="left">{row.txnId}</TableCell>
                                            <TableCell
                                                align="left">{row.bankTxnId}</TableCell>
                                            <TableCell
                                                align="left">{row.paymentMode}</TableCell>
                                            <TableCell
                                                align="left">{row.txnDate}</TableCell>
                                            <TableCell
                                                align="left">{row.txnAmount}</TableCell>
                                            <TableCell
                                                align="left">{row.responseMessage}</TableCell>
                                            <TableCell
                                                align="left">{row.status}</TableCell>

                                            <TableCell
                                                align="left">{row.name}</TableCell>
                                            <TableCell
                                                align="left">{row.randomId}</TableCell>
                                            <TableCell
                                                align="left">{row.email}</TableCell>
                                            <TableCell
                                                align="left">{row.mobile}</TableCell>
                                            <TableCell
                                                align="left">{row.fathersname}</TableCell>
                                            <TableCell
                                                align="left">{row.mothersname}</TableCell>
                                        </TableRow>

                                    ))}
                                </TableBody>
                             
                                <Button
                                              onClick={generatePDF}
                                                style={{
                                                   
                                                    backgroundColor: "#004e92",
                                                    width: "110px",
                                                    height: "40px",
                                                    padding: "5px"
                                                }}
                                            >
                                                Download
                                            </Button>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[2, 5, 10, 25]}
                            component="div"
                            count={userData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Box>
                </>
            </ThemeProvider>

        </>
    );
};

export default Paymen;