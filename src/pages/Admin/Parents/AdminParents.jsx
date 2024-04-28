import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import Conntents from "../../../components/Parents/Contents/Contents";

const AdminParents = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <Conntents />
    </div>
  );
};

export default AdminParents;
