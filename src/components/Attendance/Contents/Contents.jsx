import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import AttendanceDetail from "../AttendanceDetail/AttendanceDetail";

const Contents = () => {
  return (
    <div className="contents">
      <SearchBar page={"Attendance"} />
      <AttendanceDetail />
    </div>
  );
};

export default Contents;
