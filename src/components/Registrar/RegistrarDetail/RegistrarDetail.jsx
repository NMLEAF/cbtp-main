import React from "react";
import students from "../../../dummy";

const RegistrarDetail = ({ page, removeShow, selectedId }) => {
  const registrar = students
    .slice()
    .find((registrar) => registrar.Id === selectedId);

  return (
    <div className="container user-detail-container">
      <div className="user-detail-header">
        <div className="user-image"></div>
        <div className="user-profile">
          <h1 className="user-name">
            {registrar.fname} {registrar.lname}
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
            <p className="list-bold">{registrar.Id}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Gender</p>
            <p className="list-bold">{registrar.gender}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Date of Birth</p>
            <p className="list-bold">29-04-2002</p>
          </div>
          <div className="details-list">
            <p className="list-title">Age</p>
            <p className="list-bold">{registrar.age}</p>
          </div>
          <div className="details-list">
            <p className="list-title">Address</p>
            <p className="list-bold">{registrar.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrarDetail;
