import React, { useEffect, useState } from "react";
import "./AdminSidebar.css";
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
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import { useAuth } from "../../../context/AuthContext";
import UnauthorizedPage from "../../UnauthorizedPage";

const AdminSidebar = () => {
  const { isLogged, isTeacher, isAdmin, isStudent, isParent,userData } = useAuth();
  const [sidebar, setSidebar] = useState("dashboard");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/admin") {
      setSidebar("dashboard");
    } else if (location.pathname === "/admin/registration") {
      setSidebar("registration");
    } else if (location.pathname === "/admin/registrars") {
      setSidebar("registrars");
    } else if (location.pathname === "/admin/teachers") {
      setSidebar("teachers");
    } else if (location.pathname === "/admin/students") {
      setSidebar("students");
    } else if (location.pathname === "/admin/parents") {
      setSidebar("parents");
    } else if (location.pathname === "/admin/classes") {
      setSidebar("classes");
    } else if (location.pathname === "/admin/attendance") {
      setSidebar("attendance");
    } else if (location.pathname === "/admin/subjects") {
      setSidebar("subject");
    }
  }, [location]);

  return (
    <div className="admin-sidebar">
      <div className="logo">
        <span>Logo</span>
        <h2>SCHOOL</h2>
      </div>
      <hr />
      {(isLogged) ? (
         <div className="menu-list">
        <Link
          to="/admin"
          onClick={() => setSidebar("dashboard")}
          className={sidebar === "dashboard" ? "item active" : "item"}
        >
          <DashboardOutlinedIcon style={{ fontSize: "24px" }} />
          Dashboard
        </Link>
        <Link
          to="/admin/registrars"
          onClick={() => setSidebar("registrars")}
          className={sidebar === "registrars" ? "item active" : "item"}
        >
          <PersonAddAltOutlinedIcon style={{ fontSize: "24px" }} />
          Registrar
        </Link>

        <Link
          to="/admin/teachers"
          onClick={() => setSidebar("teachers")}
          className={sidebar === "teachers" ? "item active" : "item"}
        >
          <AssignmentIndOutlinedIcon style={{ fontSize: "24px" }} />
          Teachers
        </Link>

        <Link
          to="/admin/students"
          onClick={() => setSidebar("sudents")}
          className={sidebar === "students" ? "item active" : "item"}
        >
          <SchoolOutlinedIcon style={{ fontSize: "24px" }} />
          Students
        </Link>

        <Link
          to="/admin/parents"
          onClick={() => setSidebar("parents")}
          className={sidebar === "parents" ? "item active" : "item"}
        >
          <EscalatorWarningOutlinedIcon style={{ fontSize: "24px" }} />
          Parents
        </Link>

        <Link
          to="/admin/classes"
          onClick={() => setSidebar("classes")}
          className={sidebar === "classes" ? "item active" : "item"}
        >
          <AddHomeOutlinedIcon style={{ fontSize: "24px" }} />
          Classes
        </Link>

        <Link
          to="/admin/attendance"
          onClick={() => setSidebar("attendance")}
          className={sidebar === "attendance" ? "item active" : "item"}
        >
          <HowToRegOutlinedIcon style={{ fontSize: "24px" }} />
          Attendance
        </Link>

        <Link
          to="/admin/subjects"
          onClick={() => setSidebar("subject")}
          className={sidebar === "subject" ? "item active" : "item"}
        >
          <NoteAddOutlinedIcon style={{ fontSize: "24px" }} />
          Subjects
        </Link>

        <div className="setting">
          <a href="" className="item logout">
            <LogoutOutlinedIcon style={{ fontSize: "24px" }} />
            Logout
          </a>
        </div>
      </div>
      ):(
        <><UnauthorizedPage /></>
      )
    
    }
     
    </div>
  );
};

export default AdminSidebar;
