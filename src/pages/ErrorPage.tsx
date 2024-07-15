import React from 'react';
import ButtonBig from './../components/Button/ButtonBig';

const ErrorPage: React.FC = () => {
  return (
    <div>
      <div className="mt-36 text-center text-4xl font-['Nexon-Bold'] text-main-green">
        404
      </div>
      <div className="text-3xl text-center font-['Nexon-Bold'] text-hover-green">
        Not Found
      </div>
      <div className="mt-7 text-xl text-center font-['Nexon-Bold'] whitespace-pre-wrap">
        원하시는 페이지를 <br></br> 찾을 수가 없습니다.
      </div>
      <div className="flex justify-center mt-28">
        <ButtonBig text="메인으로 돌아가기" bgColor="main-green"></ButtonBig>
      </div>
    </div>
  );
};

export default ErrorPage;
