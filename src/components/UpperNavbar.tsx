import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpperNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPage = location.pathname === '/main';

  const handleBackClick = () => {
    navigate('/main'); // 이전 페이지로 이동
  };

  return (
    <nav className="border-gray-200 bg-slate-50 shadow-gray-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {isMainPage ? (
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6"
              alt="Flowbite Logo"
              style={{ marginLeft: '10px', marginTop: '10px' }}
            />
          ) : (
            <img
              src="/img/back.svg" // 뒤로가기 SVG 파일 경로
              className="h-6 cursor-pointer"
              alt="Back"
              style={{ marginLeft: '10px', marginTop: '10px' }}
              onClick={handleBackClick}
            />
          )}
        </a>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/img/bell.svg"
            className="h-6"
            alt=""
            style={{ marginRight: '10px', marginTop: '10px' }}
          />
        </a>
      </div>
    </nav>
  );
};

export default UpperNavbar;
