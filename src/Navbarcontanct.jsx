import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "./images/sssutms.jpg"
import $ from "jquery";




function Navbarcontanct() {
  const [isNavFixed, setIsNavFixed] = useState(false);

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
<style>
  {`
  *, html{
    scroll-behavior: smooth;
}

*, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

:root{
    --white:#FFF;
    --black:#000;
    --lite:rgba(255,255,255,0.6);
    --gray:rgba(1,1,1,0.6);
    --dark:#101010;
    --primary:linear-gradient(145deg,#002347,#3399ff);
    --primary_dark:#002347;
    --primary_lite:#3399ff;
    --secondary:#3ab068;
    --default_font:'Mukta', sans-serif;
    --title_font:'Kanit', sans-serif;
}

::-webkit-scrollbar {
    height: 12px;
    width: 8px;
    background: var(--dark);
}

::-webkit-scrollbar-thumb {
    background: gray;
    -webkit-box-shadow: 0px 1px 2px var(--dark);
}

::-webkit-scrollbar-corner {
    background: var(--dark);
}





/***************************
            DEFAULT
****************************/


a{
    text-decoration:none !important;
    min-width: fit-content;
    width: fit-content;
    width: -webkit-fit-content;
    width: -moz-fit-content;
}

a, button{
    transition:0.5s;
}

em{
    font-style:normal;
    color:var(--primary_lite);
}

ul{
    padding:0;
}

figure{
    padding:0;
    margin:0;
}

a, p, .btn{
    font-size:15px;
}

p{
    line-height:1.9em;
    color:var(--lite);
}

a, button, input, textarea, select{
    outline:none !important;
}

fieldset{
    border:0;
}

h1, h2, h3, h4, h5, h6{
    margin:0;
}

.title, .sub_title{
    font-family:var(--title_font);
    font-weight:400;
    margin:0;
}

.flex, .fixed_flex{
    display:flex;
}

.flex_content{
    width:100%;
    position:relative;
}

.padding_1x{
    padding:1rem;
}

.padding_2x{
    padding:2rem;
}

.padding_3x{
    padding:3rem;
}

.padding_4x{
    padding:4rem;
}

.big{
    font-size:3.5em;
}

.medium{
    font-size:2em;
}

.small{
    font-size:1.1em;
}

.btn{
    padding:1rem;
    border-radius:5px;
    color:var(--white);
    position:relative;
    border:0;
    text-align:center;
    font-weight:500;
}

.btn_1{
    background:var(--primary_lite);
    color:var(--dark) !important;
}

.btn_1:hover{
    opacity:0.8;
}

.btn_2{
    background-color:#fdc632;
    color:var(--dark) !important;
}

.btn_2:hover{
    opacity:0.8;
    color:var(--dark);
}

.btn_3{
    display:block;
    background-color:0;
    color:var(--white);
    position:relative;
    font-family:var(--default_font);
    font-weight:400;
    text-transform:uppercase;
}

.btn_3:before{
    content:"";
    border-radius:50%;
    background-color:rgba(255,255,255,0.2);
    position:absolute;
    left:0;
    top:50%;
    width:50px;
    height:50px;
    transition:0.5s;
    transform:translate(0%, -50%);
}

.btn_3:after{
    content:"\f178";
    font-family:"FontAwesome";
    margin-left:5px;
}

.btn_3:hover:before{
    border-radius:40px;
    width:100%;
}

.divisions{
    position:relative;
}

.title_header{
    margin:auto;
    text-align:center;
    width:60%;
}

.ball:before{
    content:"";
    border-radius:50%;
    background-color:rgba(1,1,1,0.2);
    position:absolute;
    left:0;
    top:50%;
    width:30px;
    height:30px;
    transform:translate(-50%, -50%);
}

.link-tag{
    position:relative;
    color:var(--black);
}

.link-tag:before{
    content:"\f0da";
    font-family:"FontAwesome";
    margin-right:5px;
    transition:0.5s;
    color:var(--primary);
}

.link-tag:hover:before{
    margin-right:10px;
    color:var(--black);
}

.link-tag:hover{
    color:var(--primary);
}

@media (max-width:920px){
    .flex{
        flex-wrap:wrap;
    }

    .padding_1x, .padding_2x, .padding_3x, .padding_4x{
        padding:1rem;
    }

    .big{
        font-size:1.8em;
    }

    .medium{
        font-size:1.6em;
    }

    .small{
        font-size:1.1em;
    }

    .btn{
        padding:0.5rem 1rem;
    }

    a, p, .btn{
        font-size:12px;
    }

    .title_header{
        width:100%;
    }
}





/*NAV*/
nav{
    display:flex;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding:0.1rem 2rem;
    z-index:99;
    white-space:nowrap;
    transition:0.5s;
    color:var(--lite);
    background-color:var(--white);
    transition:0.5s;
}

.fixed_nav{
    width:100%;
    position:fixed;
    top:0;
    box-shadow:0px 6px 16px -6px var(--gray);
    animation: fixed_nav 1s linear 1;
}

nav a{
    padding:0.8rem 0;
    color:var(--gray);
    margin:0 1.5rem;
    /* text-transform:uppercase; */
    font-weight:400;
    position:relative;
    white-space:nowrap;
}

nav .active{
    color:var(--primary_lite) !important;
    border-bottom:2px solid var(--primary_lite);
}

.logo{
    font-size:1.6em;
    align-items:center;
    margin-top:10px;
    color:var(--primary_dark);
}

.logo img{
    width:50px;
    border-radius:50%;
    margin-right:4px;
}

.logo em{
    font-weight:800
}

.logo sub{
    font-size:12px;
    position:relative;
    top:5px;
}

.logo figcaption{
    font-size:12px;
    text-align:center;
    color:var(--primary);
    font-weight:300;
}

.logo figcaption strong{
    display:block;
    font-size:20px;
    position:relative;
    top:5px;
    line-height:1;
    font-weight:800;
}

nav .flex_content:nth-child(2) a:after{
    transition:0.5s;
    content:"";
    position:absolute;
    left:0;
    width:0;
    top:100%;
    height:2px;
    background:var(--primary_lite);
}

nav a:hover{
    color:var(--primary_lite);
}

nav .flex_content:nth-child(2) a:hover:after{
    width:100%;
}

nav .ham{
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    border:2px solid var(--gray);
    width:40px;
    height:40px;
    color:var(--gray);
    float:right;
    margin-right:0;
}

nav .ham:hover{
    border:2px solid var(--primary_lite);
}

.top_menu{
    background-color:var(--primary_dark);
    padding:0.1rem 3rem;
    margin:0;
    align-items:center;
    justify-content:center;
}

.top_menu .flex_content:last-child{
    text-align:right;
}

.top_menu a{
    color:var(--lite);
    font-size:14px;
    white-space:nowrap;
}

.top_menu a:not(:last-child){
    margin-right:20px;
}

.top_menu a .fa{
    margin-right:5px;
}

.side_menu{
    width:400px;
    background-color:var(--dark);
    z-index:999;
    position:fixed;
    top:0;
    right:-400px;
    overflow:hidden;
    height:100vh;
    overflow-y:auto;
    transition:0.5s;
    padding:2rem 2rem;
    margin:0;
    color:var(--white);
}

.side_menu h4{
    line-height:1.6em;
}

.overlay{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    transition:0.5s;
    opacity:0;
    z-index:-1;
    background-color:var(--gray);
}

.close{
    float:right;
    border:2px solid var(--lite);
    border-radius:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height:32px;
    padding:0.5rem;
    color:var(--lite);
    position:absolute;
    top:5%;
    right:5%;
}

.close:hover{
    color:var(--white);
    border:2px solid var(--white);
}

.side_menu li{
    padding:0.4rem 0;
    list-style:none;
}

.side_menu li a{
    color:var(--lite);
}

.side_menu li a:hover{
    color:var(--white);
}

.side_menu ul:last-child li:not(:last-child) a:hover:before{
    margin-right:10px;
}

.side_menu .btn{
    display:block;
    padding:0.5rem 1rem;
}

.side_menu .btn:first-child{
    margin-right:5px;
}

.side_menu ul:last-child li:not(:last-child) a:before{
    content:"\f0da";
    font-family:"FontAwesome";
    margin-right:5px;
    transition:0.5s;
}

.side_menu ul li .fa{
    margin-right:5px;
    color:var(--white);
}

.dropdown{
    position:relative;
}

.dropdown aside{
    position:relative;
    width:100%;
    left:1rem;
    display:none;
}

.dropdown aside a{
    display:block;
    padding:0.3rem 0;
}


@media (max-width:920px){
    .top_menu{
        justify-content:center;
        text-align:center;
        padding:0.1rem 1rem;
    }

    .top_menu .flex_content:last-child{
        display:none;
    }

    nav{
        padding:0.5rem 1rem;
        z-index:999;
    }

    nav .ham{
        width:30px;
        height:30px;
    }

    nav .nav_content{
        width:200px;
        background-color:var(--dark);
        z-index:999 !important;
        position:fixed;
        top:0;
        right:-200px;
        overflow:hidden;
        height:100%;
        transition:0.5s;
    }

    .side_menu{
        width:100%;
        right:-120%;
    }

    .side_menu li{
        padding:0.4rem 0;
    }

    .logo{
        margin-top:5px;
    }

    .logo img{
        font-size:1.3em;
        margin-top:0;
        width:40px;
    }
}








.navbar-nav .nav-link {
    color: #fff;
  }
  .dropend .dropdown-toggle {
    color: salmon;
    margin-left: 1em;
  }
  .dropdown-item:hover {
    background-color: lightsalmon;
    color: #fff;
  }
  .dropdown .dropdown-menu {
    display: none;
  }
  .dropdown:hover > .dropdown-menu,
  .dropend:hover > .dropdown-menu {
    display: block;
    margin-top: 0.125em;
    margin-left: 0.125em;
  }
  @media screen and (min-width: 769px) {
    .dropend:hover > .dropdown-menu {
      position: absolute;
      top: 0;
      left: 100%;
    }
    .dropend .dropdown-toggle {
      margin-left: 0.5em;
    }
  }
  `}
</style>

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
            1234567890
          </a>
        </section>
        <section className="flex_content">
          <a href="#" title="Facebook">
            <i className="fa fa-facebook" />
          </a>
          <a href="#" title="Instagram">
            <i className="fa fa-instagram" />
          </a>
          <a href="#" title="Twitter">
            <i className="fa fa-twitter" />
          </a>
          <a href="#" title="youtube">
            <i className="fa fa-youtube" />
          </a>
        </section>
      </menu>
      {/*NAV*/}
      <nav>
        <section className="flex_content">
          <figure className="logo fixed_flex">
            <img
              src={logo} alt="" />
            <figcaption>
              <strong className="title">Sri Satya Sai </strong>
University of Technology & Medical Science
            </figcaption>
          </figure>
        </section>
        <div style={{ display: "flex" }}>
          <section className="flex_content nav_content" id="nav_content">
            <Link to='/'>
              <h5 style={{ color: "black", marginLeft: "50px"
}}><b>Home</b></h5>
            </Link>

            <div class="dropdown">
              {/* <Link>  <h4 style={{color:"#6e6e9e",
marginLeft:"30px"}}>About</h4></Link> */}
              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px"
}}><b>About</b></h5>
                {/*SVG dropdown icon*/}
                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3
