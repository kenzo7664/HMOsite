import React from "react";
import "./claims.css";

function Claims() {
  return (
    <>
      <section className='claims-wrapper'>
        <div className='heading'>
          <h1>Manual Claims</h1>
        </div>
        <div className='claims-content'>
          <div className='search-claims'>
            <input type='text' placeholder='Enter form No'></input>
            <button className='btn1'>Search Claims</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Claims;
