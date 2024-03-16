import React from 'react';
import Nirf from "../images/NIRF_Eng.pdf";
import Navbarcontanct from '../Navbarcontanct';
import FooterContanct from '../FooterContanct';

function NIRF_Eng() {
  return (
    <>
      <Navbarcontanct />
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={Nirf}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '40px',
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

export default NIRF_Eng;
