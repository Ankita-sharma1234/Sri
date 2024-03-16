
import React from 'react'
import AdminDashboard from './Admin_Dashboard/AdminDashboard'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import {  Container, Button, Form, Row, Col} from 'react-bootstrap';

const theme = createTheme({
  typography: {
    fontWeightBold: 700,
    },
  });
function AdmissionSessionMaster() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminDashboard />
        <Container className="shadow p-3 bg-body rounded" style={{ marginTop: "10%",marginLeft:"11%" }}>
          <h3>Admission Session Update</h3>
         <Form style={{color:"red",marginTop: "3%"}}>
         <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Random ID</Form.Label>
              <Form.Control
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fathersname">
              <Form.Label>Session</Form.Label>
              <Form.Control
                type="text"
                name="fathersname"
                // value={formData.fathersname}
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="fathersname">
              <Form.Label>Session</Form.Label>
              <Form.Control
                type="text"
                name="mothersname"
                // value={formData.mothersname}
                // onChange={handleChange}
              />
            </Form.Group>
          </Row>
         </Form>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default AdmissionSessionMaster


