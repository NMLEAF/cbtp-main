import React from "react";
import RegistrarSidebar from "../../../components/Registrar/RegistrarSidebar/RegistrarSidebar";
import Contents from "../../../components/Students/Contents/Contents";

const RegistrarStudent = () => {
  return (
    <div className="admin-dashboard">
      <RegistrarSidebar />
      <Contents />
    </div>
  );
};

export default RegistrarStudent;
