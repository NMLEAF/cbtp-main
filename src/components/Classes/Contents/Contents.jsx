import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import StudentDetail from "../../Students/StudentDetail/StudentDetail";
import ClassDetail from "../ClassDetail/ClassDetail";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddClass from "../../Form/AddClass";

const Contents = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="contents">
      <SearchBar
        page={"Classes"}
        child={
          <>
            <Button onClick={handleOpen} variant="contained" color="primary">
              Add new
            </Button>
          </>
        }
      />
      <ClassDetail />
      <AddClass open={open} handleClose={handleClose} />
    </div>
  );
};

export default Contents;
