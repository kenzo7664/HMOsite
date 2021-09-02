import React, { useState } from "react";
import "./modal.css";
import * as FaIcons from "react-icons/fa";
function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className='spn'>
        Set password
      </button>

      {modal && (
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content'>
            <label>Input Email address to Receive Password Link </label>
            <input type='text' />
            {/* <button className='close-modal' onClick={toggleModal}>
              Close
            </button> */}
            <button onClick={toggleModal} className ="snd">
              Send <FaIcons.FaLocationArrow />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
