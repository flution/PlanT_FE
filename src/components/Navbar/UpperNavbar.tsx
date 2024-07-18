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
    <nav className="fixed top-0 left-0 right-0 bg-white border-gray-200 shadow-md z-10">
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
        {!isLocalPage && (
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/img/Alarm2.svg"
              className="h-6"
              alt="Alarm"
              style={{ marginRight: '10px', marginTop: '10px' }}
            />
          </a>
        )}
      </div>
    </nav>
  );
};

export default UpperNavbar;
