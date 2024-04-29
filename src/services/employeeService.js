import axios from "../Utility/axios";

const employeeService = {
  addRegistrar: async (formData) => {
    try {
      const response = await axios.post("user/register/Registrar", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  updateRegistrar: async (formData, id) => {
    try {
      const response = await axios.put(`/updateregistrar/:${id}`, formData);
      console.log(response);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  deleteRegistrar: async (id) => {
    try {
      const response = await axios.delete(`/updateregistrar/:${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getAllRegistrar: async (formData) => {
    try {
      const response = await axios.get("user/registrarworkers", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  getAllTeacher: async (formData) => {
    try {
      const response = await axios.get("user/teachers", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  addTeacher: async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post("user/register", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
};
export default employeeService;
