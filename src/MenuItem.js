// MenuItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaClipboardList, FaClock, FaCalendarAlt, FaBook, FaUpload, FaCertificate, FaUtensils } from 'react-icons/fa';

function MenuItem({ name }) {
  // Define icon based on menu item name
  const getIcon = (name) => {
    switch (name) {
      case 'Profile':
        return <FaUser size={30} />;
      case 'Notice Board':
        return <FaClipboardList size={30} />;
      case 'Timetable':
        return <FaClock size={30} />;
      case 'Attendance':
        return <FaCalendarAlt size={30} />;
      case 'Notebooks':
        return <FaBook size={30} />;
      case 'Certificate Upload':
        return <FaUpload size={30} />;
      case 'Academic Calendar':
        return <FaCertificate size={30} />;
      case 'Canteen Menu':
        return <FaUtensils size={30} />;
      default:
        return null;
    }
  };

  // Define route based on menu item name
  const getRoute = (name) => {
    switch (name) {
      case 'Profile':
        return '/profile';
      case 'Notice Board':
        return '/notice-board';
      case 'Timetable':
        return '/timetable';
      case 'Attendance':
        return '/attendance';
      case 'Notebooks':
        return '/notebooks';
      case 'Certificate Upload':
        return '/certificate-upload';
      case 'Academic Calendar':
        return '/academic-calendar';
      case 'Canteen Menu':
        return '/canteen-menu';
      default:
        return '/';
    }
  };

  return (
    <Link to={getRoute(name)} style={{ textDecoration: 'none' }}>
      <div className="menu-item">
        <div className="icon">{getIcon(name)}</div>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}

export default MenuItem;
