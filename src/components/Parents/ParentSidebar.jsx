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
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";

const ParentSidebar = () => {
  const [sidebar, setSidebar] = useState("student");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/parent/student") {
      setSidebar("student");
    } else if (location.pathname === "/parent/student/grade") {
      setSidebar("grade");
    } else if (location.pathname === "/parent/student/attendance") {
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
          to="/parent/student"
          onClick={() => setSidebar("sudent")}
          className={sidebar === "student" ? "item active" : "item"}
        >
          <SchoolOutlinedIcon style={{ fontSize: "24px" }} />
          Student
        </Link>

        <Link
          to="/parent/student/grade"
          onClick={() => setSidebar("grade")}
          className={sidebar === "grade" ? "item active" : "item"}
        >
          <RuleOutlinedIcon style={{ fontSize: "24px" }} />
          Grade
        </Link>

        <Link
          to="/parent/student/attendance"
          onClick={() => setSidebar("attendance")}
          className={sidebar === "attendance" ? "item active" : "item"}
        >
          <HowToRegOutlinedIcon style={{ fontSize: "24px" }} />
          Attendance
        </Link>

        

        <div className="setting">
         
          <a href="" className="item logout">
            <LogoutOutlinedIcon style={{ fontSize: "24px" }} />
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParentSidebar;
