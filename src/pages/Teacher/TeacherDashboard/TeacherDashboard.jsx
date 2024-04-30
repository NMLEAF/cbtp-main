import React from "react";
import Dashboard from "../../../components/Teachers/Dashboard/Dashboard";
import TeacherSidebar from "../../../components/Teachers/TeacherSidebar";
import { useAuth } from "../../../context/AuthContext";
import UnauthorizedPage from "../../../components/UnauthorizedPage";

const TeacherDashboard = () => {
  const {
    isLogged,
    isTeacher,
    isAdmin,
    isStudent,
    isParent,
    userData,
    isRegistrar,
  } = useAuth();
  return (
    <div className="admin-dashboard">
  \ 
          <TeacherSidebar />
          <Dashboard />

    </div>
  );
};

export default TeacherDashboard;
