import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function Scholarship() {
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
      <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}>Scholarship</h2>

      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"35px",marginLeft:"40px"}}>
       {" "}
       <b>Government of Madhya Pradesh has introduced scholarship schemes for students belonging to reserved classes i.e. Scheduled caste (SC)/ Scheduled Tribes(ST) & Other Backward Castes (OBC- Non creamy Layer) pursuing higher education.
         For availing benefits under these schemes,
         candidates can apply online on web site of Adim Jati Kalyan Vibhag.<br/><br/>
 

 Similar schemes are available for students belonging to minority Communities. <br/><br/> 
  
 
 The University has committed officials in scholarship department to help students applying for scholarship schemes in & outside Madhya Pradesh.
  </b>
        </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default Scholarship;




