import axios  from "../Utility/axios";
const authService={
    login: async (formData)=>{
try{
    console.log("iiiiiiiiiii")
    const response= await axios.post("user/login",formData  );
    console.log(response)
    if(response.data.success){
        localStorage.setItem(
            "token",JSON.stringify({token:response.data.token})
        );
        return {success: true, message:"login successfully"}
    }
}catch(error){
return {success:false, message: error.response.data.message}
}
    }
}
export default authService