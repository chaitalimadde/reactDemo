import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainSection from './MainSection/MainSection';
import { Navigate } from "react-router-dom";

const Dashboard = () =>{
    const token = JSON.parse(localStorage.getItem("token"));

 if(token ===null){
    return <Navigate to="/" replace />;
  }
        return <div  style={{
            backgroundColor: '#D3D3D3'}}>
{/* <p>{isAuthenticated}</p> */}
<p>Welcome to Dashboard page</p>
{/* <Sidebar />
<MainSection /> */}
        </div>
    
}

export default Dashboard;