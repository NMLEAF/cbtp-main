import axios from "../Utility/axios";
const authService = {
  login: async (formData) => {
    try {
      const response = await axios.post("user/login", formData);
      // console.log(response.data);
      if (response.data.success) {
        localStorage.setItem(
          "token",
          JSON.stringify({ token: response.data.token })
        );
       
      }
      return { success: true, message: "login successfully" };
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
  stat: async () => {
    try {
      const response = await axios.get("state/data");
      return response.data;
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
};
export default authService;
