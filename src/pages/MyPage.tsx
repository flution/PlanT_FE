import React, { useState, useEffect } from 'react';

const MyPage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userBirth, setUserBirth] = useState('');
  const [userImgUrl, setUserImgUrl] = useState('');

  useEffect(() => {
    setUserName('홍길동');
    setUserBirth('2024-06-20');
    setUserImgUrl('');
  });

  return (
    <div>
      <div>
        <div>
          <div className="flex flex-row items-center mt-10">
            <div className="flex justify-center items-center w-[60px] h-[60px] ml-8  bg-gray-middle rounded-full shadow-md shadow-gray-400">
              <img
                className="w-[52.5px] h-[52.5px] border border-main-green rounded-full box-border"
                src={userImgUrl}
              ></img>
            </div>
            <div className="ml-7">
              <div className="text-xs font-[Nexon-Bold]">{userName}</div>
              <div className="text-[10px] font-[Nexon-Bold] mt-[10px]">
                {userBirth}
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[36px] divide-y bg-gray-middle">
          <div className="h-px bg-gray-light"></div>
          <div className="h-[72px] mt-px pl-[28px] py-[21px] custom-gradient-bg font-[Nexon-Bold]">
            내 정보
          </div>
          <div className="h-[72px] mt-px pl-[28px] py-[21px] custom-gradient-bg font-[Nexon-Bold]">
            내 작성 글
          </div>
          <div className="h-[72px] mt-px pl-[28px] py-[21px] custom-gradient-bg font-[Nexon-Bold]">
            좋아요 한 글
          </div>
          <div className="h-[72px] mt-px pl-[28px] py-[21px] custom-gradient-bg font-[Nexon-Bold]">
            북마크
          </div>
          <div className="h-[72px] mt-px pl-[28px] py-[21px] custom-gradient-bg font-[Nexon-Bold]">
            설정
          </div>
          <div className="flex flex-row">
            <div className="w-[180px] h-[72px] pt-5 custom-gradient-bg text-center font-[Nexon-Bold]">
              공지사항
            </div>
            <div className="w-[180px] h-[72px] pt-5 custom-gradient-bg text-center font-[Nexon-Bold]">
              고객센터
            </div>
          </div>
          <div className="h-0.5 bg-gray-middle"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
