import React from 'react'
import "./welcom.css"
import * as FaIcons from "react-icons/fa";


 function Welcomemessage () {
 
 return (
   <div className='welcome'>
     <h1 className='welcome-text'>TOLU</h1>
     <FaIcons.FaUserCircle className='icn' />
     <FaIcons.FaUserCircle className='icon' />
   </div>
 );
 }


export default Welcomemessage
