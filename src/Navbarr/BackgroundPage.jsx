




// // import React from 'react';
// // import FooterContanct from '../FooterContanct';
// // import Navbarcontanct from '../Navbarcontanct';
// // import { Checkbox, CircularProgress, Container, ThemeProvider, createTheme } from '@mui/material';

// // function BackgroundPage() {
// //   return (
// //     <>
// //       <style>{`
// //         h2 {
// //           text-align: center;
// //           background-color:#14adad;
// //           // Width : 98%;
// //           // margin-left:10px;
// //           border-radius: 25px;
// //           margin-top: 50px;
// //         }

// //         aside {
// //           width: 25%;
// //           float: left;
// //           height: 300px;
// //           margin: 10px 0px 10px 0px;
// //         }

// //         nav ul {
// //           list-style-type: none;
// //           font-size: 2vw;
// //         }

// //         // .content {
// //         //   margin: 10px 0px 10px 0px;
// //         //   width: 75%;
// //         //   float: left;
// //         // }

// //         .content p {
// //           padding: 5px 10px;
// //         }

// //         // footer {
// //         //   height: 75px;
// //         //   width: 100%;
// //         //   clear: both;
// //         //   background: orange;
// //         //   text-align: center;
// //         //   padding-top: 5px;
// //         // }

// //         @media screen and (max-width: 768px) {
// //           aside {
// //             width: 100%;
// //             height: auto;
// //             margin: 10px 0px 0px 0px;
// //             text-align: center;
// //           }

// //           nav li {
// //             display: block;
// //             font-size: 4vw;
// //             margin-bottom: 5px;
// //           }

// //           .content {
// //             margin: 10px 0px 10px 0px;
// //             width: 100%;
// //           }
// //         }
// //       `}</style>
// //         <ThemeProvider theme={theme}>
// //       <Navbarcontanct />
// //       <h2 style={{marginTop:"30px" ,textDecorationLine:"underline"}}>Background</h2>

// //       <div className="content">
// //         <p style={{ color: "black" }}>
// //           {/* Your content goes here */}
// //           <p  style={{color:"black" ,marginTop:"35px"}}>
// //          {" "}
// //        <b> Sri Satya Sai Campus,</b>  Sehore came into existence in year 1999 with Sri Satya Sai Institute of Science & Technology (SSSIST). SSSIST initially had three branches in engineering education with total intake of 180.<br/><br/>

// //  In 2012, because of the vision of promoters, the Sehore Campus was operating twelve Colleges, having twenty undergraduate courses & twenty Postgraduate courses, one post-graduate Diploma course & one Diploma course, with total intake of 3054  students. Sri Satya Sai Group of Institutions attracts large number of students from faraway places & States, due to quality of education at affordable cost, without any hidden fees policy. In its history of fourteen years, various Institutions under umbrella of Sri Satya Sai Group of Institutions were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
// //  Majority of population is agriculture dependent & percentage of population living at low standard of living is 80.6. Growth rate recorded recently is 21.5%.  <br/><br/>

// //  Literacy rate of Sehore district is 71.11% which was 63.07% in 2001. Gender wise, male and female literacy were 82.37 and 58.86 respectively in year 2011, which in 2001 census, were 77.28% and 47.36%. 9 % of mothers between 17-55 years of age can read and this percentage is bound to increase in future. Sri Satya Sai Group of Institutions can humbly claim some role in these statistics.
// //  Now with establishment of Sri Satya Sai University of Technology & Medical Sciences, the overall scenario is expected to improve further.
// //      </p>

// //         </p>
// //       </div>
// //       <FooterContanct/>
// //       </ThemeProvider>
// //     </>
// //   );
// // }

// // export default BackgroundPage;


// import React from 'react'
// import Iete from '../images/IETE.png'
// import Naac from '../images/NAAC.png'
// import NPTEL from '../images/NPTEL.png'
// import MPCST from '../images/MPCST.png'
// import aicte from '../images/AICTE.png'
// import logo from '../images/sssutms.jpg';
// import ugc from '../images/ugc.png';
// import ariia from '../images/ariia.png'

// const BackgroundPage = () => {

