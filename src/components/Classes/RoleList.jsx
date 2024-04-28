import React from "react";

const RoleList = ({ role }) => {
  return (
    <>
      <div className="stud-class-header user-list user-header">
        <div className="image class-n"></div>
        <p className="name class-n">
          {role.fname} {role.lname}
        </p>
        <p className="id">{role.Id}</p>
        <p className="gender">{role.gender}</p>
        <p className="age">{role.age}</p>
      </div>
      <div className="hr-div">
        <hr className="user-list-hr" />
      </div>
    </>
  );
};

export default RoleList;
