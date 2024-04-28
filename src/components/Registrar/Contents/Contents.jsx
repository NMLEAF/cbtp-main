import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import AdminSidebar from "../../Admin/AdminSidebar/AdminSidebar";
import UserList from "../../UserList/UserList";
import RegistrarDetail from "../RegistrarDetail/RegistrarDetail";
import LoginPopup from "../../../components/Form/AddRegitrar";
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
        page={"Registrars"}
        child={
          <>
            <Button onClick={handleOpen} variant="contained" color="primary">
              Add new
            </Button>
          </>
        }
      />
      <div className="admin-dashboard">
        <LoginPopup open={open} handleClose={handleClose} />
        <UserList
          page={"Registrar"}
          showStatus={showDetail}
          selectId={handleSelectedId}
          addShow={addShowDetail}
        />
        {showDetail && (
          <RegistrarDetail
            removeShow={removeShowDetail}
            page={"Registrar"}
            selectedId={selectedId}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
