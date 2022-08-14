import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import { useHistory } from "react-router";
import "./list.css";
import NumberFormat from 'react-number-format';


function SubmittedList (){
    let navigate = useHistory();
    const [claimsList , setClaimsList] = useState([])
    const providerId = Number( sessionStorage.getItem("id"))
    const backClick = () =>{
      navigate.push("./dash")
    }


  useEffect(()=>{
      axios.get(`https://portal.lifeworthhmoportal.com/api/Claims/daily/all/${providerId}`)
      .then((response)=>{
          setClaimsList(response.data)
          console.log(response.data);
      })
      .catch((error)=>{
          console.error(error)
      })
  },[providerId])
  

  const amount = claimsList.map((data)=>data.chargesSent)
  const totalAmount = amount.reduce((a,b)=> a + b ,0)


return (
  <>
  <div className='back'>
    <button onClick={backClick} className="bck" >Back to Dashboard</button>
    <h2>Total Charges Sent : <NumberFormat value={totalAmount}  displayType={'text'} thousandSeparator={true} prefix={'NGN'} /></h2>
  </div>
   <table className='table' >
   <thead>
    <tr>
      <th>FullName</th>
      <th>EmployeeNo.</th>
      <th>Diagnosis</th>
      <th>Treatment Date</th>
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
      <td>{data.treatmentDate.substring(0,10)}</td>
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

export default SubmittedList