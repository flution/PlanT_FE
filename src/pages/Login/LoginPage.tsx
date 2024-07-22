import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonMid from '../../components/Button/ButtonMid';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNaverLogin = () => {
    const naverLoginUrl = `http://localhost:8080/auth/naver/login`;
    window.location.href = naverLoginUrl;
  };

  const handleKakaoLogin = () => {
    const kakaoLoginUrl = `http://localhost:8080/auth/kakao/login`;
    window.location.href = kakaoLoginUrl;
  };

  const handleGoogleLogin = () => {
    const googleLoginUrl = `http://localhost:8080/auth/google/login`;
    window.location.href = googleLoginUrl;
  };

  const handleLogin = () => {
    navigate('/local');
  };

  const handleRegister = () => {
    navigate('/local/signup');
  };

  const handleFindAccount = () => {
    navigate('/local/findAccount');
  };

  return (
    <div>
      <img
        src="/img/landingLogo.png"
        className="mx-auto mt-20 mb-5 w-72 h-72"
        alt="logo"
        // style={{ marginRight: '10px', marginTop: '10px' }}
      />
      <div className="flex justify-around mx-16">
        <img src="/img/LoginBtnNaver.svg" onClick={handleNaverLogin}></img>
        <img src="/img/LoginBtnKakao.svg" onClick={handleKakaoLogin}></img>
        <img src="/img/LoginBtnGoogle.svg" onClick={handleGoogleLogin}></img>
      </div>
      <div>
        <div className="flex justify-center mt-7" onClick={handleLogin}>
          <ButtonMid text="이메일로 시작하기" bgColor="main-green" />
        </div>
        <div className="mt-2.5 flex justify-center" onClick={handleRegister}>
          <ButtonMid text="회원가입" bgColor="white" />
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <button
          className="text-xs text-gray-light mr-7"
          onClick={handleFindAccount}
        >
          아이디 찾기
        </button>
        <button className="text-xs text-gray-light" onClick={handleFindAccount}>
          비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
