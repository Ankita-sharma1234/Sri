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
import Deputyregistrar from "../../images/deputy-registrar.jpg"

function DeputyRegistrar() {
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
,fontWeight:'bolder',marginLeft:'80px'}}> | Deputy Registrar</h2>
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
        marginTop: "40%",  // Adjusted marginTop for smaller screens
        width: '80%',  // Ensures the image takes the full width of the container
        height: 'auto'  // Allows the image to scale proportionally
      }}
      src={Deputyregistrar}
      alt="two men in a coworking space"
    />
    <div className="main-text" style={{ padding: '20px' }}>
      <h2 className="section-title" style={{ marginTop: "20px" }}>Deputy Registrar Desk</h2> <br/>
      <p style={{ color: " #003366" }}>
      Dr Pushpendra Sharma, Deputy Registrar, joined the university in October 2013 and has been resolutely working for the betterment and all round development of the university. He was awarded Ph.D.(Chemistry) on 26 June 1999 by Rani Durgavati Vishvidyalaya,Jabalpur (MP). Since long he has been a teacher and administrator par excellence. During his twenty nine year stint as principal, chief administrative officer, head, and examination in charge, etc. he made his definitive mark and was able to transform the institutions wherever he worked. Apart from academic excellence, he showed vivid inclination towards research and innovations and has been published in national and international journals of repute. He has been a councillor for IGNOU and MP Bhoj Open University therefore he is able to provide expert counselling and guidance to the faculty and students. He holds the additional charge of Chief Warden of the students’ hostel and is able to earn their good- will within a very short span of time. <br/><br/>
 


        <b style={{ color: "black" }}>Dr. Pushpendra Sharma</b><br/>
        <b style={{ color: "black" }}>Deputy Registrar, SSSUTMS </b>
      </p>
    
    </div>
  </main>
</div>

  <FooterContanct />
 
</>

  )
}

export default DeputyRegistrar




