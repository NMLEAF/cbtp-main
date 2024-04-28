import React, { useState } from 'react';
import './LoginForm.css'; // CSS file for styling
import authService from '../services/authService';
import {useToast} from '../context/ToastContext'
const LoginForm = () => {
   const {setToastData} =useToast();
  const [formData, setFormData] = useState({
    userIdentifier: "", userPassword: ""
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit  = async (e) => {
    e.preventDefault();
    // console.log(formData)
    // console.log('Logged in with email:', email, 'and password:', password);
    const response= await authService.login(formData)
    setToastData(response);
    
  };  

 

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          name='userIdentifier'
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password:</label>
          <input
          name='userPassword'
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className='btnbtn' type="submit">Login</button>
      </form>
      <div className="change-password-link">
        <a href="#">Change Password</a>
      </div>
    </div>
  );
};

export default LoginForm;