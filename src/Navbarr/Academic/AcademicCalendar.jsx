import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function  AcademicCalendar() {
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
          padding: 5px 10px;
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
      <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}> Academic Calendar</h2>

      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"35px",marginLeft:"40px"}}>
         {" "}


         <b>Academic Calendar for Session 2023-24 (Yearly & Semester System) UTD</b> <br/>
         <b>Academic Calendar for All Paramedical 2023-24 </b> <br/>
         <b>Academic Calendar for Nursing Session 2023-24 (Yearly & Semester System)</b> <br/>
         <b>Academic Calendar for the year 2023-24 (School of Law)</b> <br/>
         <b>Academic Calendar for the year 2023-24 (Semester System B.A.B.Ed/ B.Ed/B.P.Ed)</b> <br/>
         <b>Academic Calendar for the Year 2023-24  DIPLOMA ENGG./B. E./M.TECH/MCA/MBA/M. PHARMA/B. PHARMA/BHMCT(First Year)</b> <br/>
         <b>Academic Calendar for the Year 2023-24  DIPLOMA ENGG./B. E./M.TECH/MCA/MBA/M. PHARMA/B. PHARMA/BHMCT(Second Year)</b> <br/>
         <b>Academic Calendar for the Year 2023-24  DIPLOMA ENGG. (THIRD YEAR) /B. E./B. PHARMA/BHMCT(Third & Fourth Year)</b> <br/>
         <b>Academic Calendar for the year 2022-23 (School of Homoeopathy)</b> <br/>
         <b>Academic Calendar for the year 2022-23 (School of Homoeopathy)</b> <br/>
         <b>Academic Calendar B.A.M.S. First Year 2023 - 24 (18 Months ) </b> <br/><br/><br/>



       <h5> Academic Calendar for the Year 2022-2023 Bachelor of Engg. Diploma/UG/PG/MBA/MCA/BHMCT (First & Second Semester)</h5> 
       <h5> Academic Calendar for the year 2022-2023 Pharmacy UG and PG Semester system (First & Second Semester)</h5> 
       <h5> Academic Calendar for Session 2022-23 (Yearly System-I, II & III Year)</h5> 
       <h5> Academic Calendar for the year 2022-23 (Semester System All UG, PG & Diploma (Engg.)- III Semester Onward) </h5> 
       <h5>Academic Calendar for the year 2022-23 (Semester System B.A.B.Ed/ B.Ed/B.P.Ed)</h5> 
       <h5> Academic Calendar B.A.M.S. First Year 2021-22 to 2023 (18 Months )  </h5> 
       <h5> Academic Calendar <span style={{textDecorationLine:"underline"}}>for the Year 2022-23 (Post Graduate Course) </span> </h5> 
       <h4> Academic Calendar B.A.M.S. First Year 2022 - 23 (18 Months )  </h4> 
       <h4> Academic Calendar for All Paramedical 2019-20   </h4> 

</p>
        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default  AcademicCalendar;






