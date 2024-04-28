import React from "react";
import Contents from "../../../components/Students/Contents/Contents";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";

const AdminStudents = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <Contents />
    </div>
  );
};

export default AdminStudents;
