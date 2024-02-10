import React from 'react';
import ff from '../images/office_Order_page-0001.jpg';
import Navbarcontanct from '../Navbarcontanct';
import FooterContanct from '../FooterContanct';

const Off = () => {
  return (
    <>
    <Navbarcontanct/>
    <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: '20px' }}>
      <img
        src={ff}
        style={{ maxWidth: '100%', height: 'auto', marginTop: '40px', marginLeft: 'auto', marginRight: 'auto' }}
        alt="Scan"
      />
    </div>
    <FooterContanct/>
    </>
  );
};

export default Off;
