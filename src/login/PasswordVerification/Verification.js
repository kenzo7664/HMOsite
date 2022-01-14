import React, { useState } from "react";
import "./verification.css";
import * as FaIcons from "react-icons/fa";
import {useHistory} from "react-router-dom"

function Verification() {
  
  const [emailAddress, setEmailAddress] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")
  const [people, setPeople] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let history = useHistory()
  // const passWord1 = document.getElementById("email");
  // const passWord2 = document.getElementById("password");
  // const passWord3 = document.getElementById("confirmPassword")
  // const token = document.getElementById("confirmToken")

  const checkInputs = () => {
    const passWord1 = document.getElementById("email");
    const passWord2 = document.getElementById("password");
    const passWord3 = document.getElementById("confirmPassword")
    const token = document.getElementById("confirmToken")
    const passwordValue = passWord1.value.trim();
    const password2Value = passWord2.value.trim();
    const codeValue = token.value.trim();
    const password3Value = passWord3.value.trim()

    if (passwordValue == "") {
      setErrorFor(passWord1, "Field can't be empty");

    } else{
      setSuccessFor(passWord1, "Checked")
    }
    if (password2Value == ""){
      setErrorFor(passWord2, "Field can't be empty");
    }else{
      setSuccessFor(passWord2, "Checked")
    }
    if(password3Value == ""){
      setErrorFor(passWord3, "Field can't be empty");
    } else if(password2Value !== password3Value){
      setErrorFor(passWord3, "Passwords do not match");  
    }else{
      setSuccessFor(passWord3, "Checked")
    }
    if(codeValue ==""){
      setErrorFor(token, "Field can't be empty"); 
    }else{
      setSuccessFor(token, "Checked")
    }
    if (codeValue !== "" && password2Value !== "" && password3Value !== "" && password2Value == password3Value){
      
      window.location.href = "/"
    }
    // else {
    //   setSuccessFor(passWord2, "Successfully Changed");
    // }

    // if (passwordValue !== password2Value) {
    //   setErrorFor(passWord2, "Passwords do not match!");
    // }

    // if (
    //   document
    //     .querySelectorAll(".form-control")[0]
    //     .classList.contains("success") &&
    //   document
    //     .querySelectorAll(".form-control")[1]
    //     .classList.contains("success")
    // ) {
    //   handleSubmit();
    // }
  };
  async function resetPassword(){
    
    let item = {"emailAddress" : emailAddress.trim(),
                 "code": code.trim(),
                 "password": password.trim()
    }
   let gu = JSON.stringify(item)
   console.log(gu);
   
   let result = await fetch("https://lifeworthhmo.herokuapp.com/api/Account/ResetPassword",{
    method:'POST',
    headers:{
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:gu
    


   })
   
   console.log(result);
  
  }

  const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
  };

  const setSuccessFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control success";
    small.innerText = message;
  };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);
  //   setPerson({ ...person, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault()
    checkInputs();
    
    resetPassword()
    history.push("/")
    
    

    // if (person.password === person.confirmPassword) {
    //   const newPerson = { ...person, id: new Date().getTime().toString() };
    //   setPeople([...people, newPerson]);
    //   setPerson({ password: "", confirmPassword: "" });
    // }
    // if (person.password === person.confirmPassword) {
    //  window.location.href="/page"
    // }
  };

  return (
    <>
      <article>
        <form className='forrm' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Email : </label>
            <input
              type= "email"
              id='email'
              name='email'
              onChange={(e)=> setEmailAddress(e.target.value)}
              
            />
            <small>Error message</small>
            
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>Password : </label>
            <input
              type={passwordShown ? "text" : "password"}
              id='password'
              name='password'
              
              onChange={(e)=> setPassword(e.target.value)}
            />
            <FaIcons.FaRegEyeSlash
              onClick={togglePassword}
              className='eye-slash'
            />
            <small>Error message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'> Confirm Password : </label>
            <input
              type={passwordShown ? "text" : "password"}
              id='confirmPassword'
              name='password'
              
              onChange={(e)=> setPassword(e.target.value)}
            />
            <FaIcons.FaRegEyeSlash
              onClick={togglePassword}
              className='eye-slash'
            />
            <small>Error message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Code : </label>
            <input
              
              id='confirmToken'
              name='confirmToken'
              onChange={(e)=> setCode(e.target.value)}
              
            />
           <small>Error message</small>
          </div>

          <button type='submit' onClick={handleSubmit} className='form-btn'>
            Create Account
          </button>
        </form>
      </article>
    </>
  );
}

export default Verification;
