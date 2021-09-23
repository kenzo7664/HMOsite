import React, { Component } from "react";
import Modal from './modal/Modal'
import medi from "./medicalimg.jpg";
import "./login.css";

// const formValid = (formErrors) => {
//   let valid = true;

//   Object.values(formErrors).forEach((val) => {
//     val.length > 0 && (valid = false);
//   });
//   return valid;
// };
class Page extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: null,
  //     password: null,
  //     formErrors: {
  //       email: "",
  //       password: "",
  //     },
  //   };
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (formValid(this.state.formErrors)) {
  //     console.log(`
  //      Email: ${this.state.email}
  //      Password: ${this.state.password}
  //    `);
  //   } else {
  //     console.error("form invalid -display error message");
  //   }
  // };

  render() {
    return (
      <section className='form'>
        <Images />
        <div className='formm'>
          <form
            // onSubmit={this.handleSubmit}
            // action='https://www.youtube.com/results'
          >
            <h2>Email</h2>
            <label htmlFor='email'></label>
            <input
              type='email'
              placeholder='Email'
              className=''
              onChange={this.handleChange}
            />
            <h2>PASSWORD</h2>
            <label htmlFor='password'></label>
            <input
              type='password'
              placeholder='Password'
              className=''
              onChange={this.handleChange}
            />
            <input type='checkbox' className='chk' />
            <h3 className='reme'>Remember me</h3>
            <input type='submit' className='btn1' value='Login' />
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
