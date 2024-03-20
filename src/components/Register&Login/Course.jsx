import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import axios from 'axios';
import EligibilityForm from "./ElegibilyForm";
import { Box, Stack, FormControl, FormLabel, Select } from "@chakra-ui/react";
import OnlyHeader from "../../AdminComponent/OnlyHeader";

function Course() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courseNames, setCourseNames] = useState([]);
  const [branchNames, setBranchNames] = useState([]);
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [selectedCourseName, setSelectedCourseName] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [eligible, setEligible] = useState(false);
  const [eligibilityGradPer, setEligibilityGradPer] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:7786/entrycourse2', {
        admissionSession: "2024",
        courseType: selectedCourseType,
        courseNames: [
          {
            courseName: selectedCourseName,
            branches: [{ branchName: selectedBranch }]
          }
        ]
      });
      console.log("Course saved:", response.data);


      const eligibilityResponse = await fetch("http://localhost:7786/geteligibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseType: selectedCourseType,
          courseName: selectedCourseName,
          courseBranch: selectedBranch,
        }),
      });
      const data = await eligibilityResponse.json();
      console.log("Eligibility data:", data.eligibilityGradPer);
      setEligibilityGradPer(data.eligibilityGradPer);
      setEligible(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    console.log('Fetching course types...');
    axios.post('http://localhost:7786/entrycourse2')
      .then(response => {
        console.log('Course types response:', response.data);
        if (response.data.courseType) {
          setCourseTypes([response.data.courseType]);
        } else {
          console.error('Invalid data format for course types:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching course types:', error);
      });
  }, []);

  useEffect(() => {

    if (selectedCourseType) {
      axios.post('http://localhost:7786/entrycourse2', { courseType: selectedCourseType })
        .then(response => {
          console.log('Course names response:', response.data);
          if (Array.isArray(response.data.courseNames)) {
            setCourseNames(response.data.courseNames);
          } else {
            console.error('Invalid data format for course names:', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching course names:', error);
        });
    }
  }, [selectedCourseType]);

  useEffect(() => {

    if (selectedCourseName) {
      axios.post('http://localhost:7786/entrycourse2', { courseName: selectedCourseName })
        .then(response => {
          console.log('Branch names response:', response.data);
          if (Array.isArray(response.data.courseNames[0].branches)) {
            setBranchNames(response.data.courseNames[0].branches.map(branch => branch.branchName));
          } else {
            console.error('Invalid data format for branch names:', response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching branch names:', error);
        });
    }
  }, [selectedCourseName]);

  return (
    <>
      <OnlyHeader />
      <Container
        className="container-overflow shadow p-3 mb-3 bg-body rounded"
        style={{ maxWidth: "90%", margin: "70px auto" }}
      >
        <Box>
          <Box
            backgroundColor={"#00cdac"}
            p={4}
            color="white"
            mt={8}
            borderRadius="md"
            shadow="md"
          >
            Select Course
          </Box>
          <Stack direction={["column", "row"]} spacing={4} mt={4}>

            <FormControl flex="1">
              <FormLabel>
                <b>
                  Course Type
                  <span style={{ color: "red" }}> * </span>
                </b>
              </FormLabel>
              <Select id="courseType" onChange={e => setSelectedCourseType(e.target.value)}>
                <option value="">Select</option>
                {courseTypes.map(courseType => (
                  <option key={courseType} value={courseType}>{courseType}</option>
                ))}
              </Select>
            </FormControl>


            <FormControl flex="1">
              <FormLabel>
                <b>Course</b>
                <span style={{ color: "red" }}> * </span>
              </FormLabel>
              <Select id="courseName" onChange={e => setSelectedCourseName(e.target.value)}>
                <option value="">Select</option>
                {Array.isArray(courseNames) ? (
                  courseNames.map(course => (
                    <option key={course._id} value={course.courseName}>{course.courseName}</option>
                  ))
                ) : (
                  <option value="">No options available</option>
                )}
              </Select>
            </FormControl>


            <FormControl flex="1">
              <FormLabel>
                <b>Branch</b>
                <span style={{ color: "red" }}> * </span>
              </FormLabel>
              <Select id="branch" onChange={e => setSelectedBranch(e.target.value)}>
                <option value="">Select</option>
                {branchNames.map(branchName => (
                  <option key={branchName} value={branchName}>{branchName}</option>
                ))}
              </Select>
            </FormControl>
          </Stack>

          <Button
            style={{
              margin: "20px auto",
              display: "block",
              backgroundImage: "linear-gradient(96deg, #ff5f6d , #ffc371 100%)",
              color: "white",
              width: "w-20 w-md-auto",
              border: "none",
              borderRadius: "5px",
              fontSize: "15px",
              padding: "10px 20px",
            }}
            onClick={handleSearch}
            disabled={!selectedBranch}
          >
            Search
          </Button>
        </Box>
      </Container>
      {eligible && (
        <EligibilityForm
          eligible={eligible}
          eligibilityGradPer={eligibilityGradPer}
          courseType={selectedCourseType}
          courseName={selectedCourseName}
          courseBranch={selectedBranch}
        />
      )}
    </>
  );
}

export default Course;