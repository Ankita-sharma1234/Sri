// // import * as React from "react";
// // import PropTypes from "prop-types";

// // import { useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import Button from "react-bootstrap/Button";
// // import Modal from "react-bootstrap/Modal";
// // import Hidden from "@mui/material/Hidden";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// // import OnlyHeader from "./OnlyHeader";



// // const drawerWidth = 240;

// // const theme = createTheme({

// //   typography: {
// //     fontWeightBold: 700, 
// //   },
// // });
// // function StudentDashboard(props) {

// //   const navigate = useNavigate();

// //   const handleClick = () => {
// //     navigate("/studentDetail");
// //   };
// //   const HomeClick = () => {
// //     navigate("/student/dashboard/home");
// //   };

// //   return (
// //     <>
// //       <OnlyHeader />
// //       <div>
// //         <style>
// //           {`
// //         aside {
// //           color: #fff;
// //           width: 190px;
// //           padding-left: 20px;
// //           height: 100vh;
// //            background-image: linear-gradient(30deg ,#247BA0
// //           ,
// //             #FFFFB5);
// //           margin-top:65px
// //           position:fixed



// //         }

// //         aside a {
// //           font-size: 12px;
// //           color: #fff;
// //           display: block;
// //           padding: 12px;
// //           padding-left: 30px;
// //           text-decoration: none;
// //           -webkit-tap-highlight-color:transparent;
// //         }

// //         aside a:hover {
// //           // color: #3f5efb;
// //           background: #fff;
// //           outline: none;
// //           position: relative;
// //           background-color: #fff;
// //           border-top-left-radius: 20px;
// //           border-bottom-left-radius: 20px;
// //         }

// //         aside a i {
// //           margin-right: 5px;
// //         }

// //         aside a:hover::after {
// //           content: "";
// //           position: absolute;
// //           background-color: transparent;
// //           bottom: 100%;
// //           right: 0;
// //           height: 35px;
// //           width: 35px;
// //           border-bottom-right-radius: 18px;
// //           box-shadow: 0 20px 0 0 #fff;
// //         }

// //         aside a:hover::before {
// //           content: "";
// //           position: absolute;
// //           background-color: transparent;
// //           top: 38px;
// //           right: 0;
// //           height: 35px;
// //           width: 35px;
// //           border-top-right-radius: 18px;
// //           box-shadow: 0 -20px 0 0 #fff;
// //         }

// //         aside p {
// //           margin: 0;
// //           padding: 40px 0;
// //         }

// //         .social {
// //           height: 0;
// //         }

// //         .social i:before {
// //           width: 14px;
// //           height: 14px;
// //           font-size: 14px;
// //           position: fixed;
// //           color: #fff;
// //           background: #0077B5;
// //           padding: 10px;
// //           border-radius: 50%;
// //           top:5px;
// //           right:5px;
// //         }
// //           @media (max-width:400px)and (min-width:900px){
// //             .heading{
// //               width:50px
// //             }
// //              }
// //         `}
// //         </style>
// //         <>
// //           <aside>
// //             <br />
// //             <br />
// //             <br />
// //             <a href="javascript:void(0)" onMouseEnter={HomeClick}>
// //               <i
// //                 className="fa fa-home"
// //                 aria-hidden="true"
// //                 style={{ fontSize: "35px", textShadow: "2px 2px 3px black" }}
// //               />
// //               <b style={{ fontSize: "16px", color: "black" }}>Home</b>
// //             </a>
// //             <br />

// //             <a href="javascript:void(0)" onMouseEnter={handleClick}>
// //               <i
// //                 className="fa fa-folder"
// //                 aria-hidden="true"
// //                 style={{ fontSize: "35px", textShadow: "2px 2px 3px black" }}
// //               />

// //               <b style={{ fontSize: "16px", color: "black" }}>Enrollment</b>
// //             </a>
// //           </aside>
// //           <div className="social">
// //             <a
// //               href="https://www.linkedin.com/in/florin-cornea-b5118057/"
// //               target="_blank"
// //             >
// //               <i className="fa fa-linkedin" />
// //             </a>
// //           </div>
// //         </>
// //       </div>
// //     </>
// //   );
// // }

