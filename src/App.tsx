import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UpperNavbar from './components/UpperNavbar';
import BottomNavbar from './components/BottomNavbar';

import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import Alert from './components/Alert/Alert';
import ModalRequest from './components/ModalRequest/ModalRequest';

const App: React.FC = () => {
  return (
    <div>
      <UpperNavbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      <Alert text="ID와 일치하지 않습니다." />
      <ModalRequest
        isOpen={true}
        text={'사용자 정보 활용에 동의하십니?'}
      ></ModalRequest>
      <BottomNavbar />
    </div>
  );
};

export default App;
