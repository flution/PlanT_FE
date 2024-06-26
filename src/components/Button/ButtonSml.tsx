import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      type="button"
      className="
        w-[80px] h-[30px] text-smlBtn
        text-center rounded-[7.5px] px-5 py-2.5 me-2 mb-2
        focus:outline-none text-black bg-main-color
        hover:bg-hover-color"
    >
      {text}
    </button>
  );
};

export default Button;
