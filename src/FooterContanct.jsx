import React from 'react'
import { Link } from "react-router-dom";


import logo from "./images/sssutms.jpg"


function FooterContanct() {
  return (
   <>


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