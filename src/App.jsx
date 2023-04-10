import { useState } from "react";
import "./App.css";
import {
  Routes, Route,
  BrowserRouter, Link, Router
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import sideBarData from "./sideBarData";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Sidebar from "./components/SideBar";



function App() {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="md:flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
