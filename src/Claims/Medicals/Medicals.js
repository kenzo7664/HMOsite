import React from "react";
import "./medical.css";

function Medicals() {
  const handleClick = () => {
    var bu = document.querySelector(".medicals");
    var clone = bu.cloneNode(true);
    clone.id = "elem2";
    bu.after(clone);
  };
  const removeClick = () =>{
    var bu = document.querySelector(".medicals");
    var clone = bu.cloneNode(true);
    clone.id = "elem3";
    bu.remove(clone.id);
    
  }
  return (
    <>
      <div className='Medicals'>
        <div className='medicals'>
          <div className='section-1'>
            <div className='classification-desc'>
              <label htmlFor=''>Classification</label>
              <select name='' id='' className='charges-approved'>
                <option value=''>--select--</option>
              </select>
              <label htmlFor=''>Description</label>
              <select name='' id='' className='charges-approved'>
                <option value=''>--select--</option>
              </select>
            </div>
            <div className='approved'>
              <label htmlFor=''>Unit:</label>
              <input type='text' className='charges-approved' />
              <label htmlFor=''>Unit Price:</label>
              <input type='text' className='charges-approved' />
              <label htmlFor=''>Total Amount:</label>
              <input type='text' className='charges-approved' />
            </div>
            <div className='comment'>
              <label htmlFor=''>Details</label>
              <input type='text' className='charges-approved' />
              <label htmlFor=''>Comment</label>
              <input type='text' className='charges-approved' />
            </div>
          </div>
        </div>
        <div>
          <button type='button' className='btnn1' onClick = {handleClick}>
            Add Field
          </button>
          <button type='button' className='btnn1' onClick = {removeClick}>
            Remove Field
          </button>
          <div>
            <button type='button' id='btnn1'>
              Save
            </button>
            <button type='button' id='btnn1'>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Medicals;
