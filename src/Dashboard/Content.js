import React from "react";

import "./content.css";

function Content(){
return (
 <div className='content-wrapper'>
   <div className='contents'>
     <div className='contnt'>
       
       <h1>Tolulope</h1>
     </div>
     <h3 className='content'>
       <i className='fa fa-tachometer'>Dashboard</i>
     </h3>
     <h3 className='content'>
       <i className='fa fa-stethoscope'>Clients</i>
     </h3>
     <h3 className='content'>
       <i className='fa fa-stethoscope'>Provider</i>
     </h3>
     <h3 className='content'>
       <i className='fa fa-stethoscope'>Plans</i>
     </h3>
     <h3 className='content'>
       <i className='fa fa-stethoscope'>Levels</i>
     </h3>
     <h3 className='content'>
       <i class="fa fa-id-card">ID cards </i>
     </h3>
     <h3 className='content'>
       <i className='fa fa-stethoscope'>Claims </i>
     </h3>
   </div>
 </div>
 );
  
};


export default Content;
