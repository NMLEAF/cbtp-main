import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import UserList from "../../UserList/UserList";
import TeacherDetail from "../TeacherDetail/TeacherDetail";
import AddTeacher from "../../../components/Form/AddTeacher";
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

const Contents = () => {
  const [showDetail, setShowDetail] = useState(false);
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

  return (
    <div className="contents">
      <SearchBar
        page={"Teachers"}
        child={
          <>
            <Button onClick={handleOpen} variant="contained" color="primary">
              Add new
            </Button>
          </>
        }
      />
      <div className="admin-dashboard">
        <AddTeacher open={open} handleClose={handleClose} />
        <StudeGradeList
          page={"Teacher"}
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
        />
        {showDetail && (
          <TeacherDetail
            removeShow={removeShowDetail}
            page={"Teacher"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
