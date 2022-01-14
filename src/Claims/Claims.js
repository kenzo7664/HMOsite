import React from "react";
import "./claims.css";
import Details from "./details/Details";
import Authorization from "./authorization/Authorization";
import Medicals from "./Medicals/Medicals";

function Claims() {
  return (
    <>
      <section className='claims-wrapper'>
        <div className='heading'>
          <h1>Manual Claims</h1>
        </div>
        <div className='claims-content'>
          {/* <div className='search-claims'>
            <input
              type='text'
              placeholder='Enter form No'
              className='input'
            ></input>
            <button className='btnn1'>Search Claims</button>
          </div> */}
          <div className='Provider-type'>
            {/* <input type='text' className='get-form' />
            <button className='Get'>Get Form No</button> */}
            {/* <label htmlFor='cars'>Provider Type:</label>
            <select name=''>
              <option value='PCP'>PCP</option>
            </select> */}
            <div className='radio-inputs'>
              <input type='radio' className='radio' />
              <label htmlFor='provider'>Provider</label>
              <input type='radio' className='radio' />
              <label htmlFor='dependent'>Dependant</label>
            </div>
          </div>
          {/* <div className='provider'>
            <label htmlFor='provider'>Provider</label>
            <select className='prov' id=''>
              <option value=''>--select--</option>
            </select>
            <input type='text' className='get-form' />
          </div> */}
          <div className='enrolee'>
            <label htmlFor='enrolee'>Select Enrollee</label>
            <select className='prov' id=''>
              <option value=''>--select--</option>
            </select>
          </div>
          <Details />
          <Authorization />
          <Medicals />
        </div>
      </section>
    </>
  );
}

export default Claims;
