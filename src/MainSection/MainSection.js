import React from "react";
import { Routes, Route } from "react-router-dom";
import Adduser from './../AddUser/Adduser';
import ListUser from './../ListUser/ListUser';
import UserDetails from '../UserDetails.js/UserDetails';
import ListProduct from './../Product/ListProduct';
import PageDescription from './../Product/PageDescription';

export default function MainSection() {
  return (
    <div className="main">
      <Routes>
                    <Route  path="/usermanager" element={<ListUser/>}></Route>
                    <Route  path="/adduser" element={<Adduser/>}></Route>
                    <Route exact path="/userdetails" element={<UserDetails/>}></Route>
                    <Route exact path="/listproduct" element={<ListProduct/>}></Route>
                    <Route exact path="/pagedescription" element={<PageDescription/>}></Route>
                </Routes>
    </div>
  );
}
