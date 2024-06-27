import React from 'react';

interface ButtonProps {
  text: string;
  bgColor?: string; // Optional prop with a default value
}

const ButtonBig: React.FC<ButtonProps> = ({ text, bgColor = '#BFE647' }) => {
  return (
    <button
      type="button"
      className={`
        w-[300px] h-[50px] text-bigBtn 
        text-center rounded-[10px] px-5 py-2.5 me-2 mb-2
        focus:outline-none text-black hover:bg-hover-green`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default ButtonBig;
