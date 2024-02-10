import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';


function Result() {
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
      <h2 style={{marginTop:"30px",textDecorationLine:"underline"}}><b>Result</b></h2>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"40px"}}>
         {" "}
       
        {/* <h3> <b> * Ph. D Entrance Examination - 2023</b></h3> 
        <h3><b>  * AMENDED ADMISSION NOTIFICATION-O 1</b> </h3>  
        <h3 style={{color:" #007aff"}}> * Notification for Ph.D. Entrance Examination - 2022 </h3>
        <h3 style={{color:" #007aff"}}>*  Notification for online entrance examination 2021-22  </h3>
        <h3 style={{color:" #007aff"}}> * Ph.D. Entrance Examination 2021 </h3>
        <h3 style={{color:" #007aff"}}>* Ph.D. Entrance Exam Form </h3>
        <h3 style={{color:" #007aff"}} > * Download Syllabus for Ph.D. Entrance Exam </h3> */}

<h3  style={{color:"green"}}>28 Nov 2023 :</h3> 
 
<h4 style={{color:" #007aff"}}> *  B.A. III Year (Supplementary) September – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.Com. III Year (Supplementary) September – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.A. (NEP) II Year (Supplementary) September – 20232 </h4>
<h4 style={{color:" #007aff"}}> *  B.Com. (NEP) II Year (Supplementary) September – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.Sc. (NEP) II Year (Supplementary) September – 20232 </h4> <br/>

<h3  style={{color:"green"}}>20 Nov 2023  :</h3>

<h4 style={{color:" #007aff"}}> *  B.A. (NEP) I Semester (Ex) September – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.A. (NEP) II Semester (Regular) September – 2023   </h4>
<h4 style={{color:" #007aff"}}> *  Diploma Pharmacy I Year Supplementary September – 2023  </h4> <br/>

<h3  style={{color:"green"}}>09 Nov 2023  :</h3>

<h4 style={{color:" #007aff"}}> *   B.B.A. (NEP) I Semester (Ex) September – 2023 </h4>
<h4 style={{color:" #007aff"}}> *   B.B.A. (NEP) II Semester (Regular) September – 2023   </h4>
<h4 style={{color:" #007aff"}}> *   B.C.A. (NEP) I Semester (Ex) September – 2023    </h4>
<h4 style={{color:" #007aff"}}> *   B.C.A. (NEP) II Semester (Regular) September – 2023   </h4>
<h4 style={{color:" #007aff"}}> *   B.Sc. (NEP) I Semester (Ex) September – 2023    </h4>
<h4 style={{color:" #007aff"}}> *   B.Sc. (NEP) II Semester (Regular) September – 2023    </h4>
<h4 style={{color:" #007aff"}}> *   B.Com. (NEP) I Semester (Ex) September – 2023   </h4>
<h4 style={{color:" #007aff"}}> *   B.Com. (NEP) II Semester (Regular) September – 2023   </h4><br/>

<h3  style={{color:"green"}}>05 Oct 2023    :</h3>

<h4 style={{color:"#007aff"}}> *   B. A. M. S. I Year Regular July - 2023   </h4><br/>
<h3  style={{color:"green"}}>30 Sep 2023 :</h3>

<h4 style={{color:" #007aff"}}> *  B. Tech. (Dairy Technology) IV Semester (Regular) June – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B. Tech. (Dairy Technology) VI Semester (Regular) June – 2023   </h4>
<h4 style={{color:" #007aff"}}> *  B. Tech. (Dairy Technology) VIII Semester (Regular) June – 2023    </h4><br/>


<h3  style={{color:"green"}}>29 Sep 2023 :</h3>

<h4 style={{color:" #007aff"}}> *  B.Sc.(Hons.) Agriculture I Semester (Ex) June – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.Sc.(Hons.) Agriculture II Semester (Ex) June – 2023   </h4>
<h4 style={{color:" #007aff"}}> *  B.Sc.(Hons.) Agriculture III Semester (Ex) June – 2023   </h4>
<h4 style={{color:" #007aff"}}> *  B.Sc.(Hons.) Agriculture IV Semester (Ex) June – 2023    </h4>
<h4 style={{color:" #007aff"}}> *  B.Sc.(Hons.) Agriculture V Semester (Ex) June – 2023    </h4>
<h4 style={{color:" #007aff"}}> *  B.Sc.(Hons.) Agriculture VI Semester (Ex) June – 2023    </h4> <br/>


<h3  style={{color:"green"}}>27 Sep 2023 :</h3>

<h4 style={{color:" #007aff"}}> *  B.A. B. Ed II Semester (Regular) June – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.A. B. Ed IV Semester (Regular) June – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.A. B. Ed VI Semester (Regular) June – 2023 </h4> <br/>


<h3  style={{color:"green"}}> 26 Sep 2023 :</h3>

<h4 style={{color:" #007aff"}}> *   Bachelor of Architecture VI Semester (Regular) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  Bachelor of Design VI Semester (Regular) June – 2023 </h4>
<h4 style={{color:" #007aff"}}> *  B.H.M.C.T. II Semester (Regular) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  B.H.M.C.T. IV Semester (Ex) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  B.H.M.C.T. IV Semester (Regular) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  B.H.M.C.T. VII Semester (Ex) June – 2023 </h4>
 <h4 style={{color:" #007aff"}}> *  B.A. B.Ed I Semester (Ex) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  B.A. B.Ed I Semester (Ex) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  B.A. B.Ed III Semester (Ex) June – 2023  </h4>
<h4 style={{color:" #007aff"}}> *  B.A. B.Ed V Semester (Ex) June – 2023   </h4><br/>

</p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default Result;


