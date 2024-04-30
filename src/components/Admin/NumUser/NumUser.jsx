import React, { useEffect, useState } from "react";
import "./NumUser.css";
import axios from "axios";
import authService from "../../../services/authService";

const NumUser = () => {
  const [statData,setStateData] = useState({})
  useEffect(() => {
    fetchStat();
  }, []);

  const fetchStat = async () => {
    const response = await authService.stat();
    setStateData(response);
  };
  console.log(statData.totalSubjectsCount
  );
  return (
    <div className="num-user">
      {statData.userRoleCount && statData.userRoleCount.map((data) => (
         <div className="container num-item">
         <span>ic</span>
         <div className="tit-num">
           <p className="num-title">{data.role}</p>
           <p className="num">{data._count.role}</p>
         </div>
       </div>
      ))}
    
    </div>
  );
};

export default NumUser;
