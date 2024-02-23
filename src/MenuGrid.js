// MenuGrid.js
import React from 'react';
import MenuItem from './MenuItem';

function MenuGrid() {
  const menuItems = [
    { id: 1, name: 'Profile' },
    { id: 2, name: 'Notice Board' },
    { id: 3, name: 'Timetable' },
    { id: 4, name: 'Attendance' },
    { id: 5, name: 'Notebooks' },
    { id: 6, name: 'Certificate Upload' },
    { id: 7, name: 'Academic Calendar' },
    { id: 8, name: 'Canteen Menu' }
  ];

  return (
    <div className="menu-grid">
      {menuItems.map(item => (
        <MenuItem key={item.id} name={item.name} />
      ))}
    </div>
  );
}

export default MenuGrid;