0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7
12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3
4.7-17 0z" />
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
  <ul className="dropdown-menu" style={{ marginTop: "-45%",
marginLeft: "100%", maxHeight: "500px", overflowY: "auto",
backgroundColor:"#D3D3D3" }}>
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
  <ul className="dropdown-menu" style={{ marginTop: "-30%",
marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
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
  <ul className="dropdown-menu" style={{ marginTop: "-60%",
marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
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
  <ul className="dropdown-menu" style={{ marginTop: "-30%",
marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
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

              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px"
}}><b>Examination</b> </h5>


                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3
0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7
12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3
4.7-17 0z" />
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
                <h5 style={{ color: "black", marginLeft: "-20px"
}}><b>Academic</b></h5>


                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3
0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7
12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3
4.7-17 0z" />
                </svg>
              </a>

              <div class="dropdown-content">


<div className="dropdown">
  <a
    className="dropdown"
    style={{ color: "black" }}
  >
    Faculties And Department
    <span className="arw4 is-triangle arw-bar is-right" />
  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-12%",
marginLeft: "100%", maxHeight: "500px", overflowY:
"auto",backgroundColor:"#D3D3D3" }}>
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
  <ul className="dropdown-menu" style={{ marginTop: "-30%",
marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
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
  <ul className="dropdown-menu" style={{ marginTop: "-30%",
marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
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

                 <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Activities
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-40%",
marginLeft: "100%" ,backgroundColor:"#D3D3D3"}}>
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

                 <div className="dropdown">
  <a
  style={{color:"black"}}
    className="dropdown"
  >
Training & Placement
 <span className="arw4  is-triangle arw-bar is-right" />

  </a>
  <ul className="dropdown-menu" style={{ marginTop: "-30%",
marginLeft: "100%",backgroundColor:"#D3D3D3" }}>
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




              </div>
            </div>

            <div class="dropdown">

              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px"
}}><b>Research</b> </h5>


                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3
0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7
12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3
4.7-17 0z" />
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

              <a href="#">
                <h5 style={{ color: "black", marginLeft: "-20px"
}}><b>Admission</b>  </h5>


                <svg
                  className="icon"
                  width={14}
                  height={16}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3
0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7
12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3
4.7-17 0z" />
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
              <Link to="/contact"><h5 style={{ color: "black",
marginLeft: "-20px" }}><b>Contact</b></h5></Link>


            </div>

            <Link to="/erp"><h5 style={{ color: "red", marginLeft:
"-20px" }}><b>ERP</b></h5></Link>
            <div class="dropdown">



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



    </>
  );
}

export default Navbarcontanct;