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
        <UserList
          showStatus={showDetail}
          addShow={addShowDetail}
          selectId={handleSelectedId}
          page={"Students"}
        />
        {showDetail && (
          <StudentDetail
            removeShow={removeShowDetail}
            page={"Student"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
