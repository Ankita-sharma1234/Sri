import React from 'react';
import Navbarcontanct from './Navbarcontanct';
import FooterContanct from "./FooterContanct"

function Contactpage() {
  return (
    <>
      <style>
        {`
          .card {
            margin: 10px auto;
            box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.2);
            border-radius: 6px;
            height: 90%;
            transition: 0.3s;
          }

          .card:hover {
            box-shadow: 1px 10px 16px 0 rgba(0, 0, 0, 0.3);
          }

          .card-title {
            text-align: center;
            color: #666666;
            font-weight: bold;
          }

          .card-text {
            font-weight: 500;
            color: #66686b;
          }

          .card-image {
            text-align: center;
            margin: 5vh 0;
          }

          .title-heading {
            font-size: 2em;
            text-align: center;
            font-weight: bold;
          }

          .contact-page-map {
            margin-top: 20px;
            width: 100%;
            max-width: 150vh;
          }

          .contact-page-form form {
            padding: 20px 15px 0;
          }

          @media (max-width: 1200px) {
            .shadow {
              width: 100%;
              margin-left: 0;
            }

            .container {
              width: 100%;
              padding: 0 20px;
            }
          }

          @media (max-width: 768px) {
            .card {
              width: 100%;
            }

            .title-heading {
              font-size: 1.5em;
            }
          }
        `}
      </style>
      {/* <Navbarcontanct /> */}
      <Navbarcontanct />

      {/* <div className="shadow bg-body rounded p-3" style={{ height: '100%', width: '95%', marginLeft: "3%" }}> */}
      {/* ... your existing JSX code ... */}


      <section className="contact-page-sec" style={{ marginLeft: "13%", width: "25%" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-page-map">
                <iframe
                  title="SSSUTMS Sehore Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.576984127963!2d77.12720060000001!3d23.215651799999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf4c949567e4d%3A0xc7649cfdfe73a024!2s%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%B8%E0%A4%A4%E0%A5%8D%E0%A4%AF%20%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%88%20%E0%A4%AF%E0%A5%81%E0%A4%A8%E0%A4%BF%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%B8%E0%A4%BF%E0%A4%9F%E0%A5%80%20%E0%A4%91%E0%A4%AB%E0%A4%BC%20%E0%A4%9F%E0%A5%87%E0%A4%95%E0%A5%8D%E0%A4%A8%E0%A5%8B%E0%A4%B2%E0%A5%89%E0%A4%9C%E0%A5%80%20%26%20%E0%A4%AE%E0%A5%87%E0%A4%A1%E0%A4%BF%E0%A4%95%E0%A4%B2%20%E0%A4%B8%E0%A4%BE%E0%A4%87%E0%A4%82%E0%A4%B8%2C%20%E0%A4%B8%E0%A5%80%E0%A4%B9%E0%A5%8B%E0%A4%B0%2C%20%E0%A4%AE%E0%A4%A6%E0%A5%8D%E0%A4%B9%E0%A5%8D%E0%A4%AF%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A6%E0%A5%87%E0%A4%B6!5e0!3m2!1sen!2sin!4v1642818613881!5m2!1sen!2sin"
                  width="290%"
                  height={450}
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* </div> */}
      <FooterContanct />
    </>
  );
}

export default Contactpage;
