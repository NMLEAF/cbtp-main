import React from "react";
import TeacherSidebar from "../../../components/Teachers/TeacherSidebar";
import WrapperAttendance from "../../../components/Teachers/Attendance/WrapperAttendance/WrapperAttendance";

const TeacherAttendance = () => {
  return (
    <div className="admin-dashboard">
      <TeacherSidebar />
      <WrapperAttendance />
    </div>
  );
};

export default TeacherAttendance;
