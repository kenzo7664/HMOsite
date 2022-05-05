import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./claims.css";
import Details from "./details/Details";
import Authorization from "./authorization/Authorization";
import Medicals from "./Medicals/Medicals";
import { useForm } from "react-hook-form";
import {DebounceInput} from 'react-debounce-input';
import '../Claims/authorization/authorization.css'
import '../Claims/Medicals/medical.css'
import '../Claims/details/details.css'
import { useHistory } from "react-router";


function Claims() {
  const [option,setOption] = useState({obj:null})
  const [options,setOptions] = useState()
  const[apiDataMedical,  setApiDataMedical] = useState([])
  const [searchInput, setSearchInput] = useState({});
  const [searchEmployee, setSearchEmployee] = useState("")
  const[apiData,  setApiData] = useState([])
  const[apiDataAuthor,  setApiDataAuthor] = useState([])
  const [diagnosisCode,  setDiagnosisCode] = useState("")
  const [type,  setType] = useState("")
  const [proType, setProType] = useState('str')
  const [dates, setDates] = useState("")
  const [day,setDay] = useState(0)
  const [month,setMonth] = useState(0)
  const [year,setYear] = useState(0)
  let navigate = useHistory();
  
  
  const providerId = Number( sessionStorage.getItem("id"))
  console.log((providerId));
  let claims =[] 
  const [claim, setClaim] = useState([])
 
  
 
   const searchItems = (searchValue) => {
    setSearchInput(searchValue)
       axios.get(`http://lifeworthhmo.herokuapp.com/api/Employee?FullName=${searchValue}`)
    .then((response) => {
      setApiData(response.data)
      setType("Principal")
      console.log(response);
      console.log(apiData);
      
    })
  }
 

  const searchEmployeeNumber = (searchId) => {
    setSearchEmployee(searchId)
    if(searchId.includes('~')){
       axios.get(`https://lifeworthhmo.herokuapp.com/api/Dependant?DependantNumber=${searchId}`)
       .then((response)=>{
        setApiData(response.data)
        setType("Dependant")
       console.log(response ,searchId);
       })
    } else {
       axios.get(`https://lifeworthhmo.herokuapp.com/api/Employee?EmployeeNumber=${searchId}`)
       .then((response)=>{
        setApiData(response.data)
        setType("Principal")
       console.log(response);
       })
    } 
  }
   function handleChange(event){
    let obj = JSON.parse(event.target.value)
    setOption(obj)
    console.log(obj);
  }
 
  const [objj,  setObjj] = useState('')
 
  const Diagnosis = (e) => {
       axios.get(`http://lifeworthhmo.herokuapp.com/api/Diagnosis`)
    .then((response) => {
      setApiDataAuthor(response.data)
      console.log(response);
      
    })
   const code =  apiDataAuthor.filter((data)=>
      (data.diagnosis === e.target.value) 
    ).map(data=>data.diagnosisCode)
    console.log(code);
    if (apiDataAuthor){setDiagnosisCode(...code)}
    
    console.log(diagnosisCode);
   
  }
 
  const [amountCalc, setAmountCalc] = useState(0)
  // const handleClick = () => {
  //   var bu = document.querySelector(".medicals");
  //   var clone = bu.cloneNode(true);
  //   clone.id = "elem2";
  //   bu.after(clone);
  //   // setAmount(0)
  //   setOption()
  // };
  // const removeClick = () =>{
  //   var bu = document.querySelector(".medicals");
  //   var clone = bu.cloneNode(true);
  //   clone.id = "elem3";
  //   bu.remove(clone.id);
    
  // }
  
   let date = (new Date().getFullYear());
 
  const Medical = (event) => {
       axios.get(`http://lifeworthhmo.herokuapp.com/api/Classification`)
    .then((response) => {
      setApiDataMedical(response.data)
      console.log(response);
      
    })
    
    
  }
   const Description = (event) => {
       axios.get(`http://lifeworthhmo.herokuapp.com/api/Classification`)
    .then((response) => {
      setApiDataMedical(response.data)
      console.log(response);
    const price = apiDataMedical.filter((data)=>(data.description === event.target.value)).map(data => data.price)
    console.log(...price);
    setOptions(...price)
    console.log(option);
    })
     
    
  }
  const chargesApproved =()=>{
    const value = Number(document.getElementById('charges').value)
    const calcAmount = value * options
    setAmountCalc(calcAmount);
  }

  const getDate = (e) =>{

    if(e.target.value !== ""){
     const dateConvert = e.target.value
     const dateStr = new Date (dateConvert)
     const iso = dateStr.toISOString()
     const day = dateStr.getDate()
     const month = dateStr.getMonth() + 1
     const year = dateStr.getFullYear()
     console.log(day,month, year);
     setDay(day)
     setMonth(month)
     setYear(year)
     
     setDates(iso)
     console.log(dates);
    }

  }
  const backClick = () =>{
    navigate.push("./dash")
  }


  
  const defaultValues = {"chargesApproved":amountCalc , "idProvider":option.idProvider,"type":type, "protype":proType,"TreatmentDate":dates,"Day":day,"Month":month,"Year":year}
  const { register, handleSubmit , reset } = useForm({defaultValues});
 
    const addUp = (data) =>{
      data.type = type
      data.chargesApproved = amountCalc
      data.idProvider = providerId
      data.employeeNo = option.employeeNo
      data.employeeName = option.fullName || option.name
      data.employeeSurname = option.surname
      data.consultancyDate = dates
      data.TreatmentDate = dates
      data.Day = day
      data.Month = month
      data.year = year
       console.log(data);
       claims.push(data)
       console.log(claims);
       console.log(claims.length);
       if (claims.length >= 0){
         onSubmit()
       }
        setApiDataMedical(null)
        setAmountCalc('')
        setOptions("")
        reset()
      
       
    }
    const onSubmit = () => {
     console.log(claims);
    
    
   
    
    setApiDataMedical(null)
    setAmountCalc('')
    setOptions("")
    
    axios
        .post(
            'https://lifeworthhmo.herokuapp.com/api/Claims',
            claims,
            { headers: { 'Content-Type': 'application/json' }}
         )
        .then(response => {console.log(response)})
        .then(()=>{
          //  navigate.push("./dash")
        })
        .catch(error => {console.log(error.data)});
        
    };
  
  return (
    <>
      <section className='claims-wrapper'>
        <div className='heading'>
          <h1>Input Claims</h1>
          <button onClick={backClick} className="bck" >Back to Dashboard</button>
        </div>
         <form onSubmit={handleSubmit(addUp)}>
          <div className=''>
             <div className=''>
                <label htmlFor=''>EnroleeNumber:</label> 
               <DebounceInput minLength={2}
                 debounceTimeout={1000}   onChange={(e) => searchEmployeeNumber(e.target.value)} />
                <label htmlFor=''>FullName:</label>
                <DebounceInput minLength={2}
                 debounceTimeout={1000}   onChange={(e) => searchItems(e.target.value)} />
                </div>
             <div className='enrolee'>
            
              <label htmlFor='enrolee'>Select Enrollee</label>
              
              <select className='prov' id='' onClick={handleChange} >
                {searchInput || searchEmployee ?  apiData.map((data,index , arr)=>( 
                <option key = {index} value={JSON.stringify(data)} >{`${data.fullName || data.name}[ ${data.employeeNo}] `}</option>)): ""}
               
              </select>
            </div>
            <div className='details'>
      <div className='status'>
        <label htmlFor='status'>Surname:</label>
        <input type='text' className='stat' value={option.surname} {...register("employeeSurname")} disabled/>
      </div>
      <div className='code-name'>
        <label for='Enn code'>Enn Code:</label>
       <input type='text' className='Name-input' value={option.employeeNo}  {...register("employeeNo")} disabled/>
        <label htmlFor='Name'>Name:</label>
        <input type='text' className='Name-input' value={option.fullName || option.name}  {...register("employeeName")} disabled/>
      </div>
      <div className='age-date'>
        <label htmlFor='birthday'>Birthday:</label>
        <input type='text' className='age' value={`${(option.dateOfBrith ? option.dateOfBrith.substring(0,10)  : "") || (option.birthDate ? option.birthDate.substring(0,10):"")} `} disabled/>
        <label htmlFor='age'>Age:</label>
        <input type='text' className='get-form' value={`${(option.dateOfBrith ? date - Number((option.dateOfBrith).substring(0,4)) : "") || (option.birthDate ? date - Number((option.birthDate).substring(0,4)) : "")}`} disabled/>
        <label htmlFor='sex'>Sex: </label>
        <input type='text' className='age' value={option.sex === "M"? "Male":"Female"} disabled />
        
      </div>
      <div className='status'>
        <label htmlFor='status'>Status</label>
        <input type='text' className='stat' value={option.notes} disabled/>
      </div>
      <div className='Company'>
        <label htmlFor='company'> Address: </label>
        <input type='text' className='comp' value={option.address01} disabled/>
      </div>
      <div className='Company'>
        <label htmlFor='company'> State: </label>
        <input type='text' className='stat' value={option.address02} disabled />
      </div>
    </div>
      <div className='authorization'>
        <div className='Company'>
          <label htmlFor='company'>Authorization Code/Date</label>
          <input type='text' className='author' {...register("authorcode")} required/>
          <input type='text' className='author'  value={new Date().toISOString()} {...register("authdate")} />
        </div>
        <div className='headin'>
          <div className='diagnosis'>
            <label htmlFor='diagnosis'>Diagnosis</label>
            <select name='' className='diag' onClick={Diagnosis} value=
            {options} {...register("diagonsis")} id='diag'>
             {!apiDataAuthor ? <option value=''>--select--</option>
             : apiDataAuthor.map((data,index)=>(
                <option key = {index} value={data.diagnosis} >{`${data.diagnosis}`}</option>))}
            </select>
          </div>
          <div className='detailS'>
            <label htmlFor='diagnosis'>Details</label>
            <input type='text' className='' {...register("details")} />
          </div>
         
          
          <div className='ICD-code'>
            <label htmlFor='diagnosis' >ICD Code</label>
            <input type='text' className='' value={diagnosisCode}    />
          </div>
          
          
          <div className='Consultation-date'>
            <label htmlFor='diagnosis'>Consultation Date</label>
            <input type='date' className='' onClick={(e)=>getDate(e)}  {...register("consultancyDate")} />
          </div>
        </div>
      </div>
      <div className='Medicals'>
        <div className='medicals'>
          <div className='section-1'>
            <div className='classification-desc'>
              <label htmlFor=''>Classification</label>
              <select name='' id='' className='charges-approved' onClick={Medical} {...register("classification")} required>
               {!apiDataMedical ? <option value=''>--select--</option>
             : apiDataMedical.map((data,index)=>(
                <option key = {index} value={data.classification}>{`${data.classification}`}</option>))}
              </select>
              <label htmlFor=''>Description</label>
              <select name='' id='' className='charges-approved' onClick={Description} {...register("Description")} required>
               {!apiDataMedical ? <option value=''>--select--</option>
             : apiDataMedical.map((data,index)=>{
               return  <><option key={index} value={data.description}>{`${data.description}`}</option><input type='text' className='charges-approved' /></>
               })}
              </select>
            </div>
            <div className='approved'>
              <label htmlFor=''>No of days/Qty:</label>
              <input type='number' className='charges-approved' id="charges" {...register("qty",{valueAsNumber:true})} onChange={chargesApproved}/>
              <label htmlFor=''>Unit price:</label>
              <input type='text' className='charges-approved' value={options} disabled />
            
            </div>
            <div className="amount">
              <label htmlFor=''>Charges Approved:</label>
              <input type='number' className='charges' id="approved-charges" {...register("chargesApproved")} value={amountCalc}    disabled/>
            </div>
            <div className='comment'>
              <label htmlFor=''>Amount Sent</label>
              <input type='number' className='charges-approved' {...register("chargesSent",{valueAsNumber:true})} required/>
              <label htmlFor=''>Comment</label>
              <input type='text' className='charges-approved' {...register("Comment")}  />
            </div>
          </div>
        </div>
        
      </div>
      <button type='submit' className='btnn1'>Submit</button>
          </div>
          
        </form>
      </section>
    </>
  );
}

export default Claims;
