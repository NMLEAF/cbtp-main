import React from "react";
import Contents from "../../../components/Teachers/Contents/Contents";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";

const AdminTeacher = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <Contents />
    </div>
  );
};

export default AdminTeacher;
