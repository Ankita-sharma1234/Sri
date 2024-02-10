import React from 'react'
import { Link } from "react-router-dom";


import logo from "./images/sssutms.jpg"


function FooterContanct() {
  return (
   <>
   <style>{`
   
   footer{
    background-color:var(--primary_dark);
    color:var(--lite);
    margin-top:15rem;
    position:relative;
}

.footer_body{  
    padding-top:3rem;
}

.footer_body .flex_content:first-child{
    width:180%;
}

footer h3{
    color:var(--white);
    margin-bottom:1.5rem;
}

footer .logo{
    color:var(--white);
}

footer .logo img{
    width:50px;
}

footer .logo figcaption strong{
    margin-bottom:3px;
}

footer a{
    color:var(--lite);
    display:block;
    margin:10px 0;
}

footer a:hover{
    color:var(--white);
}

footer fieldset{
    padding:0;
}

footer fieldset input{
    background-color:#334f6c;
    border:0;
    color:var(--lite);
    padding:1rem;
}

footer fieldset .btn{
    border-radius:0;
    border:0;
}

footer fieldset .btn_2{
    background-color:var(--primary_lite);
    }

footer fieldset .btn_2:hover{
    background-color:var(--primary_lite);
    border:0;
    color:var(--primary);
}

footer .flex_content:nth-child(2) a:before, footer .flex_content:nth-child(3) a:before{
    content:"\f0da";
    font-family:"FontAwesome";
    margin-right:10px;
}

footer .flex_content:nth-child(2) a:hover, footer .flex_content:nth-child(3) a:hover{
    margin-left:5px;
}

footer .flex:last-child{
    align-items:center;
}

footer .flex:last-child .flex-content:last-child{
    text-align:right;
}

footer .flex:last-child p{
    color:var(--white);
}

footer .flex:last-child a{
    width:40px;
    display:inline-block;
    background-color:#334f6c;
    color:var(--white);
    padding:0.5rem;
    margin-right:3px;
    text-align:center;
}

footer .flex:last-child a:hover{
    background-color:var(--primary_lite);
    color:var(--gray);
}

.top_footer{
    width:90%;
    position:absolute;
    left:50%;
    top:-25%;
    transform:translate(-50%, -25%);
    border-radius:10px;
    background:var(--primary);
    color:var(--white);
    overflow:hidden;
    box-shadow:0px 6px 16px -6px var(--gray);
}

.top_footer figure{
    position:absolute;
    bottom:10%;
    left:50%;
    transform:translate(-50%, 0);
    overflow:hidden;
    z-index:11;
}

.top_footer .flex_content:first-child:after{
    content:"";
    background:var(--primary);
    width:80%;
    height:95%;
    border-radius:0 0 50% 50%;
    z-index:1;
    position:absolute;
 
    left:50%;
    transform:translate(-50%, 0);
}

.top_footer .flex_content:first-child{
    width:25%;
}

.top_footer figure img{
    width:100%;
    z-index:11;
    position:relative;
}

@media (max-width:1100px){
    footer .flex:first-child{
        flex-wrap:wrap;
    }
    
    footer .flex:first-child .flex-content{
        flex: 1 1 40%;
    }
}

@media (max-width:920px){
    footer{
        margin-top:5rem;
        padding:0 !important;
    }
    
    .top_footer{
        width:100%;
        position:static;
        transform:none;
        border-radius:0;  
        box-shadow:0;
    }
    
    .top_footer .flex_content:first-child{
        display:none;
    }

    footer .flex:last-child .flex-content:last-child{
        text-align:left;
    }
}

@media (max-width:320px){
    footer .flex:first-child .flex-content{
        flex:1 1 100%;
    }
}


   
   `}</style>

<footer className="padding_4x"  >
      
        <div className="footer_body flex">
          <section className="flex_content padding_1x">
            <figure className="logo fixed_flex">
              <img src={logo}  alt="" />
              <figcaption>
                <strong className="title">Sri Satya Sai </strong> University Medical  & Sciences
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
              (+91) 07562-292740 | 7562292720 <br/>
             (+91) 7748900027 | 7748900028<br/>
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
            <Link to = "/privacy-policy">
            Privacy-Policy
            </Link>
            <Link to = "/refound-cancellation">
              Refound &amp; Cancellation
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
            <Link to = "/terms-conditions">
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

   </>
  )
}

export default FooterContanct