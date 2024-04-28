import React from "react";
import Contents from "../../../components/Students/Contents/Contents";
import TeacherSidebar from "../../../components/Teachers/TeacherSidebar";


const TeacherStudents = () => {
  return (
    <div className="admin-dashboard">
      <TeacherSidebar />
      <Contents />
    </div>
  );
};

export default TeacherStudents;
