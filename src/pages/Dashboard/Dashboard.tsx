// import React from 'react'
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import AppBar from "../../components/AppBar/AppBar";
import { Outlet } from "react-router-dom"; // وارد کردن Outlet

const Dashboard = () => {
  return (
    <div>
      <AppBar/>
        <Outlet/>
      <MainNavbar/>
    </div>
  )
}

export default Dashboard
