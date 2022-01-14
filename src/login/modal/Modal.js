import React, { useState } from "react";
import "./modal.css";
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useHistory} from "react-router-dom"


function Modal() {
  const [emailAddress, setEmailAddress] = useState("")
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    setModal(!modal);
    e.preventDefault()
    
  };
  let history = useHistory()
  async function sendInfo(e){
     e.preventDefault()
     history.push("/verification")
     let item = {"emailAddress" : emailAddress.trim()}
    let gu = JSON.stringify(item)
    console.log(gu);
    
    let result = await fetch("https://lifeworthhmo.herokuapp.com/api/Account/RequestToken",{
     method:'POST',
     headers:{
       "Content-Type": "application/json",
       "Accept": "application/json"
     },
     body:gu
     


    })
    
    console.log(result);
    
   


    // const infoEmail = (document.getElementById('email').value)
    // // console.log(infoEmail);
    // if(infoEmail === ""){
    //  e.preventDefault()
    // }else{
    //   e.preventDefault()
    // }
  }

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
            <input type="email" id="email" onChange = {(e)=> setEmailAddress(e.target.value)} />
            {/* <button className='close-modal' onClick={toggleModal}>
              Close
            </button> */}
            
              <button onClick={sendInfo} className ="snd" >
                Send <FaIcons.FaLocationArrow /> 
              </button>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
