import React from "react";
import Dashboard from "../../../components/Teachers/Dashboard/Dashboard";
import TeacherSidebar from "../../../components/Teachers/TeacherSidebar";

const TeacherDashboard = () => {
  return (
    <div className="admin-dashboard">
      <TeacherSidebar />
      <Dashboard />
    </div>
  );
};

export default TeacherDashboard;
