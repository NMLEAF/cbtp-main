import React, { useState } from "react";
import students from "../../../dummy";
import teachers from "../../../teachers";
import "./ClassDetail.css";
import RoleList from "../RoleList";

const ClassDetail = () => {
  const [role, setRole] = useState("students");
  let data;
  let page;

  if (role === "students") {
    data = students;
    page = "Student";
  } else if (role === "teachers") {
    data = teachers;
    page = "Teacher";
  }

  return (
    <div className="container container-height">
      <div className="cover-2">
        <div className="user-detail-header class-header">
          <div className="class-header-left">
            <div className="user-profile">
              <h1 className="class-name">Class VI</h1>
            </div>

            <div className="class-options">
              <div className="options">
                <label htmlFor="" className="class-label">
                  Choose Class -
                </label>
                <select>
                  <option value="Class I">Class I</option>
                  <option value="Class II">Class II</option>
                  <option value="Class III">Class III</option>
                  <option value="Class VI">Class VI</option>
                  <option value="Class VII">Class VII</option>
                </select>
              </div>

              <div className="options">
                <label htmlFor="" className="class-label">
                  Choose role -
                </label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="students">Students</option>
                  <option value="teachers">Teachers</option>
                </select>
              </div>
            </div>
          </div>

          
        </div>

        <div className="class-heading class-header-left">
          <h2 className="class-list-title">
            <b className="class-em">{data.length} </b>
            {page}s
          </h2>
          <div className="options">
            <label htmlFor="" className="class-label label-primary">
              Sort by -
            </label>
            <select>
              <option value="name">Name</option>
              <option value="id">ID</option>
            </select>
          </div>

          <div className="options">
            <label htmlFor="" className="class-label label-primary">
              Gender -
            </label>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <hr className="user-list-hr hr-class" />

        <div className="stud-class-header user-header">
          <p>Photo</p>
          <p>Name</p>
          <p>{page} ID</p>
          <p>Gender</p>
          <p>Age</p>
        </div>
        <br />
      </div>

      {data.map((role) => (
        <>
          <RoleList role={role} />
        </>
      ))}
    </div>
  );
};

export default ClassDetail;
