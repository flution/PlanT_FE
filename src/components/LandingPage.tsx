import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* 여기에 캐러셀 컴포넌트를 추가합니다 */}
      <h1>Welcome to the Landing Page</h1>
      {/* 캐러셀 예시 */}
      <div className="carousel">
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>
      </div>
    </div>
  );
};

export default LandingPage;
