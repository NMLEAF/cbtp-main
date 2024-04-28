import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";

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
import SubjectDetail from "../SubjectDetail/SubjectDetail";
import AddSubject from "../../Form/AddSubject";

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
        page={"Subjects"}
        child={
          <>
            <Button onClick={handleOpen} variant="contained" color="primary">
              Add new
            </Button>
          </>
        }
      />
      <SubjectDetail />
      <AddSubject open={open} handleClose={handleClose} />
    </div>
  );
};

export default Contents;
