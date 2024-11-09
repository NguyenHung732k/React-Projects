import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './sidebar.css';

const MenuList = ({ menus }) => {
    const [activeItem, setActiveItem] = useState('');

    const handleActiveChange = (label) => {
        setActiveItem(label);  // Mark this item as active
    };

    return (
        <nav className="sidebar">
            <ul className="menu-list">
                {menus.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        isActive={activeItem === item.label}
                        onClick={handleActiveChange}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default MenuList;