import React, { useState, useRef, useEffect, useCallback } from 'react';
import VerticalCard from '../components/Card/VerticalCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Post {
  p_id: number;
  p_title: string;
  p_like: number;
  uno: number;
}

const ListPage: React.FC = () => {
  const [list, setList] = useState<Post[]>([]);
  const [visibleList, setVisibleList] = useState<Post[]>([]);
  const [index, setIndex] = useState(0);
  const batchSize = 3;
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    load();
  }, []);

  const loadMoreItems = () => {
    setIsLoading(true);
    setVisibleList((prevVisibleList) => [
      ...prevVisibleList,
      ...list.slice(index, index + batchSize),
    ]);
    setIndex((prevIndex) => prevIndex + batchSize);
    setIsLoading(false);
  };

  const load = async () => {
    setIndex(0);
    setVisibleList([]);
    setList([]);
    setIsLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/list/loadPost`,
      );
      const post = await response.data.posts;
      setList(post);
      setVisibleList(post.slice(0, batchSize));
      setIndex(batchSize);
    } catch (error) {
      console.error('Error fetching search list:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (p_id: number) => {
    navigate(`/detail/${p_id}`);
  };

  return (
    <div>
      <div className="flex flex-col items-center pb-16">
        {visibleList.length > 0 && (
          <ul className="mt-4">
            {visibleList.map((result, index) => (
              <li
                key={result.p_id}
                className="p-2"
                ref={visibleList.length === index + 1 ? lastItemRef : null}
              >
                <VerticalCard
                  title={result.p_title}
                  content=""
                  imageUrl={process.env.PUBLIC_URL + '/img/eximgV.png'}
                  onClick={() => handleCardClick(result.p_id)}
                />
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
