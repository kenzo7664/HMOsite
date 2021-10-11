import React, { useState } from "react";
import "./verification.css";
import * as FaIcons from "react-icons/fa";

function Verification() {
  const [person, setPerson] = useState({ password: "", confirmPassword: "" });
  const [people, setPeople] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const passWord1 = document.getElementById("password");
  const passWord2 = document.getElementById("confirmPassword");

  const checkInputs = () => {
    const passwordValue = passWord1.value.trim();
    const password2Value = passWord2.value.trim();

    if (passwordValue === "") {
      setErrorFor(passWord2, "Fields can't be empty");
    } else {
      setSuccessFor(passWord2, "Successful");
    }

    if (passwordValue !== password2Value) {
      setErrorFor(passWord2, "Passwords do not match!");
    }

    if (
      document
        .querySelectorAll(".form-control")[0]
        .classList.contains("success") &&
      document
        .querySelectorAll(".form-control")[1]
        .classList.contains("success")
    ) {
      handleSubmit();
    }
  };

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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    checkInputs();
    e.preventDefault();
    

    if (person.password === person.confirmPassword) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ password: "", confirmPassword: "" });
    }
    if (person.password === person.confirmPassword) {
     window.location.href="/page"
    }
  };

  return (
    <>
      <article>
        <form className='forrm' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Password : </label>
            <input
              type={passwordShown ? "text" : "password"}
              id='password'
              name='password'
              value={person.password}
              onChange={handleChange}
            />
            <FaIcons.FaRegEyeSlash
              onClick={togglePassword}
              className='eye-slash'
            />
            <small>Error message</small>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Confirm Password : </label>
            <input
              type={passwordShown ? "text" : "password"}
              id='confirmPassword'
              name='confirmPassword'
              value={person.confirmPassword}
              onChange={handleChange}
            />
            <FaIcons.FaRegEyeSlash
              onClick={togglePassword}
              className='eye-slash'
            />
            <small>Error message</small>
          </div>

          <button type='submit' onClick={handleSubmit} className='form-btn'>
            Reset Password
          </button>
        </form>
      </article>
    </>
  );
}

export default Verification;