//   return (
//     <>
//       <style>
//         {
//           `
//           ul {
//             margin: 0px;
//             padding: 0px;
//             list-style: none;
//         }
//         .footer-section {
//           background: #151414;
//           position: relative;
//         }
//         .footer-cta {
//           border-bottom: 1px solid #373636;
//         }

//         .single-cta i {
//           color: #ff5e14;
//           font-size: 30px;
//           float: left;
//           margin-top: 8px;
//         }
//         .cta-text {
//           padding-left: 15px;
//           display: inline-block;
//         }
//         .cta-text h4 {
//           color: #fff;
//           font-size: 20px;
//           font-weight: 600;
//           margin-bottom: 2px;
//         }
//         .cta-text span {
//           color: #757575;
//           font-size: 15px;
//         }
//         .footer-content {
//           position: relative;
//           z-index: 2;
//         }
//         .footer-pattern img {
//           position: absolute;
//           top: 0;
//           left: 0;
//           height: 330px;
//           background-size: cover;
//           background-position: 100% 100%;
//         }
//         .footer-logo {
//           margin-bottom: 30px;
//         }
//         .footer-logo img {
//             max-width: 200px;
//         }
//         .footer-text p {
//           margin-bottom: 14px;
//           font-size: 14px;
//               color: #7e7e7e;
//           line-height: 28px;
//           // font-family:sans-serif;
//           font-family: helvetica;
//         }


//         .footer-social-icon {
//           display: flex;
//           align-items: center;
//         }

//         .footer-social-icon span {
//           color: #fff;
//           font-size: 20px;
//           font-weight: 700;
//           font-family: 'Poppins', sans-serif;
//           margin-right: 10px;
//         }

//         .footer-social-icon a {
//           color: #fff;
//           font-size: 16px;
//           margin-right: 15px;
//         }
//         .footer-div{
//           margin-left:200px;
//         }

//         .footer-social-icon i {
//           height: 40px;
//           width: 40px;
//           text-align: center;
//           line-height: 38px;
//           border-radius: 50%;
//         }

//         .facebook-bg{
//           background: #3B5998;
//         }
//         .instagram-bg{
//           background: #966b9d;
//         }
//         .email-bg{
//           background: #DD4B39;
//         }

//         .whatsapp-bg{
//           background: #4f772d;
//         }


//         .youtube-bg{
//           background: #d90429;
//         }
//         .footer-widget-heading h3 {
//           color: #fff;
//           font-size: 20px;
//           font-weight: 600;
//           margin-bottom: 40px;
//           position: relative;
//         }
//         .footer-widget-heading h3::before {
//           content: "";
//           position: absolute;
//           left: 0;
//           bottom: -15px;
//           height: 2px;
//           width: 50px;
//           background: #ff5e14;
//         }
//         .footer-widget ul li {

//           width: 100%;

//         }
//         .footer-widget ul li a:hover{
//           color: #ff5e14;
//         }
//         .footer-widget ul li a {
//           color: #878787;
//           text-transform: capitalize;
//         }

//         .copyright-area{
//           background: #202020;
//           padding: 25px 0;
//         }
//         .copyright-text p {
//           margin: 0;
//           font-size: 14px;
//           color: #878787;
//         }
//         .copyright-text p a{
//           color: #ff5e14;
//         }
//         .footer-menu li {
//           display: inline-block;
//           margin-left: 20px;
//         }
//         .footer-menu li:hover a{
//           color: #ff5e14;
//         }
//         .footer-menu li a {
//           font-size: 14px;
//           color: #878787;
//         }
//         .logos{
//           display: flex;
//           justify-content:center;
//           gap: 20px;
//           margin-left:400px;
//           align-items:center;
//           height: 70px;

//         }
//        .logoheight{
//           height:100%;
//        }

//         @media screen and (max-width: 1024px) {

//           .footer-div{
//             margin-left:300px
//           }

//         }


//         @media screen and (max-width: 768px) {
//           .col-xl-4.col-md-4 {
//             margin-right: 400px; 
//           }


//           .footer-social-icon{
//             margin-right:800px;
//           }

//           .footer-menu li{
//              display:inline-block;
//           }
//           .footer-menu{
//             margin-right:300px;

//           }




