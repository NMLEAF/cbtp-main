import axios from "../Utility/axios";

const studentService = {
  addStudent: async (formData) => {
    try {
      const response = await axios.post("user/registerStudent", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },

}
export default studentService;