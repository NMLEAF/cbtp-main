import React, { useState } from "react";
import students from "../../../dummy";
import { useAuth } from "../../../context/AuthContext";
const StudeGradeList = ({ page, addShow, showStatus, selectId,handleSelect }) => {
  const [selectIndex, setSelectedIndex] = useState(null);
  const {listOfTeachers,setListOfTeachers} = useAuth();
  const [gender, setGender] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Name");
// console.log(listOfTeachers);
  const handleClick = (id,data) => {
    addShow();
    setSelectedIndex(id);
    handleSelect(data);
    selectId(id);
  };

  let data;

  if (gender === "All") {
    data = students;
  } else {
    data = students.slice().filter((student) => student.gender === gender);
  }

  if (searchQuery !== "") {
    data = students
      .slice()
      .filter(
        (student) =>
          student.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.lname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          student.Id.toString().includes(searchQuery)
      );
  }

  if (sortBy === "Name") {
    data = data.slice().sort((a, b) => a.fname.localeCompare(b.fname));
  } else if (sortBy === "ID") {
    data = data.slice().sort((a, b) => a.Id - b.Id);
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
            

            <label htmlFor="">Choose class: </label>
            <select >
            <option value="all">All</option>
              <option value="class I">ClassI</option>
              <option value="class II">Class II</option>
              <option value="clas sIII">CLass III</option>
            </select>

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

      {listOfTeachers && listOfTeachers.map((student, index) => (
        <React.Fragment key={student.Id}>
          <div
            onClick={() => handleClick(student.Id,student)}
            className={
              student.Id === selectIndex && showStatus
                ? "user-header user-list user-list-active"
                : "user-header user-list"
            }
          >
            <div className="image"><img src={student.profile[0].imageUrl} alt="" srcset=""  width={"100%"} height={"100%"} style={{objectFit: "contain", borderRadius: "50%",}}/></div>
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

export default StudeGradeList;