//         }
//         @media screen and (max-width: 480px){

//           .footer-menu li{
//             display: block;
//             color: red;
//             justify-content:center;
//           }


//           .footer-div  {
//             // margin-left: 0; 
//             display: inline;
//             color:red;
//             // text-align: center;
//             width: 100%; 
//           }

//           .logos{
//             display: flex;
//             justify-content:center;
//             gap: 20px;
//             margin-left:0px;
//             align-items:center;
//           }
//           .logoheight{
//             height:50%;
//          }
//          .footer-logo{
//           margin-left:50px;
//          }



//         .logo img{
//            width:180px;
//            height:70px
//         }
//         // .logo figcaption{
//         //   margin-left:80px;

//         //  }
//          .title{
//           font-size:25px;
//           margin-bottom:10px;
//          }
//         //  .logo figcaption{
//         //        font-weight:bold;
//         //        font-size:12px;
//         //  }
//      }

//       `
//         }
//       </style>

//       <footer className="footer-section">
//         <div className="container">
//           <div className="footer-cta pt-4 pb-4">
//             <div className="row" style={{ display: 'flex' }}>
//               <div className="col-xl-4 col-md-4" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginLeft: '400px', alignItems: 'center', height: '70px' }}>
//                 <img src={MPCST} style={{ height: '100%' }} alt="MPCST"></img>
//                 <img src={Iete} style={{ height: '100%' }} alt="IETE"></img>
//                 <img src={Naac} style={{ height: '100%' }} alt="NAAC"></img>

//                 <img src={NPTEL} style={{ height: '100%' }} alt="NPTEL"></img>   <img src={ugc} style={{ height: '100%' }} alt="ugc"></img>
//                 <img src={ariia} style={{ height: '100%' }} alt="ariia"></img>
//                 <img src={aicte} style={{ height: '100%' }} alt="AICTE"></img>

//               </div>
//             </div>
//           </div>
//           <div className="footer-content pt-5 pb-5">
//             <div className="row" style={{ marginRight: '100px' }}>
//               <div className="col-xl-4 col-lg-4 mb-50">
//                 <div className="footer-widget" >
//                   <div className="footer-logo" >
//                     <figure className="logo fixed_flex">
//                       <img src={logo} alt="" />
//                       <figcaption>
//                         <strong className="title">Sri Satya Sai </strong> University of Technology & Medical Science
//                       </figcaption>
//                     </figure>
//                     <br></br>
//                     <a href="#">
//                       <i className="fa fa-map-marker" />{" "}
//                       Opp.Oilfed Plant, Bhopal-Indore Road, Sehore (M.P), Pin - 466001
//                     </a>
//                     <i className="fa fa-headphones" />{" "}
//                     (+91) 07562-292740 | 7562292720 <br />
//                     (+91) 7748900027 | 7748900028<br />
//                     (From 10:00 AM to 5:00 PM only)

//                   </div>
//                   <div className="footer-text">
//                     <p>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-xl-8 col-lg-8 col-md-8 mb-30" style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Information</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">About University</a>
//                     </li>
//                     <li>
//                       <a href="#">Vision & Mission</a>
//                     </li>
//                     <li>
//                       <a href="#">Blog</a>
//                     </li>
//                     <li>
//                       <a href="#">Infrastructure</a>
//                     </li>
//                     <li>
//                       <a href="#">Academic Calendar</a>
//                     </li>
//                     <li>
//                       <a href="#">Virtual Tour</a>
//                     </li>
//                     <li>
//                       <a href="#">Press & Media</a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Quick Links</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">AICTE </a>
//                     </li>
//                     <li>
//                       <a href="#">Pay Fees</a>
//                     </li>
//                     <li>
//                       <a href="#">Notifications</a>
//                     </li>
//                     <li>
//                       <a href="#">Approvals</a>
//                     </li>
//                     <li>
//                       <a href="#">Home Page</a>
//                     </li>

//                     <li>
//                       <a href="#">Announcements</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Others</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">NIRF</a>
//                     </li>
//                     <li>
//                       <a href="#">Digi Locker</a>
//                     </li>
//                     <li>
//                       <a href="#">Career</a>
//                     </li>
//                     <li>
//                       <a href="#">Counselling</a>
//                     </li>
//                     <li>
//                       <a href="#">NPTEL</a>
//                     </li>

