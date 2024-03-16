import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import Sidebar from "./HodDashboard";
import { useNavigate } from "react-router-dom";


const dataOld = [
  ["Name", "Popularity"],
  ["Cesar", 250],
  ["Rachel", 4200],
  ["Patrick", 2900],
  ["Eric", 8200],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Cesar", 370],
  ["Rachel", 600],
  ["Patrick", 700],
  ["Eric", 1500],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export const data2 = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options2 = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
export const data3 = [
  ["Session", "Registered", "Enrolled", "Profit"],
  ["2023", 300, 400, 200],
  ["2024", 1170, 460, 250],
];
export const options3 = {
  chart: {
    title: "Student Admission In",
  },
};
function Dashboard() {
  const navigate = useNavigate();
  const [todayRegisteredCount, setTodayRegisteredCount] = useState(0);
  const [todayEnrolledCount, setTodayEnrolledCount] = useState(0)
  const [todayBranchCount, setTotalBranchCount] = useState(0)
  const [totalFeePaid, setTotalFeePaid] = useState(0)


  const userData = JSON.parse(sessionStorage.getItem("AnkitHOD"));
  const branch1 = userData?.Branch;
  useEffect(() => {
    fetch(
      `https://sssutms.ac.in/apitest/hod/students/today/count?branch=${branch1}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTodayRegisteredCount(data.count);
        console.log(setTodayRegisteredCount,"count")
        setTodayEnrolledCount(data.TotalEnrolled)
        setTotalBranchCount(data.Totalcount)
        setTotalFeePaid(data.paidStudentCount);
        // console.log(data.paidStudentCount,"paidpaidStudentCount")
      })
      .catch((error) => {
        console.error("Error fetching today's registered count:", error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://sssutms.ac.in/apitest/hod/students/today/count`
    )
      .then((response) => response.json())
      .then((data) => {
        setTotalFeePaid(data.paidStudentCount);
      })
      .catch((error) => {
        console.error("Error fetching today's registered count:", error);
      });
  }, []);
  function TotalRegistered() {
    navigate("/total/student/Registered")
  }
  function TotalEnrolled() {
    navigate("/totalenrolled")
  }
  function TotalBranchStudent() {
    navigate("/total/student/branch")
  }
  function TotalStudentPay() {
    navigate("/total/student/feepaid")
  }
  // console.log(totalFeePay, "total paid state")

  return (
    <>
      <Sidebar />
      <style>
        {`
       .card-purple-blue {
   background: linear-gradient(45deg, #6d80fe 0%, #23d2fd 100%);
  // background:  #240046;
  box-shadow: 0 5px 20px rgba(35, 210, 253, 0.3); }
  
  .card-salmon-pink {
  background: linear-gradient(45deg, #ff998b 0%, #ff6d88 100%);
  // background:  #240046;
  box-shadow: 0 5px 20px rgba(255, 153, 139, 0.3); }
  
  .card-blue-green {
  background: linear-gradient(45deg, #09afe8 0%, #29f499 100%);
  // background:  #240046;
  box-shadow: 0 5px 20px rgba(41, 244, 153, 0.3); }
  
  .card-purple-pink {
  background: linear-gradient(45deg, #707cff 0%, #fa81e8 100%);
  // background:  #240046;
  box-shadow: 0 5px 20px rgba(250, 129, 232, 0.3); }
  
  .card {
  height: 120px;
  border: 60px;


  width: 240px;
  border-radius: 15px; }
  .card-body {
    padding: 15px 20px; 
  }
  
       `}
      </style>
      {/* <div className='shadow p-3 bg-body rounded' style={{ width: '88%', marginLeft: '115px', marginTop: '70px' }}> */}
      <div
        className="container-fluid"
        style={{ display: "flex", marginLeft: "150px", marginTop: "100px" }}
      >
        <div className="row"></div>
        <div className="row mb-5">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-purple-blue text-white mb-3 mb-md-0">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number" onClick={TotalRegistered}>
                  <div className="h3 m-0">{todayRegisteredCount}</div>
                  <small>
                    <strong>TODAY'S REGISTERED {branch1}</strong>
                  </small>
                </div>
                <div className="card-description text-right">
                  <small></small>
                  <br />
                  <small></small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-blue-green text-white mb-3 mb-md-0">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number" onClick={TotalBranchStudent}>
                  <div className="h3 m-0">{todayBranchCount}</div>
                  <small>
                    <strong>TOTAL STUDENT IN {branch1}</strong>
                  </small>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-salmon-pink text-white mb-3 mb-md-0">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number" onClick={TotalEnrolled}>
                  <div className="h3 m-0">{todayEnrolledCount}</div>
                  <small>
                    <strong>TOTAL ENROLLED STUDENT</strong>
                  </small>
                </div>

              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="card card-purple-pink text-white mb-3 mb-md-0">
              <div className="card-body d-flex justify-content-between align-items-end">
                <div className="card-number" onClick={TotalStudentPay}>
                  <div className="h3 m-0">{totalFeePaid}</div>
                  <small>
                    <strong>Total Fee paid</strong>
                  </small>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "60px",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div
          className="row2 shadow p-3 bg-body rounded"
          style={{
            margin: "20px",
            width: "80%",
            maxWidth: "700px",
            height: "415px",
            backgroundColor: "#fff",
            marginLeft: "5px",
          }}
        >
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            diffdata={diffdata}
            style={{ marginRight: "40px" }}
          />
        </div>

        <div
          className="row2 shadow p-3 bg-body rounded"
          style={{
            margin: "20px",
            width: "100%",
            maxWidth: "500px",
            height: "415px",
            backgroundColor: "#fff",
          }}
        >
          <Chart
            chartType="PieChart"
            width="100%"
            height="100%"
            data={data2}
            options={options2}
          />
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////////// */}
      {/* <div
          className="row2 shadow p-3 bg-body rounded"
          style={{
            margin: "20px auto",
            height: "400px",
            width: "80%",
            maxWidth: "900px",
            marginLeft: "30%",
            marginTop: "60px",
          }}
        >
          <Chart
            chartType="Bar"
            width="80%"
            height="100%"
            data={data3}
            options={options3}
          />
        </div> */}
      {/* </div> */}
    </>
  );
}
export default Dashboard;
