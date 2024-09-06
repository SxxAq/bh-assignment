"use client";
import Image from "next/image";
import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import IconBlack from "../assets/IconBlack.svg";

const Navbar = ({ isDarkMode, handleThemeToggle }) => {
  return (
    <nav
      className={`p-4 ${
        isDarkMode
          ? "bg-gray-900 border-b border-gray-700"
          : "bg-white border-b border-gray-200"
      } shadow-md flex justify-between items-center`}
    >
      <div className="flex items-center gap-4 text-lg font-medium">
        <Image src={IconBlack} height={30} width={30} alt="logo" />
        <a href="#" className={isDarkMode ? "text-white" : "text-gray-900"}>
          blockhouse.app
        </a>
      </div>
      <button
        onClick={handleThemeToggle}
        className={`flex items-center px-4 py-2 rounded-lg ${
          isDarkMode
            ? "bg-gray-700 text-white hover:bg-gray-600"
            : "bg-gray-300 text-gray-900 hover:bg-gray-400"
        } transition-colors`}
      >
        {isDarkMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />}
        {isDarkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
