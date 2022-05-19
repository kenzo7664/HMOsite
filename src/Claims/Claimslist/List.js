import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import { useHistory } from "react-router";

import "./list.css";
function List (){
    let navigate = useHistory();
    const [claimsList , setClaimsList] = useState([])
    const providerId = Number( sessionStorage.getItem("id"))
    const backClick = () =>{
      navigate.push("./dash")
    }
useEffect(()=>{
    axios.get(`http://15.237.160.238:50/api/Claims?IdProvider=${providerId}&pageNumber=1&pageSize=100`)
    .then((response)=>{
        console.log(response.data);
        setClaimsList(response.data)
    })
    .catch((error)=>{
        console.error(error)
    })
},[providerId])
return (
  <>
  <button onClick={backClick} className="bck" >Back to Dashboard</button>
   <table className='table' >
   <thead>
    <tr>
      <th>FullName</th>
      <th>EmployeeNo.</th>
      <th>Diagnosis</th>
      <th>Classification</th>
      <th>Description</th>
      
      <th>Charges Sent</th>
      <th>Status</th>
    </tr>
  </thead>
  {claimsList ? claimsList.map((data , index)=>(
      <tbody className='size'>
    <tr key={index} >
      <td>{data.employeeName}</td>
      <td >{data.employeeNo}</td>
      <td>{data.diagnosis}</td>
      <td>{data.classification}</td>
      <td>{data.description}</td>
       
       <td>{data.chargesSent}</td>
       <td>{data.claimsStatus === "SUBMITTED"? "SUBMITTED":"APPROVED"}</td>
    </tr>
    </tbody>
  )) : "Loading List ..." }
  
  
    </table>
    </>
   
)
}

export default List