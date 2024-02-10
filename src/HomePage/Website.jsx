import React, { useEffect } from "react";
import "./Website.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import SliderRequiter from "./SliderRequiter";
import About from '../HomePage/About';
import Facilities from '../HomePage/Facilities';
import sacn from '../images/scan.jpeg';
import Our from '../HomePage/Our';
import PosI from '../images/Event1.png';
import PosI1 from '../images/Event5.png';
import PosI2 from '../images/Event14.png';
import PosI3 from '../images/Event12.png';
import logo from '../images/sssutms.jpg';
import Counter from "./Counter";
import Imp from '../images/IMG_00011_page-0001.jpg'
import Off from '../images/office_Order_page-0001.jpg'
import Not from '../images/IMG_page-0001.jpg'
import ex from '../images/Notice_Copy_page-0001.jpg'
const Website = () => {
  // Global variables
  let element;

  // Detect onclick event
  useEffect(() => {
    if (window.matchMedia("(max-width: 920px)").matches === false) {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "99");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-500px");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    } else {
      $(".ham").on("click", function () {
        $(".side_menu").css("right", "0px");
        $(".overlay").css("opacity", "1");
        $(".overlay").css("z-index", "9");
      });

      $(".close").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });

      $(".overlay").on("click", function () {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      });
    }
  }, []);

  // Scroller Nav
  window.onscroll = function () {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("nav").addClass("fixed_nav");
    } else {
      $("nav").removeClass("fixed_nav");
    }
  };

  // Detect ESC Key Pressed
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      if ($(".overlay").css("opacity") === "1") {
        $(".contact").css("top") >= "10%"
          ? $(".contact").hide().css("top", "-100%").fadeOut("100")
          : $(".side_menu").css("right", "-120%");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("z-index", "-1");
      }
    }
  };

  // Dropdown
  $(".dropdown").click(function () {
    if ($(this).children("aside").is(":hidden")) {
      $(this).children("aside").show("slow");
      $(this).children("a").css("color", "var(--white)");
    } else {
      $(this).children("aside").hide("slow");
      $(this).children("a").css("color", "var(--lite)");
    }
  });

  // Global variables
  let slidestoshow, arrowmark;
  if (window.matchMedia("(max-width: 920px)").matches === false) {
    slidestoshow = 4;
    arrowmark = true;
  } else {
    slidestoshow = 1;
    arrowmark = false;
  }



  return (
    <>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/*GOOGLE FONTS*/}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      {/*PLUGIN*/}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
      />
   {/*TOP MENU*/}
   <menu className="top_menu flex">
        <section className="flex_content">
          <a href="emailto:info@lilliovi.com">
            <i className="fa fa-envelope-o" />
            SSSUTMS.AC.IN
          </a>
          <a href="tel:1234567890">
            <i className="fa fa-headphones" />
            +91-07562-292201
          </a>
          <Link to="/erp/studentregister">
            <a style={{ color: 'whitesmoke', animation: 'blink 1s infinite' }}>
              E-Pravesh
              <style>
                {`
           @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
            }
          `}
              </style>
            </a>
          </Link>
        </section>
        <section className="flex_content"></section>
      </menu>

      {/*NAV*/}
      <nav>
        <section className="flex_content">
          <figure className="logo fixed_flex">
            <img
              src={logo} alt="" />
            <figcaption>
              <strong className="title">Sri Satya Sai </strong> University of Technology & Medical Science
            </figcaption>
          </figure>
        </section>
        <div style={{ display: "flex" }}>
          <section className="flex_content nav_content" id="nav_content">
            <Link to='/'>
              <h5 style={{ color: "black", marginLeft: "50px" }}><b>Home</b></h5>
            </Link>

            <div class="dropdown">
              {/* <Link>  <h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>About</h4></Link> */}
              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px" }}><b>About</b></h5>
                {/*SVG dropdown icon*/}
                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </a>
              {/* <a href="#gallery">About</a> */}

              <div class="dropdown-content">
                <Link to="/background-page" >Background</Link>
                <Link to="/institutes">Institutes</Link>
            

  <div className="dropdown">
  <a
    className="dropdown"
    style={{ color: "black" }}
  >
    University Officials
    <span className="arw4 is-triangle arw-bar is-right" />
  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-45%", marginLeft: "100%", maxHeight: "500px", overflowY: "auto", backgroundColor:"#D3D3D3" }}>
  <li>
      {/* <a href="#"></a> */}
      <Link to = "/chancellor">Chancellor</Link>
    </li>
    <li>
    <Link to = "/vice-chancellor">Vice Chancellor</Link>
    </li>
   <li>
   <Link to = "/registrar">Registrar</Link>
    </li>
    <li>
    <Link to = "/deputy-registrar">Deputy Registrar</Link>
   </li>
    <li>
      <a href="#">Governing Body</a>
    </li>
    <li>
      <a href="#">Dean</a>
    </li>
    <li>
      <a href="#">Board Of Management</a>
    </li>
    <li>
      <a href="#">Head Of The Department</a>
    </li>
    <li>
      <a href="#">Academic Council</a>
    </li>
    <li>
      <a href="#">Finance Committee</a>
    </li>
    <li>
      <a href="#">Standing Committee</a>
    </li>
 </ul>
