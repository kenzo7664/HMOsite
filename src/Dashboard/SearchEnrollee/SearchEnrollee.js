import React from 'react'
import "./SearchEnrollee.css";
import Table from './Table';

function SearchEnrollee () {
  const handleClick =() =>{
    let di = document.getElementById("students")
    if(di.style.display === "none"){
      di.style.display ="table"
    }else {
      di.style.display = "table"
    }
  }
    return (
        <>
        <section className='claims-wrapper'>
          <div className='heading'>
            <h1>Search Enrollee</h1>
          </div>
          <div className='claims-content' id="enroleecontent">
            
            <div className=''>
              <div className='radio-input'>
                <input type='radio' className='radio' />
                <label htmlFor='provider'>Principal</label>
                <input type='radio' className='radio' />
                <label htmlFor='dependent'>Dependant</label>
              </div>
            </div>
            <form className = "enrole">
                <div className='approved'>
                <label htmlFor=''>Enrollee ID:</label>
                <input type='text' className='charges-approved' />
                <label htmlFor=''>Surname:</label>
                <input type='text' className='charges-approved' />
                
                
                </div>
                <div className ="dependant">
                <label htmlFor=''>Fullname:</label>
                <input type='text' className='charges-approved' />
                <label htmlFor=''>Fullname:</label>
                <input type='text' className='charges-approved' />
                </div>
                <button type="button" className="search" onClick={handleClick}>Search</button>
            </form>
           <Table/>
          </div>
        </section>
      </>
    )
}

export default SearchEnrollee
