import React from "react";
import students from "../../dummy";
import StudGrade from "./StudGrade";

const GradeContainer = () => {
  const student = students.slice().find((student) => student.Id === "E-2357");

  return (
    <div className="container user-detail-container">
      <div className="user-detail-header">
        <div className="user-image"></div>
        <div className="user-profile">
          <h1 className="user-name">
            {student.fname} {student.lname}
          </h1>
          <p className="user-class">Class VI</p>
        </div>
        <div className="options">
                <label htmlFor="" className="class-label">
                  Choose date -
                </label>
                <select>
                  <option value="semester I">Semester I</option>
                  <option value="semester II">Semester II</option>
               
                </select>
              </div>
        
      </div>
      <div className="user-basic-details">
        <StudGrade/>
      </div>
    </div>
  );
};

export default GradeContainer;
