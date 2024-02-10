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
import FooterContanct from '../../FooterContanct';
import Navbarcontanct from '../../Navbarcontanct';

function RDCell() {
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
      <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}>R & D Cell</h2>

      <div className="content">
        <p style={{ color: "black",marginLeft:"40px" }}>
          {/* Your content goes here */}
          <p  style={{color:"black" ,marginTop:"35px"}}>
         {" "}
         Research, which is a scholarly and creative endeavor of faculty leading to innovations and development, 
         is a major pillar of strength in a University system. The advancement achieved through research and
          development contributes significantly to the academic excellence. However, in a multi-disciplinary
           and diversified university organizational set up, nurturing and promoting scientific & technological
            excellence through faculty-driven research is a challenging task. In this regard, Council for Research 
         (CFR) of the S S S University, plays a key role in providing focused attention in guiding and coordinating research activities of various departments and centers of the university. <br/><br/>

The mission of the council is to provide an encouraging ecosystem for promotion of research excellence
 and this is achieved through multifaceted tasks which include facilitating the initiation and organization/implementation of research projects,
  coordination, monitoring and evaluation of student research. The Council also plays a major role in encouraging the faculty to attract extramural funding support by providing linkages and collaborative
   support and streamlining the procedural guidelines. <br/><br/>

The mission of the council is to provide an encouraging ecosystem for promotion of research excellence and 
this is achieved through multifaceted tasks which include facilitating the initiation and organization/implementation of research projects,
 coordination, monitoring and evaluation of student research. The Council also plays a major role in encouraging the faculty to attract extramural funding support by providing 
 linkages and collaborative support and streamlining the procedural guidelines. <br/><br/>

The Council is trying to transform into a single-window operating system for timely and effective action with
 a sole aim of encouraging and promoting quality research. There has been a marked growth in the students enrolling for Ph.D., and the Council for Research is committed to
  provide a platform for solving all the procedural issues associated with their research. Within the established framework of the University system, and the identified goals
   and strategic framework, the Council is striving to achieve research excellence which would transform the University as one of the best destinations for quality research and
    education in the country. <br/><br/>

With the above back drop and the effective implementation of the quality research in the University, the Council for Research has been framed under the Chairmanship of Director ( R & D ).<br/><br/>
 
 <b>OBJECTIVES OF R&D :</b><br/>
1. To promote and facilitate collaborative as well as interdisciplinary research and enhancement of research networking capacity and infrastructure. <br/>
2. Enhancement and effectively manage the resources and research support for its members and throughout the University community.<br/>
3. Provide ‘education and training’ in research and related skills, especially the post- graduate and undergraduate students and thereby enhancing the academic programs of their constituent    academic units.<br/>
4. Effective contribution to the University’s strategic educational and research missions and to support synergies between research, teaching and learning.<br/>
5. Transfer and dissemination of knowledge gained through research for the benefit of society, via a variety of mechanisms as far as practicable.<br/>
6. Enhance the reputation of its members, the constituent academic units, and the University through the quality of its work.<br/>
7. Ensure integrity, quality and ethics in research<br/>
     </p>

        </p>
      </div>
      <FooterContanct/>
    </>
  );
}

export default RDCell;
