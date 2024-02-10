import React from 'react';
import scan from "../images/scan.jpeg";
import Navbarcontanct from '../Navbarcontanct';
import FooterContanct from '../FooterContanct';

function Notification() {
  return (
    <>
    <Navbarcontanct/>
    <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: '20px' }}>
      <img
        src={scan}
        style={{
          maxWidth: '100%', // Make the image responsive
          height: 'auto',   // Maintain the aspect ratio
          marginTop: '40px',
          marginLeft: 'auto', // Center the image horizontally
          marginRight: 'auto', // Center the image horizontally
          display: 'block' // Remove any extra spacing below the image
        }}
        alt="Scan"
      />
    </div>
    <FooterContanct/>
    </>
  );
}

export default Notification;
