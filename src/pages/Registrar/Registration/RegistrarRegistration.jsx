import React from "react";
import Contents from "../../../components/Registration/Contents/Contents";
import RegistrarSidebar from "../../../components/Registrar/RegistrarSidebar/RegistrarSidebar";

const RegistrarRegistration = () => {
  return (
    <div className="admin-dashboard">
      <RegistrarSidebar />
      <Contents />
    </div>
  );
};

export default RegistrarRegistration;
