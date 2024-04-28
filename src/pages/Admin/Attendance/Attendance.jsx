import React from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import Contents from "../../../components/Attendance/Contents/Contents";

const Attendance = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <Contents />
    </div>
  );
};

export default Attendance;