//                     <li>
//                       <a href="#">NAAC</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Resources</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">Monthly Magazine</a>
//                     </li>
//                     <li>
//                       <a href="#">Brochure</a>
//                     </li>
//                     <li>
//                       <a href="#"> Study Material</a>
//                     </li>

//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="copyright-area">
//           <div className="container">
//             <div className="row">

//               <div className="col-xl-4 col-md-4" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginLeft: '400px', alignItems: 'center', }}>
//                 <div className="footer-social-icon">
//                   <a href="#">
//                     <i className="fab fa-whatsapp whatsapp-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-facebook-f facebook-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fa-brands fa-instagram instagram-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fa-solid fa-envelope email-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-youtube youtube-bg" />
//                   </a>
//                 </div></div>
//               <div className="col-xl-8 col-lg-8 " style={{ marginLeft: '200px' }}>
//                 <div className="footer-menu">
//                   <ul>
//                     <li>
//                       <a href="#">Home</a>
//                     </li>

//                     <li>
//                       <a href="#">Security </a>
//                     </li>

//                     <li>
//                       <a href="#">Contact us </a>
//                     </li>
//                     <li>
//                       <a href="#">Terms & Conditions </a>
//                     </li>
//                     <li>
//                       <a href="#">Privacy-Policy </a>
//                     </li>
//                     <li>
//                       <a href="#">Refund & Cancellation </a>
//                     </li>
//                     <li>
//                       <a href="#">Site Map </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="copyright-text" style={{ textAlign: 'center' }}>
//                 <p>
//                   ©2024, SSSUTMS. All Rights Reserved

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>


//     </>
//   )
// }

// export default BackgroundPage



// import React from 'react'
// import Iete from '../images/IETE.png'
// import Naac from '../images/NAAC.png'
// import NPTEL from '../images/NPTEL.png'
// import MPCST from '../images/MPCST.png'
// import aicte from '../images/AICTE.png'
// import logo from '../images/sssutms.jpg';
// import ugc from '../images/ugc.png';
// import ariia from '../images/ariia.png'

// const BackgroundPage = () => {

//   return (
//     <>
//       <style>
//         {
//           `
//           ul {
//           margin: 0px;
//           padding: 0px;
//           list-style: none;
//       }
//       .footer-section {
//         background: #151414;
//         position: relative;
//       }
//       .footer-cta {
//         border-bottom: 1px solid #373636;
//       }

//       .single-cta i {
//         color: #ff5e14;
//         font-size: 30px;
//         float: left;
//         margin-top: 8px;
//       }
//       .cta-text {
//         padding-left: 15px;
//         display: inline-block;
//       }
//       .cta-text h4 {
//         color: #fff;
//         font-size: 20px;
//         font-weight: 600;
//         margin-bottom: 2px;
//       }
//       .cta-text span {
//         color: #757575;
//         font-size: 15px;
//       }
//       .footer-content {
//         position: relative;
//         z-index: 2;
//       }
//       .footer-pattern img {
//         position: absolute;
//         top: 0;
//         left: 0;
//         height: 330px;
//         background-size: cover;
//         background-position: 100% 100%;
//       }
//       .footer-logo {
//         margin-bottom: 30px;
//       }
//       .footer-logo img {
//           max-width: 200px;
//       }
//       .footer-text p {
//         margin-bottom: 14px;
//         font-size: 14px;
//             color: #7e7e7e;
//         line-height: 28px;
//         // font-family:sans-serif;
//         font-family: helvetica;
//       }


//       .footer-social-icon {
//         display: flex;
//         align-items: center;
//       }

//       .footer-social-icon span {
//         color: #fff;
//         font-size: 20px;
//         font-weight: 700;
//         font-family: 'Poppins', sans-serif;
//         margin-right: 10px;
//       }

//       .footer-social-icon a {
//         color: #fff;
//         font-size: 16px;
//         margin-right: 15px;
//       }
//       .footer-div{
//         margin-left:200px;
//       }

//       .footer-social-icon i {
//         height: 40px;
//         width: 40px;
//         text-align: center;
//         line-height: 38px;
//         border-radius: 50%;
//       }

