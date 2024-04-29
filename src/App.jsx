import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./components/Admin/AdminSidebar/AdminSidebar";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminRegistrar from "./pages/Admin/Registrar/AdminRegistrar";
import AdminTeacher from "./pages/Admin/Teachers/AdminTeacher";
import AdminStudents from "./pages/Admin/Students/AdminStudents";
import Attendance from "./pages/Admin/Attendance/Attendance";
import AdminParents from "./pages/Admin/Parents/AdminParents";
import Classes from "./pages/Admin/Classes/Classes";
import RegistrarDashboard from "./pages/Registrar/RegistrarDashboard/RegistrarDashboard";
import RegistrarStudent from "./pages/Registrar/Students/RegistrarStudent";
import RegistrarParents from "./pages/Registrar/Parents/RegistrarParents";
import RegistrarRegistration from "./pages/Registrar/Registration/RegistrarRegistration";
import ToastNotification from "./components/Toast";
import LoginPage from "./pages/Login/LoginPage";
import AdminSubject from "./pages/Admin/Subject/AdminSubject";
import TeacherDashboard from "./pages/Teacher/TeacherDashboard/TeacherDashboard";
import TeacherParents from "./pages/Teacher/Parents/TeacherParents";
import TeacherStudents from "./pages/Teacher/Students/TeacherStudents";
import TeacherAttendance from "./pages/Teacher/Attendance/TeacherAttendance";
import Grades from "./pages/Teacher/Grades/Grades";
import ParentGrade from "./pages/Parents/Grade/ParentGrade";
import ParentAttendance from "./pages/Parents/Attendance/ParentAttendance";
import ParentStudent from "./pages/Parents/Student/ParentStudent";
import HomePage from "./pages/Home/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ToastNotification />
        <Routes>

        <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LoginPage />} />

          {/* Admin */}

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/registrars" element={<AdminRegistrar />} />
          <Route path="/admin/teachers" element={<AdminTeacher />} />
          <Route path="/admin/students" element={<AdminStudents />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="/admin/parents" element={<AdminParents />} />
          <Route path="/admin/classes" element={<Classes />} />
          <Route path="/admin/subjects" element={<AdminSubject />} />

          {/* Registrar */}

          <Route path="/registrar" element={<RegistrarDashboard />} />
          <Route path="/registrar/students" element={<RegistrarStudent />} />
          <Route path="/registrar/parents" element={<RegistrarParents />} />
          <Route
            path="/registrar/registration"
            element={<RegistrarRegistration />}
          />

          {/* Teacher */}

          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/teacher/students" element={<TeacherStudents />} />
          <Route path="/teacher/parents" element={<TeacherParents />} />
          <Route path="/teacher/attendance" element={<TeacherAttendance />} />
          <Route path="/teacher/grade" element={<Grades />} />

            {/* Parent */}

          <Route path="/parent/student" element={<ParentStudent />} />
          <Route path="/parent/student/grade" element={<ParentGrade />} />
          <Route path="/parent/student/attendance" element={<ParentAttendance />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
