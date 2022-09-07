// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import UserDetails from './UserDetails.js/UserDetails';

function App() {
  return (
    <div className="App">
                <Routes>
                     {/* <Route exact path="/" element={<Login/>}></Route> */}
                    <Route exact path="/dashboard" element={<Dashboard/>}></Route>
                </Routes>
                <Dashboard />
    </div>
  );
}

export default App;
