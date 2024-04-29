import React from "react";
import students from "../../dummy";

const ParentStud = () => {
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
        
      </div>
      <div className="user-basic-details">
        <h2 className="basic-detail-title">Basic Details</h2>
        <div className="details">
          <div className="details-list">
            <p className="list-title">Student ID</p>
            <p className="list-bold">{student.Id}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Gender</p>
            <p className="list-bold">{student.gender}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Date of Birth</p>
            <p className="list-bold">29-04-2002</p>
          </div>
          <div className="details-list">
            <p className="list-title">Age</p>
            <p className="list-bold">{student.age}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Address</p>
            <p className="list-bold">{student.address}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Father</p>
            <p className="list-bold">{student.fatherName}</p>
            <p className="list-phone">+24230 423</p>
          </div>
          <div className="details-list">
            <p className="list-title">Mother</p>
            <p className="list-bold">{student.motherName}</p>
            <p className="list-phone">+1234 123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentStud;
