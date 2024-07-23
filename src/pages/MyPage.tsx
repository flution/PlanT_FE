import React, { useState, useEffect } from 'react';

const MyPage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userBirth, setUserBirth] = useState('');
  const [userImgUrl, setUserImgUrl] = useState('');

  useEffect(() => {
    setUserName('홍길동');
    setUserBirth('2024-06-20');
    setUserImgUrl('');
  }, []);

  const menuItems = [
    { text: '내 정보' },
    { text: '내 작성 글' },
    { text: '좋아요 한 글' },
    { text: '북마크' },
    { text: '설정' },
  ];

  const bottomMenuItems = [{ text: '공지사항' }, { text: '고객센터' }];

  return (
    <div>
      <div>
        <div className="flex flex-row items-center mt-10">
          <div className="flex justify-center items-center w-[60px] h-[60px] ml-8 bg-gray-middle rounded-full shadow-md shadow-gray-400">
            {userImgUrl === '' ? (
              <svg
                width="60"
                height="60"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6854 17.1039C18.5721 15.326 19.75 12.8039 19.75 10.0068C19.75 4.62206 15.3848 0.256836 10 0.256836C4.61522 0.256836 0.25 4.62206 0.25 10.0068C0.25 12.8039 1.42785 15.326 3.31463 17.1039C5.06012 18.7488 7.41234 19.7568 10 19.7568C12.5877 19.7568 14.9399 18.7488 16.6854 17.1039ZM4.14512 15.8191C5.51961 14.1046 7.63161 13.0068 10 13.0068C12.3684 13.0068 14.4804 14.1046 15.8549 15.8191C14.3603 17.3246 12.289 18.2568 10 18.2568C7.711 18.2568 5.63973 17.3246 4.14512 15.8191ZM13.75 7.00684C13.75 9.0779 12.0711 10.7568 10 10.7568C7.92893 10.7568 6.25 9.0779 6.25 7.00684C6.25 4.93577 7.92893 3.25684 10 3.25684C12.0711 3.25684 13.75 4.93577 13.75 7.00684Z"
                  fill="#c9c9c9"
                />
              </svg>
            ) : (
              <img
                className="w-[52.5px] h-[52.5px] border border-main-green rounded-full box-border"
                src={userImgUrl}
                alt="user"
              />
            )}
          </div>
          <div className="ml-7">
            <div className="text-xs font-[Nexon-Bold]">{userName}</div>
            <div className="text-[10px] font-[Nexon-Bold] mt-[10px]">
              {userBirth}
            </div>
          </div>
        </div>
        <div className="mt-[36px] divide-y bg-gray-middle">
          <div className="h-px bg-gray-light"></div>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="h-[65px] mt-px pl-[28px] py-[21px] custom-gradient-bg font-[Nexon-Bold]"
            >
              {item.text}
            </div>
          ))}
          <div className="flex flex-row">
            {bottomMenuItems.map((item, index) => (
              <div
                key={index}
                className="w-[180px] h-[65px] pt-5 custom-gradient-bg text-center font-[Nexon-Bold]"
              >
                {item.text}
              </div>
            ))}
          </div>
          <div className="h-0.5 bg-gray-middle"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
