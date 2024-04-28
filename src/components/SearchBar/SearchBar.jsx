import React from "react";
import "./SearchBar.css";

const SearchBar = ({ page ,child}) => {
  return (
    <div className="container disp-fl">
      <h2 className="title">{page}</h2>
      <div className="notifi-userpro">
        <span>notif</span>
        <span>{child}</span>
      </div>
    </div>
  );
};

export default SearchBar;
