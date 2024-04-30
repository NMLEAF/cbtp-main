import React, { useEffect, useState } from 'react';
import './LoginForm.css'; // CSS file for styling
import authService from '../services/authService';
import { useToast } from '../context/ToastContext';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const { isLogged } = useAuth();
  const navigator = useNavigate();
  const { setToastData } = useToast();
  const [formData, setFormData] = useState({
    userIdentifier: "",
    userPassword: ""
  });
  const [errors, setErrors] = useState({
    userIdentifier: "",
    userPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error message when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.userIdentifier.trim()) {
      newErrors.userIdentifier = "Email is required";
      isValid = false;
    }

    if (!formData.userPassword.trim()) {
      newErrors.userPassword = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await authService.login(formData);
      setToastData(response);

      if (response.success) {
        navigator("/");
      }
    }
  };

  useEffect(() => {
    if (isLogged) {
      navigator("/login");
    }
  }, [isLogged]);

  return (
    <div className="login-form-container">
      <div className="cancel-btn"><Link to="/">&times;</Link></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            name='userIdentifier'
            type="email"
            id="email"
            value={formData.userIdentifier}
            onChange={handleChange}
            required
          />
          {errors.userIdentifier && <span className="error">{errors.userIdentifier}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="userPassword">Password:</label>
          <input
            name='userPassword'
            type="password"
            id="password"
            value={formData.userPassword}
            onChange={handleChange}
            required
          />
          {errors.userPassword && <span className="error">{errors.userPassword}</span>}
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
