




import React from 'react';
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function MandatoryDisclosures() {
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
      <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}>MandatoryDisclosures</h2>

      <div className="content">
        <p style={{ color: "black",marginLeft:"50px" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"35px",marginLeft:"40px"}}>
       {" "}

       <h4 style={{color:" #007aff"}}> *  School of Engineering </h4>
<h4 style={{color:" #007aff"}}> * Faculty of Pharmacy-- (College of Pharmacy)</h4>
<h4 style={{color:" #007aff"}}> * Faculty of Pharmacy -- (School of Pharmacy) </h4>
<h4 style={{color:" #007aff"}}> * Faculty of Pharmacy-- (Polytechnic (Pharmacy))</h4>
<h4 style={{color:" #007aff"}}> * School of Design</h4>
<h4 style={{color:" #007aff"}}> * School of Computer Application</h4>
<h4 style={{color:" black"}}> * School of Hotel Management</h4>
<h4 style={{color:" #007aff"}}> * School of Management Studies</h4>
<h4 style={{color:" #007aff"}}> * Polytechnic (Engineering)</h4>
 <br/>
 </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default  MandatoryDisclosures;




