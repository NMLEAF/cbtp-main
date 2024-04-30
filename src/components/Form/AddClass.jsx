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
  const { setToastData } = useToast();
  const [formData, setFormData] = useState({
    className: "",
    Grade: 1, // Default grade
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear the error message when the user starts typing again
    setErrors({ ...errors, [field]: "" });
  };

  const validateForm = () => {
    const validationResult = addClassSchema.safeParse(formData);
    if (!validationResult.success) {
      const validationErrors = {};
      validationResult.error.errors.forEach((error) => {
        validationErrors[error.path[0]] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;

    const response = await courseService.addClass(formData);
    console.log(response);
    setToastData(response);
    if (response.success) {
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
          error={!!errors.className}
          helperText={errors.className}
        />
        <TextField
          margin="dense"
          label="Grade"
          type="number"
          value={formData.Grade}
          onChange={handleChange("Grade")}
          fullWidth
          error={!!errors.Grade}
          helperText={errors.Grade}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleRegister}
          variant="contained"
          color="primary"
          disabled={!formData.className || !formData.Grade || !!errors.className || !!errors.Grade}
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddClass;
