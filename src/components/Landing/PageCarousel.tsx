import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { Carousel, CarouselInterface } from 'flowbite';

export type CarouselInstance = {
  element: HTMLDivElement | null;
  items: { position: number; el: HTMLElement }[];
};

const PageCarousel: React.FC<{
  onCarouselInstance: (instance: CarouselInstance | null) => void;
  children: ReactNode;
}> = ({ onCarouselInstance, children }) => {
  const carouselElementRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const carouselInstance = useRef<Carousel | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return; // Prevent re-initialization

    const carouselElement = carouselElementRef.current;

    if (carouselElement) {
      const items = itemRefs.current
        .map((el, index) => el && { position: index, el })
        .filter(
          (item): item is { position: number; el: HTMLElement } =>
            item !== undefined,
        );

      if (items.length === 0) {
        console.error('No valid carousel items found');
        return;
      }

      const options = {
        defaultPosition: 0,
        interval: 0, // Remove auto slide
        onChange: (carousel: CarouselInterface) => {
          const activeItem = carousel.getActiveItem();
          if (activeItem.position !== currentIndex) {
            setCurrentIndex(activeItem.position);
          }
        },
      };

      carouselInstance.current = new Carousel(carouselElement, items, options);
      onCarouselInstance({ element: carouselElement, items });

      const handleMouseEnter = () => {
        if (carouselInstance.current) {
          carouselInstance.current.pause(); // Pause auto slide on hover
        }
      };

      const handleMouseLeave = () => {
        if (carouselInstance.current) {
          carouselInstance.current.cycle(); // Resume auto slide on hover leave
        }
      };

      carouselElement.addEventListener('mouseenter', handleMouseEnter);
      carouselElement.addEventListener('mouseleave', handleMouseLeave);

      isInitialized.current = true;

      return () => {
        carouselElement.removeEventListener('mouseenter', handleMouseEnter);
        carouselElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [onCarouselInstance, currentIndex]);

  const touchStart = () => {
    if (carouselInstance.current) {
      carouselInstance.current.pause(); // Pause auto slide on touch start
    }
  };

  const touchEnd = () => {
    if (carouselInstance.current) {
      carouselInstance.current.cycle(); // Resume auto slide on touch end
    }
  };

  return (
    <div
      id="default-carousel"
      ref={carouselElementRef}
      className="relative w-full overflow-hidden"
      data-carousel="slide"
      style={{ height: '270px' }} // Set height of parent container
    >
      <div
        className="relative flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${currentIndex * -300}px)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            id={`carousel-item-${index}`}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="flex-none w-[300px] h-[270px] flex items-center justify-center overflow-hidden"
            data-carousel-item
            onTouchStart={touchStart}
            onTouchEnd={touchEnd}
          >
            <div className="flex items-center justify-center w-full h-full">
              {child}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageCarousel;
