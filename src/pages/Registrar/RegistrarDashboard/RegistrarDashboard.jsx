import React from "react";
import RegistrarSidebar from "../../../components/Registrar/RegistrarSidebar/RegistrarSidebar";
import Dashboard from "../../../components/Registrar/Dashboard/Dashboard";
import { useAuth } from "../../../context/AuthContext";
import UnauthorizedPage from "../../../components/UnauthorizedPage";

const RegistrarDashboard = () => {
  const {
    isLogged,
    isTeacher,
    isAdmin,
    isStudent,
    isParent,
    userData,
    isRegistrar,
  } = useAuth();
  return (
    <>
    
        <div className="admin-dashboard">
        {isRegistrar && isLogged ? (
            <>
              <RegistrarSidebar />
              <Dashboard />
            </>
          ) : (
            <>
              <UnauthorizedPage />
            </>
          )}
        </div>
  
    </>
  );
};

export default RegistrarDashboard;
