import React, { useState } from 'react';
import MenuList from './MenuList';

import menus from './data.js'

import './sidebar.css'

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <MenuList menus={menus} />
      </div>
      <div className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </div>
    </div>
  );
}

export default SideBar