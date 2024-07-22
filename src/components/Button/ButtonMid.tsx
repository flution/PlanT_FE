import React from 'react';

interface ButtonProps {
  text: string;
  bgColor: string;
  onClick?: () => void;
}

const ButtonMid: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <button
      type="button"
      className={`
        w-[250px] h-[32px] rounded-[7.5px] px-5 py-1
        text-midBtn text-center font-[Nexon-Medium]
        text-black bg-${bgColor} border border-solid border-main-green box-border
        hover:bg-hover-green`}
    >
      {text}
    </button>
  );
};

export default ButtonMid;