// // StudentDashboard.propTypes = {
// //   window: PropTypes.func,
// // };
// // export default StudentDashboard;
// import * as React from "react";
// import PropTypes from "prop-types";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { createTheme } from "@mui/material/styles";
// import OnlyHeaders from "./OnlyHeaders";
// import swal from "sweetalert";
// const theme = createTheme({
//   typography: {
//     fontWeightBold: 700,
//   },
// });
// function StudentDashboard(props) {
//   const [modalShow, setModalShow] = useState(false);

//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (userData && userData.isEnrolled === false) {
//       navigate("/studentDetail");
//     } else {
//       // console.log("User is not enrolled. You can provide a message or take some other action.");
//       swal({
//         icon: "error",
//         title: 'Oops!!',
//         text: 'You have already filled Enrollement form so You are Already Enrollend !!!',
//       })
//     }
//   };
//   const userData = JSON.parse(sessionStorage.getItem("currentUser"));

//   const isEnrolled = userData && userData.isEnrolled;
//   const buttonClassName = isEnrolled ? "disabled" : "enabled";


//   return (
//     <>
//       <OnlyHeaders />
//       <style>
//         {`
//   @import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap")
//   nav {
//     user-select:none;
//     -webkit-user-select:none;
//     -moz-user-select:none;
//     -ms-user-select:none;
//     -o-user-select:none;
//   }
//   nav > ul,
//   nav > ul > li {
//     outline: 0;
//   }
//   nav > ul > li > a {
//    text-decoration: none;
//   }
//   .main-menu {
//     position:fixed;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 64px;
//     overflow:hidden;
//     // background: #000428;
//      background: linear-gradient(to right ,#1f487e, #000000);
//     background:#25313e;
//     transition: width .05s linear;
//     -webkit-transition: width .05s linear;
//     z-index: 10;
//     padding-top: 10px;
//     margin-Top:50px
//   }

//   .main-menu:hover {
//     width: 250px;
//     overflow:visible;
//   }

//   .main-menu > ul > li {
//     position: relative;
//     display: block;
//     width: 180px;
//   }

//   .main-menu > ul > li > a {
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     color:#999;
//     font-size: 1rem;
//     transition:all 0.1s linear;
//     -webkit-transition:all 0.1s linear;
//     padding: 10px 0;
//   }

//   .nav-icon {
//     width: 60px;
//     height: 20px;
//     font-size: 20px;
//     text-align: center;
//   }

//   .nav-text {
//     width: 95px;
//     height: 20px;
//     font-family: "Mulish", sans-serif;
//   }

//   .logout {
//     position: absolute;
//     left: 0;
//     bottom: 0;
//   }

//   .main-menu li:hover > a, .main-menu li.active > a, .main-menu li > a:focus {
//     text-decoration: none;
//     color: #fff;
//     background-color: rgb(29, 79, 215, 0.7);
//   }

//   /* ANIMATED BACKGROUND */



//   .blob-c {
//     min-height: 100vh;
//     overflow: hidden;
//     position:absolute;
//     width: 100%;
//     filter: blur(40px);
//   /*   background: rgba(255,255,255,0.1) */
//   }

//   .blob {
//     background:#26C3F9;
//     height: 60px;
//     width: 80px;
//     border-radius: 40% 50% 30% 40%;
//     animation: transform 18s ease-in-out infinite both alternate,
// movement_one 12s ease-in-out infinite both;
//     opacity:.7;
//     position: absolute;
//     left: 75%;
//     top: 40%;
//   }

//   .blob.one{
//     background:#0085FF;
//     height: 150px;
//     width: 200px;
//     left: 10px;
//     top: 10px;
//     transform: rotate(-180deg);
//     animation: transform 8s ease-in-out infinite both alternate,
// movement_two 20s ease-in-out infinite both;
//   }

//   .blob.two{
//     background:#4EAEFF;
//     height: 150px;
//     width: 150px;
//     left: 600px;
//     top: 250px;
//     transform: rotate(-180deg);
//     animation: transform 10s ease-in-out infinite both alternate,
// movement_two 10s ease-in-out infinite both;
//   }

//   .blob.three{
//     background:#0EAFFF;
//     height: 150px;
//     width: 150px;
//     left: 800px;
//     top: 30px;
//     transform: rotate(-180deg);
//     animation: transform 7s ease-in-out infinite both alternate,
// movement_two 23s ease-in-out infinite both;
//   }

