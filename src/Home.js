import MainSection from "./MainSection/MainSection";
import Sidebar from "./Sidebar/Sidebar";
import Dashboard from './Dashboard';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import { Navigate } from "react-router-dom";

const Home =()=>{
    const token = JSON.parse(localStorage.getItem("token"));

    if(token ===null){
      return <Navigate to="/" replace />;
    }
    return<div>
<Sidebar />
{/* <h1>Welcome to Home Page</h1> */}
    </div>

}

export default Home;