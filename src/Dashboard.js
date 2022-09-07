import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainSection from './MainSection/MainSection';

const Dashboard = () =>{
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('token'));
    

        return <div  style={{
            backgroundColor: '#D3D3D3'}}>
{/* <p>{isAuthenticated}</p>
<p>Welcome to Dashboard page</p> */}
<Sidebar />
<MainSection />
        </div>
    
}

export default Dashboard;