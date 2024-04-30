import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeImg from "../../../public/college students-cuate.png";

const Home = () => {
  return (
    <div className="home-page-container">
      {" "}
      <div className="right">
        <img src={homeImg} className="home-img" alt="cbtp" />
      </div>

      <div className="left">
        <h1 className="home-page-title">Student Management System</h1>
        <p>
          A student management system automates administrative tasks, tracks
          student information, saves attendance, submits grades, and registers
          students and parents while enhancing communication in educational
          institutions.
        </p>

        <button className="btnbtn"><Link to="/login" className="txt">Login</Link></button>
      </div>
    </div>
  );
};

export default Home;