</div>
               
           <Link to="/promoting-society">Promoting Society</Link>
                {/* <a href="#about">Approvals & Ordinances</a> */}
                <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Approvals & Ordinances
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-30%", marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">Approvals</a>
    </li>
    <li>
      <a href="#">Ordinances</a>
    </li>
   </ul>
               </div>
               <Link to="/vision-mission">VisionMission</Link>
                <Link to="/core-values">Core Values</Link>
                <Link to="/best-practicess">Best Practices</Link>
                <a href="#about">Notifications</a>
                {/* <a href="#about">Amenities</a> */}
                <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Amenities
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-60%", marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">Transportation</a>
    </li>
    <li>
      <a href="#">Hostel</a>
    </li>
   <li>
      <a href="#">Library</a>
    </li>
    <li>
      <a href="#">Medical Factility </a>
    </li>
    <li>
      <a href="#">Guest House</a>
    </li>
   </ul>
               </div>


                {/* <a href="#about">NCC</a> */}
                <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
NCC
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-30%", marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">NCC MOU</a>
    </li>
    <li>
      <a href="#">Activity</a>
    </li>
  
  </ul>
               </div>
                
              </div>
            </div>

            <div class="dropdown">
              {/* <a href="#about">Examination</a> */}
              {/* <Link> <h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Examination</h4></Link>  */}
              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px" }}><b>Examination</b> </h5>

                {/*SVG dropdown icon*/}
                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </a>
              <div class="dropdown-content">
                <Link to="/entrance-exam-alert">Entrance Exam Alert</Link>
                <Link to="/exam-notifications">Exam Notifications</Link>
                <Link to="/exam-schedule" >Exam Schedule</Link>
                <Link to="/result">Results</Link>
                <Link to="/interFace">InterFace</Link>
              </div>
            </div>


            <div class="dropdown">
              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px" }}><b>Academic</b></h5>

                {/*SVG dropdown icon*/}
                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </a>
              {/* <a href="#about">Academic</a> */}
              {/* <Link><h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Academic</h4></Link>  */}
              <div class="dropdown-content">
                {/* <a href="#gallery">Faculties And Department</a> */}
                {/* <div className="dropdown">
  <a

    className="dropdown"
    style={{color:"black"}}
  >
Faculties And Department
 <span className="arw4  is-triangle arw-bar is-right"  /> 

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-15%", marginLeft: "100%" }}>
  <li>
      <a href="#">Engineering And Technology</a>
    </li>
    <li>
      <a href="#">Pharmacy</a>
    </li>
    <li>
      <a href="#">Education</a>
    </li>
    <li>
      <a href="#">Management</a>
    </li>
    <li>
      <a href="#">Design</a>
    </li>
    <li>
      <a href="#">Humanities And Languages</a>
    </li>
    <li>
      <a href="#">Computer Science And Application</a>
    </li>
    <li>
      <a href="#">Commerce</a>
    </li>
    <li>
      <a href="#">Science</a>
    </li>
    <li>
      <a href="#">Ayurveda</a>
    </li>
    <li>
      <a href="#">Law</a>
    </li>
    <li>
      <a href="#">Homeopathy</a>
    </li>
    <li>
      <a href="#">Paramedical</a>
    </li>
    <li>
      <a href="#">Nursing</a>
    </li>
   
   </ul>
               </div> */}

