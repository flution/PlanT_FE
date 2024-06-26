import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UpperNavbar from './components/UpperNavbar';
import BottomNavbar from './components/BottomNavbar';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <BottomNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
