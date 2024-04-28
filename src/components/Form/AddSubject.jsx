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

const addSubjectSchema = z.object({
  subjectName: z.string().min(1),
});

const AddSubject = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    subjectName: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = () => {
    try {
      addSubjectSchema.parse(formData);
      console.log("Subject registration data:", formData);
    } catch (error) {
      console.error("Validation error:", error.errors);
      // Handle validation errors
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
