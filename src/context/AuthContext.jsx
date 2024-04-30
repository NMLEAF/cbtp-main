// Import React and the Hooks we need here
import React, { useState, useEffect, useContext } from "react";
// Import the Util function we created to handle the reading from the local storage
import getAuth from "../Utility/auth.header";
import employeeService from "../services/employeeService";
import courseService from "../services/courseService";
// Create a context object
const AuthContext = React.createContext();
// Create a custom hook to use the context
export const useAuth = () => {
  return useContext(AuthContext);
};
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [listOfRegistrars,setListOfRegistrars] = useState([]);
  const [listOfTeachers,setListOfTeachers] = useState([]);
  const [listParents,setListParents] = useState([]);
  const [listStudent,setListStudent] = useState([]);
  const [subjectList,setSubjecListt] = useState([]);
  const [classesList,setclassesList] = useState([]);


  ///
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isTeacher, setisTeacher] = useState(false);
  const [isParent, setisParent] = useState(false);
  const [isStudent, setisStudent] = useState(false);
  const [isRegistrar, setisRegistrar] = useState(false);
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    // Retrieve the logged in user from local storage
    fetchData();
    fetchRegistrar();
    fetchTeacher();
    fetchParent();
    fetchStudent();
    fetchSubject();
    fetchClass();
  }, []);

  const fetchData = () => {
    const loggedInEmployee = getAuth();
    // console.log(loggedInEmployee);
    loggedInEmployee.then((response) => {
      // console.log(response);
      if (response.token) {
        setIsLogged(true);
    
        if (response.role === "ADMIN") {
          setIsAdmin(true);
        } else if (response.role === "REGISTRAR") {
         setisRegistrar(true);
        }
        else if (response.role === "STUDENT") {
          setisStudent(true);
        }
        else if (response.role === "TEACHER") {
          setisTeacher(true);
        }  else if (response.role === "PARENT") {
          setisParent(true);
        }
        setuserData(response);
      }
    });
  };

  const fetchRegistrar = async () => {
    const response = await employeeService.getAllRegistrar();
    setListOfRegistrars(response.registrarStaffList);

  }

  const fetchTeacher = async () => {
    const response = await employeeService.getAllTeacher();
    // console.log(response.teachers);
    setListOfTeachers(response.teachers);

  }

  const fetchStudent = async () => {
    // console.log("o-------------bject")
    const response = await employeeService.getAllStudents();
    // console.log(response);
    setListStudent(response);

  }

  const fetchParent = async () => {
    const response = await employeeService.getAllTParents();
    setListParents(response);

  }
  const fetchSubject = async () => {
    const response = await courseService.getAllSubject();
    console.log(response)
    setSubjecListt(response);

  }
  const fetchClass = async () => {
    // const response = await courseService.getAllClass();
    // console.log(response)
    // setclassesList(response);

  }


  const value = {
    fetchRegistrar,fetchTeacher,fetchParent,fetchStudent,fetchClass,fetchSubject,
    listOfRegistrars,
    listOfTeachers,
    listStudent,
    listParents,
  
    subjectList,
    classesList,
    isLogged,
     isTeacher, isAdmin,isStudent,isParent,
    setIsAdmin,
    setIsLogged,
    fetchData,
    setuserData,
    userData,
    isRegistrar,
    setisTeacher,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
