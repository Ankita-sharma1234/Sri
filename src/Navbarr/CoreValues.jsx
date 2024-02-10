import React from 'react';
import FooterContanct from '../FooterContanct';
import Navbarcontanct from '../Navbarcontanct';

function CoreValues() {
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
      
      <h2 style={{marginTop:"30px",textDecorationLine:"underline"}}><b>CoreValues</b></h2>
  
      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"40px"}}>
         {" "}
       
     *  <b style={{textDecorationLine:"underline"}}> DESCIPLINE :</b>  It is the practice of training people to obey rules or a code of behaviour, using punishment to correct disobedience. <br/>

    * <b  style={{textDecorationLine:"underline"}}> PUNCTUALITY OR RESPECT FOR TIME :</b>  We promote punctuality and Time Management among Stake Holders. <br/>

     * <b  style={{textDecorationLine:"underline"}}>FREEDOM OF THOUGHT AND EXPRESSION : </b>We believe that Freedom of Thought and Expression is necessary, as without this overall development of individual cannot be completed. <br/>

   * <b  style={{textDecorationLine:"underline"}}>HONESTY AND INTEGRITY :</b> We are committed to practices that are fair, honest and objective in dealing with students, faculty members, staff and stake holders at all levels of Institution. <br/>

* <b style={{textDecorationLine:"underline"}}>QUALITY EXCELLENCE :</b> We promote Excellence in whatever constructive and productive work / activity Students /Faculties do.<br/>

* <b style={{textDecorationLine:"underline"}}>ACCOUNTABILITY AND TRANSPARENCY :</b> We believe in having complete transparency at all levels of hierarchy to promote a healthier working atmosphere to all. We believe in Accountability for and Transparency in, all my deeds and actions.<br/>

* <b style={{textDecorationLine:"underline"}}>PERSEVERANCE :</b> We encourage Perseverance in doing something despite difficulty or delay in achieving success. <br/>

* <b style={{textDecorationLine:"underline"}}>ENCOURAGEMENT :</b> Encouragement is provided for critical and quantitative thinking, effective communication, ethical decision making and social obligation in our students. <br/>

* <b style={{textDecorationLine:"underline"}}>SOCIAL RESPONSIBILITY :</b> We are focused on promoting the sense of social responsibilities in students by involving them in various social activities that gives them a broader perspective of understanding the causes and possible solutions related to various social issues. <br/>


     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default CoreValues;
