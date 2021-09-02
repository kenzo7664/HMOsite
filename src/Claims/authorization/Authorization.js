import React from "react";
import "./authorization.css";




function Authorization() {
  return (
    <>
      <div className='authorization'>
        <div className='Company'>
          <label htmlFor='company'>Authorization Code/Date</label>
          <input type='text' className='author' />
          <input type='text' className='get-form' />
        </div>
        <div className='headin'>
          <div className='diagnosis'>
            <label htmlFor='diagnosis'>Diagnosis</label>
            <select name='' className='diag'>
              <option value=''>--select--</option>
            </select>
          </div>
          <div className='detailS'>
            <label htmlFor='diagnosis'>Details</label>
            <input type='text' className='get-form' />
          </div>
          <div className='ICD-code'>
            <label htmlFor='diagnosis'>ICD Code</label>
            <input type='text' className='get-form' />
          </div>
          <div className='Consultation-date'>
            <label htmlFor='diagnosis'>Consultation Date</label>
            <input type='date' className='get-date' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Authorization;
