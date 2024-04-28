import React from "react";
import SearchBar from "../../SearchBar/SearchBar";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const Contents = () => {
  return (
    <div className="contents">
      <SearchBar page={"Registration"} />
      <RegistrationForm />
    </div>
  );
};

export default Contents;
