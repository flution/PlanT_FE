import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UpperNavbar from './components/UpperNavbar';
import BottomNavbar from './components/BottomNavbar';
// pages
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
};

export default App;
