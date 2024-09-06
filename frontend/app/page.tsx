'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const Page = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} handleThemeToggle={handleThemeToggle} />
      <main className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}>
        <Dashboard isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default Page;
