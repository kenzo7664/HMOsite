import{ React,useState,useEffect} from "react";
import {PostData} from '../../src/services/PostData'
import { Link } from 'react-router-dom';
import "./main.css";
import note from "./notes.png";
import Id from "./id-card.png";
import search from "./search.png";
import claims from "./refund.png";




function Main() {
  const [error, setError]=useState(null)
  const [data, setData]=useState("")
  const [principal,setPrincipal] = useState('')
  const [dependant,setDependant] = useState('')
  const Info = sessionStorage.getItem('providername')
  const Id = sessionStorage.getItem('id')

 

  useEffect(()=>{
    let ap = `http://15.237.160.238:50/api/Provider/TotalClaimsSubmitted/` + `${Id}`
    fetch (`${ap}`)
    .then(response =>{
      if(response.ok){
        return response.json()
      }
      throw response
    })
    .then(data => {
      setData(data)
      console.log(data)
    })
    .catch(error =>{
      console.error("Error fetching data:",error)
      setError(error)
    })
    let api = `http://15.237.160.238:50/api/Provider/TotalPrincipal/` + `${Id}`
    fetch (`${api}`)
    .then(response =>{
      if(response.ok){
        return response.json()
      }
      throw response
    })
    .then(principal => {
      setPrincipal(principal)
      console.log(principal)
    })
    .catch(error =>{
      console.error("Error fetching data:",error)
      setError(error)
    })
    let td = `http://15.237.160.238:50/api/Provider/TotalDependant/` + `${Id}`
    fetch (`${td}`)
    .then(response =>{
      if(response.ok){
        return response.json()
      }
      throw response
    })
    .then(dependant => {
      setDependant(dependant)
      console.log(dependant)
    })
    .catch(error =>{
      console.error("Error fetching data:",error)
      setError(error)
    })
  },[])
  return (
    <>
      
       
        
      <div className='mainwrapper'>
          <h1 className = "msg">WELCOME {Info} </h1>
       <div className="mains">
        <div className='sub-mainwrapper1'>
          <div className='wrapper1'>
            <div className='sub-wrapper1'>
              <p className='itenary'>
               Total Number of Submitted Claims
              </p>
              <br />
              <Image style  />
            </div>
            <h3 className='item-quantity'>{data.totalCount}</h3>
          </div>
          <div className='wrapper1'>
            <div className='sub-wrapper1'>
              <p  className='itenary'>
                Total Number of Principals
              </p>
              <br />
              <Image />
            </div>
            <h3 className='item-quantity'>{principal.totalCount}</h3>
          </div>
          <Link to = "/claims">
          <div className='wrapper1' href ="/claims" >
            <div className='sub-wrapper1'>
              <p  className='itenary'>
                Claims
              </p>
              <br />
              <Image4 />
            </div>
            
          </div>
          </Link>
          
        </div>
        
        <div className='sub-mainwrapper2'>
          <Link to ='/List'>
          <div className='wrapper2'>
            <div className='sub-wrapper2'>
              <p className='itenary'>
                List of Claims Submitted
              </p>
              <br />
              <Imagee />
            </div>
            
          </div>
          </Link>
          <div className='wrapper2'>
            <div className='sub-wrapper2'>
              <p className='itenary'>
                Total Number of Dependants
              </p>
              <br />
              <Image2 />
            </div>
            <h3 className='item-quantity'>{dependant.totalCount}</h3>
          </div>
          <Link to ="/SearchEnrollee">
          <div className='wrapper2'>
            <div className='sub-wrapper2'>
              <p className='itenary'>
                Search Enrollee
              </p>
              <br />
              <Image3 />
            </div>
            
          </div>
          </Link>
          
        </div>
        </div>
      </div>
    </>
  );
}

const Image = () => {
  return <img src={note} alt='' className='img2' />;
};

const Imagee = () => {
  return <img src={note} alt='' className='img3' />;
};

const Image2 = () => {
  return <img src={Id} alt='' className='img4' />;
};

const Image3 = () => {
  return <img src={search} alt='' className='img5' />;
};

const Image4 = () => {
  return <img src={claims} alt='' className='img6' />;
};

export default Main;
