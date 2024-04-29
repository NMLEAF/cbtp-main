import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import GradeDetail from "../GradeDetail/GradeDetail";
import UserList from "../../UserList/UserList";
import StudeGradeList from "../StudGradeList/StudGradeList";



const Contents = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(null);


  const addShowDetail = () => {
    setShowDetail((show) => true);
  };

  const removeShowDetail = () => {
    setShowDetail((show) => false);
  };

  const handleSelectedId = (id) => {
    setSelectedId(id);
  };


  return (
    <div className="contents">
      <SearchBar page={"Grade"} />
      

      <div className="admin-dashboard">

        <StudeGradeList
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
          page={"Students"}
        />
        {showDetail && (
          <GradeDetail
            removeShow={removeShowDetail}
            page={"Grade"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
