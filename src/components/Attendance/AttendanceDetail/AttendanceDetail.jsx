import React, { useState } from "react";
import students from "../../../dummy";
import RoleList from "../../Classes/RoleList";
import "./AttendanceDetail.css";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const AttendanceDetail = () => {
  const [attendance, setAttendance] = useState("All");

  let data;

  if (attendance === "All") {
    data = students;
  } else if (attendance === "present") {
    data = students
      .slice()
      .filter((student) => student.attendance === "present");
  } else {
    data = students
      .slice()
      .filter((student) => student.attendance !== "present");
  }

  return (
    <div className="container container-height">
      <div className="cover-2">
        <div className="user-detail-header class-header">
          <div className="class-header-left">
            <div className="user-profile">
              <h1 className="class-name">Attendance</h1>
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
                  <option value="Class VIII">Class VIII</option>
                </select>
              </div>

              <div className="options">
                <label htmlFor="" className="class-label">
                  Choose date -
                </label>
                <select>
                  <option value="today">Today</option>
                  <option value="date-1">12-02-2024</option>
                  <option value="date-2">12-03-2024</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="class-heading class-header-left">
          <h2 className="class-list-title">Students</h2>
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

          <div className="options">
            <label htmlFor="" className="class-label label-primary">
              Attendance status -
            </label>
            <select
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            >
              <option value="All">All</option>
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>
        </div>

        <hr className="user-list-hr hr-class" />

        <div className="attendance-header user-header">
          <p>Photo</p>
          <p>Name</p>
          <p>Student ID</p>
          <p>Gender</p>
          <p>Age</p>
          <p>Attendance Status</p>
        </div>
        <br />
      </div>

      {data.map((student) => (
        <>
          <div className="attendance-header user-list user-header">
            <div className="image class-n"></div>
            <p className="name class-n">
              {student.fname} {student.lname}
            </p>
            <p className="id">{student.Id}</p>
            <p className="gender">{student.gender}</p>
            <p className="age">{student.age}</p>
            <p className="age">
              {student.attendance === "present" ? (
                <CheckIcon style={{ fontSize: "24px", color: "#0cae0c" }} />
              ) : (
                <ClearIcon style={{ fontSize: "24px", color: "red" }} />
              )}
            </p>
          </div>
          <div className="hr-div">
            <hr className="user-list-hr" />
          </div>
        </>
      ))}
    </div>
  );
};

export default AttendanceDetail;
