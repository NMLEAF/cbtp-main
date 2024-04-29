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

const addClassSchema = z.object({
  className: z.string().min(1),
  Grade: z.number().min(1),
});

const AddClass = ({ open, handleClose }) => {
  const {setToastData} = useToast();
  const [formData, setFormData] = useState({
    className: "",
    Grade: 1, // Default grade
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = async () => {
    const response = await courseService.addClass(formData);
    console.log(response);
    setToastData(response);
    if(response.success){
      console.log(")------------")
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Class</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter class information for registration.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Class Name"
          value={formData.className}
          onChange={handleChange("className")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Grade"
          type="number"
          value={formData.Grade}
          onChange={handleChange("Grade")}
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

export default AddClass;
