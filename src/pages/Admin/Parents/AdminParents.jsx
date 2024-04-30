import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import Conntents from "../../../components/Parents/Contents/Contents";
import { useAuth } from "../../../context/AuthContext";

const AdminParents = () => {
  const { isLogged, isTeacher, isAdmin, isStudent, isParent,userData } = useAuth();
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <Conntents />
    </div>
  );
};

export default AdminParents;
