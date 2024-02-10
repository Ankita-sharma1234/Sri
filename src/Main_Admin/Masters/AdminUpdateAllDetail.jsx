import React, { useState, useEffect } from "react";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import AdminDashboard from "./Admin_Dashboard/AdminDashboard";

const AdminUpdateAllDetail = () => {
  const { id } = useParams()
  const userID = id;

  const [formData, setFormData] = useState({
    name: "",
    fathersname: "",
    mothersname: "",
    gender: "",
    nationality: "",
    dob: "",
    domicile: "",
    mobile: "",
    category: "",
    email: "",
    qualification: "",
    lastExamType: "",
    admissionSession: "",
    passingYear: "",
    QualifiedCourse: "",
    qualificationPercentage: ""
  });


  console.log(formData, "formdataaaaaaaaaaaaa")

  const [professionalData, setProfessionalData] = useState({
    Handicapped: "",
    Medium: "",
    ScholarshipRequired: "",
    FathersOccupation: "",
    MothersOccupation: "",
    FathersIncome: "",
    MothersIncome: "",
    SamagraId: "",
    AadharNumber: "",
    ParentMobile: "",
  });
  // console.log(professionalData, "professionalDataaaaaaaaaa")

  const [addressData, setAddress] = useState({
    address1: "",
    address2: "",
    country: "",
    state: "",
    district: "",
    pinCode: "",
  })
  // console.log(addressData, "addressss")
  const [academicData, setAcademic] = useState({
    tenthSchool: "",
    tenthPassingYear: "",
    tenthRollNo: "",
    tenthBoard: "",
    tenthMarksObtain: "",
    tenthMaxMarks: "",
    tenthPercentage: "",
    twelfthSchool: "",
    twelfthPassingYear: "",
    twelfthRollNo: "",
    twelfthBoard: "",
    twelfthMarksObtain: "",
    twelfthMaxMarks: "",
    twelfthPercentage: "",
  })
  // console.log(academicData, "accccfdemi")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://sssutms.ac.in/apitest/admin/particularstudent?userID=${userID}`
        );
        const data = await response.json();
        const studentData = data.Studentdata[0];

        const ProfessionalData = studentData.professional;
        const AddressData = studentData.address;
        const Academic = studentData.academicDetails;

        setFormData({
          name: studentData.name,
          fathersname: studentData.fathersname,
          mothersname: studentData.mothersname,
          gender: studentData.gender,
          nationality: studentData.nationality,
          dob: studentData.dob,
          domicile: studentData.domicile,
          gender: studentData.gender,
          mobile: studentData.mobile,
          category: studentData.category,
          email: studentData.email,
          qualification: studentData.qualification,
          lastExamType: studentData.lastExamType,
          admissionSession: studentData.admissionSession,
          passingYear: studentData.passingYear,
          QualifiedCourse: studentData.QualifiedCourse,
          qualificationPercentage: studentData.qualificationPercentage,
        })
        setProfessionalData(ProfessionalData);
        setAddress(AddressData);
        setAcademic(Academic)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };
  const handleProfessional = (e) => {
    const { name, value } = e.target;
    setProfessionalData({ ...professionalData, [name]: value });

  };
  const handleAcademic = (e) => {
    const { name, value } = e.target;
    setAcademic({ ...academicData, [name]: value });
  }
  const handleAddress = (e) => {
    const { name, value } = e.target;
    setAddress({ ...addressData, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://sssutms.ac.in/apitest/v2/admin/updatestudent1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID,
          formData,
          professionalData,
          academicData,
          addressData,
        }),
      });

      if (response.ok) {
        const errorData = await response.json();
        swal({
          title: "Success",

          icon: "success",
          text: `Data updated successfully!: ${errorData.errors.join(", ")}`,
        });
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        swal({
          icon: "error",
          title: "Error",
          text: `Error: ${errorData.errors.join(", ")}`,
        });
        return;
      }

      const data = await response.json();
      swal({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    } catch (error) {
      swal({
        title: "Success",
        text: "Data updated successfully!",
        icon: "success",
        buttons: "OK",
      });
    }
  };

  return (
    <>
      <AdminDashboard />
      <Container className="shadow p-3 bg-body rounded" style={{ marginTop: "80px",marginLeft:"11%" }}>
        <h3 style={{ fontWeight: "inherit", backgroundImage: "linear-gradient(to right, #004e92, #990033)", borderRadius: "10px", color: 'whitesmoke',padding:"5px" }}>Update Personal Data</h3>
        <Form style={{ marginTop: "3%" }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fathersname">
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                type="text"
                name="fathersname"
                value={formData.fathersname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="fathersname">
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control
                type="text"
                name="mothersname"
                value={formData.mothersname}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fathersname">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="qualification">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="lastExamType">
              <Form.Label>Last Exam Type</Form.Label>
              <Form.Control
                type="text"
                name="lastExamType"
                value={formData.lastExamType}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="admissionSession">
              <Form.Label>Admission Session</Form.Label>
              <Form.Control
                type="text"
                name="admissionSession"
                value={formData.admissionSession}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="passingYear">
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                type="text"
                name="passingYear"
                value={formData.passingYear}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-2">
            <Form.Group as={Col} controlId="QualifiedCourse">
              <Form.Label>QualifiedCourse</Form.Label>
              <Form.Control
                type="text"
                name="QualifiedCourse"
                value={formData.QualifiedCourse}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="qualificationPercentage">
              <Form.Label>Qualifying Exam Percentage</Form.Label>
              <Form.Control
                type="text"
                name="qualificationPercentage"
                value={formData.qualificationPercentage}
                onChange={handleChange}
              />
            </Form.Group>

          </Row>
        </Form>


        <h3 style={{ fontWeight: "inherit", backgroundImage: "linear-gradient(to right, #004e92, #990033)", borderRadius: "10px", color: 'whitesmoke' ,padding:"5px"}}>Update Professional Data</h3>
        <Form style={{ marginTop: "3%" }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Handicapped">
              <Form.Label>Handicapped</Form.Label>
              <Form.Control
                type="text"
                name="Handicapped"
                value={professionalData?.Handicapped}
                onChange={handleProfessional}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Medium">
              <Form.Label>Medium</Form.Label>
              <Form.Control
                type="text"
                name="Medium"
                value={professionalData?.Medium}
                onChange={handleProfessional}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="nationality">
              <Form.Label>Nationality</Form.Label>
              <Form.Control
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="domicile">
              <Form.Label>Domicile</Form.Label>
              <Form.Control
                type="text"
                name="domicile"
                value={formData.domicile}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="ScholarshipRequired">
              <Form.Label>Scholarship</Form.Label>
              <Form.Control
                type="text"
                name="ScholarshipRequired"
                value={professionalData?.ScholarshipRequired}
                onChange={handleProfessional}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="FathersOccupation">
              <Form.Label>Father's Occupation</Form.Label>
              <Form.Control
                type="text"
                name="FathersOccupation"
                value={professionalData?.FathersOccupation}
                onChange={handleProfessional}
              />
            </Form.Group>

          </Row>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="MothersOccupation">
              <Form.Label>Mother's Occupation</Form.Label>
              <Form.Control
                type="text"
                name="MothersOccupation"
                value={professionalData?.MothersOccupation}
                onChange={handleProfessional}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="FathersIncome">
              <Form.Label>Father's Income</Form.Label>
              <Form.Control
                type="text"
                name="FathersIncome"
                value={professionalData?.FathersIncome}
                onChange={handleProfessional}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="MothersIncome">
              <Form.Label>Mother's Income</Form.Label>
              <Form.Control
                type="text"
                name="MothersIncome"
                value={professionalData?.MothersIncome}
                onChange={handleProfessional}
              />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col} controlId="SamagraId">
              <Form.Label>Samagra Id</Form.Label>
              <Form.Control
                type="text"
                name="SamagraId"
                value={professionalData?.SamagraId}
                onChange={handleProfessional}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="AadharNumber">
              <Form.Label>Aadhar No.</Form.Label>
              <Form.Control
                type="text"
                name="AadharNumber"
                value={professionalData?.AadharNumber}
                onChange={handleProfessional}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="ParentMobile">
              <Form.Label>Parent Mobile No.</Form.Label>
              <Form.Control
                type="text"
                name="ParentMobile"
                value={professionalData?.ParentMobile}
                onChange={handleProfessional}
              />
            </Form.Group>
          </Row>
        </Form>
        <h3 style={{ fontWeight: "inherit", backgroundImage: "linear-gradient(to right, #004e92, #990033)", borderRadius: "10px", color: 'whitesmoke',padding:"5px" }}>Update Address Data</h3>
        <Form style={{ marginTop: "3%" }}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="address1">
              <Form.Label>Current Address</Form.Label>
              <Form.Control
                type="text"
                name="address1"
                value={addressData?.address1}
                onChange={handleAddress}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="address2">
              <Form.Label>Permanent Address</Form.Label>
              <Form.Control
                type="text"
                name="address2"
                value={addressData?.address2}
                onChange={handleAddress}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={addressData?.country}
                onChange={handleAddress}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={addressData?.state}
                onChange={handleAddress}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="district">
              <Form.Label>District</Form.Label>
              <Form.Control
                type="text"
                name="district"
                value={addressData?.district}
                onChange={handleAddress}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="pinCode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                value={addressData?.pinCode}
                onChange={handleAddress}
              />
            </Form.Group>

          </Row>
        </Form>
        <h3 style={{ fontWeight: "inherit", backgroundImage: "linear-gradient(to right, #004e92, #990033)", borderRadius: "10px", color: 'whitesmoke',padding:"5px" ,marginBottom:"20px" }}>Update Academic Data</h3>
        <b style={{ marginTop: "3%" }} >10th Details</b>
        <Form >
          <Row className="mb-3">
            <Form.Group as={Col} controlId="tenthSchool">
              <Form.Label>School/College</Form.Label>
              <Form.Control
                type="text"
                name="tenthSchool"
                value={academicData?.tenthSchool}
                onChange={handleAcademic}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="tenthPassingYear">
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                type="text"
                name="tenthPassingYear"
                value={academicData?.tenthPassingYear}
                onChange={handleAcademic}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="tenthRollNo">
              <Form.Label>Roll No.</Form.Label>
              <Form.Control
                type="text"
                name="tenthRollNo"
                value={academicData?.tenthRollNo}
                onChange={handleAcademic}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="tenthBoard">
              <Form.Label>Board/University</Form.Label>
              <Form.Control
                type="text"
                name="tenthBoard"
                value={academicData?.tenthBoard}
                onChange={handleAcademic}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="tenthMarksObtain">
              <Form.Label>Marks Obtain</Form.Label>
              <Form.Control
                type="text"
                name="tenthMarksObtain"
                value={academicData?.tenthMarksObtain}
                onChange={handleAcademic}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="tenthMaxMarks">
              <Form.Label>Max Marks</Form.Label>
              <Form.Control
                type="text"
                name="tenthMaxMarks"
                value={academicData?.tenthMaxMarks}
                onChange={handleAcademic}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="tenthPercentage">
              <Form.Label>Percentages%</Form.Label>
              <Form.Control
                type="text"
                name="tenthPercentage"
                value={academicData?.tenthPercentage}
                onChange={handleAcademic}
              />
            </Form.Group>
          </Row>
        </Form>
        <b>12th Details</b>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="twelfthSchool">
              <Form.Label>School/College</Form.Label>
              <Form.Control
                type="text"
                name="twelfthSchool"
                value={academicData?.twelfthSchool}
                onChange={handleAcademic}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="twelfthPassingYear">
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                type="text"
                name="twelfthPassingYear"
                value={academicData?.twelfthPassingYear}
                onChange={handleAcademic}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="twelfthRollNo">
              <Form.Label>Roll No.</Form.Label>
              <Form.Control
                type="text"
                name="twelfthRollNo"
                value={academicData?.twelfthRollNo}
                onChange={handleAcademic}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="twelfthBoard">
              <Form.Label>Board/University</Form.Label>
              <Form.Control
                type="text"
                name="twelfthBoard"
                value={academicData?.twelfthBoard}
                onChange={handleAcademic}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="twelfthMarksObtain">
              <Form.Label>Marks Obtain</Form.Label>
              <Form.Control
                type="text"
                name="twelfthMarksObtain"
                value={academicData?.twelfthMarksObtain}
                onChange={handleAcademic}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="twelfthMaxMarks">
              <Form.Label>Max Marks</Form.Label>
              <Form.Control
                type="text"
                name="twelfthMaxMarks"
                value={academicData?.twelfthMaxMarks}
                onChange={handleAcademic}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="twelfthPercentage">
              <Form.Label>Percentages%</Form.Label>
              <Form.Control
                type="text"
                name="twelfthPercentage"
                value={academicData?.twelfthPercentage}
                onChange={handleAcademic}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AdminUpdateAllDetail;
