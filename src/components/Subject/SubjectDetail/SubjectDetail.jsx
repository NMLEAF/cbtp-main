import React, { useState } from "react";
import teachers from "../../../teachers";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const SubjectDetail = () => {
  return (
    <div className="container container-height">
      <div className="cover-2">
        <div className="user-detail-header class-header">
          <div className="class-header-left">
            <div className="user-profile">
              <h1 className="class-name">Subjects</h1>
            </div>

            <div className="class-options">
              <div className="options">
                <label htmlFor="" className="class-label">
                  Choose subject -
                </label>
                <select>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="class-heading class-header-left">
          <h2 className="class-list-title">Assigned Teachers</h2>
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
              <option value="All">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <hr className="user-list-hr hr-class" />

        <div className="stud-class-header user-header">
          <p>Photo</p>
          <p>Name</p>
          <p>Student ID</p>
          <p>Gender</p>
          <p>class</p>
        </div>
        <br />
      </div>

      {teachers.map((teacher) => (
        <>
          {" "}
          <div className="stud-class-header user-list user-header">
            <div className="image class-n"></div>
            <p className="name class-n">
              {teacher.fname} {teacher.lname}
            </p>
            <p className="id">{teacher.Id}</p>
            <p className="gender">{teacher.gender}</p>
            <p className="age">{teacher.class}</p>
          </div>
          <div className="hr-div">
            <hr className="user-list-hr" />
          </div>
        </>
      ))}
    </div>
  );
};

export default SubjectDetail;
