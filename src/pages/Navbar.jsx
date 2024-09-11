import React from "react";
import { Link } from "react-router-dom";
import profileicon from "../assets/Avatar Style 6.png";
import notificationicon from "../assets/notifications_none.png";
import darkicon from "../assets/moon-solid 1.png";
import infoicon from "../assets/info_outline.png";
import searchicon from "../assets/Search Icon.png";

const Navbar = ({ selected, handleSelect }) => {
  return (
    <div className="p-4 flex justify-between items-center w-full flex-nowrap main-container fixed bg-white">
      {/* Links Section */}
      <div className="flex space-x-2 lg:space-x-4 flex-nowrap">
        <Link
          to="/"
          onClick={() => handleSelect("quport")}
          className={`${
            selected === "quport"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded-full shadow-md`}
        >
          QUPORT
        </Link>
        <Link
          to="/padel-Ai"
          onClick={() => handleSelect("padelAi")}
          className={`${
            selected === "padelAi"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded-full shadow-md`}
        >
          PADEL AI
        </Link>
        <Link
          to="/soccerAi"
          onClick={() => handleSelect("soccerAi")}
          className={`${
            selected === "soccerAi"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded-full shadow-md`}
        >
          SOCCER AI
        </Link>
        <Link
          to="/real-token"
          onClick={() => handleSelect("realToken")}
          className={`${
            selected === "realToken"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          } px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded-full shadow-md`}
        >
          REAL TOKEN
        </Link>
      </div>

      {/* Search and other icons - Hidden on mobile/tablet, visible on large screens */}
      <div className="hidden lg:flex items-center space-x-2 lg:space-x-4 shadow-lg p-2 lg:p-3 rounded-full flex-shrink-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-2 py-1 rounded-full h-8 lg:h-10 w-24 lg:w-40 bg-gray-100"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
            <img src={searchicon} alt="Search Icon" />
          </span>
        </div>

        <span className="text-gray-600 text-lg">
          <img src={notificationicon} alt="Notification Icon" />
        </span>
        <span className="text-gray-600 text-lg">
          <img src={darkicon} alt="Dark Mode Icon" />
        </span>
        <span className="text-gray-600 text-lg">
          <img src={infoicon} alt="Info Icon" />
        </span>
        {/* Profile icon shown here for laptop screens (lg and above) */}
        <img
          src={profileicon}
          alt="Profile"
          className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
        />
      </div>

      {/* Profile icon for mobile/tablet screens */}
      <div className="flex items-center space-x-2 lg:hidden">
        <img
          src={profileicon}
          alt="Profile"
          className="rounded-full w-8 h-8 lg:w-10 lg:h-10"
        />
      </div>
    </div>
  );
};

export default Navbar;

