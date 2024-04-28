import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="container container-height">
      <div className="user-detail-header class-header">
        <div className="class-header-left">
          <div className="user-profile">
            <h1 className="class-name">Registration Form</h1>
          </div>

          <div className="class-options">
            <div className="options">
              <label htmlFor="" className="class-label">
                Register -
              </label>
              <select>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
