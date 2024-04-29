import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import employeeService from "../../services/employeeService";
import { useToast } from "../../context/ToastContext";
import { useAuth } from "../../context/AuthContext";

const AddRegistrar = ({ open, handleClose }) => {
  const {listOfRegistrars,fetchRegistrar} = useAuth();
  const {setToastData} = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleRegister = async () => {
    // TODO: Handle registration logic here
    const formData =  {
      email,
      password,
      firstName,
      middleName,
      lastName,
      address,
      phone,
      gender,
      dateOfBirth,
      role: "REGISTRAR", // Assuming role is fixed for teacher registration
      subjectId: 1, // Assuming a default subject ID
      classId: 1, 
    };
    const response = await employeeService.addRegistrar(formData);
    setToastData(response);
    if(response.success){
      fetchRegistrar();
      handleClose();
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
          value={email}
          onChange={handleEmailChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Middle Name"
          value={middleName}
          onChange={handleMiddleNameChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Address"
          value={address}
          onChange={handleAddressChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Phone"
          value={phone}
          onChange={handlePhoneChange}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Gender"
          value={gender}
          onChange={handleGenderChange}
          fullWidth
        />
        <TextField
          margin="dense"
          type="date"
          label="Date of Birth"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
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

export default AddRegistrar;
