import React, { useEffect, useState } from 'react';
import Pos56 from '../images/Aboutus.3gp'
const About = () => {
  const [isTriggered, setTriggered] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const triggerOffset = document.getElementById('about').offsetTop;

    if (scrollY > triggerOffset - window.innerHeight / 2) {
      setTriggered(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');

   
    
   
    .wf-about-us {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0s ease, transform 1s ease;
    }

    .wf-about-us.triggered {
      opacity: 1;
      transform: translateY(0);
    }

    p{
      font-size: 15px;
      line-height: 1.8;
    }
    
    .primary-cta {
      background: linear-gradient(to right,#ff6c26 0%,#ffa526 100%);
      color: #ffffff;
      padding: 10px 25px;
      border-radius: 50px;
      transition: 0.3s linear all;
      box-shadow: none;
      border: none;
      text-transform: uppercase;
      display: inline-block;
    }
    
    .primary-cta:hover {
      background: #222222;
      color: #ffffff;
      transition: 0.3s linear all;
    }
    
 
    
    .wf-space{
      padding: 60px 90px;
    
    }
    
    .wf-left-heading{
      font-size: 50px;
      text-transform: capitalize;
      position: relative;
      margin: 0;
      font-weight: 400;
    
    }
    
    .wf-left-heading span{
     
      z-index: 99;
    }
    
    .wf-left-heading:after {
      position: absolute;
      content: "";
      height: 100%;
      width: 33px;
       left: 0;
      top: 0;
    }
    
    .container{
      display: flex;
      z-index: 99;
      
    }
    
    .wf-about-us__image{
      position: relative;
    }
    .wf-about-us__image:after {
      position: absolute;
      content: "";
      left: 0px;
      width: 1px;
      height: 100%;
      background: linear-gradient(to right,#ff6c26 0%,#ffa526 100%);
      top: -0px;
      bottom: 0;
      padding: 8px;
    }
    .column {
      flex: 0 0 50%;
      position: relative;
    }
    .wf-about-us__image img{
      z-index: 9;
      position: relative;
      display: block;
    }
    
    .wf-about-us__content {
      padding-left: 35px;
    }
    
    .wf-about-us{
      position: relative;
    }
    .wf-about-us:after {
      position: absolute;
      content: "";
      
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.4;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      top: 30%;
    }
    
    @media (max-width: 1024px){
      .wf-space {
        padding: 60px 40px;
      }
      .wf-about-us__content p{
        font-size: 13px;
      }
    
      .wf-left-heading {
        font-size: 35px;
      }
    
      .wf-left-heading:after{
        width: 25px;
      }
    }
    
    @media (max-width: 767px){
    
      .container{
        display: block;
      }
    
      .wf-about-us__content {
        padding-left: 0;
        margin-left: -15px;
        padding-top: 30px;
      }
    }`}</style>
         <section id="about" className={`wf-about-us wf-space ${isTriggered ? 'triggered' : ''}`}>
  <div className="container">
    <div className="column">
    <div className="wf-about-us__image">
  <video
    autoPlay
    loop
    muted
    playsInline
    width="100%"
  >
    <source src={Pos56} type="video/3gpp" />
    Your browser does not support the video tag.
  </video>
</div>
    </div>
    <div className="column">
      <div className="wf-about-us__content">
        <h2 className="wf-left-heading">
          <b>about <em>us</em></b>
        </h2>
        <p style={{color:'black'}}>
        Sri Satya Sai Group of Institutions attracts a large number of students from faraway places & States, due to the quality of education at an affordable cost, 
        without any hidden fees policy. In its history of fourteen years, various Institutions under the umbrella of Sri Satya Sai Group of Institutions were the only 
        Institutes in Sehore & nearby six districts offering 
        Technical education at affordable fees to worthy & needy students belonging to more than six thousand villages, 34 Tehsils. 
        The majority of the population is agriculture-dependent & the percentage of the population living at a low standard of living is 80.6. 
        The growth rate recorded recently is 21.5%.
        </p>
        <a className="primary-cta" href="#">
          know more
        </a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default About
