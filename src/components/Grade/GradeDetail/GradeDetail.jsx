import React from "react";
import students from "../../../dummy";
import GradeForm from "../GradeForm/GradeForm";

const GradeDetail = ({ removeShow, page, selectedId }) => {
  const student = students.slice().find((student) => student.Id === selectedId);

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
        <div onClick={removeShow} className="remove-button">
          &times;
        </div>
      </div>
      <div className="user-basic-details">
        <GradeForm selectedId={selectedId} />
      </div>
    </div>
  );
};

export default GradeDetail;
