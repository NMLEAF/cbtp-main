import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";

const TeacherSidebar = () => {
  const [sidebar, setSidebar] = useState("dashboard");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/admin") {
      setSidebar("dashboard");
    } else if (location.pathname === "/teacher/students") {
      setSidebar("students");
    } else if (location.pathname === "/teacher/parents") {
      setSidebar("parents");
    } else if (location.pathname === "/teacher/grade") {
      setSidebar("grade");
    } else if (location.pathname === "/teacher/attendance") {
      setSidebar("attendance");
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
          to="/teacher/students"
          onClick={() => setSidebar("sudents")}
          className={sidebar === "students" ? "item active" : "item"}
        >
          <SchoolOutlinedIcon style={{ fontSize: "24px" }} />
          Students
        </Link>

        <Link
          to="/teacher/parents"
          onClick={() => setSidebar("parents")}
          className={sidebar === "parents" ? "item active" : "item"}
        >
          <EscalatorWarningOutlinedIcon style={{ fontSize: "24px" }} />
          Parents
        </Link>

        <Link
          to="/teacher/grade"
          onClick={() => setSidebar("grade")}
          className={sidebar === "grade" ? "item active" : "item"}
        >
          <RuleOutlinedIcon style={{ fontSize: "24px" }} />
          Grade
        </Link>

        <Link
          to="/teacher/attendance"
          onClick={() => setSidebar("attendance")}
          className={sidebar === "attendance" ? "item active" : "item"}
        >
          <HowToRegOutlinedIcon style={{ fontSize: "24px" }} />
          Attendance
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

export default TeacherSidebar;
