import React, { useEffect, useState } from 'react'
import "./SearchEnrollee.css";
import {DebounceInput} from 'react-debounce-input';
import axios from 'axios';
import Table from './Table';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from "react-router";

function SearchEnrollee () {
  const [searchInput, setSearchInput] = useState({});
  const [searchEmployee, setSearchEmployee] = useState("")
  const[apiData,  setApiData] = useState([])
  let navigate = useHistory();
  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
      axios.get(`http://15.237.160.238:50/api/Employee?FullName=${searchValue}`) 
    .then((response) => {
      setApiData(response.data)
      toast("Patient(s) Fetched Succesfully", {
        duration: 4000,
        style: {
        borderRadius: '10px',
        background: '#F8A370',
        color: '#fff',
     },
      },
      )
      console.log(response,searchValue);
    })
  }

  const searchEmployeeNumber = (searchId) => {
    setSearchEmployee(searchId)
    if(searchId.includes('~')){
       axios.get(`http://15.237.160.238:50/api/Dependant?DependantNumber=${searchId}`)
       .then((response)=>{
        setApiData(response.data)
        toast("Patient(s) Fetched Succesfully", {
          duration: 4000,
          style: {
          borderRadius: '10px',
          background: '#F8A370',
          color: '#fff',
       },
        },
        )
       console.log(response ,searchId);
       })
    } else {
       axios.get(`http://15.237.160.238:50/api/Employee?EmployeeNumber=${searchId}`)
       .then((response)=>{
        setApiData(response.data)
        toast("Patient(s) Fetched Succesfully", {
          duration: 4000,
          style: {
          borderRadius: '10px',
          background: '#F8A370',
          color: '#fff',
       },
        },
        )
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
        <section className='background'>
        <section className='claims-wrapperr'>
          <div className='heading'>
            <h1>Search Enrollee</h1>
            <button onClick={backClick} className="bck" >Back to Dashboard</button>
            <Toaster
              position="top-center"
              reverseOrder={false}
          />
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
        </section>
      </>
    )
}

export default SearchEnrollee
