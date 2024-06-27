import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
import Alert from './components/Alert/Alert';
import ModalRequest from './components/ModalRequest/ModalRequest';

// pages
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
