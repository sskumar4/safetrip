import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../stylesheets/style.css';

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/users', {
        username: signUpCreds.username,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace('/login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid col-md-4 mt-5">
        <h3>Sign Up</h3>
    {/* <div className="container-fluid col-md-6 mt-5"> */}
    <div className="text-center">
      {/* <h4>Sign Up</h4> */}
      <form className="form-signin">
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          name="username"
          placeholder="Email address"
          value={signUpCreds.username}
          onChange={handleChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          name="password"
          placeholder="Password"
          value={signUpCreds.password}
          onChange={handleChange}
        />
        <button className="btn btn-lg btn-block" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
