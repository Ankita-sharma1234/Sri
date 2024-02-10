import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function PhdPage() {
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
      <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}>PHD</h2>

      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"35px",marginLeft:"40px"}}>
         {" "}
       <b> Sri Satya Sai University Of Technology And Medical Sciences Sehore  offers Doctoral Programs (PHD) in 
        various research areas. At present Ph. D programme is being offered in the Faculty of Engineering & Technology, Pharmacy, Management, Education, Basic & applied Sciences, Commerce, Social Sciences, Humanities and  English etc... </b> 
    <br/><br/>

      <h3 style={{marginLeft:"40px",color:"#660066"}}>Information about Ph. D degree Awarded by The University during the Year 2018</h3>  <br/>

     <b style={{marginLeft:"40px",color:"#660066"}}>* Reserach Policy </b> <br/>
     <b style={{marginLeft:"40px",color:"#660066"}}>* Reserach Policy </b> <br/>
     <b style={{marginLeft:"40px",color:"#660066"}}> *  Admission Policy </b><br/>
     <b style={{marginLeft:"40px",color:"#660066"}}> *  Fellowship/Scholarship Policy </b> <br/>
     <b style={{marginLeft:"40px",color:"#660066"}}> *  Ethics Committee </b> <br/>
     <b style={{marginLeft:"40px",color:"#660066"}}> *  Grievance Cell </b> <br/> <br/>

       
        <h3 style={{color:"#003366",textDecorationLine:"underline"}}>Fees Structure of Ph.D (w.e.f. 03-08-2021)</h3>
         <h3 style={{color:"#003366",textDecorationLine:"underline"}}>  Download Syllabus for Ph.D.(Course Work)</h3> <br/>

         <h4 style={{marginLeft:"30px",color:"#003366"}}> FIRST SEMESTER <span style={{color:"red"}}>(w.e.f. 2021-22)</span></h4>
         <b style={{marginLeft:"30px",color:"#003366",textDecorationLine:"underline"}}>Research Methodology </b><br/>
         <b style={{marginLeft:"30px", }}>Subject Specialization- I</b> <br/><br/><br/>


         
      * <b style={{textDecorationLine:"underline"}}> Format for RDC Synopsis </b><br/>
      * <b style={{textDecorationLine:"underline"}}> Format of Confidential Progress Report </b><br/>
      * <b style={{textDecorationLine:"underline"}}> Circular: Prior to submission of Ph.D. Thesis </b><br/>
      * <b style={{textDecorationLine:"underline"}}> Guideline for Ph.D. Pre Submission Viva Voce </b><br/>
      * <b style={{textDecorationLine:"underline"}}> Proforma for Pre-submission of the Thesis </b><br/>
      * <b style={{textDecorationLine:"underline"}}> Guideline/Format for preparing Thesis /Dissertation/Summary </b><br/>
      * <b style={{textDecorationLine:"underline"}}> Guideline/Format for preparing Thesis /Dissertation/Summary (Hindi) </b><br/>
      * <b style={{textDecorationLine:"underline"}}>  Proforma for Final-submission of the Thesis</b><br/>
     *  <b style={{color:"#003366",textDecorationLine:"underline"}}> Proforma for Approval of Co-Supervisor </b><br/>
      
        </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default PhdPage;




