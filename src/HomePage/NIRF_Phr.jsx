import React from 'react';
import Nirf from "../images/NIRF_Phar.pdf";
import Navbarcontanct from '../Navbarcontanct';
import FooterContanct from '../FooterContanct';

function NIRF_Phar() {
  return (
    <>
      <Navbarcontanct />
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)",padding:"4px" }}>
        <iframe
          src={Nirf}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '30px', 
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          accept=".pdf"
        />
      </div>
      <FooterContanct />
    </>
  );
}

export default NIRF_Phar;



