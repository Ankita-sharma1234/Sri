import React, { useEffect } from 'react';
import { Modal } from 'bootstrap';
import { Link } from "react-router-dom";
const Popup = () => {
  useEffect(() => {
  
    const showModal = () => {
        const myModal = document.getElementById('myModal');
        const bootstrapModal = new Modal(myModal);
        bootstrapModal.show();
      };
  

    showModal();

    // Cleanup function if needed
    return () => {
      // Any cleanup code if needed
    };
  }, []);

  return (
    <>
      <style>
        {`
        .modal-body h1 {
          font-weight: 900;
          font-size: 2.3em;
          text-transform: uppercase;
          
        }
        .modal-body a.pre-order-btn {
          color: #000;
          background-color: gold;
          border-radius: 1em;
          padding: 1em;
          display: block;
          margin: 2em auto;
          width: 50%;
          font-size: 1.25em;
          font-weight: 5000;
          
        }
        .modal-body a.pre-order-btn:hover {
          background-color: #000;
          text-decoration: none;
          color: gold;
        }
        `}
      </style>
      <div id="myModal" className="modal fade" role="dialog" style={{marginTop:"5%"}}>
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
             
            </div>
            <div className="modal-body text-center">
            <h4 >
                Admission for current session is open  register through below button now 
          </h4>
              
               <Link to="/erp/studentregister">
              <a className="pre-order-btn" >
                Register
              </a></Link>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
