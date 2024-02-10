import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'
import SiddharthKapoor from "../../images/sid.jpg"

function Chancellor() {
  return (
    <>
    <style>
        {`
h2 {
   font-weight: 700;
   color: #000;
   font-size: 1.75rem;
}

.main-grid {
    display: grid;
    grid-template-columns: minmax(1em, 1fr) minmax(0px, 500px) minmax(1em, 1fr);
    grid-column-gap: 2em;
}

.main-image {
  grid-column: 2 / -2;
  object-fit: cover;
  max-width: 85%;
  display: block;
  // box-shadow: 10px 10px 250px #000;
  

}

.main-text {
  grid-column: 2 / -2;
  margin-top: 3em;
  margin-bottom: 3em;
}

.section-title::after {
  content: "";
  display: block;
  width: 150px;
  height: 3px;
  margin-top: 4px;
  background: #fda039;
  margin-left: auto;
  margin-right: auto;
}

.social {
  order: -1;
  font-size: 1.75rem;
  padding-top: 3em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

@media (min-width: 600px) {
      .main-grid {
        grid-template-columns: minmax(1em, 1fr) repeat(3, minmax(20px, 320px)) minmax(1em, 1fr);
    }
     .logo {
      padding: .5em 1em;
      text-align: center;
    }
    
    .head {
      grid-column: 3 / -3;
    }
    
.page-title::after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: #fda039;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
}
    
    .main-image {
      grid-column: 2;
    
  
    }
    
    .main-text {
      grid-column: 3 / span 2;
      margin-top: 0;
    }
    
    .section-title::after {
  margin-left: 0;
}
  `}
    </style>
 
<Navbarcontanct/>

<h2 style={{marginTop:"30px"
,fontWeight:'bolder',marginLeft:'80px'}}> | Chancellor of SSSUTMS</h2>
   <br></br>
{/* <div className='shadow'
style={{width:'90%',marginLeft:'70px',borderRadius:'20px'}}>
  <main className="main-grid" style={{marginTop:"20px"}}>
  
    <img
      className="main-image"
      style={{marginTop:"55%"}}
      src={SiddharthKapoor}
      alt="two men in a coworking space"
    />
    <div className="main-text" >
      <h2 className="section-title" style={{marginTop:"50px"}}>Chancellor</h2> <br/>
      <p  style={{color:" #003366"}}>
        
      Young  &  Dynamic  Chancellor  of   Sri Satya Sai University of Technology & Medical Sciences   Honourable Mr. Siddharth Kapoor   holds Degree in Family Management Business Administration (FMBA) from SP Jain, Mumbai. He also did his Masters of Business Administration (Finance) Degree from Temple University, Fox School of Business, Philadelphia after completing PA Bachelor of Business Administration (Finance) from Temple University, Fox School of Business, Philadelphia,PA. <br/>
      Mr. Kapoor is associated with Largest Educational Group of Central India from last 14 years & is also Project head - Radio Popcorn. He has Led Analysis, design and Development of FM Station & is actively associated with total Diagnosis Private. Ltd., Bhopal, (India) from last 14 years. <br/>
      Mr. Kapoor is analyst of the Financial Management and Accountancy System. He is member of Ascend (SPO), an Association for Finance and Accounting Majors, Member & SOS Village Society, one of India’s largest Society for orphans. He has qualified and Won State level Swimming and Football competition.<br/>
      Honouable Governor of Madhya Pradesh Shri Ram Naresh Yadav has approved appointment of Shri Sidharth Kapoor as Chancellor of the University & under his guidance, the University will fulfil dreams & aspirations of young generation.<br/> <br/>

      <b style={{color:"black"}}>Mr. Siddharth Kapoor</b><br/>
      <b  style={{color:"black"}}>Chancellor, SSSUTMS</b>
      </p>
    
    </div>
  </main>
  </div> */}

<div className='shadow'
  style={{
  
    width: '90%',
    marginLeft: '5%',  // Adjusted marginLeft for smaller screens
    borderRadius: '20px',
    padding: '20px' , // Added padding for better spacing
    marginTop:"30px",
    backgroundColor:"#eceeef",
    boxShadow: '0 15px 15px rgba(0, 0, 0, 0.6)'
  }}
>
  <main className="main-grid" style={{ marginTop: "20px" }}>
  
    <img
      className="main-image"
      style={{
        borderRadius:"30px",
        marginTop: "50%",  // Adjusted marginTop for smaller screens
        width: '80%',  // Ensures the image takes the full width of the container
        height: 'auto'  // Allows the image to scale proportionally
      }}
      src={SiddharthKapoor}
      alt="two men in a coworking space"
    />
    <div className="main-text" style={{ padding: '20px' }}>
      <h2 className="section-title" style={{ marginTop: "20px" }}>Chancellor</h2> <br/>
      <p style={{ color: " #003366" }}>
        
        Young & Dynamic Chancellor of Sri Satya Sai University of Technology & Medical Sciences Honourable Mr. Siddharth Kapoor holds a Degree in Family Management Business Administration (FMBA) from SP Jain, Mumbai. He also did his Master of Business Administration (Finance) Degree from Temple University, Fox School of Business, Philadelphia after completing his Bachelor of Business Administration (Finance) from Temple University, Fox School of Business, Philadelphia, PA. <br/>
        Mr. Kapoor is associated with the Largest Educational Group of Central India for the last 14 years & is also Project head - Radio Popcorn. He has Led Analysis, design and Development of FM Station & is actively associated with total Diagnosis Private. Ltd., Bhopal, (India) for the last 14 years. <br/>
        Mr. Kapoor is an analyst of the Financial Management and Accountancy System. He is a member of Ascend (SPO), an Association for Finance and Accounting Majors, Member & SOS Village Society, one of India’s largest Society for orphans. He has qualified and Won State level Swimming and Football competition.<br/>
        Honourable Governor of Madhya Pradesh Shri Ram Naresh Yadav has approved the appointment of Shri Sidharth Kapoor as Chancellor of the University & under his guidance, the University will fulfill dreams & aspirations of the young generation.<br/> <br/>

        <b style={{ color: "black" }}>Mr. Siddharth Kapoor</b><br/>
        <b style={{ color: "black" }}>Chancellor, SSSUTMS</b>
      </p>
    
    </div>
  </main>
</div>

  <FooterContanct />
 
</>

  )
}

export default Chancellor



