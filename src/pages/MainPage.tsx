import React, { useEffect, useState, useCallback } from 'react';
import PageCarousel, {
  CarouselInstance,
} from '../components/Landing/PageCarousel';
import VerticalCard from '../components/Card/VerticalCard';

interface Card {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const MainPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fetch data from an actual DB
    const fetchCards = async () => {
      // Add your fetch request here.
      // Example:
      // const response = await fetch('api/cards');
      // const data = await response.json();
      const fetchedCards: Card[] = [
        {
          id: 1,
          title: '제목 1',
          content: '내용 1',
          imageUrl: '/img/eximgV.png',
        },
        {
          id: 2,
          title: '제목 2',
          content: '내용 2',
          imageUrl: '/img/eximgV.png',
        },
        {
          id: 3,
          title: '제목 3',
          content: '내용 3',
          imageUrl: '/img/eximgV.png',
        },
      ];
      setCards(fetchedCards);
      setIsLoaded(true);
    };

    fetchCards();
  }, []);

  const handleCarouselInstance = useCallback(
    (instance: CarouselInstance | null) => {
      console.log(instance);
    },
    [],
  );

  return (
    <div className="flex flex-col items-center font-[Nexon] mt-2 px-5 scrollbar-hide">
      <div className="flex w-full bg-white">
        <label
          htmlFor="email"
          className="block ml-5 font-[Nexon-Bold] text-gray-900 text-md mt-3 mb-1 dark:text-white"
        >
          MD 추천 여행
        </label>
      </div>
      <div className="container p-2 mx-auto">
        {isLoaded && (
          <PageCarousel onCarouselInstance={handleCarouselInstance}>
            {cards.map((card) => (
              <VerticalCard
                key={card.id}
                title={card.title}
                content={card.content}
                imageUrl={card.imageUrl}
              />
            ))}
          </PageCarousel>
        )}
      </div>
    </div>
  );
};

export default MainPage;
