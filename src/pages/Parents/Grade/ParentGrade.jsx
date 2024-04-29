import React from "react";
import ParentSidebar from "../../../components/Parents/ParentSidebar";
import StudGrade from "../../../components/Parents/StudGrade";
import GradeContainer from "../../../components/Parents/GradeContainer";


const ParentGrade = () => {
  return (
    <div className="admin-dashboard">
      <ParentSidebar />
      <GradeContainer/>

    </div>
  );
};

export default ParentGrade;