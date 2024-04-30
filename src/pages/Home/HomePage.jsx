import React, { useEffect } from "react";
import Home from "../../components/Home/Home";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    isLogged,
    isTeacher,
    isAdmin,
    isStudent,
    isParent,
    isRegistrar,
    userData,
  } = useAuth();
  const navigator = useNavigate();
  console.log(userData);

  useEffect(() => {
    if (!isLogged) {
      navigator("/login");
    } else if (isTeacher) {
      navigator("/teacher");
    }
    // } else if (isRegistrar) {
    //   isAdmin("/registrar");
    // } else if (isAdmin) {
    //   isAdmin("/admin");
    // }  else if (isParent) {
    //   isAdmin("/parent");
    // }
  }, [isLogged, isAdmin, isParent, isRegistrar, isTeacher, userData]);

  return <Home />;
};

export default HomePage;
