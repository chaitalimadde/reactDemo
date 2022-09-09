// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import UserDetails from './UserDetails.js/UserDetails';
import ListProduct from './Product/ListProduct';
import Home from './Home';
import ListUser from './ListUser/ListUser';
import Adduser from './AddUser/Adduser';
import PageDescription from './Product/PageDescription';

function App() {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("auth=",token);
  return (
    <div className="App">
                <Routes>
                     <Route exact path="/" element={<Login/>}></Route>
                    <Route exact path="/home" element={<Home/>}>
                          <Route  path="usermanager" element={<ListUser/>}></Route>
                          <Route  path="adduser" element={<Adduser/>}></Route>
                          <Route exact path="userdetails" element={<UserDetails/>}></Route>
                          <Route exact path="listproduct" element={<ListProduct/>}></Route>
                          <Route exact path="pagedescription" element={<PageDescription/>}></Route>
                          <Route exact path="dashboard" element={<Dashboard/>}></Route>
                    </Route>
                </Routes>
    </div>
  );
}

export default App;
