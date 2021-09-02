import React from "react";
import "./details.css";

function Details() {
  return (
    <div className='details'>
      <div className='code-name'>
        <label for='Enn code'>Enn Code:</label>
        <select className='code' id=''>
          <option value=''>--select--</option>
        </select>
        <label htmlFor='Name'>Name:</label>
        <input type='text' className='Name-input' />
      </div>
      <div className='Company'>
        <label htmlFor='company'> Company</label>
        <input type='text' className='get-form' />
        <input type='text' className='comp' />
      </div>
      <div className='age-date'>
        <label htmlFor='birthday'>Birthday</label>
        <input type='text' className='get-form' />
        <label htmlFor='age'>Age</label>
        <input type='text' className='age' />
        <label htmlFor='sex'>Sex</label>
        <input type='text' className='age' />
        <label htmlFor='date'>Date</label>
        <input type='date' className='date' />
      </div>
      <div className='status'>
        <label htmlFor='status'>Status</label>
        <input type='text' className='stat' />
      </div>
      <div className='Company'>
        <label htmlFor='company'> Provider</label>
        <input type='text' className='get-form' />
        <input type='text' className='comp' />
      </div>
      <div className='Company'>
        <label htmlFor='company'> Consumption</label>
        <input type='text' className='stat' />
      </div>
    </div>
  );
}

export default Details;
