import React from "react";
import students from "../../../dummy";

const TeacherDetail = ({ page, removeShow, selectedId,selectedTeacher }) => {
  const teacher = students.slice().find((teacher) => teacher.Id === selectedId);
  console.log(selectedTeacher)
  return (
    <div className="container user-detail-container">
    <div className="user-detail-header">
      <div className="user-image"><img src={selectedTeacher.profile[0].imageUrl} width={"100%"} height={"100%"} style={{objectFit: "contain", borderRadius: "50%",}} alt="" /></div>
      <div className="user-profile">
        <h1 className="user-name">
          {selectedTeacher.profile[0].firstName} {selectedTeacher.profile[0].middleName}
        </h1>
      </div>
      <div onClick={removeShow} className="remove-button">
        &times;
      </div>
    </div>
    <div className="user-basic-details">
      <h2 className="basic-detail-title">Basic Details</h2>
      <div className="details">
        <div className="details-list">
          <p className="list-title">{page} ID</p>
          <p className="list-bold">{selectedTeacher.id}</p>
        </div>
        <div className="details-list">
          <p className="list-title">Gender</p>
          <p className="list-bold">{selectedTeacher.profile[0].gender}</p>
        </div>
        <div className="details-list">
          <p className="list-title">Date of Birth</p>
          <p className="list-bold">29-04-2002</p>
        </div>
        <div className="details-list">
          <p className="list-title">Age</p>
          <p className="list-bold">{selectedTeacher.profile[0].age}</p>
        </div>
        <div className="details-list">
          <p className="list-title">Address</p>
          <p className="list-bold">{selectedTeacher.profile[0].address}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TeacherDetail;
