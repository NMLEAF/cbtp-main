import React from "react";
import "./Contents.css";
import SearchBar from "../../SearchBar/SearchBar";
import NumUser from "../NumUser/NumUser";

const Content = () => {
  return (
    <div className="contents">
      <SearchBar page={"Admin Dashboard"} />
      <NumUser />
    </div>
  );
};

export default Content;
