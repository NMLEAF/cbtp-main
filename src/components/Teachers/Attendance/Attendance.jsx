import React, { useState } from "react";
import students from "../../../dummy";
import "./Attendance.css";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const Attendance = () => {
  const [attendanceOption, setAttendanceOption] = useState("set");
  const [attendanceData, setAttendanceData] = useState({});

  const handleAttendanceChange = (studentId, checked) => {
    setAttendanceData((prevAttendanceData) => ({
      ...prevAttendanceData,
      [studentId]: checked ? "present" : "absent",
    }));
  };

  const handleSaveAttendance = () => {
    // Here you can implement the logic to save attendanceData
    console.log("Attendance data:", attendanceData);
  };

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

              <div className="options">
                <label htmlFor="" className="class-label">
                  Attendance option -
                </label>
                <select
                  value={attendanceOption}
                  onChange={(e) => setAttendanceOption(e.target.value)}
                >
                  <option value="set">Set</option>
                  <option value="view">View</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="class-heading class-header-left class-header-lef">
          <h2 className="class-list-title">Students</h2>
          {attendanceOption === "set" && (
            <div className="save-attendance">
              <button onClick={handleSaveAttendance} className="btnbtn">
                Save Attendance
              </button>
            </div>
          )}
        </div>

        <hr className="user-list-hr hr-class" />

        <div className="attendance-header user-header">
          <p>Photo</p>
          <p>Name</p>
          <p>Student ID</p>
          <p>Gender</p>
          <p>Age</p>
          <p>Attendance</p>
        </div>
        <br />
      </div>

      {students.map((student) => (
        <React.Fragment key={student.Id}>
          <div className="attendance-header user-list user-header">
            <div className="image class-n"></div>
            <p className="name class-n">
              {student.fname} {student.lname}
            </p>
            <p className="id">{student.Id}</p>
            <p className="gender">{student.gender}</p>
            <p className="age">{student.age}</p>
            <p className="age">
              {attendanceOption === "view" ? (
                student.attendance === "present" ? (
                  <CheckIcon style={{ fontSize: "24px", color: "#0cae0c" }} />
                ) : (
                  <ClearIcon style={{ fontSize: "24px", color: "red" }} />
                )
              ) : (
                <input
                  type="checkbox"
                  checked={attendanceData[student.Id] === "present"}
                  onChange={(e) =>
                    handleAttendanceChange(student.Id, e.target.checked)
                  }
                />
              )}
            </p>
          </div>
          <div className="hr-div">
            <hr className="user-list-hr" />
          </div>
        </React.Fragment>
      ))}
      <div className="cover-2"></div>
    </div>
  );
};

export default Attendance;