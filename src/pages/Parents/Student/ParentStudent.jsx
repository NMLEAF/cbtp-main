import React from "react";
import ParentSidebar from "../../../components/Parents/ParentSidebar";
import ParentStud from "../../../components/Parents/ParentStud";


const ParentStudent = () => {
  return (
    <div className="admin-dashboard">
      <ParentSidebar />
      <ParentStud/>
    </div>
  );
};

export default ParentStudent;