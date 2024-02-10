import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'
import ViceChancellor from "../../images/Vice Chansellor.jpg"

function ViceChancellorr() {
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
,fontWeight:'bolder',marginLeft:'80px'}}> | Vice Chancellor of SSSUTMS</h2>
   <br></br>


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
      src={ViceChancellor}
      alt="two men in a coworking space"
    />
    <div className="main-text" style={{ padding: '20px' }}>
      <h2 className="section-title" style={{ marginTop: "20px" }}>Vice Chancellor</h2> <br/>
      <p style={{ color: " #003366" }}>
        
      Since its founding in 2013 by merging of several multi-disciplinary institutions, Sri Satya Sai University of Technology and Medical Sciences Sehore, Bhopal (MP) is acclaimed for its outstanding contribution to teaching, research and service in Nation building. Today, the University stands to meet the enormous aspirations and expectations of society. Society wants us to nurture professionals and scholars of high caliber, who can offer solutions to a broad range of issues.  This requires excellence in teaching and research at par with the best in the world. <br/>


We, at Sri Satya Sai University of Technology and Medical Sciences, continuously aspire to be a breeding ground for positive ideas and emerge as a symbol of openness of thoughts, cultural pluralism and celebrating the unity in the diversity of India. We endeavour to touch the lives of every student by inculcating prudence, efficiency, creativity and compassion to work for the betterment of the marginalized sections of society. We attempt to kindle their sense of responsibility, honesty, conscience, justice and above all commitment to human values.<br/>


We aim to expand our reach to the inaccessible regions through virtual presence and become a center of knowledge osmosis. We seek to empower every inquisitive soul with the best available human resources. We intend to intensify our endeavors to mobilize more resources and create conducive ambience for our faculty, students and staff to actualize their potential. <br/>





<br/> <br/>

        <b style={{ color: "black" }}>Dr Mukesh Tiwari</b><br/>
        <b style={{ color: "black" }}>Vice Chancellor, SSSUTMS</b>
      </p>
    
    </div>
  </main>
</div>

  <FooterContanct />
 
</>

  )
}

export default ViceChancellorr




