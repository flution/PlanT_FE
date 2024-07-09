import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// components
import UpperNavbar from './components/Navbar/UpperNavbar';
import BottomNavbar from './components/Navbar/BottomNavbar';

// pages
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage';
import AuthSuccessPage from './pages/Login/AuthSuccess';
import MyPage from './pages/MyPage';
import WritePage from './pages/Write/WritePage';
import WritePlanPage from './pages/Write/WritePlanPage';

const App: React.FC = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/mypage'];
  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <UpperNavbar />}
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/success" element={<AuthSuccessPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/write/plan" element={<WritePlanPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
};

export default App;
