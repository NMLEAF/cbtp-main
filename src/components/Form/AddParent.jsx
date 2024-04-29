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
  gender: z.string(),
  address: z.string(),
  phone: z.string().min(10),
  dateOfBirth: z.string(),
  roleId: z.number().min(1),
  relationship: z.string(),
});

const AddParent = ({ open, handleClose }) => {
  const {setToastData} = useToast();
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

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleRegister = async () => {
    const response = await employeeService.addParent(formData);
    setToastData(response);
    if(response.success){
      // fetchRegistrar();
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
        <TextField
          margin="dense"
          label="Relationship"
          value={formData.relationship}
          onChange={handleChange("relationship")}
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

export default AddParent;
