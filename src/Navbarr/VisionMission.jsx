import React from 'react';
import FooterContanct from '../FooterContanct';
import Navbarcontanct from '../Navbarcontanct';

function VisionMission() {
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
      
      <h2 style={{marginTop:"30px",textDecorationLine:"underline" }}><b>Vision & Mission</b></h2>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"40px"}}>
         {" "}
       

         <h3 style={{marginTop:"30px",textDecorationLine:"underline",color:"#003366"}}><b>Vision : </b></h3> <br/>     
         " To emerge as World’s one of the finest Universities in the field of Higher, Technical  and Medical Education to develop Professionals who are Technically competent, ethically sensitive and  environment friendly, for the betterment of society." <br/><br/>
 

         <h3 style={{marginTop:"20px",textDecorationLine:"underline",color:"#003366"}}><b>Mission :</b></h3> <br/>
         "Accomplish stimulating learning environment for students through quality teaching, research and outreach activity by providing state of the art facilities, industry exposure and guidance of dedicated faculty."
     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default VisionMission;
