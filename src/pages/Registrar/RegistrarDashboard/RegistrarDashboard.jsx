import React from "react";
import RegistrarSidebar from "../../../components/Registrar/RegistrarSidebar/RegistrarSidebar";
import Dashboard from "../../../components/Registrar/Dashboard/Dashboard";

const RegistrarDashboard = () => {
  return (
    <div className="admin-dashboard">
      <RegistrarSidebar />
      <Dashboard />
    </div>
  );
};

export default RegistrarDashboard;
