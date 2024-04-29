import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { z } from "zod";
import courseService from "../../services/courseService";
import { useToast } from "../../context/ToastContext";

const addSubjectSchema = z.object({
  subjectName: z.string().min(1),
});

const AddSubject = ({ open, handleClose }) => {
  const {setToastData} = useToast();
  const [formData, setFormData] = useState({
    subjectName: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = async () => {
   
    const response = await courseService.addSubject(formData);
    console.log(response);
    setToastData(response);
    if(response.success){
      console.log(")------------")
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Subject</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the name of the subject for registration.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Subject Name"
          value={formData.subjectName}
          onChange={handleChange("subjectName")}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleRegister} variant="contained" color="primary">
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSubject;
