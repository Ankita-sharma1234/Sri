import React from 'react';
import No from '../images/IMG_page-0001.jpg';
import Navbarcontanct from '../Navbarcontanct';
import FooterContanct from '../FooterContanct';

const Not = () => {
  return (
    <>   
    <Navbarcontanct/>
     <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: '20px' }}>
      <img
        src={No}
        style={{
          height: 'auto',
          maxWidth: '100%',
          width: '80%',
          marginTop: '40px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}
        alt="Scan"
      />
    </div>
    <FooterContanct/>
    </>

  );
};

export default Not;
