import React from 'react'
import Navbarcontanct from '../../Navbarcontanct'
import FooterContanct from '../../FooterContanct'
import  hk from "../../images/h.k.SHARMA_05042022_1258.jpg"

function Director() {
  return (
    <>
    <style>
        {`

.half-half-image-text {
    padding: 70px 0px;
}
.half-half-image-text h1 {
    color: #800000;
}
.half-half-image-text .content {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 35px 0px;
}
.half-half-image-text .content p {
    font-size: 22px;
}
.half-half-image-text .img {
    min-height: 230px;
    height: 100%;
    border-radius: 10px;
}

        `}
    </style>
    <Navbarcontanct />
    <div style={{display:"flex"}}>
    <div className="half-half-image-text">
  <div className="container">
    <div className="row">

    {/* <div className="col-12 col-lg-6">
        <div
          className="img"
          style={{
            marginLeft:"40%",
            width:"20%",
           
            background:
              'url("https://images.pexels.com/photos/89784/bmw-suv-all-terrain-vehicle-fog-89784.jpeg?cs=srgb&dl=automobile-bmw-car-89784.jpg&fm=jpg")no-repeat center',
            backgroundSize: "cover"
          }}
        />
      </div> */}

      <img 
      
       className="img"
          style={{
            marginLeft:"42%",
            width:"16%",
        height:"150px",
    borderRadius:"40px"}}
      src={hk}/>
     <h4 style={{textAlign:"center"}}>Dr. Hemant Kumar Sharma</h4> <br/><br/>
      <div className="col-12">
      </div>
    </div>
    <div className="row">
     <p style={{color:"black", marginLeft:"40px"}}>
   Sri Satya Sai University of Technology and Medical Sciences ( SSSUTMS ) is a multi-disciplinary University, comprising of various disciplines of Technology as well as of Medical Sciences, was established in 2013 to offer quality education among the deserving  youth of india and abroad.  <br/><br/>

It has immense Research potential, as evident from the spontaneous Research activities 
performed by the Students and the Faculties. So far more than 1500 Research Papers have been published 
by the Research aspirants in the reputed Foreign and Indian Journals.  We intend to form an “R & D” of International standing by striving continuously in pursuit of excellence in education, research, entrepreneurship, technology implementation and other related fields for the services of the society. We promise to provide high quality education in all our Constituent schools/units of our University from undergraduate to doctoral levels through 
a creative balance of academic, professional as well as extracurricular programs. <br/><br/>

The SSSUTMS has a Research and Development cell with an objective to promote research activities among the faculty members to achieve academic excellence. In our endeavor to make our system effective and sensitive to the requirements of all the stake holders, we undertake collaboration with the industry to foster engineering/Pharmacy/Science/medical research which is an integral part of quality education. <br/><br/>

We conduct research-oriented workshops, seminars and development programmes to augment the quality of research being conducted by various faculties of SSSUTMS. <br/><br/>
<b >Director</b><br/>
<b>Dr. Hemant Kumar Sharma (R & D)</b>


     </p>
     
    </div>
  </div>
</div>
</div>
<FooterContanct/>
</>

  )
}

export default Director