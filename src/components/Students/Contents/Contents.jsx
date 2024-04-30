import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import UserList from "../../UserList/UserList";
import StudentDetail from "../StudentDetail/StudentDetail";
import AddStudent from "../../../components/Form/AddStudent";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import StudeGradeList from "../../Grade/StudGradeList/StudGradeList";
import StudeGradeList2 from "../../Grade/StudGradeList/StudGradeList2";
const Contents = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selectedRegistrar, setSelectedRegistrar] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addShowDetail = () => {
    setShowDetail((show) => true);
  };

  const removeShowDetail = () => {
    setShowDetail((show) => false);
  };

  const handleSelectedId = (id) => {
    setSelectedId(id);
  };
  const handleSelectedData = (data) => {
    setSelectedRegistrar(data);
     
   };

  return (
    <div className="contents">
      <SearchBar
        page={"Students"}
        child={
          <>
          
            <Button onClick={handleOpen} variant="contained" color="primary">
              Add new
            </Button>
          </>
        }
      />
      <div className="admin-dashboard">
        <AddStudent open={open} handleClose={handleClose} />
        <StudeGradeList2
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
          handleSelect={handleSelectedData}
          page={"Students"}
        />
        {showDetail && (
          <StudentDetail
            removeShow={removeShowDetail}
            page={"Student"}
            selectedId={selectedId}
            selectedRegistrar={selectedRegistrar}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
