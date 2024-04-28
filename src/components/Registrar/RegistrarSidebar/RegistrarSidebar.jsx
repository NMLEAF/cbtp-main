import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";

const RegistrarSidebar = () => {
  const [sidebar, setSidebar] = useState("dashboard");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/admin") {
      setSidebar("dashboard");
    } else if (location.pathname === "/registrar/registration") {
      setSidebar("registration");
    } else if (location.pathname === "/registrar/students") {
      setSidebar("students");
    } else if (location.pathname === "/registrar/parents") {
      setSidebar("parents");
    }
  }, [location]);

  return (
    <div className="admin-sidebar">
      <div className="logo">
        <span>Logo</span>
        <h2>SCHOOL</h2>
      </div>

      <hr />

      <div className="menu-list">
        <Link
          to="/registrar"
          onClick={() => setSidebar("dashboard")}
          className={sidebar === "dashboard" ? "item active" : "item"}
        >
          <DashboardOutlinedIcon style={{ fontSize: "24px" }} />
          Dashboard
        </Link>

        <Link
          to="/registrar/students"
          onClick={() => setSidebar("sudents")}
          className={sidebar === "students" ? "item active" : "item"}
        >
          <SchoolOutlinedIcon style={{ fontSize: "24px" }} />
          Students
        </Link>

        <Link
          to="/registrar/parents"
          onClick={() => setSidebar("parents")}
          className={sidebar === "parents" ? "item active" : "item"}
        >
          <EscalatorWarningOutlinedIcon style={{ fontSize: "24px" }} />
          Parents
        </Link>

        <Link
          to="/registrar/registration"
          onClick={() => setSidebar("registration")}
          className={sidebar === "registration" ? "item active" : "item"}
        >
          <PersonAddAltOutlinedIcon style={{ fontSize: "24px" }} />
          Registration
        </Link>

        <div className="setting">
          <a href="" className="item">
            <SettingsOutlinedIcon style={{ fontSize: "24px" }} />
            Settings
          </a>
          <a href="" className="item logout">
            <LogoutOutlinedIcon style={{ fontSize: "24px" }} />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrarSidebar;
