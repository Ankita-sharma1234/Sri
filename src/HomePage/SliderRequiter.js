import React from "react";


function SliderRequiter() {
  return (
    <>
      <>
      <style>
        {`
      
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1750px);
    }
  }
  .slider {
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: auto;
  }
  .slider .slide-track {
    animation: scroll 40s linear infinite;
    display: flex;
    width: 3500px;
  }
  .slider .slide {
    height: 100px;
    width: 250px;
  }

        ` }
      </style>
     
        <style dangerouslySetInnerHTML={{ __html: "\n  \n  \n\n" }} />
        <div className='twelve1' style={{textAlign:"center",marginTop:"70px"}}>
        <h1 ><b>Our Top <em>Recruiters</em></b></h1>
      </div>
      <div className="slider" >
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/03/LG-Logo-1995.jpg"
                height={50}
                width={150}
                style={{marginTop:"20px",marginLeft:"30px"}}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.wordstream.com/wp-content/uploads/2021/07/facebook-logo-stats-2018-1.png"
                height={40}
                width={160}
                style={{ marginTop:"27px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg?w=660"
                height={90}
                width={150}
               
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo.png"
                height={100}
                width={200}
                style={{marginRight:"30px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Amazon-Company-Logo.jpg"
                height={50}
                width={130}
                style={{ marginTop: "40px",marginLeft:"30px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo2.jpg"
                height={70}
                width={160}
                style={{ marginTop: "15px",  marginLeft:"25px"}}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
                height={90}
                width={160}
                style={{ marginLeft:"35px"}}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://sssutms.co.in/cms/Areas/Website/Content/images/recruiters/IBM.jpg"
                height={90}
                width={80}
                style={{ marginTop: "8px",marginLeft:"50px"}}
                alt=""
              />
            </div>

            









           
           
          
            <div className="slide">
              <img
                src="https://www.wordstream.com/wp-content/uploads/2021/07/facebook-logo-stats-2018-1.png"
                height={40}
                width={160}
                style={{ marginTop:"27px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg?w=660"
                height={90}
                width={150}
               
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo.png"
                height={100}
                width={200}
                style={{marginRight:"30px" }}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Amazon-Company-Logo.jpg"
                height={50}
                width={130}
                style={{ marginTop: "40px",marginLeft:"30px" }}
                alt=""
              />
            </div>

            <div className="slide">
              <img
                src="https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo2.jpg"
                height={70}
                width={160}
                style={{ marginTop: "15px",  marginLeft:"25px"}}
                alt=""
              />
            </div>
            </div>
        </div>
       
      </>

    </>
  );
}

export default SliderRequiter;