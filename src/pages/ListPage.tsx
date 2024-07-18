import React, { useState, useRef, useEffect, useCallback } from 'react';
import VerticalCard from '../components/Card/VerticalCard';

interface Result {
  name: string;
}

const ListPage: React.FC = () => {
  const [list, setList] = useState<Result[]>([]);
  const [visibleList, setVisibleList] = useState<Result[]>([]);
  const [index, setIndex] = useState(0); //현재 보여주고 있는 데이터의 인덱스
  const batchSize = 3; // 한 번에 보여줄 데이터 개수
  const [isLoading, setIsLoading] = useState(false);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback(
    (node: HTMLLIElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && index < list.length) {
          loadMoreItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, index, list.length],
  );

  useEffect(() => {
    search();
  }, []);

  const loadMoreItems = () => {
    setIsLoading(true);
    setVisibleList((prevVisibleList) => [
      ...prevVisibleList,
      ...list.slice(index, index + batchSize),
    ]);
    setIndex((prevIndex) => prevIndex + batchSize);
    console.log('load');
    setIsLoading(false);
  };

  const search = async () => {
    setIndex(0);
    setVisibleList([]);
    setList([]);
    setIsLoading(true);

    const mocklist = [
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
      { name: '서울' },
      { name: '부산' },
      { name: '제주도' },
      { name: '강릉' },
      { name: '전주' },
    ];

    // try {
    //   const response = await fetch(`https://api.example.com/search`);
    //   const data = await response.json();
    //   setList([...mocklist, ...data]);
    //   setVisibleList(list.slice(0, batchSize));
    //   setIndex(batchSize);
    // } catch (error) {
    //   console.error('Error fetching search list:', error);
    // } finally {
    //   setIsLoading(false);
    // }

    //무한스크롤 작동 테스트 코드
    setList(mocklist);
    setVisibleList(mocklist.slice(0, batchSize));
    setIndex(batchSize);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="flex flex-col items-center pb-16">
        {visibleList.length > 0 && (
          <ul className="mt-4">
            {visibleList.map((result, index) => (
              <li
                key={index}
                className="p-2"
                ref={visibleList.length === index + 1 ? lastItemRef : null}
              >
                <VerticalCard title="title" content="content" imageUrl="" />
              </li>
            ))}
          </ul>
        )}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ListPage;
