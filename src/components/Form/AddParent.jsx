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
import employeeService from "../../services/employeeService";
import { useToast } from "../../context/ToastContext";

const registerParentSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  firstName: z.string(),
  lastName: z.string(),
  middleName: z.string().optional(),
  gender: z.string(),
  address: z.string(),
  phone: z.string().min(10),
  dateOfBirth: z.string(),
  roleId: z.number().min(1),
  relationship: z.string(),
});

const AddParent = ({ open, handleClose }) => {
  const { setToastData } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    address: "",
    role: "PARENT",
    phone: "",
    dateOfBirth: "",
    roleId: 1, // Assuming a default role ID for parent
    relationship: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear the error message when the user starts typing again
    setErrors({ ...errors, [field]: "" });
  };

  const validateForm = () => {
    const validationResult = registerParentSchema.safeParse(formData);
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

    const response = await employeeService.addParent(formData);
    setToastData(response);
    if (response.success) {
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register Parent</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter parent information for registration.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          fullWidth
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange("password")}
          fullWidth
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          margin="dense"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange("firstName")}
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <TextField
          margin="dense"
          label="Middle Name"
          value={formData.middleName}
          onChange={handleChange("middleName")}
          fullWidth
          error={!!errors.middleName}
          helperText={errors.middleName}
        />
        <TextField
          margin="dense"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange("lastName")}
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <TextField
          margin="dense"
          label="Gender"
          value={formData.gender}
          onChange={handleChange("gender")}
          fullWidth
          error={!!errors.gender}
          helperText={errors.gender}
        />
        <TextField
          margin="dense"
          label="Address"
          value={formData.address}
          onChange={handleChange("address")}
          fullWidth
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          margin="dense"
          label="Phone"
          value={formData.phone}
          onChange={handleChange("phone")}
          fullWidth
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          margin="dense"
          type="date"
          label="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange("dateOfBirth")}
          fullWidth
          error={!!errors.dateOfBirth}
          helperText={errors.dateOfBirth}
        />
        <TextField
          margin="dense"
          label="Relationship"
          value={formData.relationship}
          onChange={handleChange("relationship")}
          fullWidth
          error={!!errors.relationship}
          helperText={errors.relationship}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={handleRegister}
          variant="contained"
          color="primary"
          disabled={!formData.email || !formData.password || !formData.firstName || !formData.lastName || !formData.gender || !formData.address || !formData.phone || !formData.dateOfBirth || !formData.relationship || !!errors.email || !!errors.password || !!errors.firstName || !!errors.lastName || !!errors.gender || !!errors.address || !!errors.phone || !!errors.dateOfBirth || !!errors.relationship}
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddParent;
