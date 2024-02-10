import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function Interface() {
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
      
      <h2 style={{marginTop:"30px",textDecorationLine:"underline"}}><b>Interface</b></h2>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"40px"}}>
         {" "}
       
        <b>1. Registration for Academic Session 2021-22 </b> <br/>
        <b>2. Student Login for admitted 2016-17, 2017-18, 2018-19,2019-20 & 2020 - 21 Academic Session</b><br/>
        <b>3. Login for admitted 2014 - 2015 & 2015 - 2016 Academic Session</b><br/><br/>
        <hr></hr>
        
         </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default Interface;
