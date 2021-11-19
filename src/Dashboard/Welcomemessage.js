import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import "./welcom.css"
import * as FaIcons from "react-icons/fa";



class Welcomemessage extends Component{
  
  constructor(props){
    super(props);
    this.state ={
      redirect:false
    }
  }

  componentWillMount(){
    if(sessionStorage.getItem("token")){
       console.log("Call User Feed");
    }
    else{
      this.setState({redirect:true})
    }
  }
  render(){
    if(this.state.redirect){
      return(<Redirect to ={'/'} />)
    }

    if(sessionStorage.getItem("token"))

    return (
      
      <div className='welcome'>
        <button type="button" className="logout" >LOG OUT</button>
      </div>
    );
  }
 }


export default Welcomemessage
