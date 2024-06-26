import React from 'react';

import VerticalCard from '../components/VerticalCard';
import HorizontalCard from '../components/HorizontalCard';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>
        <HorizontalCard />
        <VerticalCard />
      </h1>
    </div>
  );
};

export default MainPage;
