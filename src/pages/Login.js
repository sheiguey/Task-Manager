import React, { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import './login.css';

const Login = ({authentification}) => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        authentification()
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        throw new Error(error)
      });
  }

  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onLogin} >
        <div className="form-controls">
          <label htmlFor="email-address">
            Email
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => EmailChangeHandler(e)}
          />
        </div>

        <div className="form-controls">
          <label htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => passwordChangeHandler(e)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="form-btn"
          >
            Login
          </button>
        </div>
      </form>
    </div>

  )
}

export default Login;