import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import Content from "../../../components/Admin/Content/Content";
import "./AdminDashboard.css";
import { useAuth } from "../../../context/AuthContext";
import UnauthorizedPage from "../../../components/UnauthorizedPage";

const AdminDashboard = () => {
  const { isLogged, isTeacher, isAdmin, isStudent, isParent,userData } = useAuth();
  return (
    <div className="admin-dashboard">
      {(isAdmin && isLogged)?(<><AdminSidebar /><Content /></>):(<><UnauthorizedPage /></>)}
    </div>
  );
};

export default AdminDashboard;
