import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Navbar";
import Sidebar from "./../../Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("quport");
    } else if (location.pathname === "/padel-Ai") {
      setSelected("padelAi");
    } else if (location.pathname === "/soccerAi") {
      setSelected("soccerAi");
    } else if (location.pathname === "/real-token") {
      setSelected("realToken");
    }
  }, [location.pathname]);

  return (
    <div className="h-screen flex font-poppin">
      <Sidebar selected={selected} handleSelect={setSelected} />
      <div className="flex-1 flex flex-col">
        <Navbar selected={selected} handleSelect={setSelected} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
