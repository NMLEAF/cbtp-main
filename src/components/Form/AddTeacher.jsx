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

const AddTeacher = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    role: "teacher",
    subjectId: 1,
    classId: 1,
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = () => {
    try {
      AddTeacher.parse(formData);
      console.log("Registration data:", formData);
    } catch (error) {
      console.error("Validation error:", error.errors);
      // Handle validation errors
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register Teacher</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your information to register as a teacher.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          fullWidth
        />
        {/* Add Subject ID and Classroom ID fields */}
        <TextField
          margin="dense"
          label="Subject ID"
          value={formData.subjectId}
          onChange={handleChange("subjectId")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Classroom ID"
          value={formData.classId}
          onChange={handleChange("classId")}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange("password")}
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
          label="Gender"
          value={formData.gender}
          onChange={handleChange("gender")}
          fullWidth
        />
        <TextField
          margin="dense"
          type="date"
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange("dateOfBirth")}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
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

export default AddTeacher;
