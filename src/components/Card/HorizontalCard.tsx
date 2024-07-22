import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HorizontalCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  content,
  imageUrl,
}) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/detail');
  };

  return (
    <div
      className="flex w-80 h-52 bg-white border border-gray-200 rounded-lg shadow"
      onClick={handleMoreClick}
    >
      <a
        href="#"
        className="flex w-80 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        {/* card img */}
        <img
          className="object-cover w-[100px] h-full rounded-l-lg"
          src={imageUrl}
          alt=""
        />
        {/* card contents */}
        <div className="flex flex-col px-8 py-12 leading-normal">
          {/* card title */}
          <h5 className="mb-2.5 text-[15px] font-['Nexon-Bold'] tracking-tight text-gray-900">
            {title}
          </h5>
          {/* content */}
          <p className="text-[8px] font-['Nexon-Bold'] text-gray-dark  dark:text-gray-400">
            {content}
          </p>
        </div>
      </a>
    </div>
  );
};

export default HorizontalCard;
