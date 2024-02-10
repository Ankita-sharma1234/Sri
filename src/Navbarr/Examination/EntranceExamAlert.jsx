import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';


function EntranceExamAlert() {
  return (
    <>
      <style>{`
        h2 {
          text-align: center;
          background-color:#14adad;
          // Width : 98%;
          // margin-left:10px;
          border-radius: 25px;
          margin-top: 50px;
        }

        aside {
          width: 25%;
          float: left;
          height: 300px;
          margin: 10px 0px 10px 0px;
        }

        nav ul {
          list-style-type: none;
          font-size: 2vw;
        }

        // .content {
        //   margin: 10px 0px 10px 0px;
        //   width: 75%;
        //   float: left;
        // }

        .content p {
          padding: 5px 15px;
          
        }

        // footer {
        //   height: 75px;
        //   width: 100%;
        //   clear: both;
        //   background: orange;
        //   text-align: center;
        //   padding-top: 5px;
        // }

        @media screen and (max-width: 768px) {
          aside {
            width: 100%;
            height: auto;
            margin: 10px 0px 0px 0px;
            text-align: center;
          }

          nav li {
            display: block;
            font-size: 4vw;
            margin-bottom: 5px;
          }

          .content {
            margin: 10px 0px 10px 0px;
            width: 100%;
          }
        }
      `}</style>
     
      <Navbarcontanct />
      <h2 style={{marginTop:"30px",textDecorationLine:"underline"}}><b>Entrance Exam Alert</b></h2>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"40px"}}>
         {" "}
       
        <h3> <b> * Ph. D Entrance Examination - 2023</b></h3> 
        <h3><b>  * AMENDED ADMISSION NOTIFICATION-O 1</b> </h3>  
        <h3 style={{color:" #007aff"}}> * Notification for Ph.D. Entrance Examination - 2022 </h3>
        <h3 style={{color:" #007aff"}}>*  Notification for online entrance examination 2021-22  </h3>
        <h3 style={{color:" #007aff"}}> * Ph.D. Entrance Examination 2021 </h3>
        <h3 style={{color:" #007aff"}}>* Ph.D. Entrance Exam Form </h3>
        <h3 style={{color:" #007aff"}} > * Download Syllabus for Ph.D. Entrance Exam </h3>
     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default EntranceExamAlert;



