import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import Contents from "../../../components/Registrar/Contents/Contents";

const AdminRegistrar = () => {
  return (
    <div className="admin-dashboard">

      <AdminSidebar />
      <Contents />
    </div>
  );
};

export default AdminRegistrar;
