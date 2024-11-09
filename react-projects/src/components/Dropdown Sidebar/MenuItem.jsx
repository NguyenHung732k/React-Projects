import React, { useState } from 'react';
import './sidebar.css';

const MenuItem = ({ item, isActive, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    // If the item has children, toggle its dropdown
    if (item.children) {
      handleToggle();
      e.preventDefault(); // Prevent link navigation if it's a dropdown
    } else {
      onClick(item.label); // Update active state for this menu item
    }
  };

  return (
    <li className={`menu-item ${isActive ? 'active' : ''}`}>
      <div className="menu-link" onClick={handleClick}>
        <span className="menu-icon">🔹</span> {/* Example icon */}
        <a href={item.to} className="link-text">{item.label}</a>
      </div>
      {item.children && isOpen && (
        <ul className="submenu">
          {item.children.map((childItem, index) => (
            <MenuItem
              key={index}
              item={childItem}
              isActive={isActive === childItem.label}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;