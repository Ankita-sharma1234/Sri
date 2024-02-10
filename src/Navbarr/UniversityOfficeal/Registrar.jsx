// import React from 'react'
// import Navbarcontanct from '../../Navbarcontanct'

// function ViceChancellor() {
//   return (
//     <>
//     <style>
//         {`
       
        
       
        
     
        
     
        

        
       
     
//         /*****************
//         Promo
//         *****************/
        
//         .promo {
//           background-color: #586477;
//           font-size: 1.2em;
//           color: #fff;
//           margin-top: 50px;
//         }
        
//         .promo-text {
//           margin-top: 35px;
//         }
        
//         .main-photo {
//           max-height: 300px;
//           margin: 20px auto;
//           border-radius: 20px;
//         }
        
//         .skill {
//           display: inline-block;
//           border: 1px solid #999;
//           padding: 3px;
//           background-color: #78a7c8;
//           white-space: nowrap;
//           margin-bottom: 5px;
//         }
        
//         .devicons {
//           font-size: 46px;
//           display: inline-block;
//           padding: 2px;
//           background: #78a7c8;
//           margin-bottom: 5px;
//           border-radius: 5px;
//         }
        
       
        
//         `}
//     </style>
//  <Navbarcontanct/>
//     <div className="promo">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-4">
//             <img
//               className="img-responsive main-photo"
//               src="https://raw.githubusercontent.com/fremdev/portfolio/master/img/alex.jpg"
//               alt="Alex Efremov"
//             />
//           </div>
//           <div className="col-sm-8  promo-text">
//             <p>
//               <em>
//                 Would you like to find a passionate web developer? You are{" "}
//                 <b>in the right place!</b>
//               </em>
//             </p>
//             <p>
//               My name is <strong>Alex Efremov</strong> and I'm passionate working
//               on interesting projects and mastering my skills.
//             </p>
//             <p>My skills:</p>
//             <div>
//               <i className="devicons devicons-html5" title="HTML" />
//               <i className="devicons devicons-css3" title="CSS" />
//               <i
//                 className="devicons devicons-javascript_badge"
//                 title="JavaScript"
//               />
//               <i className="devicons devicons-jquery" title="jQuery" />
//               <i className="devicons devicons-sass" title="Sass" />
//               <i className="devicons devicons-bootstrap" title="Bootstrap" />
//               <i className="devicons devicons-wordpress" title="WordPress" />
//               <i className="devicons devicons-git" title="Git" />
//               <i className="devicons devicons-npm" title="npm" />
//               <i className="devicons devicons-terminal" title="Command line" />
//             </div>
//             <p>Currently learning:</p>
//             <p>
//               <i className="devicons devicons-react" title="React.js" />
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
 
  
//   </>
  
//   )
// }

// export default ViceChancellor




import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'
import Registrarr from "../../images/Registrar.jpg"

function Registrar() {
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
,fontWeight:'bolder',marginLeft:'80px'}}> | Registrar of SSSUTMS</h2>
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
        marginTop: "70%",  // Adjusted marginTop for smaller screens
        width: '80%',  // Ensures the image takes the full width of the container
        height: 'auto'  // Allows the image to scale proportionally
      }}
      src={Registrarr}
      alt="two men in a coworking space"
    />
    <div className="main-text" style={{ padding: '20px' }}>
      <h2 className="section-title" style={{ marginTop: "20px" }}>Registrar</h2> <br/>
      <p style={{ color: " #003366" }}>
        
      Dr. G.R. Selokar, Professor in the department of Mechanical Engineering of Sri Satya Sai University of Technology and Medical   Sciences, Sehore is erudite professor, motivational teacher, eminent researcher and excellent institute builder with a dream to use science and technology for better community life. <br/>
 
 Prof. Selokar, an alumnus of Visvesvaraya National Institute of Technology (VNIT) Nagpur hold B.E. (Mechanical),  M.Tech (Prodn Engg.) and Ph. D. in Mechanical Engineering. In addition, he also earned PGDBM and MA (Pub. Adn) From RTM Nagpur University Nagpur in 1985 and 1995 respectively adding excellent blending of techno-managerial and administrative attributes. <br/>
Prof. Selokar is having Meritorious Academic track- record at every level of his qualification. Production Engineering, Reliability Engineering, Productivity Engineering and Instrumentation are his key research areas. During rich and vast experience in teaching, research and administration of three and half decades, he has guided 11 Ph.D. research scholars and supervised more than 75 M.Tech projects. Presently 8 Ph.D. research scholars  are working under him. He has more than 145 research publications in reputed international and national journals to his credit. At present he has one patent in his name and four are in pipe-line. <br/>
Prof. Selokar has received National Merit Scholarship Award for consecutive 6 years (1976-82), Best Research Guide Award (2018) from Ballsbridge University Rasau Dominica and token of appreciation from Research Foundation of India (2019). He is also life member of Indian Society for Technical Education (ISTE) Delhi and Indian Institute of Plant Engineers (IIPE) Madras. <br/>
On the university front, since its inception in 2013, Sri Satya Sai University of Technology and Medical Sciences (SSSUTMS) is scaling new and higher horizons year after year. Our entire faculty and staff are dedicated to this temple of learning practicing the principle of Integrity, Involvement and self-Motivation (IIM). <br/>
We all, are committed to implement National Education Policy in spirit and intent. Moreover we are also following the KAIZEN (Continuous Improvement) principle as advocated by Japanese Philosophy. <br/>
Before closing down, we express deep gratitude to all the stakeholders and alumni for their direct and indirect support at present and also expect same synergy in time to come. <br/><br/>
 


        <b style={{ color: "black" }}>Dr. G.R. Selokar</b><br/>
        <b style={{ color: "black" }}>Registrar, SSSUTMS </b>
      </p>
    
    </div>
  </main>
</div>

  <FooterContanct />
 
</>

  )
}

export default Registrar




