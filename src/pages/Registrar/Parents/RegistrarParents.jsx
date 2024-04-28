import React from "react";
import RegistrarSidebar from "../../../components/Registrar/RegistrarSidebar/RegistrarSidebar";
import Contents from "../../../components/Parents/Contents/Contents";

const RegistrarParents = () => {
  return (
    <div className="admin-dashboard">
      <RegistrarSidebar />
      <Contents />
    </div>
  );
};

export default RegistrarParents;
