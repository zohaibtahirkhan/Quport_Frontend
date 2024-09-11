import React from "react";
import chaticon from "../assets/auto_awesome_FILL1_wght400_GRAD0_opsz48 1.png";
import quporticon from "../assets/Frame 1437252868 (2).png";
import padelAiicon from "../assets/Frame 1437252868.png";
import soccericon from "../assets/Frame 1437252868 (1).png";
import realicon from "../assets/Vector.png";
import logouticon from "../assets/Logout.png";
import profileicon from "../assets/Avatar Style 6.png";
import { Link } from "react-router-dom";

const Sidebar = ({ selected, handleSelect }) => {
  return (
      <div className="hidden lg:flex lg:flex-col justify-between w-1/5 bg-white p-6 h-full rounded-2xl m-4 shadow-lg fixed"
  style={{ zIndex: 9999 }} 
>
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center mt-8">QU-Chat</h2>
        <div className="border-t border-gray-200 my-4 mb-12"></div>
        <div className="space-y-6">
          <div className="flex items-center  ml-1 mb-4 text-3xl font-bold space-x-3">
            <img src={chaticon}/>
            <p>Chat</p>
          </div>
          <Link
            to="/"
            className={`flex items-center space-x-3 text-lg font-medium ${
              selected === "quport"
                ? "text-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleSelect("quport")}
          >
            <img src={quporticon} alt="Quport Icon" />
            <span>QUPORT</span>
          </Link>
          <Link
            to="/padel-Ai"
            className={`flex items-center space-x-3 text-lg font-medium ${
              selected === "padelAi"
                ? "text-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleSelect("padelAi")}
          >
            <img src={padelAiicon} alt="Padel AI Icon" />
            <span>Padel AI</span>
          </Link>
          <Link
            to="/soccerAi"
            className={`flex items-center space-x-3 text-lg font-medium ${
              selected === "soccerAi"
                ? "text-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleSelect("soccerAi")}
          >
            <img src={soccericon} alt="Soccer AI Icon" />
            <span>Soccer AI</span>
          </Link>
          <Link
            to="/real-token"
            className={`flex items-center space-x-3 text-lg font-medium ${
              selected === "realToken"
                ? "text-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleSelect("realToken")}
          >
            <img src={realicon} alt="Real Token Icon" />
            <span>Real Token</span>
          </Link>
        </div>
      </div>

      {/* Profile section stays at the bottom */}
      <div className="flex items-center justify-between space-x-3 p-4 bg-white rounded-full shadow-lg mb-4 w-full">
        <div className="flex items-center space-x-3">
          <img
            src={profileicon}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-md font-medium">Adela Parkson</p>
        </div>
        <button className="flex items-center justify-center bg-white rounded-full shadow-md">
          <img src={logouticon} alt="Logout Icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
