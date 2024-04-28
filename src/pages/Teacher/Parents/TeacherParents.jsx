import React from "react";
import Contents from "../../../components/Parents/Contents/Contents";
import TeacherSidebar from "../../../components/Teachers/TeacherSidebar";


const TeacherParents = () => {
  return (
    <div className="admin-dashboard">
      <TeacherSidebar />
      <Contents />
    </div>
  );
};

export default TeacherParents;
