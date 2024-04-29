import React from 'react';
import "./StudGrade.css"

const StudGrade = () => {
  return (
    <div>
      <h2>Student Grade List</h2>
      
         
     

          <div className="grade-container">
<div className="list-grade">
            <p className="list-title">Test</p>
          <p className="list-bold">9</p>
        </div>

        <div className="list-grade">
            <p className="list-title">Mid</p>
          <p className="list-bold">9</p>
        </div>

        <div className="list-grade">
            <p className="list-title">Final</p>
          <p className="list-bold">9</p>
        </div>

        <div className="list-grade">
            <p className="list-title">Assignment</p>
          <p className="list-bold">9</p>
        </div>

        <div className="list-grade">
            <p className="list-title">Attendance</p>
          <p className="list-bold">9</p>
        </div>

          </div>

          <div className="grade-container margin-top">
          <p className="total-grade list-bold">Total <b> 78</b></p>
         
          </div>

        
          
            
      
  
    </div>
  );
};

export default StudGrade;