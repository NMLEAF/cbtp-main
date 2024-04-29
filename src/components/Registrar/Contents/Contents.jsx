import React, { useEffect, useState } from "react";
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
import employeeService from "../../../services/employeeService";
import { useAuth } from "../../../context/AuthContext";
const Contents = () => {
  const {listOfRegistrars,fetchRegistrar} = useAuth();
  const [showDetail, setShowDetail] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedRegistrar, setSelectedRegistrar] = useState({});
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
          handleSelect={handleSelectedData}
          selectId={handleSelectedId}
          addShow={addShowDetail}
        />
        {showDetail && (
          <RegistrarDetail
            removeShow={removeShowDetail}
            page={"Registrar"}
            selectedId={selectedId}
            selectedRegistrar={selectedRegistrar}
          />
        )}
      </div>
    </div>
  );
};

export default Contents;
