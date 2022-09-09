//import useState hook to create menu collapse state
import React, { useState } from "react";
import {  NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

//import icons from react icons
import {RiCalendar2Line,RiDashboardLine} from 'react-icons/ri'
import {GrAnalytics} from 'react-icons/gr';
import {MdDriveFileMoveOutline, MdProductionQuantityLimits} from 'react-icons/md';
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiUsers
} from "react-icons/fi";
import {TbMessages} from 'react-icons/tb';
import {MdPayment} from 'react-icons/md';

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import MainSection from "../MainSection/MainSection";

const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const navigate = useNavigate();
  const logoutClicked = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <>
    
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                Home<NavLink to="/home" />
              </MenuItem>
              <MenuItem icon={<RiDashboardLine />}>Dashboard <NavLink to="/home/dashboard" /></MenuItem>
              <MenuItem icon={<MdProductionQuantityLimits />}>Products</MenuItem>
              <MenuItem style={{marginLeft:'40px'}}>List Products <NavLink to="/home/listproduct" /></MenuItem>
              <MenuItem style={{marginLeft:'40px'}}>Add new Product</MenuItem>
              <MenuItem icon={<MdDriveFileMoveOutline />}>File Manager</MenuItem>
              <MenuItem icon={<GrAnalytics />}>Traffic analyzer</MenuItem>
              <MenuItem icon={<FiUsers />}>Users Manager</MenuItem>
              <MenuItem style={{marginLeft:'40px'}}>List Users <NavLink to="/home/usermanager" /></MenuItem>
              <MenuItem style={{marginLeft:'40px'}}>Add Users <NavLink to="/home/adduser" /></MenuItem>
     
              <MenuItem icon={<RiCalendar2Line />}>Calendar</MenuItem>
              <MenuItem icon={<TbMessages />}>Messages</MenuItem>
              {/* <MenuItem icon={<MdPayment />}>Payments</MenuItem> */}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={logoutClicked}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
      <MainSection />
    </>
  );
};

export default Sidebar;
