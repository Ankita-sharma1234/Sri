import React, { useState, useRef, useEffect } from "react";
import logo from "../../HomePage/12.png"
import {
  Alert,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import swal from "sweetalert";

function Signup() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [name, setName] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  
  const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");

  const navigate = useNavigate();
  const [resendClicked, setResendClicked] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;

  const resendOtp = async () => {
    setVerificationMessage("");
    setOtpSent(false);
    setShow(false);

    const res = await fetch("https://sssutms.ac.in/apitest/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        mobile,

      }),
    });

    const data = await res.json();

    if (data.status === 201) {
      setShow(true);
      setOtpSent(true);
      setVerificationMessage("");
    } else if (data.status === 401) {
      setVerificationMessage(data.message || "Error sending OTP");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setVerificationMessage("");
    setEmailRegisteredMessage("");

    if (
      !name ||
      !email ||
      !dob ||
      !fathersname ||
      !mothersname ||
      !mobile ||
      (!otpSent && !email) ||
      !emailRegex.test(email)
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>
          All required fields must be filled in, or email must be in a valid
          format.
        </span>
      );
      return;
    } else if (
      (mobile.length !== 10 || isNaN(mobile))
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>Mobile Number must be of 10 digits</span>
      );
      return;
    }

    if (!otpSent) {
      //await resendOtp();
      const res = await fetch("https://sssutms.ac.in/apitest/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          mobile,

        }),
      });
      const data = await res.json();
      // console.log( data , "status of the response data ")
      if (data.status === 201) {
        setShow(true);
        setOtpSent(true);
        setVerificationMessage("");
        setResendClicked(false); // Reset resendClicked state
      } else if (data.status === 401) {
        setVerificationMessage(data.message || "Error sending OTP");
      } else if (data.status === 400) {
        swal({
          icon: "error",
          title: "Error",
          text: "This email is Already exists in our database . Please use another email for registration",
        });
      }
    } else if (!otpSent || resendClicked) {
      await resendOtp()
    }
    else {
      const res = await fetch("https://sssutms.ac.in/apitest/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await res.json();

      if (data.status === 200) {

        const registerRes = await fetch(
          "https://sssutms.ac.in/apitest/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              dob,
              fathersname,
              mothersname,
              mobile,
            }),
          }
        );
        const registerData = await registerRes.json();

    
        swal({
          icon: "success",
          title: "Registered successfully",
          text: "Dear Student  Registration Successfull , Check Your Mail for ID and Password!",
        }).then(() => {
         
          navigate("/erp/studentlogin");
        });
      } else if (data.status === 401) {
        swal({
          icon: "error",
          title: "Error",
          text: "Mobile number must be 10 digits",
        });
      }
      else if (data.status === 401) {
        setVerificationMessage("Invalid OTP");
      } else if (
        data.status === 400) {
        setEmailRegisteredMessage("This email is already exists");
      } else {
        // console.log("Error:", data.message);
      }
    }
  };
  const handleResendClick = async () => {
    setResendClicked(true);
    await resendOtp();
    setResendClicked(false);
  };

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 10000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  const showAlert = (message, type = "success") => {
    swal({
      title: message,
      icon: type,
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn-primary",
          closeModal: true,
        },
      },
    });
  };
  return (

    <>
      <style>
        {
          `
          * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
          color: white;
          font-weight: 600;
          transition: color 0.2s;
        }
        a:hover {
          text-decoration: none;
          color: #1e577c;
        }
        
        body {
          height: 100%;
          width: 100%;
          background: #ffd89b; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to bottom,
            #19547b,
            #ffd89b
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to bottom,
            #19547b,
            #ffd89b
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          background-repeat: no-repeat;
          background-attachment: fixed;
        }
        
        .container1 {
          width: 32%;
          margin: 5% auto;
          background-color: rgba(255, 255, 255, 0.5);
          padding: 1% 3%;
          border-radius: 2%;
        } 
        .heading {
          margin: 1% 31%;
          font-size: 150%;
          font-weight: 700;
          letter-spacing: 3px;
          color: #fcfcfc;
        }
        
        .form-element {
          margin: 0% auto;
          width: 80%;
          position: relative;
          border-bottom: 2px solid white;
        }
        .btn-login {
          margin: 3% 11%;
          width: 80%;
          outline: none;
          border: none;
          border-radius: 25px;
          text-transform: uppercase;
          background: #3c6880;
          font-weight: 700;
          color: white;
          transition: box-shadow 0.1s ease;
        }
        .btn-login:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          text-decoration: none;
          outline: none;
          border: none;
        }
        .btn-login:focus {
          background-color: #3c6880;
        }
        input {
          border: none;
          outline: none;
          margin: 20px 0 0 0;
          padding: 10px 10px 10px 20px;
          background-color: rgba(255, 255, 255, 0);       
        }
        input:focus {        
          color: #3c6880;
        }
        .fa {
          color: #3c6880;
        }
        input::placeholder {
          color: #3c6880;
          font-size: 1em;
          font-weight: 400;
        }
        
        @media (max-width: 954px) {
          .form-element {
            width: 80%;
          }
          .container1 {
            width: 50%;
            margin: 7% auto;
          }
        }
        @media (max-width: 610px) {
          .form-element {
            width: 90%;
          }
          .container1 {
            width: 60%;
            margin: 7% auto;
          }
        }
        @media (max-width: 460px) {
          body {
          }
          .form-element {
            width: 90%;
          }
          .container1 {
            width: 95%;
            margin: 19% auto;
          }
        }
        
          
          `
        }
      </style>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Register</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
          integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
          crossOrigin="anonymous"
        />

        <div className="container1">

          <img
            style={{ height: "50px", width: "50px", borderRadius: "25px", marginLeft: "140px" }}
            src={logo}

          />
          <div className="heading">REGISTER</div>
          <form name="input" action="" method="get" autoComplete="off">

            {show && (
              <div>
                {otpSent
                  ? showAlert("OTP Sent Successfully", "success")
                  : showAlert("This email is already exists", "error")}
              </div>
            )}
            <div className="form-element">
              <span>
                <i className="fa fa-user" />
              </span>
              <input type="text"
                placeholder="Full Name"
                name="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value.toUpperCase())}
              />
            </div>
            <div className="form-element">
              <span>
                <i className="fa fa-envelope" />
              </span>
              <input type="email" placeholder="Email Address"
                name="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-element">
              <span>
                <i className="fa fa-user" />
              </span>
              <input type="text" placeholder="Fathers Name"
                name="fathersname"
                value={fathersname}
                autoComplete="off"
                onChange={(e) => setFathersname(e.target.value.toUpperCase())} />
            </div>
            <div className="form-element">
              <span>
                <i className="fa fa-user" />
              </span>
              <input type="text" placeholder="Mothers Name"
                name="mothersname"
                value={mothersname}
                autoComplete="off"
                onChange={(e) => setMothersname(e.target.value.toUpperCase())} />
            </div>
            <div className="form-element">
              <span>
                <i className="fa fa-lock" />
              </span>
              <input type="number" placeholder="Mobile No."
                name="mobile"
                value={mobile}
                autoComplete="off"
                onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="form-element">
              <span>
                <i className="fa fa-envelope" />
              </span>
              <input type="date" placeholder="Dath of Birth" color="#3c6880"
                name="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                autoComplete="off" />
            </div>

            {otpSent && (
              <>
                <div className="form-element">
                  <span>
                    <i className="fa fa-lock" />
                  </span>
                  <input type="number" placeholder="Enter Otp"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)} />
                </div>

              </>
            )}
            <button type="button" defaultValue="REGISTER" className="btn-login" onClick={sendEmail}>{otpSent ? "Verify OTP" : "Send OTP"}</button>
            {otpSent && !resendClicked && (
              <button type="button" className="btn-login" onClick={handleResendClick}>Resend Otp</button>)}


            {verificationMessage && (
              <div className="mt-2">
                <Alert
                  variant={
                    verificationMessage === "Invalid OTP"
                      ? "danger"
                      : "success"
                  }
                  style={{
                    color:
                      verificationMessage === "Invalid OTP" ? "red" : "green",
                    fontWeight: "bold",
                  }}
                >
                  {verificationMessage}
                </Alert>
              </div>
            )}
            {emailRegisteredMessage && (
              <div className="mt-2">
                <Alert variant="danger">{emailRegisteredMessage}</Alert>
              </div>
            )}
            <div style={{marginLeft:"20%",marginBottom:"30px",color:"#3c6880"}}>
              Already have an account? <Link to="/erp/studentlogin" style={{textDecoration:"none"}}> SignIn</Link>
            </div>
          </form>
        </div>
      </>


    </>
  )
}
export default Signup;