<div className="dropdown">
  <a
    className="dropdown"
    style={{ color: "black" }}
  >
    Faculties And Department
    <span className="arw4 is-triangle arw-bar is-right" />
  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-12%", marginLeft: "100%", maxHeight: "500px", overflowY: "auto",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">Engineering And Technology</a>
    </li>
    <li>
      <a href="#">Pharmacy</a>
    </li>
    <li>
      <a href="#">Education</a>
    </li>
    <li>
      <a href="#">Management</a>
    </li>
    <li>
      <a href="#">Design</a>
    </li>
    <li>
      <a href="#">Humanities And Languages</a>
    </li>
    <li>
      <a href="#">Computer Science And Application</a>
    </li>
    <li>
      <a href="#">Commerce</a>
    </li>
    <li>
      <a href="#">Science</a>
    </li>
    <li>
      <a href="#">Ayurveda</a>
    </li>
    <li>
      <a href="#">Law</a>
    </li>
    <li>
      <a href="#">Homeopathy</a>
    </li>
    <li>
      <a href="#">Paramedical</a>
    </li>
    <li>
      <a href="#">Nursing</a>
    </li>
    

  </ul>
</div>

                <Link to="/phd-page">PHD</Link>
                <Link to="/academic-calender">Academic Calender</Link>
             
                {/* <a href="#about">Committee</a> */}
                <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Committee
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-30%", marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">Anti Ragging</a>
    </li>
    <li>
      <a href="#">Proctorial Board</a>
    </li>
    <li>
      <a href="#">Internal Complaint</a>
    </li>
    <li>
      <a href="#">Grievance Redressal</a>
    </li>
    <li>
      <a href="#">For SC-ST</a>
    </li>
    <li>
      <a href="#">EDC</a>
    </li>
    <li>
      <a href="#">International Higher Education Cell</a>
    </li>
    <li>
      <a href="#">Incubation Cell</a>
    </li>
   </ul>
               </div>
                <Link to="/scholarship">Scholarship</Link>
                <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