//       .facebook-bg{
//         background: #3B5998;
//       }
//       .instagram-bg{
//         background: #966b9d;
//       }
//       .email-bg{
//         background: #DD4B39;
//       }

//       .whatsapp-bg{
//         background: #4f772d;
//       }


//       .youtube-bg{
//         background: #d90429;
//       }
//       .footer-widget-heading h3 {
//         color: #fff;
//         font-size: 20px;
//         font-weight: 600;
//         margin-bottom: 40px;
//         position: relative;
//       }
//       .footer-widget-heading h3::before {
//         content: "";
//         position: absolute;
//         left: 0;
//         bottom: -15px;
//         height: 2px;
//         width: 50px;
//         background: #ff5e14;
//       }
//       .footer-widget ul li {

//         width: 100%;

//       }
//       .footer-widget ul li a:hover{
//         color: #ff5e14;
//       }
//       .footer-widget ul li a {
//         color: #878787;
//         text-transform: capitalize;
//       }

//       .copyright-area{
//         background: #202020;
//         padding: 25px 0;
//       }
//       .copyright-text p {
//         margin: 0;
//         font-size: 14px;
//         color: #878787;
//       }
//       .copyright-text p a{
//         color: #ff5e14;
//       }
//       .footer-menu li {
//         display: inline-block;
//         margin-left: 20px;
//       }
//       .footer-menu li:hover a{
//         color: #ff5e14;
//       }
//       .footer-menu li a {
//         font-size: 14px;
//         color: #878787;
//       }
//       .logos{
//         display: flex;
//         justify-content:center;
//         gap: 20px;
//         margin-left:400px;
//         align-items:center;
//         height: 70px;

//       }
//      .logoheight{
//         height:100%;
//      }

//       @media screen and (max-width: 1024px) {

//         .footer-div{
//           margin-left:300px
//         }

//       }


//       @media screen and (max-width: 768px) {
//         .col-xl-4.col-md-4 {
//           margin-right: 400px; 
//         }


//         .footer-social-icon{
//           margin-right:800px;
//         }

//         .footer-menu li{
//            display:inline-block;
//         }
//         .footer-menu{
//           margin-right:300px;

//         }




//       }
//       @media screen and (max-width: 480px){

//         .footer-menu li{
//           display: block;
//           color: red;
//           justify-content:center;
//         }


//         .footer-div  {
//           // margin-left: 0; 
//           display: inline;
//           color:red;
//           // text-align: center;
//           width: 100%; 
//         }

//         .logos{
//           display: flex;
//           justify-content:center;
//           gap: 20px;
//           margin-left:0px;
//           align-items:center;
//         }
//         .logoheight{
//           height:50%;
//        }
//        .footer-logo{
//         margin-left:50px;
//        }



//       .logo img{
//          width:180px;
//          height:70px
//       }
//       // .logo figcaption{
//       //   margin-left:80px;

//       //  }
//        .title{
//         font-size:25px;
//         margin-bottom:10px;
//        }
//       //  .logo figcaption{
//       //        font-weight:bold;
//       //        font-size:12px;
//       //  }
//    }

// }}
//       `
//         }
//       </style>

//       <footer className="footer-section">
//         <div className="container">
//           <div className="footer-cta pt-4 pb-4">
//             <div className="row" style={{ display: 'flex' }}>
//               <div className="col-xl-4 col-md-4 logos" >
//                 <img src={MPCST} className='logoheight' alt="MPCST"></img>
//                 <img src={Iete} className='logoheight' alt="IETE"></img>
//                 <img src={Naac} className='logoheight' alt="NAAC"></img>

//                 <img src={NPTEL} className='logoheight' alt="NPTEL"></img>   <img src={ugc} className='logoheight' alt="ugc"></img>
//                 <img src={ariia} className='logoheight' alt="ariia"></img>
//                 <img src={aicte} className='logoheight' alt="AICTE"></img>

