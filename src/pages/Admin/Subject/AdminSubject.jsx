import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import Contents from "../../../components/Subject/Contents/Contents";

const AdminSubject = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <Contents />
    </div>
  );
};

export default AdminSubject;