NAAC 
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-30%", marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">SSR</a>
    </li>
    <li>
      <a href="#">Criteria-1</a>
    </li>
    <li>
      <a href="#">Criteria-2</a>
    </li>
    <li>
      <a href="#">Criteria-3</a>
    </li>
    <li>
      <a href="#">Criteria-4</a>
    </li>
    <li>
      <a href="#">Criteria-5</a>
    </li>
    <li>
      <a href="#">Criteria-6</a>
    </li>
   </ul>
               </div>
                <Link to="/constituent-units">Constituent Units</Link>
                 {/* <a href="#about">Activities</a> */}
                 <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Activities  
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-40%", marginLeft: "100%" ,backgroundColor:"#D3D3D3"}}>
  <li>
      <a href="#">Expert Lectures</a>
    </li>
    <li>
      <a href="#">Webinar</a>
    </li>
    <li>
      <a href="#">Industrial Visits</a>
    </li>
    <li>
      <a href="#">Events</a>
    </li>
    <li>
      <a href="#">FDP</a>
    </li>
    <li>
      <a href="#">Workshop & Seminars</a>
    </li>
   </ul>
               </div>
                <Link to="/Hei-handbook">HEI Handbook</Link>
                 {/* <a href="#about">Training & Placement</a> */}
                 <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Training & Placement  
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-30%", marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
  <li>
      <a href="#">Training And Placement Cell</a>
    </li>
    <li>
      <a href="#">Training Partner</a>
    </li>
   </ul>
               </div>
                <a href="#about">IQAC Cell</a>
                <Link to="/mandatory-discIosures">Mandatory DiscIosures</Link>

                {/* <a href="#about">NAAC</a> */}
              

              </div>
            </div>

            <div class="dropdown">
              {/* <a href="#about">Research</a> */}
              {/* <Link><h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Research</h4></Link>  */}
              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px" }}><b>Research</b> </h5>

                {/*SVG dropdown icon*/}
                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </a>
              <div class="dropdown-content">
                <Link to="/director(R&D)">Director (R&D)</Link>
                <Link to="/R&D-cell">R & D cell</Link>
                <Link to="/consultancy-services">Council For Research</Link>



                <a href="#about">Research Promotion Policy</a>
                <a href="#about">Consultancy Services</a>
                <a href="#about">Pantents</a>
                <a href="#about">Collaboration & Mou</a>
                <a href="#about">IIC Cell</a>
                <a href="#about">E- Resources</a>
                <a href="#about">Exposition</a>
                <a href="#about">UG & PG Scholars Project</a>
                <a href="#about">NPTEL</a>


              </div>
            </div>





            <div class="dropdown">
              {/* <a href="#about">Admission</a> */}
              {/* <Link>   <h4 style={{color:"#6e6e9e", marginLeft:"30px"}}>Admission</h4></Link> */}
              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px" }}><b>Admission</b>  </h5>

                {/*SVG dropdown icon*/}
                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
                </svg>
              </a>

              <div class="dropdown-content">
                <a href="#gallery">Admission Registration</a>
                <a href="#about">Admission Notice</a>
                <a href="#about">University Acount Details</a>
                <a href="#about">Fees Structure</a>
                <a href="#about">Admission Procedure</a>
                <a href="#about">Brochures</a>

              </div>
            </div>

            <div class="dropdown">
              <Link to="/contact"><h5 style={{ color: "black", marginLeft: "-20px" }}><b>Contact</b></h5></Link>
              {/* <Link> <h4 style={{ marginLeft:"30px", color:"red"}}>Erp</h4></Link>   */}

            </div>

            <Link to="/erp"><h5 style={{ color: "red", marginLeft: "-20px" }}><b>ERP</b></h5></Link>
            <div class="dropdown">

              {/* <Link> <h4 style={{ marginLeft:"30px", color:"red"}}>Erp</h4></Link>   */}

            </div>

          </section>
        </div>

        <section className="flex_content">
          <a href="javascript:void(0)" className="ham">
            <i className="fa fa-bars" />
          </a>
        </section>
      </nav>

      {/*MENU*/}
      <menu id="menu" className="side_menu" >
        <a href="javascript:void(0)" className="close">
          <i className="fa fa-times" />
        </a>
        <strong className="fixed_flex logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/SSSUTMS_Logo.png"
            alt="Summit"
            loading="lazy"
          />
        </strong>
        <br />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#"> EXAMINTION</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li className="dropdown">
            <a href="javascript:void(0)">Mandatory Disclosure</a>
            <aside>
              <a href="#">Society registration</a>
              <a href="#">NOC</a>
            </aside>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <Link to="/erp"><a href="#">ERP</a></Link>
          </li>
          <li className="fixed_flex">
            <a href="javascript:void(0)" className="btn btn_1 chat_popup">
              SignUp/LogIn
            </a>{" "}
            <a href="#" className="btn btn_2 chat_popup">
              Admission
            </a>{" "}
          </li>
        </ul>
      </menu>
      {/*HEADER*/}
      <header className="custom-header">
        <article>
          <h1 className="title big">
            Welcome to <br />
            <em>Sri Satya Sai</em> University of Technology & Medical Science
          </h1>
          <p>
            SSSUTMS: Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States,
            due to the quality of education at an affordable cost, without any hidden fees policy.
            In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions
            were the only Institutes in Sehore & nearby six districts offering Technical education at affordable fees to
            worthy & needy students belonging to more than six thousand villages, 34 Tehsils.
          </p>
          <a href="#" className="btn btn_3">
            Explore more
          </a>
        </article>
        <section className="flex">
          <aside className="padding_1x">
            <h2 className="sub_title">Admission</h2>
            <p>
              Admissions to various Technical, Professional & General Courses will be made in accordance with the guidelines provided by University
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Prospectus</h2>
            <p>
              This prospectus is for students interested in applying for undergraduate, postgraduate and ... These ethics and morals form the undercurrent of every subject ..
            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
          <aside className="padding_1x">
            <h2 className="sub_title">Features</h2>
            <p>
              Promote and facilitate collaborative and/or interdisciplinary research and enhancement
              of research networking capacity and infrastructure.

            </p>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </aside>
        </section>
      </header>
      {/*MAIN*/}
      <main>
        {/*division_2*/}
        <div className="divisions division_2 flex">
          <section className="flex_content padding_2x">
            <div className="title_header">
              <h2 className="title medium">Notifications</h2>
              <p>
                Coming soon new website www.sssutms.ac.in. Examination Form Notification B.H.M.S. & Paramedical
                Courses December - 2023 · APPOINTMENT (School of Homoeopathy).
              </p>
              <span className="bar_blue" />
            </div>
            <marquee
              direction="up"
              id="notification"
              onmouseover="this.stop();"
              onmouseleave="this.start();"
            >
              {/*notification begining*/}
              <Link to="/notification">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={sacn}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      BHMS and BAMS Notificaton{" "}
                    </h3><br />
                    <p>
                      BAMS vs BHMS - Full form. BAMS is commonly
                      abbreviated as a Bachelor of Ayurvedic Medicine and Surgery (BAMS)...
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        01-01-2024
                      </span>

                    </aside>
                  </article>
                </a>
              </Link>
              <Link to="/imp">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={Imp}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Important information related to examination
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        18-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/off">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={Off}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Office Order
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        18-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/not">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={Not}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Notification Ph.D. Course Work Examination 2023-24
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        12-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
              {/*notification begining*/}
              <Link to="/exam">
                <a href="#" className="flex fixed_flex">
                  <figure>
                    <img
                      src={ex}
                      alt=""
                      loading="lazy"
                    />
                  </figure>
                  <article>
                    <h3 className="title">
                      Sri Satya Sai  &amp; University Medical & Science{" "}
                    </h3><br />
                    <p>
                      Important information related to examination
                    </p>
                    <aside className="fixed_flex">
                      <span>
                        <i className="fa fa-calendar" />
                        05-01-2024
                      </span>

                    </aside>
                  </article>
                </a></Link>
              {/*notification ends*/}
            </marquee>
          </section>
          <section className="flex_content padding_2x" id="event">
            <div className="title_header">
              <h2 className="title medium">Events</h2>
              {/* <p>
                With a passion and zeal for the lost and hurting world, our
                church is looking for ways to build bridges to a cynical and
                jaded society.
              </p> */}
              {/* <span className="bar_white" /> */}
              <ul className="logo-slider event-slider">
                <li>
                  <h3 className="title small">
                    Sri Satya Sai University of Technology and Medical Sciences
                  </h3>
                  <p>
                    IPR Awareness Program.
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      {/* 16th June, 2023 (03:00 PM) */}
                      16<sub>June</sub>
                    </span>
                    <span>
                      2023
                    </span>
                    <span>
                      03<sub>PM</sub>
                    </span>
                    <span>
                      00<sub>Min</sub>
                    </span>
                  </aside>
                  {/* <Link to ="/evantdetails"> <a href="" className="btn btn_2">
                    Event details
                  </a></Link> */}

                </li>
                <li>
                  <h3 className="title small">

                    Sri Satya Sai University of Technology and Medical Sciences
                  </h3>
                  <p>
                    Introduction to COMSOL Multiphysics.
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      03<sub>July</sub>
                    </span>
                    <span>
                      2023
                    </span>
                    <span>
                      03<sub>PM</sub>
                    </span>
                    <span>
                      00<sub>Min</sub>
                    </span>
                  </aside>
                  {/* <a href="#" className="btn btn_2">
                    Event details
                  </a> */}
                </li>
                <li>
                  <h3 className="title small">
                    Sri Satya Sai University of Technology and Medical Sciences
                  </h3>
                  <p>
                    Workshop on Mendeley, Powered by Elsevier.
                  </p>
                  <aside className="fixed_flex">
                    <span>
                      05<sub>August</sub>
                    </span>
                    <span>
                      2023
                    </span>
                    <span>
                      02<sub>PM</sub>
                    </span>
                    <span>
                      00<sub>Min</sub>
                    </span>
                  </aside>
                  {/* <a href="#" className="btn btn_2">
                    Event details
                  </a> */}
                </li>

                <br />
                <Link to="/eventss">
                  <h5 style={{ color: "white", textDecorationLine: "underline" }}> View Details</h5>
                </Link>


              </ul>
            </div>
          </section>
        </div>
        <div>
          <About />
        </div><br /><br />
        <div>
          <Our />
        </div><br />
        <div>
          <Facilities />
        </div><br /><br />
        <div>
          <Counter />
        </div><br /><br />
        {/*division_3*/}

        {/*division_4*/}
        <div
          className="divisions division_4"
          onmousemove="animate_balls(event)"
        >
          <div className="title_header">
            <h2 className="title medium">
              We promise best future for your kids
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <aside className="fixed_flex">
              <a href="#" className="btn btn_1">
                Explore more
              </a>
              <i className="fa fa-angle-right" />
              <a href="javascript:void(0)">Gallery Portfolio</a>
            </aside>
          </div>
          <div className="cards">
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <span className="ball" />
            <section className="fixed_flex">
              <figure className="flex_content">
                <img
                  src={PosI}
                  alt=""
                  loading="lazy"
                />
              </figure>
              <figure className="flex_content">
                <img
                  src={PosI1}
                  alt=""
                  loading="lazy"
                />
              </figure>
              <figure className="flex_content">
                <img
                  src={PosI2}
                  alt=""
                  loading="lazy"
                />
              </figure>
              <figure className="flex_content">
                <img
                  src={PosI3}
                  alt=""
                  loading="lazy"
                />
              </figure>
            </section>
          </div>
        </div>
      </main><br /><br />

      <div style={{ marginTop: "70px" }}>
        <SliderRequiter />
      </div>
      {/*FOOTER*/}
      <footer className="padding_4x"  >

        <div className="footer_body flex">
          <section className="flex_content padding_1x">
            <figure className="logo fixed_flex">
              <img src={logo} alt="" />
              <figcaption>
                <strong className="title">Sri Satya Sai </strong> University of Technology & Medical Science
              </figcaption>
            </figure>
            <a href="#">
              <i className="fa fa-map-marker" />{" "}
              Opp.Oilfed Plant, Bhopal-Indore Road,Sehore (M.P), Pin - 466001
            </a>
            <a href="emailto:info@schotest.com">
              <i className="fa fa-envelope-o" /> {" "}
              sssutms.ac.in
            </a>
            <a href="tel:9315514145">
              <i className="fa fa-headphones" />{" "}
              (+91) 07562-292740 | 7562292720 <br />
              (+91) 7748900027 | 7748900028<br />
              (From 10:00 AM to 5:00 PM only)
            </a>
          </section>
          <section className="flex_content padding_1x">
            <h3>Useful Links</h3>
            <a href="#">Approvals</a>
            <a href="#">Mandatory Disclosures</a>
            <a href="#">Pay Fees</a>
            <a href="#">Examination Notification</a>
            <a href="#">Career</a>
            <a href="#">AICTE Feedback</a>
            <a href="#">Results</a>
            <Link to="/privacy-policy">
              Privacy-Policy
            </Link>
            <Link to="/refound-cancellation">
              Refund &amp; Cancellation
            </Link>

          </section>
          <section className="flex_content padding_1x">
            <h3>Logins</h3>
            <a href="#">Student Login</a>
            <a href="#">Admin Login</a>
            <a href="#">Verify Marksheet</a>
            <a href="#">E-Pravesh 2023</a>
            <a href="#">Entrance Exam Form</a>
            <a href="#">Entrance Exam Form</a>
            <a href="#">Alumni Registration Form</a>
            <a href="#">Online Grievance for Student</a>
            {/* <a href="#">Terms &amp; Conditions</a> */}
            <Link to="/terms-conditions">
              Terms &amp; Conditions
            </Link>

            {/* <a href="#">Refound &amp; Cancellation </a> */}
          </section>
          <section className="flex_content padding_1x">
            <h3>Help Desk</h3>
            {/* <p>
              You can trust us. we only send important notifications related to
              school.
            </p> */}
            <a href="#">Fax No : +91-07562-292201</a>
            <a href="#">Last Updated On : Fri Mar, 11 2022</a>

            {/* <fieldset className="fixed_flex">
              <input
                type="email"
                name="newsletter"
                placeholder="Your Email Address"
              />
              <button className="btn btn_2">Subscribe</button>
            </fieldset> */}
          </section>
        </div>
        <div className="flex">
          <section className="flex-content padding_1x">
            <p>Copyright ©2024 SSSUTMS . All Rights Reserved</p>
          </section>
          <section className="flex-content padding_1x">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
          </section>
        </div>
      </footer>
      {/*ADDITIONAL*/}
      <div className="overlay" />
      <div className="cursor" />
    </>
  );
};

export default Website;