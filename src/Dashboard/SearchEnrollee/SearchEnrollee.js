import React, { useEffect, useState } from 'react'
import "./SearchEnrollee.css";
import {DebounceInput} from 'react-debounce-input';
import axios from 'axios';
import Table from './Table';
import { useHistory } from "react-router";

function SearchEnrollee () {
  const [searchInput, setSearchInput] = useState({});
  const [searchEmployee, setSearchEmployee] = useState("")
  const[apiData,  setApiData] = useState([])
  let navigate = useHistory();
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
      axios.get(`http://lifeworthhmo.herokuapp.com/api/Employee?FullName=${searchValue}`) 
    .then((response) => {
      setApiData(response.data)
      console.log(response,searchValue);
    })
  }

  const searchEmployeeNumber = (searchId) => {
    setSearchEmployee(searchId)
    if(searchId.includes('~')){
       axios.get(`https://lifeworthhmo.herokuapp.com/api/Dependant?DependantNumber=${searchId}`)
       .then((response)=>{
        setApiData(response.data)
       console.log(response ,searchId);
       })
    } else {
       axios.get(`https://lifeworthhmo.herokuapp.com/api/Employee?EmployeeNumber=${searchId}`)
       .then((response)=>{
        setApiData(response.data)
       console.log(response);
       })
    }
     
       
  
     
    
  }
  const backClick = () =>{
    navigate.push("./dash")
  }
  
  useEffect(()=>{
    
  }, [])

  
    return (
        <>
        <section className='claims-wrapper'>
          <div className='heading'>
            <h1>Search Enrollee</h1>
            <button onClick={backClick} className="bck" >Back to Dashboard</button>
          </div>
          <div className='' id="enroleecontent">
            
            
            <form className = "enrole">
                <div className=''>
                <label htmlFor=''>EmployeeNumber:</label> 
               <DebounceInput minLength={2}
                 debounceTimeout={1000}   onChange={(e) => searchEmployeeNumber(e.target.value)} />
                <label htmlFor=''>FULLNAME:</label>
                <DebounceInput minLength={2}
                 debounceTimeout={1000}   onChange={(e) => searchItems(e.target.value)} />
                
                
                </div>
                <div className ="dependant">
                {/* <label htmlFor=''>Fullname:</label>
                <input type='text' className='charges-approved' />
                <label htmlFor=''>Fullname:</label>
                <input type='text' className='charges-approved' /> */}
                </div>
               
            </form>
           <Table apiData={apiData} searchInput={searchInput} searchEmployee={searchEmployee}/>
          </div>
        </section>
      </>
    )
}

export default SearchEnrollee
