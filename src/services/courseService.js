import axios from "../Utility/axios";

const courseService = {
  addClass: async (formData) => {
    try {
      const response = await axios.post("user/addClass", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },
  addSubject: async (formData) => {
    try {
      const response = await axios.post("user/addSubject", formData);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  },

}
export default courseService;