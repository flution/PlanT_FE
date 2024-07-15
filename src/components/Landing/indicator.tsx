import React from 'react';

interface IndicatorProps {
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
}

const Indicator: React.FC<IndicatorProps> = ({
  activeIndex,
  onIndicatorClick,
}) => {
  return (
    <div className="absolute bottom-0 z-30 flex space-x-3 -translate-x-1/2 left-1/2 rtl:space-x-reverse">
      {Array.from({ length: 3 }).map((_, index) => (
        <button
          key={index}
          type="button"
          className={`w-3 h-3 rounded-full ${
            activeIndex === index
              ? 'bg-main-green'
              : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800'
          }`}
          aria-current={activeIndex === index ? 'true' : 'false'}
          aria-label={`Slide ${index + 1}`}
          onClick={() => onIndicatorClick(index)}
        ></button>
      ))}
    </div>
  );
};

export default Indicator;