//               </div>
//             </div>
//           </div>
//           <div className="footer-content pt-5 pb-5">
//             <div className="row" style={{ marginRight: '100px' }}>
//               <div className="col-xl-4 col-lg-4 mb-50">
//                 <div className="footer-widget" >
//                   <div className="footer-logo" >
//                     <figure className="logo fixed_flex">
//                       <img src={logo} alt="" />
//                       <figcaption>
//                         <strong className="title">Sri Satya Sai </strong> University of Technology & Medical Science
//                       </figcaption>
//                     </figure>
//                     <br></br>
//                     <a href="#">
//                       <i className="fa fa-map-marker" />{" "}
//                       Opp.Oilfed Plant, Bhopal-Indore Road, Sehore (M.P), Pin - 466001
//                     </a>
//                     <i className="fa fa-headphones" />{" "}
//                     (+91) 07562-292740 | 7562292720 <br />
//                     (+91) 7748900027 | 7748900028<br />
//                     (From 10:00 AM to 5:00 PM only)

//                   </div>
//                   <div className="footer-text">
//                     <p>
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-xl-8 col-lg-8 col-md-8 mb-30" style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Information</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">About University</a>
//                     </li>
//                     <li>
//                       <a href="#">Vision & Mission</a>
//                     </li>
//                     <li>
//                       <a href="#">Blog</a>
//                     </li>
//                     <li>
//                       <a href="#">Infrastructure</a>
//                     </li>
//                     <li>
//                       <a href="#">Academic Calendar</a>
//                     </li>
//                     <li>
//                       <a href="#">Virtual Tour</a>
//                     </li>
//                     <li>
//                       <a href="#">Press & Media</a>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Quick Links</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">AICTE </a>
//                     </li>
//                     <li>
//                       <a href="#">Pay Fees</a>
//                     </li>
//                     <li>
//                       <a href="#">Notifications</a>
//                     </li>
//                     <li>
//                       <a href="#">Approvals</a>
//                     </li>
//                     <li>
//                       <a href="#">Home Page</a>
//                     </li>

//                     <li>
//                       <a href="#">Announcements</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Others</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">NIRF</a>
//                     </li>
//                     <li>
//                       <a href="#">Digi Locker</a>
//                     </li>
//                     <li>
//                       <a href="#">Career</a>
//                     </li>
//                     <li>
//                       <a href="#">Counselling</a>
//                     </li>
//                     <li>
//                       <a href="#">NPTEL</a>
//                     </li>

//                     <li>
//                       <a href="#">NAAC</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer-widget">
//                   <div className="footer-widget-heading">
//                     <h3>Resources</h3>
//                   </div>
//                   <ul>
//                     <li>
//                       <a href="#">Monthly Magazine</a>
//                     </li>
//                     <li>
//                       <a href="#">Brochure</a>
//                     </li>
//                     <li>
//                       <a href="#"> Study Material</a>
//                     </li>

//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="copyright-area">
//           <div className="container">
//             <div className="row">

//               <div className="col-xl-4 col-md-4" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginLeft: '400px', alignItems: 'center', }}>
//                 <div className="footer-social-icon">
//                   <a href="#">
//                     <i className="fab fa-whatsapp whatsapp-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-facebook-f facebook-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fa-brands fa-instagram instagram-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fa-solid fa-envelope email-bg" />
//                   </a>
//                   <a href="#">
//                     <i className="fab fa-youtube youtube-bg" />
//                   </a>
//                 </div></div>
//               <div className="col-xl-8 col-lg-8 footer-div" >
//                 <div className="footer-menu">
//                   <ul>
//                     <li>
//                       <a href="#">Home</a>
//                     </li>

//                     <li>
//                       <a href="#">Security </a>
//                     </li>

//                     <li>
//                       <a href="#">Contact us </a>
//                     </li>
//                     <li>
//                       <a href="#">Terms & Conditions </a>
//                     </li>
//                     <li>
//                       <a href="#">Privacy-Policy </a>
//                     </li>
//                     <li>
//                       <a href="#">Refund & Cancellation </a>
//                     </li>
//                     <li>
//                       <a href="#">Site Map </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="copyright-text" style={{ textAlign: 'center' }}>
//                 <p>
//                   ©2024, SSSUTMS. All Rights Reserved

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>


//     </>
//   )
// }

// export default BackgroundPage



