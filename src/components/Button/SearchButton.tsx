import React from 'react';

interface SearchButtonProps {
  onClick: (e: React.FormEvent) => void;
  isFocused: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, isFocused }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`w-10 h-10 rounded transition-colors ${
        isFocused ? 'bg-hover-color' : 'bg-gray-500'
      }`}
      style={{
        backgroundImage: 'url(/img/exportW.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <span className="sr-only">Search</span>
    </button>
  );
};

export default SearchButton;
