import React from "react";
import TeacherSidebar from "../../../components/Teachers/TeacherSidebar";
import Contents from "../../../components/Grade/Contents/Contetns";

const Grades = () => {
  return (
    <div className="admin-dashboard">
      <TeacherSidebar />
      <Contents/>
    </div>
  );
};

export default Grades;
