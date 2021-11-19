import React, { Component, useState } from "react";
import {PostData} from '../../src/services/PostData'
import { Redirect } from "react-router-dom";
import Modal from './modal/Modal'
import medi from "./medicalimg.jpg";
import "./login.css";

class Page extends Component{
   constructor(props){
     super(props);
     this.state = {
       emailAddress : "",
       password:"",
       redirect: false
     }
     this.Login = this.Login.bind(this);
     this.onChange = this.onChange.bind(this);
   }
   Login(e){
     e.preventDefault()
     if(this.state.emailAddress && this.state.password){
      PostData('Login', this.state).then((result)=>{
        let responseJSON = result
        console.log(responseJSON);
        if(responseJSON.details){
           sessionStorage.setItem('token',responseJSON.token)
           this.setState({redirect:true})
        }
        else{
          console.log("login error");
        }
      })
     }
     
   }

  

   onChange(e){
      this.setState({[e.target.name]: e.target.value})
      console.log(this.state);
   }
  
  
  render(){ 
    if(this.state.redirect){
      return(<Redirect to ={'/dash'} />)
    }
    return (
      <section className='form'>
        <Images />
        <div className='formm'>
          <form
            
          >
            <h2>Email</h2>
            <label htmlFor='email'></label>
            <input
              type='email'
              name="emailAddress"
              placeholder='Email'
              className=''
              onChange ={this.onChange}
              
            />
            <h2>PASSWORD</h2>
            <label htmlFor='password'></label>
            <input
              type='password'
              placeholder='Password'
              name = "password"
              className=''
              onChange ={this.onChange}
             
              
            />
            

            <button type='submit' className='btn1' onClick={this.Login}  >Login</button>
            <p className='desc'>
              Dont have an account yet ?
              <Modal />
            </p>
          </form>
        </div>
      </section>
    );
    }
}
const Images = () => {
  return <img src={medi} alt='' className='img' />;
};

export default Page;
