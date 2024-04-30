import React, { useState } from "react";
import "./UserList.css";
import { useAuth } from "../../context/AuthContext";

const UserList = ({ page, addShow, showStatus, selectId, handleSelect }) => {
  const { listOfRegistrars } = useAuth();
  const [selectIndex, setSelectedIndex] = useState(null);
  const [gender, setGender] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Name");

  const handleClick = (id, data) => {
    addShow();
    setSelectedIndex(id);
    handleSelect(data);
    selectId(id);
  };

  let data = listOfRegistrars;

  if (gender !== "All") {
    data = listOfRegistrars.filter((student) => student.gender === gender);
  }

  if (searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase().trim();
    data = listOfRegistrars.filter(
      (student) =>
        student.fname.toLowerCase().includes(query) ||
        student.lname.toLowerCase().includes(query) ||
        student.Id.toString().includes(query)
    );
  }

  if (sortBy === "Name") {
    data.sort((a, b) => a.profile[0].firstName.localeCompare(b.profile[0].firstName));
  } else if (sortBy === "ID") {
    data.sort((a, b) => a.Id - b.Id);
  }

  return (
    <div className="container container-height">
      <div className="cover">
        <h1 className="user-title">{page}</h1>
        <form action="" className="user-search-form">
          <input
            type="text"
            className="user-search"
            placeholder="Search by Name or ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="sort-gend">
            <label htmlFor="">Gender: </label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="All">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label htmlFor="" className="label-right">
              Sort by:{" "}
            </label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="Name">Name</option>
              <option value="Male">Id</option>
            </select>
          </div>
        </form>
        <hr className="user-list-hr hr-top" />
        <div className="user-header">
          <p>Photo</p>
          <p>Name</p>
          <p>{page} ID</p>
        </div>
        <br />
        <br />
      </div>

      {data.map((student, index) => (
        <React.Fragment key={student.Id}>
          <div
            onClick={() => handleClick(index, student)}
            className={
              selectIndex === index && showStatus
                ? "user-header user-list user-list-active"
                : "user-header user-list"
            }
          >
            <div className="image">
              <img
                src={student.profile[0].imageUrl}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "contain", borderRadius: "50%" }}
              />
            </div>
            <p className="name">{`${student.profile[0].firstName} ${student.profile[0].lastName}`}</p>
            <p className="id">{student.Id}</p>
          </div>
          <div className="hr-div">
            <hr className="user-list-hr" />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserList;
