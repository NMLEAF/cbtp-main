import React from "react";
import Attendance from "../Attendance";
import SearchBar from "../../../SearchBar/SearchBar";

const WrapperAttendance = () => {
  return (
    <div className="contents">
      <SearchBar page={"Attendance"} />
      <Attendance />
    </div>
  );
};

export default WrapperAttendance;
