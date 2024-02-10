// import React from 'react'

// function BackgroundPage() {
//   return (
//     <>
//     <style>{`
    
   




// aside {
//   width : 25%;
//   float : left;
//   height : 300px;
//   margin : 10px 0px 10px 0px;
// }

// nav ul {
//   list-style-type : none;
//   font-size : 2vw;
// }

// .content {
//   margin : 10px 0px 10px 0px;
//   width : 75%;
//   float : left;
// }

// .content p {
//   padding : 5px 10px;
  
// }

// footer {
//   height : 75px;
//   width : 100%;
//   clear : both;
//   background : orange;
//   text-align : center;
//   padding-top : 5px;
// }

// @media screen and (max-width:480px){
//   header {
//     height : 75px;
//     background-color : orange;
//     width : 100%;
//     margin : 0;
//   }
  
//   h1 {
//     font-size : 6vw;
//   }
  
//   aside {
//     width : 100%;
//     height : 50px;
//     margin : 10px 0px 0px 0px;
//     text-align : center;
//   }
  
//   nav li {
//     display : inline;
//     font-size : 4vw;
//     margin-right : 5px;
//   }
  
//   .content {
//     margin : 10px 0px 10px 0px;
//     width : 100%;
//   }
  
 
// }
    
//     `}</style>
//     <h2 style={{textAlign:"center", backgroundColor:"pink",marginTop:"30px"}}>Background</h2>
//     <aside>

//       <nav>
      
//         <ul>
           
//           <li>
//             <a href="">Background</a>
//           </li>
//           <li>
//             <a href="">Institutes</a>
//           </li>
//           <li>
//             <a href="">Promoting Society</a>
//           </li>
//           <li>
//             <a href="">Vision & Mission</a>
//           </li>
//           <li>
//             <a href="">Core Values</a>
//           </li>
//           <li>
//             <a href="">Best Practices</a>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//     <div className="content">
//       <p  style={{color:"black"}}>
//         {" "}
//       <b> Sri Satya Sai Campus,</b>  Sehore came into existence in year 1999 with Sri Satya Sai Institute of Science & Technology (SSSIST). SSSIST initially had three branches in engineering education with total intake of 180.<br/><br/>

// In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges, having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course, with total intake of 3054  students. Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States, due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
// Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6. Growth rate recorded recently is 21.5%.  <br/><br/>

// Literacy rate of Sehore district is 71.11% which was 63.07% in 2001. Gender wise, male and female literacy were 82.37 and 58.86 respectively in year 2011, which in 2001 census, were 77.28% and 47.36%. 9 % of mothers between 17-55 years of age can read and this percentage is bound to increase in future. Sri Satya Sai Group of Institutions can humbly claim some role in these statistics.
// Now with establishment of Sri Satya Sai University of Technology & Medical Sciences, the overall scenario is expected to improve further.
//       </p>
    
//     </div>
    
//   </>
  
//   )
// }

// export default BackgroundPage






import React from 'react';
import FooterContanct from '../FooterContanct';
import Navbarcontanct from '../Navbarcontanct';

function BackgroundPage() {
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
      <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}>Background</h2>

      <div className="content">
        <p style={{ color: "black" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"35px"}}>
         {" "}
       <b> Sri Satya Sai Campus,</b>  Sehore came into existence in year 1999 with Sri Satya Sai Institute of Science & Technology (SSSIST). SSSIST initially had three branches in engineering education with total intake of 180.<br/><br/>

 In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges, having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course, with total intake of 3054  students. Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States, due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
 Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6. Growth rate recorded recently is 21.5%.  <br/><br/>

 Literacy rate of Sehore district is 71.11% which was 63.07% in 2001. Gender wise, male and female literacy were 82.37 and 58.86 respectively in year 2011, which in 2001 census, were 77.28% and 47.36%. 9 % of mothers between 17-55 years of age can read and this percentage is bound to increase in future. Sri Satya Sai Group of Institutions can humbly claim some role in these statistics.
 Now with establishment of Sri Satya Sai University of Technology & Medical Sciences, the overall scenario is expected to improve further.
     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default BackgroundPage;
