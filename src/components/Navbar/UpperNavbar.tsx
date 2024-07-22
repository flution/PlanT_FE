import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpperNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPage = location.pathname === '/main';
  const isLocalPage = location.pathname.startsWith('/local');

  const handleBackClick = () => {
    if (isLocalPage) {
      navigate(-1); // 뒤로 가기
    } else {
      navigate('/main'); // main 페이지로 이동
    }
  };

  return (
    <nav className="right-0 z-10 h-12 bg-white border-gray-200 shadow-md h-top-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-2 mx-auto">
        <a
          href="#"
          className="flex items-center h-8 space-x-3 rtl:space-x-reverse"
        >
          {isMainPage ? (
            <img src="/img/logo.png" className="h-8" alt="logo" />
          ) : (
            <img
              src="/img/Back.svg" // 뒤로가기 SVG 파일 경로
              className="h-4 cursor-pointer ml-2.5"
              alt="Back"
              onClick={handleBackClick}
            />
          )}
        </a>
        {!isLocalPage && (
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/img/bell2.svg"
              className="h-6 ml-2.5 my-auto"
              alt="Alarm"
            />
          </a>
        )}
      </div>
    </nav>
  );
};

export default UpperNavbar;