//   .blob.four{
//     background:#4EAEFF;
//     height: 100px;
//     width: 100px;
//     left: 500px;
//     top: 60px;
//     transform: rotate(-180deg);
//     animation: transform 17s ease-in-out infinite both alternate,
// movement_two 12s ease-in-out infinite both;
//   }

//   .blob.five{
//     background:#0085FF;
//     height: 100px;
//     width: 80px;
//     left: 480px;
//     top: 250px;
//     transform: rotate(-180deg);
//     animation: transform 12s ease-in-out infinite both alternate,
// movement_two 18s ease-in-out infinite both;
//   }

//   .blob.six{
//     background:#0EAFFF;
//     height: 70px;
//     width: 100px;
//     left: 160px;
//     top: 400px;
//     transform: rotate(-180deg);
//     animation: transform 5s ease-in-out infinite both alternate,
// movement_two 7s ease-in-out infinite both;
//   }

//   .blob.seven{
//     background: #0085FF;
//     height: 70px;
//     width: 100px;
//     left: 400px;
//     top: 400px;
//     transform: rotate(-180deg);
//     animation: transform 5s ease-in-out infinite both alternate,
// movement_two 12s ease-in-out infinite both;
//   }

//   @keyframes transform
//   {
//       0%,
//     100% { border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%; }
//      20% { border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%; }
//      40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%; }
//      60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%; }
//      80% { border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%; }
//   }

//   @keyframes movement_one
//   {
//       0%,
//     100% { transform: none; }
//      50% { transform: translate(50%, 20%) rotateY(10deg) scale(1); }
//   }

//   @keyframes movement_two
//   {
//       0%,
//     500% { transform: none; }
//      50% { transform: translate(50%, 100%) rotate(-200deg) scale(1.3);}
//   }


//   /* CARD */

//   section {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     gap: 30px;
//     padding: 80px 40px 40px 80px;
//   }

//   .card {
//     width: min(100%, 500px);
//     background: rgba(255, 255, 255);
//     border-radius: 16px;
//     font-family: "Poppins", sans-serif;
//     z-index: 5;
//   }

//   .card > img {
//     display: block;
//     width: 100%;
//     max-width: 500px;
//     aspect-ratio: 4/3;
//     object-fit: cover;
//     object-position: 50% 50%;
//     border-radius: 16px 16px 0 0;
//     filter: contrast(70%);
//     transition: all 0.6s cubic-bezier(0.43, 0.41, 0.22, 0.91);
//   }

//   .card > img:hover {
//     filter: contrast(100%);
//   }

//   .card-content {
//     display: flex;
//     flex-direction: column;
//     padding: 20px 15px 20px;
//   }

//   .card-content > p {
//     margin-bottom: 10px;
//   }

//   .card-content > p:nth-child(1) {
//     font-size: 1rem;
//     font-weight: 600;
//     margin-bottom: 10px;
//     color: #1e40af;
//   }

//   .card-content > p:nth-child(2) {
//     font-size: 0.8rem;
//     font-weight: 400;
//     color: #6b7280;
//   }

//   @media (max-width: 900px) {
//     section {
//        grid-template-columns: repeat(2, 1fr);
//     }
//   }

//   @media (max-width: 500px) {
//     section {
//        grid-template-columns: repeat(1, 1fr);
//     }
//   }`}
//       </style>

//       <nav className="main-menu">
//         <ul style={{ marginBottom: "210px", marginLeft: "-53px" }}><br /><br />
//           <li>
//             <Link to="/studentalldetail">
//               <i className="fa fa-home nav-icon" />
//               <span className="nav-text" style={{
//                 fontWeight: 'bold'
//               }}>Home</span>
//             </Link>
//           </li><br />
//           <li>

//             <a href="#" className={buttonClassName}
//               onClick={handleClick} disabled={!isEnrolled}>
//               <i className="fa fa-image nav-icon" />
//               <span className="nav-text">Enrollment</span>
//             </a>
//           </li>
//           <br />
//           <li>
//             <a href="#">
//               <i className="fa fa-pen nav-icon" />
//               <span className="nav-text">Examination Form</span>
//             </a>
//           </li><br />
//           <li>
//             <a href="#">
//               <i className="fa fa-envelope nav-icon" />
//               <span className="nav-text">Admit Card</span>
//             </a>
//           </li><br />
//           <li>
//             <a href="#">
//               <i className="fa fa-bell nav-icon" />
//               <span className="nav-text">Online Payments </span>
//             </a>
//           </li><br />
//           <li>
//             <a href="#">
//             <Link
//                 to="/erp/studentlogin">
//               <i className="fa fa-right-from-bracket nav-icon" />
//                <span className="nav-text">  Logout </span></Link>
//             </a>
//           </li><br />
//         </ul>
//         <ul className="logout">


