// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MenuGrid from './MenuGrid';
import CollegeLogo from './CollegeLogo';
import Profile from './Profile'; // Import other elements for each route
import NoticeBoard from './NoticeBoard';
import Timetable from './Timetable';
import Attendance from './Attendance';
import Notebooks from './Notebooks';
import CertificateUpload from './CertificateUpload';
import AcademicCalendar from './AcademicCalendar';
import CanteenMenu from './CanteenMenu';

export default function App() {
  return (
    <Router>
      <div className="App text-purple-900">
      
        <CollegeLogo />
 
        <Routes>
          <Route path="/"  element={<MenuGrid/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/notice-board" element={<NoticeBoard/>} />
          <Route path="/timetable" element={<Timetable/>} />
          <Route path="/attendance" element={<Attendance/>} />
          <Route path="/notebooks" element={<Notebooks/>} />
          <Route path="/certificate-upload" element={<CertificateUpload/>} />
          <Route path="/academic-calendar" element={<AcademicCalendar/>} />
          <Route path="/canteen-menu" element={<CanteenMenu/>} />
        </Routes>
      </div>
    </Router>
  );
}