import React from 'react'
import Iete from '../images/IETE.png'
import Naac from '../images/NAAC.png'
import NPTEL from '../images/NPTEL.png'
import MPCST from '../images/MPCST.png'
import aicte from '../images/AICTE.png'
import logo from '../images/sssutms.jpg';
import ugc from '../images/ugc.png';
import ariia from '../images/ariia.png'

const BackgroundPage = () => {

  return (
    <>
      <style>
        {
          `
          ul {
          margin: 0px;
          padding: 0px;
          list-style: none;
         }
      .footer-section {
        background: #151414;
        position: relative;
      }
      .footer-cta {
        border-bottom: 1px solid #373636;
      }

      .single-cta i {
        color: #ff5e14;
        font-size: 30px;
        float: left;
        margin-top: 8px;
      }
      .cta-text {
        padding-left: 15px;
        display: inline-block;
      }
      .cta-text h4 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
      }
      .cta-text span {
        color: #757575;
        font-size: 15px;
      }
      .footer-content {
        position: relative;
        z-index: 2;
      }
      .footer-pattern img {
        position: absolute;
        top: 0;
        left: 0;
        height: 330px;
        background-size: cover;
        background-position: 100% 100%;
      }
      .footer-logo {
        margin-bottom: 30px;
      }
      .footer-logo img {
          max-width: 200px;
      }
      .footer-text p {
        margin-bottom: 14px;
        font-size: 14px;
            color: #7e7e7e;
        line-height: 28px;
        // font-family:sans-serif;
        font-family: helvetica;
      }
     

      .footer-social-icon {
        display: flex;
        align-items: center;
      }
      
      .footer-social-icon span {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Poppins', sans-serif;
        margin-right: 10px;
      }
      
      .footer-social-icon a {
        color: #fff;
        font-size: 16px;
        margin-right: 15px;
      }
      .footer-div{
        margin-left:200px;
      }
      
      .footer-social-icon i {
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 38px;
        border-radius: 50%;
      }
      
      .facebook-bg{
        background: #3B5998;
      }
      .instagram-bg{
        background: #966b9d;
      }
      .email-bg{
        background: #DD4B39;
      }

      .whatsapp-bg{
        background: #4f772d;
      }

      .ankita{
        display : flex ;
    }
        

      .youtube-bg{
        background: #d90429;
      }
      .footer-widget-heading h3 {
        color: #fff;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 40px;
        position: relative;
      }
      .footer-widget-heading h3::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        height: 2px;
        width: 50px;
        background: #ff5e14;
      }
      .footer-widget ul li {
     
        width: 100%;
      
      }
      .footer-widget ul li a:hover{
        color: #ff5e14;
      }
      .footer-widget ul li a {
        color: #878787;
        text-transform: capitalize;
      }
  
      .copyright-area{
        background: #202020;
        padding: 25px 0;
      }
      .copyright-text p {
        margin: 0;
        font-size: 14px;
        color: #878787;
      }
      .copyright-text p a{
        color: #ff5e14;
      }
      .footer-menu li {
        display: inline-block;
        margin-left: 20px;
      }
      .footer-menu li:hover a{
        color: #ff5e14;
      }
      .footer-menu li a {
        font-size: 14px;
        color: #878787;
      }
      .logos{
        display: flex;
        justify-content:center;
        gap: 20px;
        margin-left:400px;
        align-items:center;
        height: 70px;

      }
     .logoheight{
        height:100%;
     }
      @media screen and (max-width: 1024px) {
        .footer-div{
          // margin-left:300px
        }
      }


      @media screen and (max-width: 768px) {
        .col-xl-4.col-md-4 {
          // margin-right: 400px; 
        }


        .footer-social-icon{
          margin-right:800px;
        }

        .footer-menu li{
           display:inline;
        }
        .footer-menu{
          margin-right:300px;
         
        }


        
      }
      @media screen and (max-width: 480px){
       .footer-widget{
         display:inline;
       }
       .ankita ul li a{
       display:block;
      }
       .ankita{
        display:inline;
        // text-align:center;
        // justify-content:center;
       }
      //  .ankita ul li a{
      //   display:column;
      //  }

        .footer-menu ul{
            display:flex;
            width: 20%;
            // justify-content:center;
        }

        .footer-div  {
          margin-left: 0; 
          text-align: center;
          // width: 100%; 
        }

        .logos{
          display: flex;
          justify-content:center;
          gap: 20px;
          margin-left:0px;
          align-items:center;
        }
        .logoheight{
          height:50%;
       }
      .logo{
        display:block;
      }
      .logo img{
        margin-bottom:10px;
        margin-left:150px;
      }
      
      .title{
        margin-left:50px;
      }     
}}
      `
        }
      </style>

      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-4 pb-4">
            <div className="row" style={{ display: 'flex' }}>
              <div className="col-xl-4 col-md-4 logos" >
                <img src={MPCST} className='logoheight' alt="MPCST"></img>
                <img src={Iete} className='logoheight' alt="IETE"></img>
                <img src={Naac} className='logoheight' alt="NAAC"></img>

                <img src={NPTEL} className='logoheight' alt="NPTEL"></img>
                <img src={ugc} className='logoheight' alt="ugc"></img>
                <img src={ariia} className='logoheight' alt="ariia"></img>
                <img src={aicte} className='logoheight' alt="AICTE"></img>

              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row" style={{ marginRight: '100px' }}>
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget" >
                  <div className="footer-logo" >
                    <figure className="logo fixed_flex">
                      <img src={logo} alt="" />
                      <figcaption>
                        <strong className="title">Sri Satya Sai </strong> University of Technology & Medical Science
                      </figcaption>
                    </figure>
                    <br></br>
                    <a href="#">
                      <i className="fa fa-map-marker" />{" "}
                      Opp.Oilfed Plant, Bhopal-Indore Road, Sehore (M.P), Pin - 466001
                    </a>
                    <i className="fa fa-headphones" />{" "}
                    (+91) 07562-292740 | 7562292720 <br />
                    (+91) 7748900027 | 7748900028<br />
                    (From 10:00 AM to 5:00 PM only)

                  </div>
                  <div className="footer-text">
                    <p>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-8 col-md-8 mb-30 ankita" style={{ justifyContent: 'space-between' }}>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Information</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">About University</a>
                    </li>
                    <li>
                      <a href="#">Vision & Mission</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Infrastructure</a>
                    </li>
                    <li>
                      <a href="#">Academic Calendar</a>
                    </li>
                    <li>
                      <a href="#">Virtual Tour</a>
                    </li>
                    <li>
                      <a href="#">Press & Media</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Quick Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">AICTE </a>
                    </li>
                    <li>
                      <a href="#">Pay Fees</a>
                    </li>
                    <li>
                      <a href="#">Notifications</a>
                    </li>
                    <li>
                      <a href="#">Approvals</a>
                    </li>
                    <li>
                      <a href="#">Home Page</a>
                    </li>

                    <li>
                      <a href="#">Announcements</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Others</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">NIRF</a>
                    </li>
                    <li>
                      <a href="#">Digi Locker</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">Counselling</a>
                    </li>
                    <li>
                      <a href="#">NPTEL</a>
                    </li>

                    <li>
                      <a href="#">NAAC</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Resources</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Monthly Magazine</a>
                    </li>
                    <li>
                      <a href="#">Brochure</a>
                    </li>
                    <li>
                      <a href="#"> Study Material</a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">

              <div className="col-xl-4 col-md-4" >
                <div className="footer-social-icon">
                  <a href="#">
                    <i className="fab fa-whatsapp whatsapp-bg" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f facebook-bg" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram instagram-bg" />
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-envelope email-bg" />
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube youtube-bg" />
                  </a>
                </div></div>
              <div className="col-xl-8 col-lg-8 footer-div" >
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>

                    <li>
                      <a href="#">Security </a>
                    </li>

                    <li>
                      <a href="#">Contact us </a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions </a>
                    </li>
                    <li>
                      <a href="#">Privacy-Policy </a>
                    </li>
                    <li>
                      <a href="#">Refund & Cancellation </a>
                    </li>
                    <li>
                      <a href="#">Site Map </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="copyright-text" style={{ textAlign: 'center' }}>
                <p>
                  ©2024, SSSUTMS. All Rights Reserved

                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default BackgroundPage