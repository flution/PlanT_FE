import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
// pages
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import AuthSuccessPage from './pages/Login/AuthSuccess';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/success" element={<AuthSuccessPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
};

export default App;
