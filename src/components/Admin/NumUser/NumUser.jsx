import React from "react";
import "./NumUser.css";

const NumUser = () => {
  return (
    <div className="num-user">
      <div className="container num-item">
        <span>ic</span>
        <div className="tit-num">
          <p className="num-title">Registrar</p>
          <p className="num">29</p>
        </div>
      </div>
      <div className="container num-item">
        <span>ic</span>
        <div className="tit-num">
          <p className="num-title">Students</p>
          <p className="num">1290</p>
        </div>
      </div>
      <div className="container num-item">
        <span>ic</span>
        <div className="tit-num">
          <p className="num-title">Teachers</p>
          <p className="num">109</p>
        </div>
      </div>
      <div className="container num-item">
        <span>ic</span>
        <div className="tit-num">
          <p className="num-title">Parents</p>
          <p className="num">882</p>
        </div>
      </div>
    </div>
  );
};

export default NumUser;
