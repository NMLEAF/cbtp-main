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

const registerStudentSchema = z.object({
  parentId: z.number().min(1),
  classroomID: z.number().min(1),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  address: z.string(),
  phone: z.string().min(10),
  dateOfBirth: z.string(),
  roleId: z.number().min(1),
});

const AddStudent = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    parentId: 1, // Default parent ID
    classroomID: 1, // Default classroom ID
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    address: "",
    phone: "",
    dateOfBirth: "",
    roleId: 2, // Assuming a default role ID for student
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = () => {
    try {
      registerStudentSchema.parse(formData);
      console.log("Student registration data:", formData);
    } catch (error) {
      console.error("Validation error:", error.errors);
      // Handle validation errors
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register Student</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter student information for registration.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Parent ID"
          type="number"
          value={formData.parentId}
          onChange={handleChange("parentId")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Classroom ID"
          type="number"
          value={formData.classroomID}
          onChange={handleChange("classroomID")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange("firstName")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Middle Name"
          value={formData.middleName}
          onChange={handleChange("middleName")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange("lastName")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Gender"
          value={formData.gender}
          onChange={handleChange("gender")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Address"
          value={formData.address}
          onChange={handleChange("address")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Phone"
          value={formData.phone}
          onChange={handleChange("phone")}
          fullWidth
        />
        <TextField
          margin="dense"
          type="date"
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange("dateOfBirth")}
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

export default AddStudent;
