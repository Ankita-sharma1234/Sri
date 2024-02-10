import React from 'react'
import Class from '../images/classroom.png'
import Boys from '../images/DSC_0092.png';
import Lib from '../images/library.png';
import Spo from '../images/Event4.png';
import Yog from '../images/Event7.png';
import Com from '../images/computerLab.png';
function Facilities() {
  return (
   <>
   <>
   <style>
    {`
    /* Font */
    @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');
      .custom-facilities .main {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .custom-facilities img {
      height: auto;
      max-width: 100%;
      vertical-align: middle;
    }
    
    .custom-facilities .btn:hover {
      background-color: rgba(255, 255, 255, 0.12);
    }
    
    .custom-facilities .cards {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .custom-facilities .cards_item {
      display: flex;
      padding: 1rem;
    }
    
    @media (min-width: 40rem) {
      .custom-facilities .cards_item {
        width: 50%;
      }
    }
    
    @media (min-width: 56rem) {
      .custom-facilities .cards_item {
        width: 33.3333%;
      }
    }
    
    .custom-facilities .card {
      background-color: white;
      border-radius: 0.25rem;
      box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    
    .custom-facilities .card_content {
      padding: 1rem;
      background: linear-gradient(to bottom right, #3d5a80 40%, #0077b6 100%);
    }
    
    .custom-facilities .card_title {
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: capitalize;
      margin: 0px;
    }
    .custom-facilities main {
      text-align: center; 
    }
    
    .custom-facilities h1 {
      margin-bottom: 50px;
      font-size: 30px;
      margin-Left:600px;
    }
    
    /* Media query for responsive design */
    @media screen and (max-width: 600px) {
      .custom-facilities h1 {
        font-size: 24px;
        margin-Left:123px /* Adjust the font size for smaller screens */
      }
    }
    .custom-facilities .card_text {
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;    
      font-weight: 400;
    }
    .custom-facilities .made_by {
      font-weight: 400;
      font-size: 13px;
      margin-top: 35px;
      text-align: center;
    }
    `}
   </style>

   <div className="custom-facilities main">
    <h1 style={{marginBottom:"50px",fontSize:'30px'}}><b>Faci<em>lities</em></b></h1>
    <ul className="cards">
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={Class}/>
          </div>
          <div className="card_content">
            <h2 className="card_title">Class Rooms</h2>
            <p className="card_text">
            The general classroom objective is for the class to learn something new. 
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={Boys} />
          </div>
          <div className="card_content">
            <h2 className="card_title"> Hostel</h2>
            <p className="card_text">
            A hostel is a place where students of a school or college can experience economic, healthy, and safe accommodation. Many students around the world live in hostels.
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={Lib} />
          </div>
          <div className="card_content">
            <h2 className="card_title">Library</h2>
            <p className="card_text">
            Libraries help in the overall development of a person. They provide us with educational material and help enhance our knowledge.
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={Spo} />
          </div>
          <div className="card_content">
            <h2 className="card_title">Sports</h2>
            <p className="card_text">
            Sports and Games are essential components of human resource development, helping to promote good health.
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={Yog} />
          </div>
          <div className="card_content">
            <h2 className="card_title">Yoga</h2>
            <p className="card_text">
            The department provides yoga therapy services to University staff and enthusiastic students.
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={Com} />
          </div>
          <div className="card_content">
            <h2 className="card_title">Computer Lab</h2>
            <p className="card_text">
            Our university provides computer lab rooms for the students. We will soon build some new ones, and possibly re-build some of the old ones, and we are looking for new solutions.
            </p>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  
</>

   </>
  )
}

export default Facilities