//         </ul>
//       </nav>

//     </>


//   );
// }

// StudentDashboard.propTypes = {
//   window: PropTypes.func,
// };
// export default StudentDashboard;
import * as React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import OnlyHeaders from "./OnlyHeaders";
import swal from "sweetalert";
const theme = createTheme({
  typography: {
    fontWeightBold: 700,
  },
});
function StudentDashboard(props) {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (userData && userData.isEnrolled === false) {
      navigate("/studentDetail");
    } else {
      // console.log("User is not enrolled. You can provide a message or take some other action.");
      swal({
        icon: "error",
        title: 'Oops!!',
        text: 'You have already filled Enrollment form so You are Already Enrolled !!!',
      });
    }
  };
  const userData = JSON.parse(sessionStorage.getItem("currentUser"));

  const isEnrolled = userData && userData.isEnrolled;
  const buttonClassName = isEnrolled ? "disabled" : "enabled";


  return (
    <>
      <OnlyHeaders />
      <style>
        {`
  @import url("https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap")
  nav {
    user-select:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    -o-user-select:none;
  }
  nav > ul,
  nav > ul > li {
    outline: 0;
  }
  nav > ul > li > a {
   text-decoration: none;
  }
  .main-menu {
    position:fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 64px;
    overflow:hidden;
    // background: #000428;
     background: linear-gradient(to right ,#1f487e, #000000);
    background:#25313e;
    transition: width .05s linear;
    -webkit-transition: width .05s linear;
    z-index: 10;
    padding-top: 10px;
    margin-Top:50px
  }

  .main-menu:hover {
    width: 250px;
    overflow:visible;
  }

  .main-menu > ul > li {
    position: relative;
    display: block;
    width: 180px;
  }

  .main-menu > ul > li > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color:#999;
    font-size: 1rem;
    transition:all 0.1s linear;
    -webkit-transition:all 0.1s linear;
    padding: 10px 0;
  }

  .nav-icon {
    width: 60px;
    height: 20px;
    font-size: 20px;
    text-align: center;
  }

  .nav-text {
    width: 95px;
    height: 20px;
    font-family: "Mulish", sans-serif;
  }

  .logout {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color:white;
  }

  .main-menu li:hover > a, .main-menu li.active > a, .main-menu li > a:focus {
    text-decoration: none;
    color: #fff;
    background-color: rgb(29, 79, 215, 0.7);
  }

  /* ANIMATED BACKGROUND */



  .blob-c {
    min-height: 100vh;
    overflow: hidden;
    position:absolute;
    width: 100%;
    filter: blur(40px);
  /*   background: rgba(255,255,255,0.1) */
  }

  .blob {
    background:#26C3F9;
    height: 60px;
    width: 80px;
    border-radius: 40% 50% 30% 40%;
    animation: transform 18s ease-in-out infinite both alternate,
movement_one 12s ease-in-out infinite both;
    opacity:.7;
    position: absolute;
    left: 75%;
    top: 40%;
  }

  .blob.one{
    background:#0085FF;
    height: 150px;
    width: 200px;
    left: 10px;
    top: 10px;
    transform: rotate(-180deg);
    animation: transform 8s ease-in-out infinite both alternate,
movement_two 20s ease-in-out infinite both;
  }

  .blob.two{
    background:#4EAEFF;
    height: 150px;
    width: 150px;
    left: 600px;
    top: 250px;
    transform: rotate(-180deg);
    animation: transform 10s ease-in-out infinite both alternate,
movement_two 10s ease-in-out infinite both;
  }

  .blob.three{
    background:#0EAFFF;
    height: 150px;
    width: 150px;
    left: 800px;
    top: 30px;
    transform: rotate(-180deg);
    animation: transform 7s ease-in-out infinite both alternate,
movement_two 23s ease-in-out infinite both;
  }

  .blob.four{
    background:#4EAEFF;
    height: 100px;
    width: 100px;
    left: 500px;
    top: 60px;
    transform: rotate(-180deg);
    animation: transform 17s ease-in-out infinite both alternate,
movement_two 12s ease-in-out infinite both;
  }

  .blob.five{
    background:#0085FF;
    height: 100px;
    width: 80px;
    left: 480px;
    top: 250px;
    transform: rotate(-180deg);
    animation: transform 12s ease-in-out infinite both alternate,
movement_two 18s ease-in-out infinite both;
  }

  .blob.six{
    background:#0EAFFF;
    height: 70px;
    width: 100px;
    left: 160px;
    top: 400px;
    transform: rotate(-180deg);
    animation: transform 5s ease-in-out infinite both alternate,
movement_two 7s ease-in-out infinite both;
  }

  .blob.seven{
    background: #0085FF;
    height: 70px;
    width: 100px;
    left: 400px;
    top: 400px;
    transform: rotate(-180deg);
    animation: transform 5s ease-in-out infinite both alternate,
movement_two 12s ease-in-out infinite both;
  }

  @keyframes transform
  {
      0%,
    100% { border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%; }
     20% { border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%; }
     40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%; }
     60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%; }
     80% { border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%; }
  }

  @keyframes movement_one
  {
      0%,
    100% { transform: none; }
     50% { transform: translate(50%, 20%) rotateY(10deg) scale(1); }
  }

  @keyframes movement_two
  {
      0%,
    500% { transform: none; }
     50% { transform: translate(50%, 100%) rotate(-200deg) scale(1.3);}
  }


  /* CARD */

  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    padding: 80px 40px 40px 80px;
  }

  .card {
    width: min(100%, 500px);
    background: rgba(255, 255, 255);
    border-radius: 16px;
    font-family: "Poppins", sans-serif;
    z-index: 5;
  }

  .card > img {
    display: block;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 4/3;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 16px 16px 0 0;
    filter: contrast(70%);
    transition: all 0.6s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  }

  .card > img:hover {
    filter: contrast(100%);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    padding: 20px 15px 20px;
  }

  .card-content > p {
    margin-bottom: 10px;
  }

  .card-content > p:nth-child(1) {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #1e40af;
  }

  .card-content > p:nth-child(2) {
    font-size: 0.8rem;
    font-weight: 400;
    color: #6b7280;
  }

  @media (max-width: 900px) {
    section {
       grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    section {
       grid-template-columns: repeat(1, 1fr);
    }
  }`}
      </style>

      <nav className="main-menu">
        <ul style={{ marginBottom: "210px", marginLeft: "-53px" }}><br /><br />
          <li>
            <Link to="/studentalldetail">
              <i className="fa fa-home nav-icon" />
              <span className="nav-text" style={{
                fontWeight: 'bold'
              }}>Home</span>
            </Link>
          </li><br />
          <li>
            {/* <a href="#" >
              <i className="fa fa-image nav-icon" />
              <span className="nav-text" onClick={handleClick}
style={{ cursor: isEnrolled ? 'pointer' : 'not-allowed', color:
isEnrolled ? 'black' : 'gray' }}>
                Enrollment
              </span>

            </a> */}
            <a href="#" className={buttonClassName}
              onClick={handleClick} disabled={!isEnrolled}>
              <i className="fa fa-image nav-icon" />
              <span className="nav-text">Enrollment</span>
            </a>
          </li>
          <br />
          <li>
            <a href="#">
              <i className="fa fa-pen nav-icon" />
              <span className="nav-text">Examination Form</span>
            </a>
          </li><br />
          <li>
            <a href="#">
              <i className="fa fa-envelope nav-icon" />
              <span className="nav-text">Admit Card</span>
            </a>
          </li><br />
          <li>
            <a href="#">
              <i className="fa fa-bell nav-icon" />
              <span className="nav-text">Online Payments </span>
            </a>
          </li><br />
          <li>
            <a href="#">
              <Link
                to="/erp/studentlogin">
                <i className="fa fa-right-from-bracket nav-icon" />
                <span className="nav-text">  Logout </span></Link>
            </a>
          </li><br />
        </ul>
        <ul className="logout">


        </ul>
      </nav>

    </>


  );
}

StudentDashboard.propTypes = {
  window: PropTypes.func,
};
export default StudentDashboard;